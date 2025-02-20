import React from 'react';
import {Metadata} from 'next';
import {Card, CardBody} from '@heroui/card';

import {BlockFrame} from '@/components/block-frame';
import SkillCard from '@/app/skills/components/skill-card';
import {skillCategories} from '@/app/skills/data-store';

export const metadata: Metadata = {
    title: 'Skills',
};

export default async function Page() {
    return (
        <div>
            <BlockFrame
                description='保有資格'
                title='Qualifications'>
                <Card key='information-system-qualification'>
                    <CardBody>
                        <h2 className='text-sm'>独立行政法人 情報処理推進機構</h2>
                        <h3 className='my-3 font-semibold'>ITパスポート R5 May</h3>
                        <div className='flex justify-end'>
                            <p className='text-xs'>応用情報取りたい...!!</p>
                        </div>
                    </CardBody>
                </Card>
                <Card key='others'>
                    <CardBody>
                        <h2 className='text-sm'>その他</h2>
                        <h3 className='my-3 font-semibold'>普通自動車運転免許 R5 Aug</h3>
                    </CardBody>
                </Card>
            </BlockFrame>
            <BlockFrame
                description='経験したことのある技術や出来ること'
                title='Skills'>
                {skillCategories.map((category) => (
                    <SkillCard
                        key={category.key}
                        contents={category.contents}
                        title={category.title}
                    />
                ))}
            </BlockFrame>
        </div>
    );
}
