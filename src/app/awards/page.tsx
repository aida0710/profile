import React from 'react';
import {Metadata} from 'next';
import {Skills} from '@/app/components/skills';
import {Card, CardBody} from '@nextui-org/card';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Awards',
};

export default async function Page() {
    return (
        <Skills
            title='Award'
            description='頂いた賞の一覧'>
            <Card>
                <CardBody>
                    <h2 className='text-sm'>主催：東京大学 産学協創推進本部</h2>
                    <div>
                        <h3 className='my-3 font-semibold'>100program 4期 優秀アプリ賞 受賞</h3>
                        <Image
                            src='/images/awards/100program-4.png'
                            alt='100program'
                            className='mt-auto aspect-video rounded-lg'
                            width={1920}
                            height={1080}
                        />
                    </div>
                </CardBody>
            </Card>
            <Card className='max-md:hidden'>
                <CardBody>
                    <h2 className='text-sm'>今後取りたい！</h2>
                </CardBody>
            </Card>
            <Card className='max-lg:hidden'>
                <CardBody>
                    <h2 className='text-sm'>今後取りたい！</h2>
                </CardBody>
            </Card>
        </Skills>
    );
}
