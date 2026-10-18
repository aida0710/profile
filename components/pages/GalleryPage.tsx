import { PhotoGrid } from '@/components/features/gallery/PhotoGrid';
import type { LightboxPhoto } from '@/components/features/gallery/PhotoLightbox';
import { GridSection } from '@/components/grid/GridSection';
import { PageHero } from '@/components/grid/PageHero';
import { GALLERY_DIRECTORY, images } from '@/data/gallery';
import { formatDate, sortByDateDesc } from '@/libs/i18n/date';
import { t } from '@/libs/i18n/dictionaries';
import { type Locale, pickLocalized } from '@/libs/i18n/locale';

interface GalleryPageProps {
  locale: Locale;
}

export function GalleryPage({ locale }: GalleryPageProps) {
  const photos: LightboxPhoto[] = sortByDateDesc(images, (image) => image.date).map((image) => ({
    src: GALLERY_DIRECTORY + image.src,
    description: pickLocalized(image.description, locale) || t(locale, 'gallery.imageAlt'),
    date: formatDate(image.date, locale),
    detail: pickLocalized(image.detail, locale),
  }));

  return (
    <>
      <PageHero title={t(locale, 'gallery.title')} description={t(locale, 'gallery.description')} />
      <GridSection>
        <PhotoGrid
          photos={photos}
          zoomLabel={t(locale, 'gallery.imageZoomLabel')}
          closeLabel={t(locale, 'common.close')}
        />
      </GridSection>
    </>
  );
}
