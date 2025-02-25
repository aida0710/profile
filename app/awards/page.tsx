import React from 'react';
import {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {Card, CardBody} from '@heroui/card';

import {BlockFrame} from '@/components/common/BlockFrame';
import {Award} from '@/types';
import {awards} from '@/data/awards';

export const metadata: Metadata = {
    title: 'Awards',
    description: '受賞した賞の一覧を紹介しています',
};

export default function AwardsPage() {
    return (
        <BlockFrame
            description='頂いた賞の一覧'
            title='Award'>
            {awards.map((award, index) => (
                <AwardCard
                    key={index}
                    award={award}
                />
            ))}
        </BlockFrame>
    );
}

interface AwardCardProps {
    award: Award;
}

function AwardCard({award}: AwardCardProps) {
    return (
        <Link
            href={award.link}
            target='_blank'>
            <Card
                isHoverable
                isPressable
                className='h-full transition-transform hover:scale-[1.02]'>
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
    );
}
