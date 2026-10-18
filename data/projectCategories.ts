// Projects の種別フィルタに出す区分と、その並び順。
// 一覧の絞り込み（クライアント）からも読むため、プロジェクト本体のデータとは別のファイルに置く。
export const PROJECT_CATEGORIES = ['Network', 'Tool', 'Infra', 'Game', 'Art', 'Web', 'App', 'Language'] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
