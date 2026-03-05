'use client';

import {AppWindowIcon, AwardIcon, BookOpenIcon, HomeIcon, ImagesIcon, PenToolIcon} from 'lucide-react';

import {MobileMenu} from '@/components/layout/MobileMenu';
import {ThemeToggle} from '@/components/layout/ThemeToggle';
import type {NavItem} from '@/types';

const NAVIGATION_ITEMS: NavItem[] = [
    {path: '/', label: 'Home', icon: <HomeIcon aria-hidden='true' color='currentColor' size={32} strokeWidth={3} />},
    {
        path: '/awards',
        label: 'Awards',
        icon: <AwardIcon aria-hidden='true' color='currentColor' size={32} strokeWidth={3} />,
    },
    {
        path: '/projects',
        label: 'Projects',
        icon: <AppWindowIcon aria-hidden='true' color='currentColor' size={32} strokeWidth={3} />,
    },
    {
        path: '/blog',
        label: 'Blog',
        icon: <PenToolIcon aria-hidden='true' color='currentColor' size={32} strokeWidth={3} />,
    },
    {
        path: '/gallery',
        label: 'Gallery',
        icon: <ImagesIcon aria-hidden='true' color='currentColor' size={32} strokeWidth={3} />,
    },
    {
        path: '/colophon',
        label: 'Colophon',
        icon: <BookOpenIcon aria-hidden='true' color='currentColor' size={32} strokeWidth={3} />,
    },
];

export function MobileHeader() {
    return (
        <header
            className='fixed top-0 z-40 flex w-full items-center justify-between border-b border-warm-border bg-warm-bg px-4 py-3 sm:hidden'>
            <MobileMenu navItems={NAVIGATION_ITEMS} />
            <p className='font-heading text-lg font-semibold text-warm-text'>Masaki Aida</p>
            <ThemeToggle />
        </header>
    );
}
