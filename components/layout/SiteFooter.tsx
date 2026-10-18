import { ColophonSection } from '@/components/features/colophon/ColophonSection';
import { PublicKeysSection } from '@/components/features/publicKeys/PublicKeysSection';
import type { Locale } from '@/libs/i18n/locale';

interface SiteFooterProps {
  locale: Locale;
}

/** 全ページ共通の末尾。斜線帯の下に公開鍵とこのサイトについてを縦に積む。 */
export function SiteFooter({ locale }: SiteFooterProps) {
  return (
    <>
      <div aria-hidden="true" className="hatch-band" />
      <PublicKeysSection locale={locale} />
      <ColophonSection locale={locale} />
      <footer className="flex justify-between gap-4 px-6 pt-6 pb-10 text-[13px] text-faint">
        <span>© Masaki Aida</span>
        <span className="font-mono text-xs">aida0710.work</span>
      </footer>
    </>
  );
}
