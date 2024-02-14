import React, {Suspense} from 'react';
import {Image} from '@nextui-org/image';
import {Divider} from '@nextui-org/divider';
import {Skills} from '@/app/components/skills';
import {SnsIcons} from '@/app/components/sns-icons';
import Footer from '@/app/components/footer';
import {StatusMessage} from '@/app/components/status-message';
import {NoSSR} from '@/app/components/no-ssr';

export default async function Page() {
    return (
        <div>
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
                <h6 className='text-lg font-medium md:text-2xl'>Masaki Aida / 相田 優希</h6>
                <p className='text-md mb-1 font-normal md:text-xl'>18歳 千葉県船橋市在住</p>
                <SnsIcons />
                    <NoSSR>
                        <StatusMessage />
                    </NoSSR>
            </div>
            <Divider className='my-14' />
            <Skills />
            <Footer />
        </div>
    );
}
