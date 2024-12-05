import React from 'react';
import {Card, CardBody} from '@nextui-org/card';
import {Chip} from '@nextui-org/chip';

interface Props {
    title: string;
    contents: string[];
}

export default function SkillCard({title, contents}: Props) {
    return (
        <Card className='flex flex-wrap'>
            <CardBody>
                <h2 className='mb-2 text-lg'>{title}</h2>
                <div className='m-1 flex flex-wrap'>
                    {contents.map((content: string, index: number) => (
                        <Chip
                            radius='lg'
                            className='m-1'
                            key={`${title}-${content}-${index}`}>
                            <div className='flex items-center'>{content}</div>
                        </Chip>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
}
