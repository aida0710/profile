'use client';

import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { t } from '@/libs/i18n/dictionaries';
import { localeFromPath } from '@/libs/i18n/locale';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  // theme は 'system' になり得るため、実際に適用されている resolvedTheme を見る。
  // そうしないとアイコンと実際の表示が食い違う。
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = resolvedTheme === 'light';
  const ThemeIcon = isLight ? BsFillMoonStarsFill : BsFillSunFill;

  const toggleTheme = (): void => {
    setTheme(isLight ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      aria-label={t(locale, isLight ? 'theme.toDark' : 'theme.toLight')}
      className="cursor-pointer rounded-full p-2 text-warm-subtext transition-colors hover:text-warm-text focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none"
      onClick={toggleTheme}
    >
      <ThemeIcon aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
