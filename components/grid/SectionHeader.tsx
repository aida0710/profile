import type { ReactNode } from 'react';

interface SectionHeaderProps {
  id?: string;
  title: string;
  /** 見出しの右に置く補足（リンクやパスなど）。 */
  aside?: ReactNode;
}

/** セクション先頭の見出し行。下罫線で中身と区切る。 */
export function SectionHeader({ id, title, aside }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line px-8 py-5 max-sm:px-5">
      <h2 id={id} className="m-0 text-base font-semibold tracking-[-0.01em]">
        {title}
      </h2>
      {aside}
    </div>
  );
}
