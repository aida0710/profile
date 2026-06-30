import { MediaCard } from '@/components/common/MediaCard';
import { t } from '@/libs/i18n/dictionaries';
import { type Locale, pickLocalized } from '@/libs/i18n/locale';
import type { Award } from '@/types';

interface AwardCardProps {
  award: Award;
  locale: Locale;
}

export function AwardCard({ award, locale }: AwardCardProps) {
  const description = pickLocalized(award.description, locale);
  const organization = pickLocalized(award.organization, locale);

  return (
    <MediaCard
      image={{
        src: `/images/awards/${award.image}`,
        alt: description,
        fit: 'contain',
      }}
      links={[{ label: t(locale, 'common.viewDetails'), url: award.link, kind: 'external' }]}
    >
      <p className="text-xs font-medium text-warm-subtext">{organization}</p>
      <p className="mt-0.5 font-mono text-xs text-warm-subtext">{award.date}</p>
      <h3 className="mt-2 font-heading text-base font-semibold text-warm-text">{description}</h3>
    </MediaCard>
  );
}
