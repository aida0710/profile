export const LOCALES = ['ja', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ja';
export const EN_PREFIX = '/en';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localeFromPath(pathname: string): Locale {
  if (pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`)) return 'en';
  return 'ja';
}

export function stripLocaleFromPath(pathname: string): string {
  if (pathname === EN_PREFIX) return '/';
  if (pathname.startsWith(`${EN_PREFIX}/`)) return pathname.slice(EN_PREFIX.length);
  return pathname;
}

export function withLocale(path: string, locale: Locale): string {
  const base = stripLocaleFromPath(path);
  if (locale === 'ja') return base;
  if (base === '/') return EN_PREFIX;
  return `${EN_PREFIX}${base}`;
}

export type Localized<T> = { ja: T; en?: T };

export function pickLocalized<T>(value: Localized<T>, locale: Locale): T {
  if (locale === 'en' && value.en !== undefined) return value.en;
  return value.ja;
}
