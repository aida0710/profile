import { BlockFrame } from '@/components/common/BlockFrame';
import { AwardCard } from '@/components/features/award/AwardCard';
import { awards } from '@/data/awards';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';

interface AwardsPageProps {
  locale: Locale;
}

export function AwardsPage({ locale }: AwardsPageProps) {
  return (
    <div className="px-2 py-10 md:py-16">
      <BlockFrame description={t(locale, 'awards.description')} title={t(locale, 'awards.title')}>
        {awards.map((award) => (
          <AwardCard
            key={`${award.organization.ja}-${award.description.ja}-${award.date}`}
            award={award}
            locale={locale}
          />
        ))}
      </BlockFrame>
    </div>
  );
}
