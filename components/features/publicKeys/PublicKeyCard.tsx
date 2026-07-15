'use client';

import { Button } from '@heroui/button';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';

import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';
import type { PublicKey } from '@/types';

interface PublicKeyCardProps {
  publicKey: PublicKey;
  locale: Locale;
}

export function PublicKeyCard({ publicKey, locale }: PublicKeyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(publicKey.key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // クリップボードが使用できない環境では何もしない
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
          startContent={
            copied ? (
              <CheckIcon aria-hidden="true" className="h-3.5 w-3.5" />
            ) : (
              <CopyIcon aria-hidden="true" className="h-3.5 w-3.5" />
            )
          }
          onPress={handleCopy}
        >
          {copied ? t(locale, 'publicKeys.copied') : t(locale, 'publicKeys.copy')}
        </Button>
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-xs text-warm-subtext md:text-sm">
        <code>{publicKey.key}</code>
      </pre>
    </article>
  );
}
