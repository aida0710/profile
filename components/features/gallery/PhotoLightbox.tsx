'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export interface LightboxPhoto {
  src: string;
  description: string;
  date: string;
  detail: string;
}

interface PhotoLightboxProps {
  photo: LightboxPhoto;
  closeLabel: string;
  onClose: () => void;
}

// showModal() で開くため、Esc での閉じる操作・背面の操作不可・閉じた後のフォーカス戻しはブラウザが担う。
export function PhotoLightbox({ photo, closeLabel, onClose }: PhotoLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    // 画面のどこを押しても閉じる（プロトタイプどおり）。キーボードでは Esc と閉じるボタンで同じ操作ができる。
    // biome-ignore lint/a11y/useKeyWithClickEvents: Esc は <dialog> 自身が処理する
    <dialog
      ref={dialogRef}
      aria-label={photo.description}
      className="fixed inset-0 m-0 hidden h-dvh max-h-none w-screen max-w-none cursor-zoom-out flex-col open:flex items-center justify-center gap-4 bg-black/90 px-6 py-12 backdrop:bg-transparent"
      onClose={onClose}
      onClick={() => dialogRef.current?.close()}
    >
      <button
        type="button"
        className="absolute top-4 right-4 cursor-pointer rounded-md border border-[#444] px-3 py-1.5 text-[13px] text-white"
        onClick={() => dialogRef.current?.close()}
      >
        {closeLabel}
      </button>
      <div className="relative h-[78vh] w-[min(1080px,100%)]">
        <Image
          fill
          src={photo.src}
          alt={photo.description}
          sizes="(max-width: 1104px) 100vw, 1080px"
          className="object-contain"
        />
      </div>
      <div className="text-center text-sm leading-[1.7] text-[#ededed]">
        <p className="m-0">{photo.description}</p>
        <p className="m-0 font-mono text-xs text-[#a1a1a1]">
          {photo.date} {photo.detail}
        </p>
      </div>
    </dialog>
  );
}
