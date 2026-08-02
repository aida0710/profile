import { DownloadIcon } from 'lucide-react';

import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';
import type { PublicKey } from '@/types';

interface PublicKeyCardProps {
  publicKey: PublicKey;
  locale: Locale;
}

// ダウンロードは素の <a> で行うため、このカードはサーバーコンポーネントのままで済む。
// （以前はクリップボードコピーのために 'use client' と状態管理が必要だった）
export function PublicKeyCard({ publicKey, locale }: PublicKeyCardProps) {
  const fileName = `${publicKey.id}.pub`;

  return (
    <article className="overflow-hidden rounded-xl border border-warm-border bg-warm-surface transition-colors duration-200 hover:border-warm-accent/30">
      <div className="flex items-center justify-between gap-3 border-b border-warm-border px-5 py-3">
        <h2 className="font-heading text-base font-semibold text-warm-text">{publicKey.label}</h2>
        <a
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-warm-accent/10 px-3 py-1.5 text-sm font-medium text-warm-accent transition-colors hover:bg-warm-accent/20 focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none"
          download={fileName}
          href={`/keys/${publicKey.id}`}
        >
          <DownloadIcon aria-hidden="true" className="h-3.5 w-3.5" />
          {t(locale, 'publicKeys.download')}
        </a>
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-xs text-warm-subtext md:text-sm">
        <code>{publicKey.key}</code>
      </pre>
    </article>
  );
}
