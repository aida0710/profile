import type { Award } from '@/types';

// date は ISO 8601（YYYY-MM-DD）で記述する。
// 表示は libs/i18n/date.ts の formatDate() がロケールに応じて整形するため、
// 表示用の文字列を直接書かないこと。
export const awards: Award[] = [
  {
    organization: {
      ja: '東京大学 産学協創推進本部',
      en: 'The University of Tokyo, Division of University Corporate Relations',
    },
    description: {
      ja: '100program 5期 優秀アプリ賞 受賞',
      en: '100program 5th Cohort — Best App Award',
    },
    image: '100program-5-desktop-mascot-1.png',
    link: 'https://100program.jp/',
    date: '2024-03-24',
  },
  {
    organization: {
      ja: '東京大学 産学協創推進本部',
      en: 'The University of Tokyo, Division of University Corporate Relations',
    },
    description: {
      ja: '100program 5期 MKI賞 受賞',
      en: '100program 5th Cohort — MKI Award',
    },
    image: '100program-5-desktop-mascot-2.png',
    link: 'https://100program.jp/',
    date: '2024-03-24',
  },
  {
    organization: {
      ja: 'Transeeds Inc.',
      en: 'Transeeds Inc.',
    },
    description: {
      ja: 'JAPAN WEB3.0 AWARD αU賞 受賞',
      en: 'JAPAN WEB3.0 AWARD — αU Prize',
    },
    image: 'japan-web3-award.png',
    link: 'https://prtimes.jp/main/html/rd/p/000000024.000056442.html',
    date: '2024-03-19',
  },
  {
    organization: {
      ja: '岐阜協立大学',
      en: 'Gifu Kyoritsu University',
    },
    description: {
      ja: '第6回 高校生ビジネスアイデアコンテスト 奨励賞 受賞',
      en: '6th High School Business Idea Contest — Encouragement Award',
    },
    image: 'gifu-contest.png',
    link: 'https://www.gku.ac.jp/topics/event/post-354.html',
    date: '2024-03-11',
  },
  {
    organization: {
      ja: '東北大学 グリーン未来創造機構',
      en: 'Tohoku University, Organization for Co-Creating a Green Future',
    },
    description: {
      ja: '2023-2024 Academia in Action ファイナリスト',
      en: '2023-2024 Academia in Action — Finalist',
    },
    image: 'academia-in-action.png',
    link: 'https://www.ggi.tohoku.ac.jp/academia-in-action/',
    date: '2024-03-04',
  },
  {
    organization: {
      ja: '総務省 / 株式会社角川アスキー総合研究所',
      en: 'Ministry of Internal Affairs and Communications / Kadokawa ASCII Research Laboratories',
    },
    description: {
      ja: '異能ベーション 2023年度 ジェネレーションアワード部門 ノミネート',
      en: 'INNO-vation 2023 — Generation Award Nominee',
    },
    image: '異能ベーション-ジェネレーションアワード_表彰状.png',
    link: 'https://www.inno.go.jp/result/2023/generation/nominate/',
    date: '2024-03-02',
  },
  {
    organization: {
      ja: '東京大学 産学協創推進本部',
      en: 'The University of Tokyo, Division of University Corporate Relations',
    },
    description: {
      ja: '100program 4期 優秀アプリ賞 受賞',
      en: '100program 4th Cohort — Best App Award',
    },
    image: '100program-4-nebula.png',
    link: 'https://100program.jp/',
    date: '2023-09-22',
  },
];
