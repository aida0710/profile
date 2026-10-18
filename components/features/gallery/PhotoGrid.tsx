'use client';

import Image from 'next/image';
import { useState } from 'react';

import { type LightboxPhoto, PhotoLightbox } from '@/components/features/gallery/PhotoLightbox';
import { CellGrid } from '@/components/grid/CellGrid';

interface PhotoGridProps {
  // 並び替え・整形済みのものを受け取る（GalleryPage がサーバー側で行う）
  photos: LightboxPhoto[];
  zoomLabel: string;
  closeLabel: string;
}

export function PhotoGrid({ photos, zoomLabel, closeLabel }: PhotoGridProps) {
  const [openPhoto, setOpenPhoto] = useState<LightboxPhoto | null>(null);

  return (
    <>
      <CellGrid minColumnWidth={300} columnMode="fill">
        {photos.map((photo) => (
          <figure key={photo.src} className="m-0 flex flex-col gap-3 p-5">
            <button
              type="button"
              aria-label={`${zoomLabel}: ${photo.description}`}
              className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden border border-line bg-bg2"
              onClick={() => setOpenPhoto(photo)}
            >
              <Image
                fill
                src={photo.src}
                alt={photo.description}
                sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 360px"
                className="object-cover"
              />
            </button>
            <figcaption className="flex flex-col gap-0.5">
              <span className="font-mono text-xs text-faint">{photo.date}</span>
              <span className="text-sm">{photo.description}</span>
              {photo.detail && <span className="text-[13px] text-sub">{photo.detail}</span>}
            </figcaption>
          </figure>
        ))}
      </CellGrid>
      {openPhoto && <PhotoLightbox photo={openPhoto} closeLabel={closeLabel} onClose={() => setOpenPhoto(null)} />}
    </>
  );
}
