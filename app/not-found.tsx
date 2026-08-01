import '@/styles/globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import Link from 'next/link';

import { fontHeading, fontMono, fontSans } from '@/config/fonts';
import { t } from '@/libs/i18n/dictionaries';
import { DEFAULT_LOCALE, EN_PREFIX } from '@/libs/i18n/locale';

export const metadata: Metadata = {
  title: '404',
  robots: { index: false, follow: false },
};

const linkClass =
  'rounded-lg border border-warm-border bg-warm-surface px-4 py-2 text-sm text-warm-text transition-colors hover:border-warm-accent hover:text-warm-accent focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none';

/**
 * どのルートグループにも一致しなかった URL 用の 404。
 *
 * ルートレイアウトが (ja) / (en) の 2 つに分かれているため、このファイルは
 * どちらのレイアウトにも包まれず、Next.js が用意する最小限の <html>/<body> に
 * 直接描画される。したがってここで <html>/<body> を書いてはいけない
 * （二重になって無効な HTML になる）。フォント変数と背景色はラッパー div に載せる。
 *
 * また URL からロケールを判定できない位置にあるため、日本語と英語を併記する。
 */
export default function NotFound() {
  return (
    <div
      lang={DEFAULT_LOCALE}
      className={clsx(
        'min-h-screen bg-warm-bg font-sans antialiased',
        fontSans.variable,
        fontHeading.variable,
        fontMono.variable,
      )}
    >
      <main className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center">
        <p className="font-mono text-sm tracking-widest text-warm-subtext">404</p>

        <h1 className="font-heading text-2xl font-semibold text-warm-text md:text-3xl">{t('ja', 'notFound.title')}</h1>
        <p className="max-w-md text-warm-subtext">{t('ja', 'notFound.description')}</p>

        <div lang="en" className="mt-4 border-t border-warm-border pt-4">
          <h2 className="font-heading text-lg font-semibold text-warm-text">{t('en', 'notFound.title')}</h2>
          <p className="mt-1 max-w-md text-warm-subtext">{t('en', 'notFound.description')}</p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Link className={linkClass} href="/">
            {t('ja', 'notFound.backHome')}
          </Link>
          <Link className={linkClass} hrefLang="en" href={EN_PREFIX} lang="en">
            {t('en', 'notFound.backHome')}
          </Link>
        </div>
      </main>
    </div>
  );
}
