/**
 * MAP-Eプロバイダー設定の型定義
 */
export interface MapEProvider {
  id: string;
  name: string;
  description: string;
  brAddresses: string[];
  // MAP-Eパラメータ
  psidOffset: number; // a bits: 除外ポートのビット数
  psidLength: number; // k bits: PSID長
  portSetSize: number; // 2^m: 各セットのポート数
  portSetsCount: number; // 使用可能セット数
  // ルールテーブル: IPv6上位32bit → [IPv4上位8bit, IPv4次8bit]
  rules: Map<number, [number, number]>;
}

/**
 * IPv6プレフィックス文字列を32bit数値に変換
 * 例: "240b:0010" → 604700688
 */
export function parseIPv6Prefix32(prefix: string): number {
  const parts = prefix.split(':');
  const high = Number.parseInt(parts[0], 16);
  const low = Number.parseInt(parts[1], 16);
  return (high << 16) | low;
}

/**
 * IPv4プレフィックス文字列をオクテット配列に変換
 * 例: "106.72" → [106, 72]
 */
export function parseIPv4Prefix(prefix: string): [number, number] {
  const parts = prefix.split('.');
  return [Number.parseInt(parts[0], 10), Number.parseInt(parts[1], 10)];
}

/**
 * ルールエントリを作成するヘルパー
 * 例: createRule("240b:0010", "106.72") → [604700688, [106, 72]]
 */
export function createRule(ipv6Prefix: string, ipv4Prefix: string): [number, [number, number]] {
  return [parseIPv6Prefix32(ipv6Prefix), parseIPv4Prefix(ipv4Prefix)];
}
