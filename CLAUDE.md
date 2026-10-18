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
│   │   ├── page.tsx             # /（プロフィール + 受賞履歴）
│   │   ├── error.tsx            # 日本語版エラー境界
│   │   ├── not-found.tsx        # (ja) 配下の notFound() 用
│   │   ├── projects/page.tsx    # /projects
│   │   └── gallery/page.tsx     # /gallery（画面上の名前は Photos）
│   ├── (en)/                    # 英語版ルートグループ
│   │   ├── layout.tsx           # ルートレイアウト <html lang="en">
│   │   └── en/                  # URL の /en はこのディレクトリが担う（(ja) と同じ構成）
│   ├── not-found.tsx            # どのグループにも一致しない URL 用（日英併記）
│   ├── keys/
│   │   ├── route.ts             # /keys — 全公開鍵を text/plain で返す（curl で使われるので残す）
│   │   └── [id]/route.ts        # /keys/<id> — 1件を .pub ファイルとしてダウンロード
│   ├── providers.tsx            # HeroUI + next-themes プロバイダー（既定はダーク）
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── grid/                    # 格子デザインの部品（サーバーコンポーネント）
│   │   ├── GridSection.tsx      # 下罫線 + 左右下の＋マークを持つ区画
│   │   ├── GridPaper.tsx        # ヒーローの方眼背景
│   │   ├── CellGrid.tsx         # 隙間なし・罫線区切りのセル型グリッド
│   │   ├── SectionHeader.tsx    # 区画先頭の見出し行
│   │   └── PageHero.tsx         # Projects / Photos の見出し区画
│   ├── common/CopyButton.tsx    # クリップボードコピー（1.6 秒「コピーしました」）
│   ├── layout/
│   │   ├── RootShell.tsx        # (ja)/(en) 両レイアウトが共有する <html>/<body>
│   │   ├── SiteHeader.tsx       # 上部ヘッダー（ナビ・言語・配色）
│   │   └── SiteFooter.tsx       # 全ページ共通の末尾（公開鍵 + このサイトについて）
│   ├── features/
│   │   ├── awards/AwardsAccordion.tsx      # トップの開閉式受賞履歴（<details>）
│   │   ├── colophon/ColophonSection.tsx    # 最終更新・ソース・書体
│   │   ├── gallery/{PhotoGrid,PhotoLightbox}.tsx
│   │   ├── projects/{ProjectsBrowser,ProjectListCard,projectListItem}.tsx
│   │   └── publicKeys/PublicKeysSection.tsx
│   └── pages/                   # 各ページの中身（locale を props で受け取る）
│       ├── HomePage.tsx  ProjectsPage.tsx  GalleryPage.tsx
│       └── NotFoundPage.tsx  ErrorPage.tsx
│
├── config/
│   ├── site.ts                  # サイト設定（description は Localized）
│   └── fonts.ts                 # Geist / Geist Mono / Noto Sans JP
│
├── data/                        # 静的データ
│   ├── projects.ts  projectCategories.ts  awards.ts  gallery.ts  profile.ts  publicKeys.ts
│
├── libs/
│   ├── fetch/
│   │   └── getLastCommitTime.ts # GitHub API（revalidate 1h）
│   └── i18n/
│       ├── locale.ts            # Locale 型・パス操作・pickLocalized
│       ├── dictionaries.ts      # UI 文言（ja が正、en は Partial）
│       ├── date.ts              # 日付整形・並び替え（JST 固定）
│       └── metadata.ts          # buildRootMetadata / buildPageMetadata
│
├── types/index.ts               # 全型定義
├── styles/globals.css           # Tailwind v4 + 配色トークン + 格子の CSS
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

**サーバーコンポーネント（デフォルト）:** ほぼ全てのページとカード類。データ取得（`ColophonSection` の最終更新）もサーバー側で行います。

**クライアントコンポーネント（`'use client'`）:** ユーザー操作や状態が必要なものだけです。

- `SiteHeader`（`usePathname` / `useTheme`）
- `ProjectsBrowser`（検索・種別・展開・到着時の強調）
- `PhotoGrid` / `PhotoLightbox`（ネイティブ `<dialog>` の開閉）
- `CopyButton`（クリップボードコピー）
- `ErrorPage`（error 境界の要件）
- `providers.tsx`

受賞履歴の開閉は `<details>` で行うため、JS 無しでも動きます。

### 3.4 データ取得

外部 API は必ず `next: { revalidate }` を指定します。指定しないと Next.js 15 以降はキャッシュされず、毎リクエストで外部 API を叩いてしまいます。

```typescript
// libs/fetch/getLastCommitTime.ts
const response = await fetch(COMMITS_API, { next: { revalidate: 3600 } });
```

**失敗と「0 件」は必ず区別します。** 空配列で潰すと、利用側が「取得に失敗した」のか「本当に無い」のか判断できません。

```typescript
export type LastCommitResult = { ok: true; isoDate: string } | { ok: false };
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

## 5. 初期表示で中身を隠さない

**初期状態でコンテンツを隠すクライアント側ガード（`isMounted` チェック等）を SSR で描画すべき要素に使ってはいけません。** JS が無効・読み込み失敗の環境で中身が出なくなります。以前のギャラリーは `!isMounted` の間スケルトンだけを返しており、HTML に写真が 1 枚も含まれていませんでした。

---

## 6. データ定義

### Project（data/projects.ts）
```typescript
{
  id: 'mado',                                             // /projects#<id> のアンカー。公開後は変更しない
  category: 'Infra',                                      // data/projectCategories.ts の区分
  featured: true,                                         // 任意。トップの Projects 欄に載せる注力作
  title: { ja: 'mado', en: 'mado' },
  description: { ja: ['段落1', '段落2'], en: ['...'] },   // en は省略可
  image: 'mado.png',                                      // public/images/projects/ 配下
  links: { github: { description: { ja: '...', en: '...' }, url: '...' } },
  language: 'TypeScript',
}
```
`image` に指定したファイルは必ず `public/images/projects/` に配置してください。無いと画像が壊れます。

配列の順序がそのまま表示順です。トップには先頭の 4 件が出ます（`HomePage.tsx` の `HOME_PROJECT_COUNT`）。

### Award（data/awards.ts）/ GalleryImage（data/gallery.ts）
`date` は ISO 8601。並び替えは各ページで `sortByDateDesc` が行うため、配列の順序は問いません。

### PublicKey（data/publicKeys.ts）
```typescript
{
  id: 'ed25519-2026-07-15',        // /keys/<id> と <id>.pub に使う。公開後は変更しない
  label: 'Ed25519 (2026-07-15)',   // 画面に出す人間向けラベル
  key: 'ssh-ed25519 AAAA...',      // authorized_keys に貼れる 1 行
}
```
公開鍵は秘密情報ではないためコミットして問題ありません。配列に追加すれば、一覧 UI・`/keys`（全件テキスト）・`/keys/<id>`（個別ダウンロード）がすべて自動で追従します。

`/keys/<id>` は `Content-Disposition: attachment` を付けて `.pub` ファイルとしてダウンロードさせます。`generateStaticParams` でビルド時に生成され、`dynamicParams = false` により未定義の id は 404 になります。

---

## 7. 開発コマンド

```bash
npm run dev      # 開発サーバー（Turbopack）
npm run build    # 本番ビルド（型チェックも実行される）
npm run start    # 本番サーバー
npm run lint      # Biome チェック + 自動修正
npm run format    # Biome 整形のみ
npm run typecheck # 型チェック（tsc --noEmit）
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

5. `components/layout/SiteHeader.tsx` の `NAVIGATION_ITEMS` に追加（表記は言語に関わらず英語）
6. `app/sitemap.ts` の `routes` と `lastModified` に追加

---

## 9. スタイリング

モノクロ・1px 罫線・格子のデザインです。配色は `styles/globals.css` の CSS 変数（`--color-bg` / `bg2` / `ink` / `sub` / `faint` / `line` / `line2` / `plus` / `ok`）で定義し、`tailwind.config.cjs` が `bg-bg` / `text-ink` / `border-line` などに対応付けています。ダークモードは `.dark` クラス（next-themes）で変数を差し替えるため、**`dark:` プレフィックスは基本的に不要です。**

```tsx
<div className="border-b border-line bg-bg2 text-sub">
```

- 区画は `GridSection`、カード群は `CellGrid` で組みます。カード・セル・画像は角丸なし、影なし
- ＋マーク・方眼・斜線帯・セル型グリッドの罫線は長い任意値クラスにせず、`globals.css` の `.grid-corner` / `.grid-paper` / `.hatch-band` / `.cell-grid` にまとめています
- ＋マークがガイド線の外へ 5px はみ出すため、`body` に `overflow-x: clip` を付けています

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

---

## 11. 参考リソース

- [Next.js 公式ドキュメント](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [HeroUI](https://www.heroui.com)
- [Biome](https://biomejs.dev)

---

**最終更新:** 2026年10月18日
**バージョン:** 3.1.0
