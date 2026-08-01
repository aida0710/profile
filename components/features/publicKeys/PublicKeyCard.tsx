'use client';

import { Button } from '@heroui/button';
import { CheckIcon, CopyIcon, TriangleAlertIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { type DictionaryKey, t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';
import type { PublicKey } from '@/types';

interface PublicKeyCardProps {
  publicKey: PublicKey;
  locale: Locale;
}

type CopyStatus = 'idle' | 'copied' | 'failed';

const STATUS_LABEL: Record<CopyStatus, DictionaryKey> = {
  idle: 'publicKeys.copy',
  copied: 'publicKeys.copied',
  failed: 'publicKeys.copyFailed',
};

const RESET_DELAY_MS = 2000;

function StatusIcon({ status }: { status: CopyStatus }) {
  if (status === 'copied') return <CheckIcon aria-hidden="true" className="h-3.5 w-3.5" />;
  if (status === 'failed') return <TriangleAlertIcon aria-hidden="true" className="h-3.5 w-3.5" />;
  return <CopyIcon aria-hidden="true" className="h-3.5 w-3.5" />;
}

export function PublicKeyCard({ publicKey, locale }: PublicKeyCardProps) {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // アンマウント時にタイマーを止める
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const updateStatus = (next: CopyStatus) => {
    setStatus(next);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setStatus('idle'), RESET_DELAY_MS);
  };

  const handleCopy = async () => {
    try {
      // navigator.clipboard は secure context でしか使えないため、
      // 失敗を握り潰さずボタン上でユーザーに伝える。
      await navigator.clipboard.writeText(publicKey.key);
      updateStatus('copied');
    } catch {
      updateStatus('failed');
    }
  };

  return (
    <article className="overflow-hidden rounded-xl border border-warm-border bg-warm-surface transition-colors duration-200 hover:border-warm-accent/30">
      <div className="flex items-center justify-between gap-3 border-b border-warm-border px-5 py-3">
        <h2 className="font-heading text-base font-semibold text-warm-text">{publicKey.label}</h2>
        <Button
          size="sm"
          radius="lg"
          variant="flat"
          className="bg-warm-accent/10 font-medium text-warm-accent data-[hover=true]:bg-warm-accent/20"
          startContent={<StatusIcon status={status} />}
          onPress={handleCopy}
        >
          {t(locale, STATUS_LABEL[status])}
        </Button>
      </div>
      {/* 操作結果を支援技術にも伝える */}
      <output aria-live="polite" className="sr-only">
        {status === 'idle' ? '' : t(locale, STATUS_LABEL[status])}
      </output>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-xs text-warm-subtext md:text-sm">
        <code>{publicKey.key}</code>
      </pre>
    </article>
  );
}
