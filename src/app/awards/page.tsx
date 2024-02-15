import React from 'react';
import {Metadata} from 'next';
import {Skills} from '@/components/skills';
import {Card, CardBody} from '@nextui-org/card';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Awards',
};

interface AwardsProps {
    organization: string;
    description: string;
    image: string;
    link: string;
    date: string;
}

const Awards: AwardsProps[] = [
    {
        organization: '東京大学 産学協創推進本部',
        description: '100program 4期 優秀アプリ賞 受賞',
        image: '100program-4.png',
        link: 'https://100program.jp/',
        date: '2023年09月22日',
    },
];

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
                                    className='mt-auto aspect-video rounded-lg'
                                    width={1920}
                                    height={1080}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Link>
            ))}
            <Card className='max-md:hidden'>
                <CardBody>
                    <h2 className='text-sm'>今後取りたい！</h2>
                </CardBody>
            </Card>
            <Card className='max-lg:hidden'>
                <CardBody>
                    <h2 className='text-sm'>今後取りたい！</h2>
                </CardBody>
            </Card>
        </Skills>
    );
}
