# Card Interaction Redesign

**Date:** 2026-05-06
**Status:** Approved (implementation in progress)

## Problem

Project / Award カードは現状、カード全体がクリック可能 (Project はモーダル表示、Award は外部リンク遷移)。インタラクション領域が暗黙的で、何が起きるかが視覚的に明示されていない。

## Goals

- カード本体は **非インタラクティブ** にする (touch/click しても何も起きない)
- 操作は **明示的なボタン** に集約する (ボタンを見れば押せると分かる)
- Project / Award で **共通コンポーネント** を使い、構造を揃える
- モーダルを廃止し、ボタンで直接外部リンクへ遷移させる

## Design

### コンポーネント構成

```
components/
├── common/
│   └── MediaCard.tsx              ← 新規: カードフレーム + 画像 + ボタン群
├── features/
│   ├── projects/
│   │   ├── ProjectCard.tsx        ← MediaCard を使う薄い wrapper にリファクタ
│   │   └── ProjectCardModal.tsx   ← 削除
│   └── award/
│       └── AwardCard.tsx          ← MediaCard を使う薄い wrapper にリファクタ
```

### MediaCard の API

```ts
interface MediaCardLink {
  label: string;                      // ボタンに表示するテキスト
  url: string;                        // 遷移先 URL (常に外部リンク前提)
  kind?: 'github' | 'external';       // アイコン選択用 (省略時 'external')
}

interface MediaCardImage {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';          // 省略時 'cover' (= デフォルトの object-fit)
}

interface MediaCardProps {
  image: MediaCardImage;
  links: MediaCardLink[];             // 1 個以上
  children: ReactNode;                // body セクションの内容
}
```

### レイアウト

```
┌──────────────────────────────┐
│  [body / children]           │  ← 呼び出し側が描画 (title, desc, badge 等)
│                              │
│  ────  (mt-auto で空白)      │
│                              │
│  [image (aspect-video)]      │
│                              │
│  [button area]               │  ← MediaCard 内部で生成
│   - 1 個 or N 個のボタン     │
└──────────────────────────────┘
```

実装は `<article className="flex h-full flex-col overflow-hidden rounded-xl border border-warm-border bg-warm-surface transition-colors duration-200 hover:border-warm-accent/30">`。

`mt-auto` は image+button をまとめたラッパーに付与し、本文が短いカードでも画像とボタン群が下端に揃うようにする。

### ボタン配置ロジック

```ts
const useStackedLayout =
  links.length === 1 || links.some(l => l.label.length >= 12);

// useStackedLayout === true  → grid-cols-1 (縦積みフル幅)
// useStackedLayout === false → grid-cols-2 (横並び 50/50)
```

閾値 12 の根拠: カード幅 ≈ 280-340px、半分 ≈ 140-170px、padding 控除後 ≈ 110-140px。13px 日本語フォントで 1 行に約 10-12 文字。11 文字以下は半幅に収まる想定で、12 文字以上は半幅で折り返してしまうため縦積みフォールバックに切替える。

### アイコン規則

- `kind === 'github'` → `BsGithub` (`react-icons/bs`)
- それ以外 → `ArrowUpRight` (`lucide-react`)

両方とも 14px 程度、ボタンテキストの左に `gap-2` で配置。

### ボタンスタイル

HeroUI `Button` を組み込み `href` (anchor タグとしてレンダリング)、`target="_blank"`、`rel="noopener noreferrer"` で使用。Server Component から `Link` 関数参照を `as` プロップで渡すと境界エラーになるため、`as={Link}` は使わず Button 自身の anchor 機能に任せる (外部リンクのみで client-side routing 不要):

```tsx
<Button
  href={link.url}
  target="_blank"
  rel="noopener noreferrer"
  fullWidth
  variant="flat"
  radius="lg"
  className="h-auto min-h-10 whitespace-normal bg-warm-accent/10 py-2 font-medium text-warm-accent data-[hover=true]:bg-warm-accent/20"
  startContent={<LinkIcon kind={link.kind} />}
>
  {link.label}
</Button>
```

- 背景: `bg-warm-accent/10` / hover `bg-warm-accent/20`
- 文字: `text-warm-accent` / `font-medium`
- ラベルは `whitespace-normal` で必要なら折り返し許可 (超長文は 2 行になる)

### ProjectCard リファクタ

```tsx
export function ProjectCard({ project }: { project: Project }) {
  const links: MediaCardLink[] = Object.entries(project.links).map(([key, link]) => ({
    label: link.description,
    url: link.url,
    kind: key.startsWith('github') ? 'github' : 'external',
  }));

  return (
    <MediaCard
      image={{ src: `/images/projects/${project.image}`, alt: project.title }}
      links={links}
    >
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-heading text-base font-semibold text-warm-text">{project.title}</h2>
        <span className="rounded-full bg-warm-accent/10 px-2.5 py-0.5 font-mono text-xs text-warm-accent">
          {project.language}
        </span>
      </div>
      {project.description.map(item => (
        <p key={item} className="text-sm leading-relaxed text-warm-subtext">{item}</p>
      ))}
    </MediaCard>
  );
}
```

`onOpen` プロップは廃止。

### AwardCard リファクタ

```tsx
export function AwardCard({ award }: { award: Award }) {
  return (
    <MediaCard
      image={{ src: `/images/awards/${award.image}`, alt: award.description, fit: 'contain' }}
      links={[{ label: '詳細を見る', url: award.link, kind: 'external' }]}
    >
      <p className="text-xs font-medium text-warm-subtext">{award.organization}</p>
      <p className="mt-0.5 font-mono text-xs text-warm-subtext">{award.date}</p>
      <h3 className="mt-2 font-heading text-base font-semibold text-warm-text">{award.description}</h3>
    </MediaCard>
  );
}
```

### ページ側の変更

- `app/projects/page.tsx`: `ProjectCardModal` のインポート・使用を `ProjectCard` に差し替え
- `app/awards/page.tsx`: 変更不要

### 削除するファイル

- `components/features/projects/ProjectCardModal.tsx`

### データ・型変更

- `data/projects.ts`、`data/awards.ts`: 変更なし
- `types/index.ts`: `MediaCardLink` / `MediaCardImage` / `MediaCardProps` を追加 (もしくは MediaCard.tsx に co-locate)

## Hover 仕様

カード本体: `hover:border-warm-accent/30` のみ (`transition-colors`)。translate / shadow なし。
ボタン: HeroUI 標準の hover (背景色変化)。

## Out of Scope

- ギャラリーカード (`ImageCard.tsx`) への MediaCard 適用 — 別タスク
- データ側の description 短縮 — 必要になったら別途対応
- a11y の本格的な見直し (フォーカストラップ等)

## Verification

- `npm run build` で TypeScript / Next.js ビルドが通る
- `npm run lint` で Biome エラーなし
- 全カードが 1〜N ボタンで正しいレイアウトに切り替わる
- hover 時にカードの border 色が変化する
- カード本体クリックで何も起きない (ボタン以外は反応しない)
