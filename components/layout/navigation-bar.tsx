'use client';

import {usePathname} from 'next/navigation';
import React from 'react';
import {AppWindowIcon, AwardIcon, HomeIcon, ImagesIcon, PenToolIcon} from 'lucide-react';
import {BsGithub} from 'react-icons/bs';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@heroui/navbar';
import {Button} from '@heroui/button';
import {Link} from '@heroui/link';

import {PhoneMenu} from '@/components/layout/phone-menu';
import {ProjectIcon} from '@/components/icons/project-icon';
import {ThemeButton} from '@/components/layout/theme-button';

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
                    color='currentColor'
                    size={32}
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'Awards',
            Link: '/awards',
            Icon: (
                <AwardIcon
                    color='currentColor'
                    size={32}
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'Projects',
            Link: '/projects',
            Icon: (
                <AppWindowIcon
                    color='currentColor'
                    size={32}
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'Skills',
            Link: '/skills',
            Icon: (
                <PenToolIcon
                    color='currentColor'
                    size={32}
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'Gallery',
            Link: '/gallery',
            Icon: (
                <ImagesIcon
                    color='currentColor'
                    size={32}
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
            position='sticky'
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
                            href={item.Link}>
                            {item.Display}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='end'>
                <Button
                    isIconOnly
                    className='block p-2'
                    radius='full'
                    variant='ghost'
                    onPress={(): void => {
                        window.open('https://github.com/aida0710/profile');
                    }}>
                    <BsGithub className='h-full w-full' />
                </Button>
                <ThemeButton />
            </NavbarContent>
        </Navbar>
    );
};
