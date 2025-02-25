import {Award} from '@/types';
import Link from 'next/link';
import {Card, CardBody} from '@heroui/card';
import Image from 'next/image';
import React from 'react';

interface AwardCardProps {
    award: Award;
}

export function AwardCard({award}: AwardCardProps) {
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
