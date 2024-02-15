import React from 'react';
import {Metadata} from 'next';
import {Skills} from '@/components/skills';
import {Card, CardBody} from '@nextui-org/card';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Projects',
};

interface ProjectsProps {
    title: string;
    description: string;
    image: string;
    link: string;
    language: string;
}

const projects: ProjectsProps[] = [
    {
        title: 'Catsial',
        description: 'Web単語帳アプリ',
        image: 'catsial.png',
        link: 'https://www.catsial.app',
        language: 'TypeScript',
    },
    {
        title: 'Zircon Lang',
        description: 'Rust製自作言語 インタープリタ式 開発中',
        image: 'zircon-lang.png',
        link: 'https://github.com/aida0710/zircon-lang',
        language: 'Rust',
    },
    {
        title: 'Blur Focus',
        description: '初めて作成したクローム拡張機能。文章を読むときに文字が滑るので、文字が滑らないように対策する拡張機能',
        image: 'blur-focus.png',
        link: 'https://github.com/aida0710/blur-focus',
        language: 'TypeScript',
    },
    {
        title: 'Folivora',
        description: 'マインクラフトサーバのプラグイン。真面目に設計を頑張ったプロジェクト',
        image: 'folivora.png',
        link: 'https://github.com/aida0710/Folivora',
        language: 'PHP',
    },
    {
        title: 'Profile',
        description: 'この自己紹介サイトのソースコード',
        image: 'profile.png',
        link: 'https://github.com/aida0710/profile',
        language: 'TypeScript',
    },
];

export default async function Page() {
    return (
        <Skills
            title='Projects'
            description='クリックしたらリポジトリやサイトに飛べます！'>
            {projects.map((project: ProjectsProps, index: number) => (
                <Link
                    href={project.link}
                    key={index}>
                    <Card
                        className='h-full'
                        isHoverable
                        isPressable>
                        <CardBody>
                            <h2 className='text-sm'>言語：{project.language}</h2>
                            <h3 className='my-2 font-semibold'>{project.title}</h3>
                            <p className='mb-1'>{project.description}</p>
                            <Image
                                src={`/images/projects/${project.image}`}
                                alt={project.title}
                                className='mt-auto aspect-video rounded-lg'
                                width={1920}
                                height={1080}
                            />
                        </CardBody>
                    </Card>
                </Link>
            ))}
        </Skills>
    );
}
