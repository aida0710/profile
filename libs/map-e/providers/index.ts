import type { MapEProvider } from './types';
import { v6plusProvider } from './v6plus';

// 利用可能なプロバイダー一覧
export const providers: MapEProvider[] = [v6plusProvider];

// デフォルトプロバイダー
export const defaultProvider = v6plusProvider;

/**
 * IDでプロバイダーを取得
 */
export function getProviderById(id: string): MapEProvider | undefined {
  return providers.find((p) => p.id === id);
}

/**
 * IPv6プレフィックスからプロバイダーを自動検出
 */
export function detectProvider(ipv6Groups: number[]): MapEProvider | undefined {
  const prefix32 = (ipv6Groups[0] << 16) | ipv6Groups[1];

  for (const provider of providers) {
    if (provider.rules.has(prefix32)) {
      return provider;
    }
  }

  return undefined;
}

// 型とヘルパーを再エクスポート
export type { MapEProvider } from './types';
export { createRule, parseIPv4Prefix, parseIPv6Prefix32 } from './types';
export { v6plusProvider } from './v6plus';
