'use client';

import { useDisclosure } from '@heroui/modal';
import { useEffect, useState } from 'react';

import { AnimatedSection } from '@/components/common/AnimatedSection';
import { ImageCard } from '@/components/features/gallery/ImageCard';
import { ImageModal } from '@/components/features/gallery/ImageModal';
import type { GalleryImage } from '@/types';

interface ImageGalleryProps {
  images: GalleryImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    onOpen();
  };

  const sortedImages = [...images].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const skeletonCount = 8;

  const SkeletonImageCard = () => (
    <div className="w-full animate-pulse overflow-hidden rounded-xl border border-warm-border bg-warm-surface">
      <div className="relative w-full p-1">
        <div className="relative h-0 w-full rounded-lg bg-warm-border pb-[75%]" />
      </div>
      <div className="p-2 lg:p-4">
        <div className="h-4 w-3/4 rounded bg-warm-border" />
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <ul
        aria-label="画像ギャラリー"
        className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6"
      >
        {!isMounted
          ? Array.from({ length: skeletonCount }, (_, index) => index).map((skeletonIndex) => (
              <li key={`skeleton-${skeletonIndex}`}>
                <SkeletonImageCard />
              </li>
            ))
          : sortedImages.map((image, index) => (
              <li key={image.src}>
                <AnimatedSection delay={index * 50}>
                  <ImageCard image={image} onImageClick={handleImageClick} />
                </AnimatedSection>
              </li>
            ))}
      </ul>

      {isMounted && <ImageModal image={selectedImage} isOpen={isOpen} onClose={onClose} />}
    </div>
  );
}
