import React from 'react';
import {Card, CardBody} from '@heroui/card';
import {Chip} from '@heroui/chip';

interface SkillCardProps {
    title: string;
    contents: string[];
}

export function SkillCard({title, contents}: SkillCardProps) {
    return (
        <Card className='flex flex-wrap'>
            <CardBody>
                <h2 className='mb-2 text-lg'>{title}</h2>
                <div className='m-1 flex flex-wrap'>
                    {contents.map((content, index) => (
                        <Chip
                            key={`${title}-${content}-${index}`}
                            className='m-1'
                            radius='lg'>
                            <div className='flex items-center'>{content}</div>
                        </Chip>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
}
