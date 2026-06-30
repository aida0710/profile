'use client';

import { AppWindowIcon, AwardIcon, BookOpenIcon, HomeIcon, ImagesIcon } from 'lucide-react';

import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { MobileMenu, type MobileMenuItem } from '@/components/layout/MobileMenu';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

const NAVIGATION_ITEMS: MobileMenuItem[] = [
  {
    path: '/',
    labelKey: 'nav.home',
    icon: <HomeIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} />,
  },
  {
    path: '/awards',
    labelKey: 'nav.awards',
    icon: <AwardIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} />,
  },
  {
    path: '/projects',
    labelKey: 'nav.projects',
    icon: <AppWindowIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} />,
  },
  {
    path: '/gallery',
    labelKey: 'nav.gallery',
    icon: <ImagesIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} />,
  },
  {
    path: '/colophon',
    labelKey: 'nav.colophon',
    icon: <BookOpenIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} />,
  },
];

export function MobileHeader() {
  return (
    <header className="fixed top-0 z-40 flex w-full items-center justify-between border-b border-warm-border bg-warm-bg px-4 py-3 sm:hidden">
      <MobileMenu navItems={NAVIGATION_ITEMS} />
      <p className="font-heading text-lg font-semibold text-warm-text">Masaki Aida</p>
      <div className="flex items-center gap-1">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
