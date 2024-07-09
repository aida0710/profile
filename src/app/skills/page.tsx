import React from 'react';
import {Metadata} from 'next';
import {Skills} from '@/components/skills';
import {Card, CardBody} from '@nextui-org/card';
import SkillCard from '@/app/skills/components/skill-card';
import {amazonWebServices, databases, others, programmingLanguages, webRelated} from '@/app/skills/data-store';

export const metadata: Metadata = {
    title: 'Skills',
};

export default async function Page() {
    return (
        <div>
            <Skills
                title='Qualifications'
                description='保有資格'>
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
            </Skills>
            <Skills
                title='Skills'
                description='経験したことのある技術や出来ること'>
                <SkillCard
                    key='programming-languages'
                    title='Programming Languages'
                    contents={programmingLanguages}
                />
                <SkillCard
                    key='web-related'
                    title='Web Related'
                    contents={webRelated}
                />
                <SkillCard
                    key='databases'
                    title='Databases'
                    contents={databases}
                />
                <SkillCard
                    key='aws'
                    title='Amazon Web Services'
                    contents={amazonWebServices}
                />
                <SkillCard
                    key='others'
                    title='Other'
                    contents={others}
                />
            </Skills>
        </div>
    );
}
