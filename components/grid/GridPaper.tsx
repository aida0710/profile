import type { CSSProperties } from 'react';

interface GridPaperProps {
  /** 方眼が現れ始める横位置（%）。左側の文字に方眼が重ならないよう、文字の多いヒーローほど右へ寄せる。 */
  fadeStartPercent: number;
}

/** ヒーローの背景に敷く方眼。親は position: relative にしておく。 */
export function GridPaper({ fadeStartPercent }: GridPaperProps) {
  return (
    <div
      aria-hidden="true"
      className="grid-paper"
      style={{ '--grid-fade-start': `${fadeStartPercent}%` } as CSSProperties}
    />
  );
}
