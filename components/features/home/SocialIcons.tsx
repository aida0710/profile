import React from 'react';
import {SiWakatime} from 'react-icons/si';
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
import {Link} from '@heroui/link';
import {Button} from '@heroui/button';

import {SocialLink} from '@/types';

// ソーシャルリンクの定義
const SOCIAL_LINKS: SocialLink[] = [
    {
        href: 'https://github.com/aida0710',
        icon: <BsGithub className='h-full w-full' />,
        label: 'GitHub',
    },
    {
        href: 'https://twitter.com/aida_0710',
        icon: <BsTwitter className='h-full w-full' />,
        label: 'Twitter',
    },
    {
        href: 'https://www.instagram.com/aida_07100/',
        icon: <BsInstagram className='h-full w-full' />,
        label: 'Instagram',
    },
    {
        href: 'https://wakatime.com/@aida_0710',
        icon: <SiWakatime className='h-full w-full' />,
        label: 'Wakatime',
    },
];

export function SocialIcons() {
    return (
        <div className='my-4 flex w-full justify-center'>
            <div className='grid grid-cols-4 gap-x-10'>
                {SOCIAL_LINKS.map((link, index) => (
                    <Link
                        key={index}
                        aria-label={link.label}
                        href={link.href}
                        target='_blank'>
                        <Button
                            isIconOnly
                            className='hover:scale-125 hover:rounded-md'
                            variant='light'>
                            {link.icon}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
