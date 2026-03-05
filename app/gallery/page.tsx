import type {Metadata} from 'next';

import {TextBlock} from '@/components/common/TextBlock';
import {ImageGallery} from '@/components/features/gallery/ImageGallery';
import {GALLERY_INTRODUCTION, images} from '@/data/gallery';

export const metadata: Metadata = {
    title: 'Gallery',
    description: '私が撮影した写真や撮影していただいた写真を掲載しています。',
};

export default function GalleryPage() {
    return (
        <div className='min-h-screen py-10 md:py-16'>
            <div className='mb-8 px-6'>
                <h1 className='font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl'>Photo
                    Gallery</h1>
                <TextBlock messages={GALLERY_INTRODUCTION} />
            </div>

            <ImageGallery images={images} />
        </div>
    );
}
