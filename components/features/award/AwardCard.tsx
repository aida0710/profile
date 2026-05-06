import { MediaCard } from '@/components/common/MediaCard';
import type { Award } from '@/types';

interface AwardCardProps {
  award: Award;
}

export function AwardCard({ award }: AwardCardProps) {
  return (
    <MediaCard
      image={{
        src: `/images/awards/${award.image}`,
        alt: award.description,
        fit: 'contain',
      }}
      links={[{ label: '詳細を見る', url: award.link, kind: 'external' }]}
    >
      <p className="text-xs font-medium text-warm-subtext">{award.organization}</p>
      <p className="mt-0.5 font-mono text-xs text-warm-subtext">{award.date}</p>
      <h3 className="mt-2 font-heading text-base font-semibold text-warm-text">{award.description}</h3>
    </MediaCard>
  );
}
