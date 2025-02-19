'use client';

import type {ImageData} from '@/app/gallery/types/gallery';

import React, {useState} from 'react';
import {useDisclosure} from '@heroui/modal';

import {ImageCard} from '@/app/gallery/components/image-card';
import {ImageModal} from '@/app/gallery/components/image-modal';

interface ImageGalleryProps {
    images: ImageData[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({images}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

    const handleImageClick = (image: ImageData) => {
        setSelectedImage(image);
        onOpen();
    };

    return (
        <div className='container mx-auto px-4 py-8'>
            <div
                aria-label='画像ギャラリー'
                className='grid grid-cols-2 gap-0.5 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6'
                role='list'>
                {images
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .map((image, index) => (
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
};
