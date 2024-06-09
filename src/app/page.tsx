import React from 'react';
import {Image} from '@nextui-org/image';
import {SnsIcons} from '@/app/index/sns-icons';
import {StatusMessage} from '@/app/index/status-message';
import {NoSSR} from '@/app/index/utils/no-ssr';
import Link from 'next/link';
import {Button} from '@nextui-org/react';
import {AppWindowIcon, AwardIcon, PenToolIcon} from 'lucide-react';
import {ChronologicalTable} from '@/app/index/chronological-table';

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
            <p className='text-md mt-2 font-normal tracking-wide md:text-xl'>18歳 千葉県船橋市在住</p>
            <p className='text-md font-normal tracking-wide md:text-xl'>Frontend/Backend Engineer</p>
            <SnsIcons />
            <NoSSR>
                <StatusMessage />
            </NoSSR>
            <div className='mb-12 mt-16 flex justify-center gap-3'>
                <Link href='awards'>
                    <Button
                        color='danger'
                        startContent={<AwardIcon />}
                        variant='flat'>
                        Awards
                    </Button>
                </Link>
                <Link href='projects'>
                    <Button
                        color='success'
                        startContent={<AppWindowIcon />}
                        variant='flat'>
                        Projects
                    </Button>
                </Link>
                <Link href='skills'>
                    <Button
                        color='warning'
                        startContent={<PenToolIcon />}
                        variant='flat'>
                        Skills
                    </Button>
                </Link>
            </div>
            <div className="flex justify-center">
                <ChronologicalTable />
            </div>
        </div>
    );
}
