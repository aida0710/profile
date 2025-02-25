'use client';

import {usePathname} from 'next/navigation';
import React from 'react';
import {AppWindowIcon, AwardIcon, HomeIcon, ImagesIcon, PenToolIcon} from 'lucide-react';
import {BsGithub} from 'react-icons/bs';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@heroui/navbar';
import {Button} from '@heroui/button';
import {Link} from '@heroui/link';

import {NavItem} from '@/types';
import {ProjectIcon} from '@/components/icons/project-icon';
import {MobileMenu} from '@/components/layout/MobileMenu';
import {ThemeToggle} from '@/components/layout/ThemeToggle';

const NAVIGATION_ITEMS: NavItem[] = [
    {
        path: '/',
        label: 'Home',
        icon: (
            <HomeIcon
                color='currentColor'
                size={32}
                strokeWidth={3}
            />
        ),
    },
    {
        path: '/awards',
        label: 'Awards',
        icon: (
            <AwardIcon
                color='currentColor'
                size={32}
                strokeWidth={3}
            />
        ),
    },
    {
        path: '/projects',
        label: 'Projects',
        icon: (
            <AppWindowIcon
                color='currentColor'
                size={32}
                strokeWidth={3}
            />
        ),
    },
    {
        path: '/skills',
        label: 'Skills',
        icon: (
            <PenToolIcon
                color='currentColor'
                size={32}
                strokeWidth={3}
            />
        ),
    },
    {
        path: '/gallery',
        label: 'Gallery',
        icon: (
            <ImagesIcon
                color='currentColor'
                size={32}
                strokeWidth={3}
            />
        ),
    },
];

const NAVBAR_ITEM_CLASSES = [
    'flex',
    'relative',
    'h-full',
    'items-center',
    "data-[active=true]:after:content-['']",
    'data-[active=true]:after:absolute',
    'data-[active=true]:after:bottom-0',
    'data-[active=true]:after:left-0',
    'data-[active=true]:after:right-0',
    'data-[active=true]:after:h-[2px]',
    'data-[active=true]:after:rounded-[2px]',
    'data-[active=true]:after:bg-primary',
];

export function NavigationBar() {
    const pathname = usePathname();

    const isActive = (path: string): boolean => pathname === path;

    return (
        <Navbar
            isBordered
            classNames={{
                item: NAVBAR_ITEM_CLASSES,
            }}
            position='sticky'>
            <NavbarContent>
                <MobileMenu navItems={NAVIGATION_ITEMS} />
                <NavbarBrand>
                    <Link
                        color='foreground'
                        href='/'>
                        <ProjectIcon />
                        <p className='ml-5 text-large font-bold text-inherit'>Profile</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className='hidden gap-4 sm:flex'
                justify='center'>
                {NAVIGATION_ITEMS.map((item, index) => (
                    <NavbarItem
                        key={index}
                        isActive={isActive(item.path)}>
                        <Link
                            color='foreground'
                            href={item.path}>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify='end'>
                <Button
                    isIconOnly
                    aria-label='GitHub repository'
                    className='block p-2'
                    radius='full'
                    variant='ghost'
                    onPress={() => window.open('https://github.com/aida0710/profile')}>
                    <BsGithub className='h-full w-full' />
                </Button>
                <ThemeToggle />
            </NavbarContent>
        </Navbar>
    );
}
