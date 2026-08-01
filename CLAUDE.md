# Aida Profile - プロジェクトアーキテクチャガイド

## 1. プロジェクト概要

**プロジェクト名:** Aida Profile (v3.1.0)
**説明:** Masaki Aida(@aida_0710)の個人プロフィールサイト
**URL:** https://www.aida0710.work
**フレームワーク:** Next.js 16.2.3 (App Router / Turbopack)
**言語:** TypeScript 5.9.3
**スタイリング:** Tailwind CSS 4.1.18 + HeroUI Components
**多言語:** 日本語（デフォルト）/ 英語（`/en` 配下）

---

## 2. ディレクトリ構成

```
/Users/aida/projects/profile/
├── app/
│   ├── (ja)/                    # 日本語版ルートグループ（URL に影響しない）
│   │   ├── layout.tsx           # ルートレイアウト <html lang="ja">
│   │   ├── page.tsx             # /
│   │   ├── error.tsx            # 日本語版エラー境界
│   │   ├── not-found.tsx        # (ja) 配下の notFound() 用
│   │   ├── awards/page.tsx      # /awards
│   │   ├── projects/page.tsx    # /projects
│   │   ├── articles/page.tsx    # /articles
│   │   ├── gallery/page.tsx     # /gallery
│   │   ├── public-keys/page.tsx # /public-keys
│   │   └── colophon/page.tsx    # /colophon
│   ├── (en)/                    # 英語版ルートグループ
│   │   ├── layout.tsx           # ルートレイアウト <html lang="en">
│   │   └── en/                  # URL の /en はこのディレクトリが担う
│   │       ├── page.tsx         # /en
│   │       ├── error.tsx
│   │       ├── not-found.tsx
│   │       └── ...              # (ja) と同じ構成
│   ├── not-found.tsx            # どのグループにも一致しない URL 用（日英併記）
│   ├── keys/route.ts            # /keys — SSH 公開鍵を text/plain で返す
│   ├── providers.tsx            # HeroUI + next-themes プロバイダー
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── common/
│   │   ├── AnimatedSection.tsx  # CSS のみの出現アニメーション（サーバーコンポーネント）
│   │   ├── BlockFrame.tsx       # 見出し + グリッド。fallback で空状態も表示できる
│   │   ├── MediaCard.tsx        # 画像 + リンクボタン付きカード
│   │   └── TextBlock.tsx
│   ├── layout/
│   │   ├── RootShell.tsx        # (ja)/(en) 両レイアウトが共有する <html>/<body>
│   │   ├── Sidebar.tsx          # デスクトップ用サイドバー
│   │   ├── MobileHeader.tsx     # モバイル用ヘッダー
│   │   ├── MobileMenu.tsx       # モバイル用フルスクリーンメニュー
│   │   ├── LanguageSwitcher.tsx # ja <-> en 切り替え
│   │   └── ThemeToggle.tsx      # ダーク/ライト切り替え
│   ├── features/
│   │   ├── articles/ArticleCard.tsx
│   │   ├── award/AwardCard.tsx
│   │   ├── gallery/{ImageGallery,ImageCard,ImageModal}.tsx
│   │   ├── home/SocialIcons.tsx
│   │   ├── projects/ProjectCard.tsx
│   │   └── publicKeys/PublicKeyCard.tsx
│   └── pages/                   # 各ページの中身（locale を props で受け取る）
│       ├── HomePage.tsx  AwardsPage.tsx  ProjectsPage.tsx  ArticlesPage.tsx
│       ├── GalleryPage.tsx  PublicKeysPage.tsx  ColophonPage.tsx
│       └── NotFoundPage.tsx  ErrorPage.tsx
│
├── config/
│   ├── site.ts                  # サイト設定（description は Localized）
│   └── fonts.ts                 # Source Sans 3 / Outfit / JetBrains Mono
│
├── data/                        # 静的データ
│   ├── projects.ts  awards.ts  gallery.ts  profile.ts  publicKeys.ts
│
├── libs/
│   ├── fetch/
│   │   ├── getLastCommitTime.ts # GitHub API（revalidate 1h）
│   │   └── getQiitaArticles.ts  # Qiita API（revalidate 1d）
│   └── i18n/
│       ├── locale.ts            # Locale 型・パス操作・pickLocalized
│       ├── dictionaries.ts      # UI 文言（ja が正、en は Partial）
│       ├── date.ts              # 日付整形・並び替え（JST 固定）
│       └── metadata.ts          # buildRootMetadata / buildPageMetadata
│
├── types/index.ts               # 全型定義
├── styles/globals.css           # Tailwind v4 + CSS 変数 + fade-in-up
├── public/images/{projects,awards,gallery}/
│
├── next.config.js               # turbopack.root / セキュリティヘッダ
├── tailwind.config.cjs
├── postcss.config.cjs
├── biome.json
└── tsconfig.json
```

**注意:** `app/layout.tsx` と `proxy.ts`（ミドルウェア）は存在しません。理由は §3.2 を参照。

---

## 3. アーキテクチャ

### 3.1 多言語対応（i18n）

URL 構造で言語を表す独自実装です（`next-intl` 等のライブラリは使っていません）。

- 日本語: `/`, `/projects`, `/awards` …（プレフィックスなし）
- 英語: `/en`, `/en/projects`, `/en/awards` …

**データの多言語化** — `Localized<T>` 型を使います。`en` は省略可能で、無い場合は `ja` にフォールバックします。

```typescript
// libs/i18n/locale.ts
export type Localized<T> = { ja: T; en?: T };

export function pickLocalized<T>(value: Localized<T>, locale: Locale): T {
  if (locale === 'en' && value.en !== undefined) return value.en;
  return value.ja;
}
```

**UI 文言** — `libs/i18n/dictionaries.ts` のフラットなキーで管理します。

```typescript
t('ja', 'projects.title')   // => 'Projects'
t('en', 'articles.empty')   // => 'No articles yet.'
// en に無いキーは自動的に ja へフォールバック
```

**locale の受け渡し** — 各 `page.tsx` がリテラルで `locale` を渡し、components/pages 以下がそれを props で受け取ります。実行時にパスから判定するのはクライアントコンポーネントだけです（`localeFromPath(usePathname())`）。

### 3.2 全ページ静的生成（重要）

**全ルートが静的プリレンダリングされます。** ビルド出力はすべて `○ (Static)` になります。

これを維持するために、**ルートレイアウトで `headers()` / `cookies()` を呼んではいけません。** 以前は `getServerLocale()` が `headers()` から `x-pathname` を読んで `<html lang>` を決めていたため、全ページが `ƒ (Dynamic)` に落ちていました。

現在は `app/(ja)` / `app/(en)` の 2 つのルートグループがそれぞれ独自のルートレイアウトを持ち、`lang` をリテラルで指定しています。

```
app/(ja)/layout.tsx  ->  <RootShell locale="ja">   ->  <html lang="ja">
app/(en)/layout.tsx  ->  <RootShell locale="en">   ->  <html lang="en">
```

ルートグループ名（括弧付き）は URL に含まれないため、日本語版のパスは `/` のままです。

**ルートレイアウトが複数ある場合の制約:**

- `app/layout.tsx` は存在してはいけません（存在するとそちらが唯一のルートになります）
- `app/not-found.tsx`（グローバル）はどちらのレイアウトにも包まれません。Next.js が最小限の `<html>/<body>` を用意するため、**このファイル内で `<html>` や `<body>` を書くと二重になり無効な HTML になります**
- `error.tsx` も各グループ内に置く必要があります

### 3.3 サーバーコンポーネント vs クライアントコンポーネント

**サーバーコンポーネント（デフォルト）:** ほぼ全てのページとカード類。データ取得（`ArticlesPage`, `ColophonPage`）もサーバー側で行います。

**クライアントコンポーネント（`'use client'`）:** ユーザー操作や状態が必要なものだけです。

- `Sidebar` / `MobileHeader` / `MobileMenu` / `LanguageSwitcher` / `ThemeToggle`（`usePathname` / `useTheme`）
- `ImageGallery` / `ImageModal`（モーダルの開閉状態）
- `PublicKeyCard`（クリップボードコピー）
- `ErrorPage`（error 境界の要件）
- `providers.tsx`

`AnimatedSection` と `BlockFrame` はサーバーコンポーネントです。アニメーションを CSS のみにしたため `'use client'` が不要になりました。

### 3.4 データ取得

外部 API は必ず `next: { revalidate }` を指定します。指定しないと Next.js 15 以降はキャッシュされず、毎リクエストで外部 API を叩いてしまいます。

```typescript
// libs/fetch/getQiitaArticles.ts
const response = await fetch(QIITA_API, { next: { revalidate: 86400 } });
```

**失敗と「0 件」は必ず区別します。** 空配列で潰すと、利用側が「取得に失敗した」のか「本当に無い」のか判断できません。

```typescript
export type QiitaArticlesResult = { ok: true; articles: QiitaArticle[] } | { ok: false };
```

**エラーメッセージを文字列で返してはいけません。** ロケールに関係なく同じ言語が表示されてしまいます。成否だけを返し、文言は呼び出し側が辞書から引きます。

---

## 4. 日付の扱い（重要）

**データ上の日付は必ず ISO 8601（`YYYY-MM-DD`）で書きます。** 表示用の文字列（`2026年6月25日` など）を直接書くと、`new Date()` が `Invalid Date` になり並び替えが無言で壊れます。

```typescript
// ❌ 並び替えが機能しない
date: '2026年6月25日'

// ✅
date: '2026-06-25'
```

表示と並び替えは `libs/i18n/date.ts` を使います。

```typescript
formatDate('2026-06-25', 'ja')            // => 2026年6月25日
formatDate('2026-06-25', 'en')            // => June 25, 2026
formatDate(iso, locale, 'numeric')        // => 2026/06/25
formatDateTime(iso, locale)               // => 2026/07/17(金) 14:35:17
sortByDateDesc(items, (i) => i.date)      // 新しい順（元配列は変更しない）
```

**タイムゾーンは `Asia/Tokyo` に固定されています。** Vercel のサーバーは UTC で動くため、指定しないと JST 00:00〜09:00 の日時が前日として描画されます。`toLocaleDateString` を直接呼ばず、必ず上記の関数を使ってください。

---

## 5. アニメーション

`AnimatedSection` は `styles/globals.css` の `.animate-fade-in-up`（CSS `@keyframes`）で実装しています。

**JS でクラスを差し替える実装にしてはいけません。** 以前は `useEffect` で `opacity-0` → `opacity-100` に切り替えていたため、JS が無効・読み込み失敗の環境ではコンテンツが永久に表示されませんでした。CSS アニメーションはスクリプト無しでも実行されるため、この問題が起きません。

同じ理由で、**初期状態でコンテンツを隠すクライアント側ガード（`isMounted` チェック等）を SSR で描画すべき要素に使ってはいけません。** ギャラリーは以前 `!isMounted` の間スケルトンだけを返しており、HTML に写真が 1 枚も含まれていませんでした。

---

## 6. データ定義

### Project（data/projects.ts）
```typescript
{
  title: { ja: 'mado', en: 'mado' },
  description: { ja: ['段落1', '段落2'], en: ['...'] },   // en は省略可
  image: 'mado.png',                                      // public/images/projects/ 配下
  links: { github: { description: { ja: '...', en: '...' }, url: '...' } },
  language: 'TypeScript',
}
```
`image` に指定したファイルは必ず `public/images/projects/` に配置してください。無いと画像が壊れます。

### Award（data/awards.ts）/ GalleryImage（data/gallery.ts）
`date` は ISO 8601。並び替えは各ページで `sortByDateDesc` が行うため、配列の順序は問いません。

### PublicKey（data/publicKeys.ts）
公開鍵は秘密情報ではないためコミットして問題ありません。配列に追加すれば UI と `/keys` の両方が自動で追従します。

---

## 7. 開発コマンド

```bash
npm run dev      # 開発サーバー（Turbopack）
npm run build    # 本番ビルド（型チェックも実行される）
npm run start    # 本番サーバー
npm run lint     # Biome チェック + 自動修正
npm run format   # Biome 整形のみ
```

**`biome.json` の `$schema` は CLI のバージョンと一致させてください。** ずれると `biome check` がエラー終了します。更新は `npx biome migrate` で行えます。

---

## 8. 新しいページを追加する手順

1. `libs/i18n/dictionaries.ts` の `ja` と `en` の両方に文言を追加（`<page>.title`, `<page>.meta.title`, `<page>.meta.description` など）
2. `libs/i18n/metadata.ts` の `PageKey` にキーを追加
3. `components/pages/XxxPage.tsx` を作成（`locale: Locale` を props で受け取る）
4. `app/(ja)/xxx/page.tsx` と `app/(en)/en/xxx/page.tsx` を作成

```typescript
// app/(ja)/xxx/page.tsx
export const metadata: Metadata = buildPageMetadata({ locale: 'ja', page: 'xxx', path: '/xxx' });

export default function Page() {
  return <XxxPage locale="ja" />;
}
```

5. `components/layout/Sidebar.tsx` と `MobileHeader.tsx` の `NAVIGATION_ITEMS` に追加
6. `app/sitemap.ts` の `routes` と `lastModified` に追加

---

## 9. スタイリング

配色は `styles/globals.css` の CSS 変数（`--color-warm-*`）で定義し、`tailwind.config.cjs` が `warm-bg` / `warm-text` などのユーティリティに対応付けています。ダークモードは `.dark` クラス（next-themes）で変数を差し替えるため、**`dark:` プレフィックスは基本的に不要です。**

```tsx
<div className="bg-warm-surface text-warm-text border-warm-border">
```

Tailwind CSS v4 では `@import "tailwindcss";` 1 行に加え、`@config` / `@plugin` / `@source` ディレクティブで設定と HeroUI を読み込んでいます。

---

## 10. 注意事項・既知の落とし穴

- **`headers()` をルートレイアウトで使わない** — 全ページが動的レンダリングに落ちます（§3.2）
- **日付は ISO 8601 で書く** — 表示用文字列は並び替えを壊します（§4）
- **`app/not-found.tsx` に `<html>`/`<body>` を書かない** — 二重になります（§3.2）
- **`fetch` には `next: { revalidate }` を付ける** — 付けないとキャッシュされません（§3.3）
- **`useTheme()` は `theme` ではなく `resolvedTheme` を見る** — `theme` は `'system'` になり得ます
- **外部リンクの `target="_blank"` には `rel="noopener noreferrer"` を付ける**
- **`role="button"` の要素に他のインタラクティブ要素を入れない** — 不正な ARIA になります
- **framer-motion 12 の `ease` は cubic-bezier 配列 + `as const`** — 文字列（`'easeOut'`）は型エラーになります
  - `'easeOut'` → `[0, 0, 0.2, 1] as const` / `'easeIn'` → `[0.4, 0, 1, 1] as const`

---

## 11. 参考リソース

- [Next.js 公式ドキュメント](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [HeroUI](https://www.heroui.com)
- [Biome](https://biomejs.dev)

---

**最終更新:** 2026年8月1日
**バージョン:** 3.1.0
