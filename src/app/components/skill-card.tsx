import React from 'react';
import {Card, CardBody} from '@nextui-org/card';
import {Chip} from '@nextui-org/chip';

interface Props {
    title: string;
    contents: Array<string>;
}

export default function SkillCard({title, contents}: Props) {
    return (
        <Card className='flex flex-wrap'>
            <CardBody>
                <h2 className='mb-2 text-lg'>{title}</h2>
                <div className='m-1 flex flex-wrap'>
                    {contents.map((content: string) => (
                        <Chip
                            radius='lg'
                            className='m-1'
                            key={content}>
                            {content}
                        </Chip>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
}
