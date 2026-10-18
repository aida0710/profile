import type { ProjectCategory } from '@/data/projectCategories';
import type { Localized } from '@/libs/i18n/locale';

export type { ProjectCategory };

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
  /** Projects ページのアンカー（/projects#<id>）に使う識別子。公開後は変更しない。 */
  id: string;
  category: ProjectCategory;
  /** トップの Projects 欄に載せる注力作。 */
  featured?: boolean;
  title: Localized<string>;
  description: Localized<string[]>;
  image: string;
  links: {
    [key: string]: ProjectLink;
  };
  language: string;
}

// Public Keys 関連の型
export interface PublicKey {
  /**
   * ダウンロード URL（/keys/<id>）とファイル名（<id>.pub）に使う識別子。
   * 変更すると公開済みの URL が変わるため、一度公開したら変えないこと。
   */
  id: string;
  label: string;
  key: string;
}
