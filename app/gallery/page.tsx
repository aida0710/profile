import React from 'react';
import {Metadata} from 'next';

import {ImageGallery} from '@/app/gallery/components/image-gallery';
import {galleryIntroduction, images} from '@/app/gallery/data-store';
import {TextBlock} from '@/components/text-block';

export const metadata: Metadata = {
    title: 'Gallery',
};

export default function GalleryPage() {
    return (
        <main className='min-h-screen bg-background'>
            <div className='py-8'>
                <div className='mb-8 text-center'>
                    <h1 className='text-3xl font-medium md:text-4xl'>フォトギャラリー</h1>
                    <TextBlock arrayString={galleryIntroduction} />
                </div>

                <ImageGallery images={images} />
            </div>
        </main>
    );
}
