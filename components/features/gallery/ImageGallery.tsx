'use client';

import { useDisclosure } from '@heroui/modal';
import { Skeleton } from '@heroui/skeleton';
import { useEffect, useState } from 'react';

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
    <Skeleton className="w-full rounded-lg shadow-lg">
      <div className="w-full overflow-hidden bg-background shadow-lg">
        <div className="relative w-full p-1">
          <div className="relative h-0 w-full rounded-lg bg-default-200 pb-[75%]" />
        </div>
        <div className="p-2 lg:p-4">
          <div className="h-4 w-3/4 rounded bg-default-100" />
        </div>
      </div>
    </Skeleton>
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
          : sortedImages.map((image) => (
              <li key={image.src}>
                <ImageCard image={image} onImageClick={handleImageClick} />
              </li>
            ))}
      </ul>

      {isMounted && <ImageModal image={selectedImage} isOpen={isOpen} onClose={onClose} />}
    </div>
  );
}
