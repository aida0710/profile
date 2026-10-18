'use client';

import clsx from 'clsx';
import { MoonIcon, SunIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { t } from '@/libs/i18n/dictionaries';
import { LOCALES, type Locale, localeFromPath, withLocale } from '@/libs/i18n/locale';

// ナビの表記は言語に関わらず英語に揃える。Home にはアイコンを添える。
const HOME_PATH = '/';
const NAVIGATION_ITEMS = [
  { path: HOME_PATH, label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/gallery', label: 'Photos' },
] as const;

const THEMES = ['light', 'dark'] as const;
type Theme = (typeof THEMES)[number];

const SEGMENT_CLASS = 'flex rounded-full border border-line p-[2px] font-mono text-xs';
const SEGMENT_ITEM_CLASS = 'cursor-pointer rounded-full px-2.5 py-[3px] transition-colors duration-150';
// 狭い画面ではセグメントを並べる幅が無いので、次の状態へ切り替える 1 個のボタンにする。
const COMPACT_BUTTON_CLASS =
  'flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-md border border-line px-2 font-mono text-xs text-sub hover:bg-bg2 hover:text-ink';

function segmentItemClass(isSelected: boolean): string {
  return clsx(SEGMENT_ITEM_CLASS, isSelected ? 'bg-ink text-bg' : 'text-sub hover:text-ink');
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const otherLocale: Locale = locale === 'ja' ? 'en' : 'ja';

  // resolvedTheme はマウント前に分からないため、それまでは選択中の表示を出さない。
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const currentTheme = isMounted ? (resolvedTheme as Theme | undefined) : undefined;
  const nextTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/85 backdrop-blur-[8px]">
      <div className="site-container flex h-14 items-center gap-6 pr-6 pl-4 max-sm:gap-2 max-sm:px-3">
        <nav className="flex items-center gap-1">
          {NAVIGATION_ITEMS.map((item) => {
            const href = withLocale(item.path, locale);
            const isActive = pathname === href;
            return (
              <Link
                key={item.path}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={clsx(
                  'flex items-center gap-2.5 rounded-md px-2.5 py-1.5 transition-colors duration-150 hover:bg-bg2 hover:text-ink max-sm:px-2',
                  isActive ? 'text-ink' : 'text-sub',
                )}
              >
                {item.path === HOME_PATH && (
                  <Image src="/neko.jpg" alt="" width={24} height={24} className="size-6 rounded-full object-cover" />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <span className="flex-1" />

        <nav aria-label={t(locale, 'language.label')} className={clsx(SEGMENT_CLASS, 'max-sm:hidden')}>
          {LOCALES.map((itemLocale) => (
            <Link
              key={itemLocale}
              href={withLocale(pathname, itemLocale)}
              hrefLang={itemLocale}
              aria-current={itemLocale === locale ? 'true' : undefined}
              className={segmentItemClass(itemLocale === locale)}
            >
              {itemLocale.toUpperCase()}
            </Link>
          ))}
        </nav>
        <Link
          href={withLocale(pathname, otherLocale)}
          hrefLang={otherLocale}
          aria-label={t(locale, 'language.switchTo')}
          className={clsx(COMPACT_BUTTON_CLASS, 'sm:hidden')}
        >
          {otherLocale.toUpperCase()}
        </Link>

        <fieldset className={clsx(SEGMENT_CLASS, 'max-sm:hidden')}>
          <legend className="sr-only">{t(locale, 'theme.label')}</legend>
          {THEMES.map((theme) => (
            <button
              key={theme}
              type="button"
              aria-pressed={currentTheme === theme}
              className={segmentItemClass(currentTheme === theme)}
              onClick={() => setTheme(theme)}
            >
              {t(locale, theme === 'light' ? 'theme.light' : 'theme.dark')}
            </button>
          ))}
        </fieldset>
        <button
          type="button"
          aria-label={t(locale, nextTheme === 'dark' ? 'theme.toDark' : 'theme.toLight')}
          className={clsx(COMPACT_BUTTON_CLASS, 'sm:hidden')}
          onClick={() => setTheme(nextTheme)}
        >
          {nextTheme === 'dark' ? (
            <MoonIcon aria-hidden="true" className="size-3.5" />
          ) : (
            <SunIcon aria-hidden="true" className="size-3.5" />
          )}
        </button>
      </div>
    </header>
  );
}
