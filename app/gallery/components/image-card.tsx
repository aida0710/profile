import type {ImageData} from '@/app/gallery/types/gallery';

import React from 'react';
import Image from 'next/image';

import {galleryDirectory} from '@/app/gallery/data-store';

interface ImageCardProps {
    image: ImageData;
    onImageClick: (image: ImageData) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({image, onImageClick}) => {
    return (
        <button
            aria-label='画像を拡大表示'
            className='group w-full overflow-hidden rounded-lg bg-background shadow-lg transition-transform hover:opacity-95 hover:outline-none hover:ring-2 hover:ring-primary'
            onClick={() => onImageClick(image)}>
            <div className='relative w-full p-1'>
                <div className='relative h-0 w-full pb-[75%]'>
                    <Image
                        fill
                        alt='写真'
                        className='rounded-lg object-cover'
                        quality={85}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        src={galleryDirectory + image.src}
                    />
                </div>
            </div>
            <div className='p-2 lg:p-4'>
                <p className='text-sm text-default-500'>{image.description}</p>
            </div>
        </button>
    );
};
