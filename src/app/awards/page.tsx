import React from 'react';
import {Metadata} from 'next';
import {Skills} from '@/components/skills';
import {Card, CardBody} from '@nextui-org/card';
import Image from 'next/image';
import Link from 'next/link';
import {Awards} from '@/app/awards/data-store';
import {AwardsProps} from '@/app/awards/types/award';

export const metadata: Metadata = {
    title: 'Awards',
};

export default async function Page() {
    return (
        <Skills
            title='Award'
            description='頂いた賞の一覧'>
            {Awards.map((award: AwardsProps, index: number) => (
                <Link
                    target='_blank'
                    href={award.link}
                    key={index}>
                    <Card
                        className='h-full'
                        isHoverable
                        isPressable>
                        <CardBody>
                            <h2 className='text-sm'>{award.organization}</h2>
                            <p className='text-xs'>日付：{award.date}</p>
                            <div>
                                <h3 className='my-3 font-semibold'>{award.description}</h3>
                                <Image
                                    src={`/images/awards/${award.image}`}
                                    alt={award.description}
                                    className='mt-auto aspect-video rounded-lg object-contain object-center'
                                    width={1920}
                                    height={1080}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Link>
            ))}
        </Skills>
    );
}
