import type { Locale } from '@/libs/i18n/locale';

const DATE_LOCALE: Record<Locale, string> = { ja: 'ja-JP', en: 'en-US' };

// データ上の日付は「日本時間のその日」を意味する。
// Vercel のサーバーは UTC で動くため timeZone を固定しないと、
// JST 00:00〜09:00 の日時が前日として描画されてしまう。
const TIME_ZONE = 'Asia/Tokyo';

const STYLE_OPTIONS = {
  // 2026年6月25日 / June 25, 2026
  long: { year: 'numeric', month: 'long', day: 'numeric' },
  // 2026/06/25 / 06/25/2026
  numeric: { year: 'numeric', month: '2-digit', day: '2-digit' },
} satisfies Record<string, Intl.DateTimeFormatOptions>;

export type DateStyle = keyof typeof STYLE_OPTIONS;

/**
 * ISO 8601 の日付文字列（'2026-06-25' や '2026-06-25T08:00:00+09:00'）を
 * ロケールに応じた表示用文字列へ変換する。
 * パースできない値は UI を壊さないようそのまま返す。
 */
export function formatDate(isoDate: string, locale: Locale, style: DateStyle = 'long'): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;

  return date.toLocaleDateString(DATE_LOCALE[locale], {
    ...STYLE_OPTIONS[style],
    timeZone: TIME_ZONE,
  });
}

/**
 * ISO 8601 の日時文字列を「YYYY/MM/DD HH:MM:SS (曜)」形式（日本時間）に変換する。
 */
export function formatDateTime(isoDate: string, locale: Locale): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;

  return date.toLocaleString(DATE_LOCALE[locale], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'short',
    timeZone: TIME_ZONE,
  });
}

/**
 * ISO 日付文字列を持つ配列を新しい順に並べ替えた新配列を返す。
 * 元配列は変更しない。
 */
export function sortByDateDesc<T>(items: readonly T[], getDate: (item: T) => string): T[] {
  return [...items].sort((a, b) => new Date(getDate(b)).getTime() - new Date(getDate(a)).getTime());
}
