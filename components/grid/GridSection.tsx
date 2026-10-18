import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

/** 下罫線と、左下・右下の＋マークを持つセクション。格子の 1 区画になる。 */
export function GridSection({ children, className, ...sectionProps }: ComponentPropsWithoutRef<'section'>) {
  return (
    <section className={clsx('relative border-b border-line', className)} {...sectionProps}>
      {children}
      <span aria-hidden="true" className="grid-corner -left-[6px]" />
      <span aria-hidden="true" className="grid-corner -right-[6px]" />
    </section>
  );
}
