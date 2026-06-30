import Image from 'next/image';

import { GALLERY_DIRECTORY } from '@/data/gallery';
import { t } from '@/libs/i18n/dictionaries';
import { type Locale, pickLocalized } from '@/libs/i18n/locale';
import type { GalleryImage } from '@/types';

interface ImageCardProps {
  image: GalleryImage;
  locale: Locale;
  onImageClick: (image: GalleryImage) => void;
}

export function ImageCard({ image, locale, onImageClick }: ImageCardProps) {
  const description = pickLocalized(image.description, locale);

  return (
    <button
      type="button"
      aria-label={t(locale, 'gallery.imageZoomLabel')}
      className="group w-full overflow-hidden rounded-xl border border-warm-border bg-warm-surface transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-warm-accent/30 hover:shadow-lg hover:shadow-warm-accent/5 focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none"
      onClick={() => onImageClick(image)}
    >
      <div className="relative w-full p-1">
        <div className="relative h-0 w-full pb-[75%]">
          <Image
            fill
            alt={description || t(locale, 'gallery.photoAlt')}
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={GALLERY_DIRECTORY + image.src}
          />
        </div>
      </div>
      <div className="p-2 lg:p-4">
        <p className="text-sm text-warm-subtext">{description}</p>
      </div>
    </button>
  );
}
