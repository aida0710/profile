import { defaultProvider, detectProvider, type MapEProvider } from './providers';
import type { MapEResult, PortRange } from './types';

/**
 * IPv6プレフィックスを解析する
 */
function parseIPv6Prefix(input: string): { groups: number[]; prefixLength: number } | null {
  // /XX のプレフィックス長を抽出
  const prefixMatch = input.match(/\/(\d+)$/);
  const prefixLength = prefixMatch ? Number.parseInt(prefixMatch[1], 10) : 64;

  // アドレス部分を抽出
  let address = input.replace(/\/\d+$/, '').trim();

  // :: の展開
  if (address.includes('::')) {
    const parts = address.split('::');
    const left = parts[0] ? parts[0].split(':') : [];
    const right = parts[1] ? parts[1].split(':') : [];
    const missing = 8 - left.length - right.length;
    const middle = Array(missing).fill('0');
    address = [...left, ...middle, ...right].join(':');
  }

  const groups = address.split(':').map((g) => Number.parseInt(g || '0', 16));

  if (groups.length !== 8 || groups.some((g) => Number.isNaN(g) || g < 0 || g > 0xffff)) {
    return null;
  }

  return { groups, prefixLength };
}

/**
 * ルールテーブルからIPv4プレフィックスを検索
 */
function findIPv4Prefix(ipv6Groups: number[], provider: MapEProvider): [number, number] | null {
  const prefix32 = (ipv6Groups[0] << 16) | ipv6Groups[1];
  return provider.rules.get(prefix32) ?? null;
}

/**
 * ポート範囲を計算する（GMAアルゴリズム）
 */
function calculatePortRanges(psid: number, provider: MapEProvider): PortRange[] {
  const ranges: PortRange[] = [];
  const baseOffset = 1 << (16 - provider.psidOffset); // 4096

  for (let setIndex = 0; setIndex < provider.portSetsCount; setIndex++) {
    const start = (setIndex + 1) * baseOffset + psid * provider.portSetSize;
    const end = start + provider.portSetSize - 1;
    ranges.push({ start, end });
  }

  return ranges;
}

/**
 * CEアドレスを構築する
 */
function buildCEAddress(ipv6Groups: number[], ipv4Octets: number[], psid: number): string {
  const ipv4High = (ipv4Octets[0] << 8) | ipv4Octets[1];
  const ipv4Low = (ipv4Octets[2] << 8) | ipv4Octets[3];

  const ceGroups = [ipv6Groups[0], ipv6Groups[1], ipv6Groups[2], ipv6Groups[3], ipv4High, ipv4Low, (psid << 8) | 0x00, 0x0000];

  return ceGroups.map((g) => g.toString(16)).join(':');
}

/**
 * MAP-E計算のメイン関数
 */
export function calculateMapE(ipv6Input: string, provider?: MapEProvider): MapEResult | { error: string } {
  // IPv6プレフィックスを解析
  const parsed = parseIPv6Prefix(ipv6Input);
  if (!parsed) {
    return { error: '無効なIPv6アドレス形式です' };
  }

  const { groups, prefixLength } = parsed;

  // プレフィックス長の確認
  if (prefixLength !== 56 && prefixLength !== 64) {
    return { error: 'プレフィックス長は/56または/64である必要があります' };
  }

  // プロバイダーを自動検出または指定されたものを使用
  const selectedProvider = provider ?? detectProvider(groups) ?? defaultProvider;

  // IPv4プレフィックスを検索
  const ipv4Prefix = findIPv4Prefix(groups, selectedProvider);
  if (!ipv4Prefix) {
    return { error: `対応する${selectedProvider.name}ルールが見つかりません。IPv6プレフィックスを確認してください。` };
  }

  // EAビットからIPv4アドレス下位16bitとPSIDを抽出
  const ipv4Lower = groups[2];
  const psid = (groups[3] >> 8) & 0xff;

  // IPv4アドレスを構築
  const ipv4Octets = [ipv4Prefix[0], ipv4Prefix[1], (ipv4Lower >> 8) & 0xff, ipv4Lower & 0xff];
  const ipv4Address = ipv4Octets.join('.');

  // ポート範囲を計算
  const portRanges = calculatePortRanges(psid, selectedProvider);

  // CEアドレスを構築
  const ceAddress = buildCEAddress(groups, ipv4Octets, psid);

  // IPv6アドレスを構築
  const ipv6Address = `${groups[0].toString(16)}:${groups[1].toString(16)}:${groups[2].toString(16)}:${groups[3].toString(16)}::1/64`;

  return {
    provider: {
      id: selectedProvider.id,
      name: selectedProvider.name,
    },
    ipv6Address,
    ipv4Address,
    ceAddress,
    brAddresses: selectedProvider.brAddresses,
    psid,
    portRanges,
  };
}

/**
 * IPv6アドレスの形式を検証する
 */
export function validateIPv6Input(input: string): boolean {
  const parsed = parseIPv6Prefix(input);
  return parsed !== null;
}
