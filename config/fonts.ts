import { Geist_Mono as FontMono, Geist as FontSans, Noto_Sans_JP as FontSansJp } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

// 和文グリフは unicode-range で必要な分だけ配信されるため、先読みはしない。
export const fontSansJp = FontSansJp({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans-jp',
  preload: false,
});

export const fontVariables = [fontSans.variable, fontMono.variable, fontSansJp.variable];
