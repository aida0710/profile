import React from 'react';
import {Card, CardBody} from '@heroui/card';
import Image from 'next/image';

import {ProjectsProps} from '@/app/projects/types/projects';

interface ProjectCardProps extends ProjectsProps {
    onOpen: () => void;
}

export default function ProjectCard({onOpen, ...props}: ProjectCardProps) {
    return (
        <Card
            isHoverable
            isPressable
            className='h-full'
            onPress={onOpen}>
            <CardBody>
                <h2 className='text-sm'>言語：{props.language}</h2>
                <h3 className='my-2 font-semibold'>{props.title}</h3>
                <div className='mb-1'>
                    {props.description.map((item: string, index: number) => (
                        <p
                            key={index}
                            className='text-md'>
                            {item}
                        </p>
                    ))}
                </div>
                <Image
                    alt={props.title}
                    className='mt-auto aspect-video rounded-lg'
                    height={1080}
                    src={`/images/projects/${props.image}`}
                    width={1920}
                />
            </CardBody>
        </Card>
    );
}
