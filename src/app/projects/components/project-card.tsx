import React from 'react';
import {Card, CardBody} from '@nextui-org/card';
import Image from 'next/image';
import {ProjectsProps} from '@/app/projects/data-store';

interface ProjectCardProps extends ProjectsProps {
    onOpen: () => void;
}

export default function ProjectCard({onOpen, ...props}: ProjectCardProps) {
    return (
        <Card className='h-full' isHoverable isPressable onClick={onOpen}>
            <CardBody>
                <h2 className='text-sm'>言語：{props.language}</h2>
                <h3 className='my-2 font-semibold'>{props.title}</h3>
                <div className='mb-1'>
                    {props.description.map((item: string, index: number) => (
                        <p key={index} className='text-md'>{item}</p>
                    ))}
                </div>
                <Image
                    src={`/images/projects/${props.image}`}
                    alt={props.title}
                    className='mt-auto aspect-video rounded-lg'
                    width={1920}
                    height={1080}
                />
            </CardBody>
        </Card>
    );
}