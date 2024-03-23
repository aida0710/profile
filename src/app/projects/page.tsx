import React from 'react';
import {Metadata} from 'next';
import {Skills} from '@/components/skills';
import {Card, CardBody} from '@nextui-org/card';
import Image from 'next/image';
import Link from 'next/link';
import {projects, ProjectsProps} from '@/app/projects/data-store';

export const metadata: Metadata = {
    title: 'Projects',
};

export default async function Page() {
    return (
        <Skills
            title='Projects'
            description='クリックしたらリポジトリやサイトに飛べます！'>
            {projects.map((project: ProjectsProps, index: number) => (
                <Link
                    target='_blank'
                    href={project.link}
                    key={index}>
                    <Card
                        className='h-full'
                        isHoverable
                        isPressable>
                        <CardBody>
                            <h2 className='text-sm'>言語：{project.language}</h2>
                            <h3 className='my-2 font-semibold'>{project.title}</h3>
                            <p className='mb-1'>
                                {project.description.map((item: string, index: number) => (
                                    <div key={index}>
                                        <p className='text-md'>{item}</p>
                                    </div>
                                ))}
                            </p>
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
