'use client';

import React, {useEffect, useState} from 'react';
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
import {SiWakatime} from 'react-icons/si';
import {Divider} from '@heroui/divider';
import {Button} from '@heroui/button';
import {Link} from '@heroui/link';

import getLastCommitTime from '@/libs/fetch/getLastCommitTime';

interface SnsLinkProps {
    href: string;
    startContent: React.ReactNode;
    text: string;
}

const SnsLinks: SnsLinkProps[] = [
    {
        href: 'https://github.com/aida0710',
        startContent: <BsGithub className='h-full w-full p-1' />,
        text: 'GitHub',
    },
    {
        href: 'https://twitter.com/aida_0710',
        startContent: <BsTwitter className='h-full w-full p-1' />,
        text: 'Twitter',
    },
    {
        href: 'https://www.instagram.com/aida_07100/',
        startContent: <BsInstagram className='h-full w-full p-1' />,
        text: 'Instagram',
    },
    {
        href: 'https://wakatime.com/@aida_0710',
        startContent: <SiWakatime className='h-full w-full p-1' />,
        text: 'Wakatime',
    },
];

export default function Footer() {
    const [lastCommitTime, setLastCommitTime] = useState<string>('');

    useEffect(() => {
        getLastCommitTime().then((time) => setLastCommitTime(time));
    }, []);

    return (
        <footer className='w-full'>
            <Divider className='my-14 mt-10' />
            <div className='m-5'>
                <div className='mb-3'>
                    {SnsLinks.map((snsLink: SnsLinkProps, index: number) => (
                        <Link
                            key={index}
                            href={snsLink.href}
                            target='_blank'>
                            <Button
                                className='mr-2'
                                color='default'
                                startContent={snsLink.startContent}
                                variant='light'>
                                {snsLink.text}
                            </Button>
                        </Link>
                    ))}
                </div>
                <Link
                    isBlock
                    showAnchorIcon
                    className='mb-3 text-medium font-normal'
                    href='https://github.com/aida0710/profile/commits/master'
                    target='_blank'>
                    <p>Last Commit: {lastCommitTime}</p>
                </Link>
                <Link
                    isBlock
                    showAnchorIcon
                    className='mb-3 text-medium font-normal'
                    href='https://twitter.com/aida_0710'
                    target='_blank'>
                    <p>© {new Date().getFullYear()} Masaki Aida. All Rights Reserved.</p>
                </Link>
            </div>
        </footer>
    );
}
