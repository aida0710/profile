import { TextBlock } from '@/components/common/TextBlock';
import { ImageGallery } from '@/components/features/gallery/ImageGallery';
import { GALLERY_INTRODUCTION, images } from '@/data/gallery';
import { sortByDateDesc } from '@/libs/i18n/date';
import { t } from '@/libs/i18n/dictionaries';
import { type Locale, pickLocalized } from '@/libs/i18n/locale';

interface GalleryPageProps {
  locale: Locale;
}

export function GalleryPage({ locale }: GalleryPageProps) {
  const intro = pickLocalized(GALLERY_INTRODUCTION, locale);
  const sortedImages = sortByDateDesc(images, (image) => image.date);

  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="mb-8 px-6">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl">
          {t(locale, 'gallery.title')}
        </h1>
        <TextBlock messages={intro} />
      </div>

      <ImageGallery images={sortedImages} locale={locale} />
    </div>
  );
}
