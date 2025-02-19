import React from 'react';

import {ImageGallery} from '@/app/gallery/components/image-gallery';
import {images} from '@/app/gallery/data-store';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Gallery',
};

export default function GalleryPage() {
    return (
        <main className='min-h-screen bg-background'>
            <div className='py-8'>
                <div className='mb-8 text-center'>
                    <h1 className='text-3xl font-medium md:text-4xl'>フォトギャラリー</h1>
                    <div className='text-sm font-normal md:text-base'>
                        <p>私が撮影した写真や撮影していただいた写真を掲載しています。</p>
                        <p>画像をクリックすると拡大表示されます。</p>
                    </div>
                </div>

                <ImageGallery images={images} />
            </div>
        </main>
    );
}
