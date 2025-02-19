import React from 'react';
import {Image} from '@heroui/image';

import {SnsIcons} from '@/app/index/sns-icons';
import {SelectionButton} from '@/app/index/selection-button';
import {statusMessages} from '@/app/index/data-store';

export default function Home() {
    return (
        <div className='text-center'>
            <div className='mb-12 mt-12 flex justify-center'>
                <Image
                    isBlurred
                    alt='profile-icon'
                    className='h-56 w-56'
                    height='224px'
                    radius='full'
                    src='/neko.jpg'
                    width='224px'
                />
            </div>
            <h6 className='text-lg font-medium tracking-wide md:text-2xl'>Masaki Aida / 相田 優希</h6>
            <div className='text-md my-3 font-normal tracking-wide md:text-xl'>
                <p>19歳 千葉県船橋市在住</p>
                <p>Frontend/Backend Engineer</p>
            </div>
            <SnsIcons />
            <div>
                {statusMessages().map((message: string, index: number) => (
                    <p
                        key={index}
                        className='text-md mb-1 font-normal tracking-wide md:text-xl'>
                        {message}
                    </p>
                ))}
            </div>
            <div className='mb-12 mt-16'>
                <SelectionButton />
            </div>
            {/*<Timeline />*/}
        </div>
    );
}
