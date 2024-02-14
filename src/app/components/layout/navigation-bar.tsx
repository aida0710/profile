'use client';

import {Link} from '@nextui-org/link';
import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@nextui-org/react';
import {usePathname} from 'next/navigation';
import React from 'react';
import {PhoneMenu} from '@/app/components/layout/phone-menu';
import {ThemeButton} from '@/app/components/layout/theme-button';
import {ProjectIcon} from '@/app/components/icons/project-icon';
import {AwardIcon, HomeIcon, PenToolIcon, ProjectorIcon} from 'lucide-react';
import {BsGithub} from 'react-icons/bs';

export interface NavItemProps {
    Link: string;
    Display: string;
    Icon: React.ReactNode;
}

export const NavigationBar = () => {
    const pathname: string = usePathname();

    const MenuItems: NavItemProps[] = [
        {
            Display: 'Home',
            Link: '/',
            Icon: (
                <HomeIcon
                    size={32}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'Awards',
            Link: '/awards',
            Icon: (
                <AwardIcon
                    size={32}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'Projects',
            Link: '/projects',
            Icon: (
                <ProjectorIcon
                    size={32}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'Skills',
            Link: '/skills',
            Icon: (
                <PenToolIcon
                    size={32}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
    ];

    function isActive(link: string): boolean {
        return pathname === link;
    }

    return (
        <Navbar
            isBordered
            classNames={{
                item: [
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
                ],
            }}>
            <NavbarContent>
                <PhoneMenu NavItems={MenuItems} />
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
                {MenuItems.map((item: NavItemProps, index: number) => (
                    <NavbarItem
                        key={index}
                        isActive={isActive(item.Link)}>
                        <Link
                            color='foreground'
                            href={`${item.Link}`}>
                            {item.Display}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='end'>
                <Button
                    className='block p-2'
                    radius='full'
                    isIconOnly
                    variant='ghost'
                    onClick={(): void => {
                        window.open('https://github.com/aida0710/profile');
                    }}>
                    <BsGithub className='h-full w-full' />
                </Button>
                <ThemeButton />
            </NavbarContent>
        </Navbar>
    );
};
