import React from 'react';
import {Card, CardBody} from '@nextui-org/card';
import {Chip} from '@nextui-org/chip';
import {SkillProps} from '@/functions/data-store';

interface Props {
    title: string;
    contents: SkillProps[];
}

export default function SkillCard({title, contents}: Props) {
    return (
        <Card className='flex flex-wrap'>
            <CardBody>
                <h2 className='mb-2 text-lg'>{title}</h2>
                <div className='m-1 flex flex-wrap'>
                    {contents.map((content: SkillProps, index: number) => (
                        <Chip
                            radius='lg'
                            className='m-1'
                            key={index}>
                            <div className='flex items-center'>
                                {content.icon}
                                {content.title}
                            </div>
                        </Chip>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
}
