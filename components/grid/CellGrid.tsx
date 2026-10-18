import type { CSSProperties, ReactNode } from 'react';

interface CellGridProps {
  /** 1 列の最小幅（px）。これを下回ると列数が減る。 */
  minColumnWidth: number;
  /**
   * fit: 項目が少ないときは列を伸ばして全幅を埋める。
   * fill: 列幅を保ち、余った列は空けておく（件数が変わる一覧向け）。
   */
  columnMode: 'fit' | 'fill';
  children: ReactNode;
}

/** 隙間なしで並べ、各セルの右・下罫線で区切るグリッド（styles/globals.css の .cell-grid）。 */
export function CellGrid({ minColumnWidth, columnMode, children }: CellGridProps) {
  const style = {
    '--cell-min': `${minColumnWidth}px`,
    '--cell-repeat': columnMode === 'fit' ? 'auto-fit' : 'auto-fill',
  } as CSSProperties;

  return (
    <div className="overflow-hidden">
      <div className="cell-grid" style={style}>
        {children}
      </div>
    </div>
  );
}
