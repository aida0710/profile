import {Link} from '@heroui/link';
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
import {SiQiita, SiWakatime} from 'react-icons/si';

import type {SocialLink} from '@/types';

const SOCIAL_LINKS: SocialLink[] = [
    {href: 'https://github.com/aida0710', icon: <BsGithub aria-hidden='true' className='h-5 w-5' />, label: 'GitHub'},
    {
        href: 'https://twitter.com/aida_0710',
        icon: <BsTwitter aria-hidden='true' className='h-5 w-5' />,
        label: 'Twitter',
    },
    {
        href: 'https://www.instagram.com/aida_07100/',
        icon: <BsInstagram aria-hidden='true' className='h-5 w-5' />,
        label: 'Instagram',
    },
    {href: 'https://qiita.com/aida0710', icon: <SiQiita aria-hidden='true' className='h-5 w-5' />, label: 'Qiita'},
    {
        href: 'https://wakatime.com/@aida_0710',
        icon: <SiWakatime aria-hidden='true' className='h-5 w-5' />,
        label: 'Wakatime',
    },
];

export function SocialIcons() {
    return (
        <div className='flex flex-wrap gap-3'>
            {SOCIAL_LINKS.map((link) => (
                <Link
                    key={link.label}
                    aria-label={link.label}
                    className='flex items-center gap-2 rounded-lg border border-warm-border bg-warm-surface px-4 py-2.5 text-sm text-warm-text transition-[border-color,color] duration-200 hover:border-warm-accent hover:text-warm-accent focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none'
                    href={link.href}
                    target='_blank'
                >
                    {link.icon}
                    <span>{link.label}</span>
                </Link>
            ))}
        </div>
    );
}
