'use client';

import { Link } from '@heroui/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { AppWindowIcon, AwardIcon, HomeIcon, ImagesIcon, PenToolIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { BsGithub } from 'react-icons/bs';

import { ProjectIcon } from '@/components/icons/ProjectIcon';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import type { NavItem } from '@/types';

const NAVIGATION_ITEMS: NavItem[] = [
  {
    path: '/',
    label: 'Home',
    icon: <HomeIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} />,
  },
  {
    path: '/awards',
    label: 'Awards',
    icon: <AwardIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} />,
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: <AppWindowIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} />,
  },
  {
    path: '/blog',
    label: 'Blog',
    icon: <PenToolIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} />,
  },
  {
    path: '/gallery',
    label: 'Gallery',
    icon: <ImagesIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} />,
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
      position="sticky"
    >
      <NavbarContent>
        <MobileMenu navItems={NAVIGATION_ITEMS} />
        <NavbarBrand>
          <Link color="foreground" href="/">
            <ProjectIcon />
            <p className="ml-5 text-large font-bold text-inherit">Profile</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {NAVIGATION_ITEMS.map((item) => (
          <NavbarItem key={item.path} isActive={isActive(item.path)}>
            <Link color="foreground" href={item.path}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Link
          aria-label="GitHub repository"
          className="block rounded-full p-2"
          href="https://github.com/aida0710/profile"
          target="_blank"
        >
          <BsGithub aria-hidden="true" className="h-6 w-6" />
        </Link>
        <ThemeToggle />
      </NavbarContent>
    </Navbar>
  );
}
