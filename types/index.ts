import type { ReactNode } from 'react';

import type { Localized } from '@/libs/i18n/locale';

// Awards 関連の型
export interface Award {
  organization: Localized<string>;
  description: Localized<string>;
  image: string;
  link: string;
  date: string;
}

// Gallery 関連の型
export interface GalleryImage {
  src: string;
  description: Localized<string>;
  date: string;
  detail: Localized<string>;
}

// Projects 関連の型
export interface ProjectLink {
  description: Localized<string>;
  url: string;
}

export interface Project {
  title: Localized<string>;
  description: Localized<string[]>;
  image: string;
  links: {
    [key: string]: ProjectLink;
  };
  language: string;
}

// Qiita 記事関連の型
export interface QiitaArticle {
  id: string;
  title: string;
  url: string;
  createdAt: string;
  likesCount: number;
  tags: string[];
}

// Public Keys 関連の型
export interface PublicKey {
  label: string;
  key: string;
}

// 共通コンポーネントの型
export interface BlockFrameProps {
  title: string;
  description: string;
  children: ReactNode;
  /** 指定するとグリッドの代わりにこれを描画する（空状態・エラー表示など）。 */
  fallback?: ReactNode;
}

export interface TextBlockProps {
  messages: string[];
}

export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}
