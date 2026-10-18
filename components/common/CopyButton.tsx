'use client';

import { useEffect, useState } from 'react';

// 「コピーしました」を見せておく時間。読み取れて、次の操作の邪魔にならない長さ。
const COPIED_LABEL_MS = 1600;

interface CopyButtonProps {
  text: string;
  label: string;
  copiedLabel: string;
  className: string;
}

export function CopyButton({ text, label, copiedLabel, className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timer = setTimeout(() => setIsCopied(false), COPIED_LABEL_MS);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch {
      // クリップボードが使えない環境（非 HTTPS など）ではラベルを変えず、成功したように見せない。
    }
  };

  return (
    <button type="button" className={className} onClick={copy}>
      <span aria-live="polite">{isCopied ? copiedLabel : label}</span>
    </button>
  );
}
