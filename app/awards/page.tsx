import React from 'react';
import {Metadata} from 'next';

import {BlockFrame} from '@/components/common/BlockFrame';
import {awards} from '@/data/awards';
import {AwardCard} from '@/components/features/award/AwardCard';

export const metadata: Metadata = {
    title: 'Awards',
    description: '受賞した賞の一覧を紹介しています',
};

export default function AwardsPage() {
    return (
        <div className='pt-8'>
            <BlockFrame
                description='頂いた賞の一覧'
                title='Award'>
                {awards.map((award, index) => (
                    <AwardCard
                        key={index}
                        award={award}
                    />
                ))}
            </BlockFrame>
        </div>
    );
}
