'use client';

import { Image } from '@heroui/image';
import { Link } from '@heroui/link';
import { AppWindowIcon, AwardIcon, BookOpenIcon, HomeIcon, ImagesIcon, PenToolIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { BsGithub } from 'react-icons/bs';

import { ThemeToggle } from '@/components/layout/ThemeToggle';
import type { NavItem } from '@/types';

const NAVIGATION_ITEMS: NavItem[] = [
  { path: '/', label: 'Home', icon: <HomeIcon aria-hidden="true" size={20} /> },
  { path: '/awards', label: 'Awards', icon: <AwardIcon aria-hidden="true" size={20} /> },
  { path: '/projects', label: 'Projects', icon: <AppWindowIcon aria-hidden="true" size={20} /> },
  { path: '/blog', label: 'Blog', icon: <PenToolIcon aria-hidden="true" size={20} /> },
  { path: '/gallery', label: 'Gallery', icon: <ImagesIcon aria-hidden="true" size={20} /> },
  { path: '/colophon', label: 'Colophon', icon: <BookOpenIcon aria-hidden="true" size={20} /> },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col border-r border-warm-border bg-warm-bg sm:flex">
      {/* Profile section */}
      <div className="flex flex-col items-center px-6 pb-6 pt-8">
        <Image isBlurred alt="Masaki Aida のプロフィール写真" className="h-20 w-20" radius="full" src="/neko.jpg" />
        <p className="mt-3 font-heading text-lg font-semibold text-warm-text">Masaki Aida</p>
        <p className="text-sm text-warm-subtext">Engineer</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="flex flex-col gap-1">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`group flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-[background-color,color] duration-200 focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none ${
                  isActive(item.path)
                    ? 'bg-warm-accent/10 text-warm-accent'
                    : 'text-warm-subtext hover:bg-warm-surface hover:text-warm-text'
                }`}
              >
                <span
                  className={isActive(item.path) ? 'text-warm-accent' : 'text-warm-subtext group-hover:text-warm-text'}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="flex items-center justify-between border-t border-warm-border px-6 py-4">
        <Link
          aria-label="GitHub repository"
          className="rounded-full p-2 text-warm-subtext transition-colors hover:text-warm-text"
          href="https://github.com/aida0710/profile"
          target="_blank"
        >
          <BsGithub aria-hidden="true" className="h-5 w-5" />
        </Link>
        <ThemeToggle />
      </div>
    </aside>
  );
}
