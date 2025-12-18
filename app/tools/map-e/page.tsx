import type { Metadata } from 'next';

import { MapECalculator } from '@/components/features/tools/MapECalculator';

export const metadata: Metadata = {
  title: 'MAP-E Calculator',
  description: 'v6プラス（MAP-E）のIPv6アドレスからIPv4アドレス、CEアドレス、使用可能ポートを計算します',
};

export default function MapEPage() {
  return (
    <div className="pt-8">
      <section className="mx-auto w-full max-w-7xl px-4">
        <header className="mb-6 ml-5">
          <h1 className="mb-1.5 text-3xl font-medium md:text-4xl">MAP-E Calculator</h1>
          <p className="text-sm font-normal md:text-base">
            IPv6プレフィックスからv6プラス（MAP-E）の各種パラメータを計算します
          </p>
        </header>
        <MapECalculator />
      </section>
    </div>
  );
}
