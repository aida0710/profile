import { GridPaper } from '@/components/grid/GridPaper';
import { GridSection } from '@/components/grid/GridSection';

// 見出しが短いので、方眼はトップより右寄りから出す。
const PAGE_HERO_FADE_START_PERCENT = 40;

interface PageHeroProps {
  title: string;
  description: string;
}

/** Projects / Photos の先頭に置く、方眼付きの見出し区画。 */
export function PageHero({ title, description }: PageHeroProps) {
  return (
    <GridSection>
      <GridPaper fadeStartPercent={PAGE_HERO_FADE_START_PERCENT} />
      <div className="relative px-10 pt-14 pb-12 max-sm:px-5">
        <h1 className="m-0 text-[32px] leading-[1.2] font-semibold tracking-[-0.03em]">{title}</h1>
        <p className="mt-2 mb-0 text-[15px] text-sub">{description}</p>
      </div>
    </GridSection>
  );
}
