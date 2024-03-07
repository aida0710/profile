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
        organization: '総務省 / 株式会社角川アスキー総合研究所',
        description: '異能ベーション 2023年度 ジェネレーションアワード部門 ノミネート',
        image: '異能ベーション-ジェネレーションアワード_表彰状.png',
        link: 'https://www.inno.go.jp/result/2023/generation/nominate/',
        date: '2024年03月02日',
    },
    {
        organization: '東北大学 グリーン未来創造機構',
        description: '2023-2024 Academia in Action ファイナリスト受賞',
        image: 'academia-in-action.png',
        link: 'https://www.ggi.tohoku.ac.jp/academia-in-action/',
        date: '2024年03月04日',
    },
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
