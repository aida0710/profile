import React from 'react';
import {Metadata} from 'next';
import {Card, CardBody} from '@heroui/card';
import Image from 'next/image';
import Link from 'next/link';

import {BlockFrame} from '@/components/block-frame';
import {Awards} from '@/app/awards/data-store';
import {AwardsProps} from '@/app/awards/types/award';

export const metadata: Metadata = {
    title: 'Awards',
};

export default async function Page() {
    return (
        <BlockFrame
            description='頂いた賞の一覧'
            title='Award'>
            {Awards.map((award: AwardsProps, index: number) => (
                <Link
                    key={index}
                    href={award.link}
                    target='_blank'>
                    <Card
                        isHoverable
                        isPressable
                        className='h-full'>
                        <CardBody>
                            <h2 className='text-sm'>{award.organization}</h2>
                            <p className='text-xs'>日付：{award.date}</p>
                            <div>
                                <h3 className='my-3 font-semibold'>{award.description}</h3>
                                <Image
                                    alt={award.description}
                                    className='mt-auto aspect-video rounded-lg object-contain object-center'
                                    height={1080}
                                    src={`/images/awards/${award.image}`}
                                    width={1920}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Link>
            ))}
        </BlockFrame>
    );
}
