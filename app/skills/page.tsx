import React from 'react';
import {Metadata} from 'next';

import {BlockFrame} from '@/components/common/BlockFrame';
import {SkillCard} from '@/components/features/skills/SkillCard';
import {skillCategories} from '@/data/skills';
import {QualificationCard} from '@/components/features/skills/QualificationCard';

export const metadata: Metadata = {
    title: 'Skills',
    description: '保有資格や経験した技術について紹介しています',
};

export default function SkillsPage() {
    return (
        <div className="pt-8">
            <BlockFrame
                description='保有資格'
                title='Qualifications'>
                <QualificationCard
                    note='応用情報取りたい...!!'
                    organization='独立行政法人 情報処理推進機構'
                    title='ITパスポート R5 May'
                />
                <QualificationCard
                    organization='その他'
                    title='普通自動車運転免許 R5 Aug'
                />
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
