import { type Locale, pickLocalized } from '@/libs/i18n/locale';
import type { Project, ProjectCategory } from '@/types';

/** 一覧の 1 枚に必要な値を、表示する言語で取り出したもの。クライアントへ渡すため素の値だけにする。 */
export interface ProjectListItem {
  id: string;
  /** データ上の並び順（01 始まり）。絞り込んでも変わらない。 */
  number: string;
  category: ProjectCategory;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  language: string;
  links: { label: string; url: string }[];
  /** 検索用。タイトル・言語・説明文をつないで小文字にしたもの。 */
  searchText: string;
}

export function toProjectListItem(project: Project, index: number, locale: Locale): ProjectListItem {
  const title = pickLocalized(project.title, locale);
  const paragraphs = pickLocalized(project.description, locale);

  return {
    id: project.id,
    number: String(index + 1).padStart(2, '0'),
    category: project.category,
    title,
    paragraphs,
    imageSrc: `/images/projects/${project.image}`,
    language: project.language,
    links: Object.values(project.links).map((link) => ({
      label: pickLocalized(link.description, locale),
      url: link.url,
    })),
    searchText: [title, project.language, ...paragraphs].join(' ').toLowerCase(),
  };
}
