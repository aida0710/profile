'use client';

import React, {useEffect, useState} from 'react';
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
import {SiWakatime} from 'react-icons/si';
import {Divider} from '@heroui/divider';
import {Button} from '@heroui/button';
import {Link} from '@heroui/link';

import {SocialLink} from '@/types';
import getLastCommitTime from '@/libs/fetch/getLastCommitTime';

const SOCIAL_LINKS: SocialLink[] = [
    {
        href: 'https://github.com/aida0710',
        icon: <BsGithub className='h-full w-full p-1' />,
        label: 'GitHub',
    },
    {
        href: 'https://twitter.com/aida_0710',
        icon: <BsTwitter className='h-full w-full p-1' />,
        label: 'Twitter',
    },
    {
        href: 'https://www.instagram.com/aida_07100/',
        icon: <BsInstagram className='h-full w-full p-1' />,
        label: 'Instagram',
    },
    {
        href: 'https://wakatime.com/@aida_0710',
        icon: <SiWakatime className='h-full w-full p-1' />,
        label: 'Wakatime',
    },
];

export function Footer() {
    const [lastCommitTime, setLastCommitTime] = useState<string>('Loading...');
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        // コンポーネントのマウント時にコミット情報を取得
        const fetchCommitTime = async () => {
            try {
                const time = await getLastCommitTime();

                setLastCommitTime(time);
            } catch (error) {
                console.error('Failed to fetch commit time:', error);
                setLastCommitTime('Failed to load commit time');
            }
        };

        fetchCommitTime().then();
    }, []);

    return (
        <footer className='w-full'>
            <Divider className='my-14 mt-10' />

            <div className='mx-auto max-w-7xl px-5 pb-8'>
                <div className='mb-3 flex flex-wrap gap-2'>
                    {SOCIAL_LINKS.map((link, index) => (
                        <Link
                            key={index}
                            aria-label={link.label}
                            href={link.href}
                            target='_blank'>
                            <Button
                                color='default'
                                startContent={link.icon}
                                variant='light'>
                                {link.label}
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
                    <p>© {currentYear} Masaki Aida. All Rights Reserved.</p>
                </Link>
            </div>
        </footer>
    );
}
