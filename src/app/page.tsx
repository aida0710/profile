import React from 'react';
import {Image} from '@nextui-org/image';
import {SnsIcons} from '@/app/components/sns-icons';
import {StatusMessage} from '@/app/components/status-message';
import {NoSSR} from '@/app/components/utils/no-ssr';

export default async function Page() {
    return (
        <div className='text-center'>
            <div className='mb-12 mt-12 flex justify-center'>
                <Image
                    radius='full'
                    isBlurred
                    src='/neko.jpg'
                    alt='profile-icon'
                    width={'224px'}
                    height={'224px'}
                    className='h-56 w-56'
                />
            </div>
            <h6 className='text-lg font-medium tracking-wide md:text-2xl'>Masaki Aida / 相田 優希</h6>
            <p className='text-md mt-2 font-normal tracking-wide md:text-xl'>高校生 普通科 18歳 千葉県船橋市在住</p>
            <p className='text-md font-normal tracking-wide md:text-xl'>Frontend/Backend Engineer</p>
            <SnsIcons />
            <NoSSR>
                <StatusMessage />
            </NoSSR>
        </div>
    );
}
