import React from 'react';
import {Image} from '@nextui-org/image';
import {SnsIcons} from '@/app/index/sns-icons';
import {StatusMessage} from '@/app/index/status-message';
import {NoSSR} from '@/app/index/utils/no-ssr';
import {SelectionButton} from '@/app/index/SelectionButton';

export default async function Page() {
    return (
        <div className='text-center'>
            <div className='mb-12 mt-12 flex justify-center'>
                <Image
                    radius='full'
                    isBlurred
                    src='/neko.jpg'
                    alt='profile-icon'
                    width='224px'
                    height='224px'
                    className='h-56 w-56'
                />
            </div>
            <h6 className='text-lg font-medium tracking-wide md:text-2xl'>Masaki Aida / 相田 優希</h6>
            <div className='text-md my-3 font-normal tracking-wide md:text-xl'>
                <p>19歳 千葉県船橋市在住</p>
                <p>Frontend/Backend Engineer</p>
            </div>
            <SnsIcons />
            <NoSSR>
                <StatusMessage />
            </NoSSR>
            <div className='mb-12 mt-16'>
                <SelectionButton />
            </div>
        </div>
    );
}
