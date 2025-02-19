import React from 'react';
import {SiWakatime} from 'react-icons/si';
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
import {Link} from '@heroui/link';
import {Button} from '@heroui/button';

interface SnsLinkProps {
    href: string;
    startContent: React.ReactNode;
}

const SnsLinks: SnsLinkProps[] = [
    {
        href: 'https://github.com/aida0710',
        startContent: <BsGithub className='h-full w-full' />,
    },
    {
        href: 'https://twitter.com/aida_0710',
        startContent: <BsTwitter className='h-full w-full' />,
    },
    {
        href: 'https://www.instagram.com/aida_07100/',
        startContent: <BsInstagram className='h-full w-full' />,
    },
    {
        href: 'https://wakatime.com/@aida_0710',
        startContent: <SiWakatime className='h-full w-full' />,
    },
];

export function SnsIcons() {
    return (
        <div className='my-4 flex w-full justify-center'>
            <div className='grid grid-cols-4 gap-x-10'>
                {SnsLinks.map((snsLink: SnsLinkProps, index: number) => (
                    <Link
                        key={index}
                        href={snsLink.href}>
                        <Button
                            isIconOnly
                            className='hover:scale-125 hover:rounded-md'
                            variant='light'>
                            {snsLink.startContent}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
