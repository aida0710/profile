import type { CSSProperties, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  /** 出現をずらすための遅延（ミリ秒）。リスト表示でインデックスに応じて指定する。 */
  delay?: number;
  className?: string;
}

/**
 * 出現アニメーション用のラッパー。
 *
 * アニメーションは CSS のみで完結させている（styles/globals.css の .animate-fade-in-up）。
 * 以前は useEffect でクラスを差し替えていたため、JS が無効・読み込み失敗の環境では
 * opacity: 0 のままコンテンツが永久に表示されなかった。
 * CSS アニメーションはスクリプト無しでも実行されるため、その問題が起きない。
 */
export function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  const style: CSSProperties | undefined = delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div className={`animate-fade-in-up ${className}`} style={style}>
      {children}
    </div>
  );
}
