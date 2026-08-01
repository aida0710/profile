'use client';

import { useDisclosure } from '@heroui/modal';
import { useState } from 'react';

import { AnimatedSection } from '@/components/common/AnimatedSection';
import { ImageCard } from '@/components/features/gallery/ImageCard';
import { ImageModal } from '@/components/features/gallery/ImageModal';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';
import type { GalleryImage } from '@/types';

interface ImageGalleryProps {
  // 並び替え済みの配列を受け取る（並び替えはサーバー側の GalleryPage で行う）
  images: GalleryImage[];
  locale: Locale;
}

export function ImageGallery({ images, locale }: ImageGalleryProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ul
        aria-label={t(locale, 'gallery.galleryAriaLabel')}
        className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6"
      >
        {images.map((image, index) => (
          <li key={image.src}>
            <AnimatedSection delay={index * 50}>
              <ImageCard image={image} locale={locale} onImageClick={handleImageClick} />
            </AnimatedSection>
          </li>
        ))}
      </ul>

      <ImageModal image={selectedImage} isOpen={isOpen} locale={locale} onClose={onClose} />
    </div>
  );
}
