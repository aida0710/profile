'use client';

import React, {useState} from 'react';
import {useDisclosure} from '@heroui/modal';

import {GalleryImage} from '@/types';
import {ImageCard} from '@/components/features/gallery/ImageCard';
import {ImageModal} from '@/components/features/gallery/ImageModal';

interface ImageGalleryProps {
    images: GalleryImage[];
}

export function ImageGallery({images}: ImageGalleryProps) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const handleImageClick = (image: GalleryImage) => {
        setSelectedImage(image);
        onOpen();
    };

    // 日付順にソート（昇順）
    const sortedImages = [...images].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return (
        <div className='container mx-auto px-4 py-8'>
            <div
                aria-label='画像ギャラリー'
                className='grid grid-cols-2 gap-0.5 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6'
                role='list'>
                {sortedImages.map((image, index) => (
                    <div
                        key={index}
                        role='listitem'>
                        <ImageCard
                            image={image}
                            onImageClick={handleImageClick}
                        />
                    </div>
                ))}
            </div>

            <ImageModal
                image={selectedImage}
                isOpen={isOpen}
                onClose={onClose}
            />
        </div>
    );
}
