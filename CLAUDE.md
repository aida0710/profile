# Aida Profile - プロジェクトアーキテクチャガイド

## 1. プロジェクト概要

**プロジェクト名:** Aida Profile (v2.1.0)
**説明:** Masaki Aida(@aida_0710)の個人プロフィールサイト
**URL:** https://www.aida0710.work
**フレームワーク:** Next.js 16.0.1 (App Router)
**言語:** TypeScript 5.9.3
**スタイリング:** Tailwind CSS 4.1.16 + HeroUI Components

このプロジェクトはNext.js 16の最新App Routerを採用し、TypeScript、Tailwind CSS、フレーマーモーションを組み合わせた高速でモダンなプロフィールサイトです。HeroUIコンポーネントライブラリを使用し、アクセシビリティとUIデザインの一貫性を保証します。

---

## 2. プロジェクト構造

### ディレクトリレイアウト

```
/Users/aida/projects/profile/
├── app/                          # Next.js App Router アプリケーションディレクトリ
│   ├── layout.tsx               # ルートレイアウト（ナビゲーション、フッターを含む）
│   ├── providers.tsx            # HeroUI + next-themesプロバイダー
│   ├── page.tsx                 # ホームページ（/）
│   ├── error.tsx                # グローバルエラーハンドラー
│   ├── not-found.tsx            # 404ページ（ホームページへリダイレクト）
│   ├── awards/
│   │   └── page.tsx             # 受賞歴ページ（/awards）
│   ├── projects/
│   │   └── page.tsx             # プロジェクト一覧ページ（/projects）
│   ├── blog/
│   │   ├── page.tsx             # ブログ一覧ページ（/blog）
│   │   └── [slug]/
│   │       ├── page.tsx         # ブログ記事詳細ページ（/blog/[slug]）
│   │       └── not-found.tsx    # 記事見つからない時のページ
│   └── gallery/
│       └── page.tsx             # フォトギャラリーページ（/gallery）
│
├── components/                   # Reactコンポーネント
│   ├── common/                  # 再利用可能な共通コンポーネント
│   │   ├── TextBlock.tsx        # テキストブロック（段落表示）
│   │   └── BlockFrame.tsx       # セクションフレーム（グリッドレイアウト）
│   ├── layout/                  # レイアウト関連コンポーネント
│   │   ├── NavigationBar.tsx    # ナビゲーションバー（メニュー+テーマ切り替え）
│   │   ├── Footer.tsx           # フッター（ソーシャルリンク+コミット情報）
│   │   ├── ThemeToggle.tsx      # ダークモード/ライトモード切り替え
│   │   └── MobileMenu.tsx       # モバイルメニュー（モーダル）
│   ├── features/                # 機能別コンポーネント
│   │   ├── home/
│   │   │   ├── SocialIcons.tsx  # ホームページのソーシャルアイコン
│   │   │   └── NavigationButtons.tsx  # ナビゲーションボタン
│   │   ├── blog/
│   │   │   ├── BlogSearchContainer.tsx  # 検索機能付きブログ一覧
│   │   │   ├── SearchBar.tsx    # 検索バー（デバウンス付き）
│   │   │   ├── BlogCard.tsx     # ブログカード
│   │   │   ├── BlogContent.tsx  # ブログ記事詳細表示
│   │   │   └── HighlightText.tsx # 検索ハイライト機能
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx      # プロジェクトカード
│   │   │   └── ProjectCardModal.tsx # プロジェクト詳細モーダル
│   │   ├── gallery/
│   │   │   ├── ImageGallery.tsx  # ギャラリー表示
│   │   │   ├── ImageCard.tsx     # 画像カード
│   │   │   └── ImageModal.tsx    # 画像拡大モーダル
│   │   └── award/
│   │       └── AwardCard.tsx    # 受賞歴カード
│   └── icons/
│       └── ProjectIcon.tsx      # カスタムアイコン
│
├── config/                       # アプリケーション設定
│   ├── site.ts                 # サイト全体の設定（名前、URL、OG設定など）
│   └── fonts.ts                # フォント設定（Google Fonts）
│
├── data/                         # 静的データ（JSON風のTypeScript）
│   ├── blog.ts                 # ブログ記事データ + ユーティリティ関数
│   ├── projects.ts             # プロジェクト情報
│   ├── awards.ts               # 受賞歴
│   ├── gallery.ts              # ギャラリー画像
│   └── profile.ts              # プロフィール情報
│
├── libs/                         # ユーティリティライブラリ
│   └── fetch/
│       └── getLastCommitTime.ts # GitHubから最後のコミット時刻を取得
│
├── types/                        # TypeScript型定義
│   └── index.ts                # 全型定義（Award, BlogPost, Projectなど）
│
├── styles/                       # グローバルスタイル
│   └── globals.css             # グローバルCSS
│
├── public/                       # 静的アセット
│   ├── favicon.ico
│   ├── icon.png
│   ├── neko.jpg               # プロフィール画像
│   └── images/
│       ├── blog/              # ブログ記事の画像
│       ├── gallery/           # ギャラリー画像
│       ├── projects/          # プロジェクトサムネイル
│       └── awards/            # 受賞歴画像
│
├── 設定ファイル
│   ├── package.json            # 依存関係とスクリプト
│   ├── tsconfig.json           # TypeScript設定
│   ├── next.config.js          # Next.js設定
│   ├── tailwind.config.js      # Tailwind CSS設定
│   ├── postcss.config.js       # PostCSS設定（Tailwind CSS v4用）
│   ├── biome.json              # Biome設定（リント＋フォーマット）
│   └── .gitignore              # Git無視ファイル
│
└── README.md                    # プロジェクト説明
```

---

## 3. アーキテクチャとコード組織

### 3.1 Next.js App Router の使用

このプロジェクトは**Next.js 16 App Router**を採用しており、ファイルシステムベースのルーティングを使用しています：

- **ルートセグメント:** `/app/[pageName]/page.tsx` でページを定義
- **動的セグメント:** `/app/blog/[slug]/page.tsx` でブログ記事を動的に生成
- **特別なファイル:**
  - `layout.tsx` - ページレイアウト
  - `error.tsx` - エラーハンドリング
  - `not-found.tsx` - 404処理

### 3.2 サーバーコンポーネント vs クライアントコンポーネント

**サーバーコンポーネント（デフォルト）:**

- ページ（`page.tsx`）: `app/page.tsx`、`app/blog/[slug]/page.tsx`
- レイアウト（`layout.tsx`）
- 理由：SEO、メタデータ生成、データフェッチに最適

**クライアントコンポーネント（`'use client'`宣言）:**

- インタラクティブUI：`NavigationBar.tsx`、`MobileMenu.tsx`、`ThemeToggle.tsx`
- 状態管理：`SearchBar.tsx`、`BlogSearchContainer.tsx`
- フッター：`Footer.tsx`（GitHub APIの非同期フェッチ）
- Providers：`providers.tsx`（HeroUIプロバイダー）

**理由：** ユーザーインタラクション、状態変更、ブラウザAPI（useRouter、useTheme）が必要な場合

### 3.3 データフェッチのパターン

**静的データ:**

```typescript
// data/blog.ts
export const blogPosts: BlogPost[] = [...]
export function getSortedPosts(): BlogPost[] { ... }
export function getPostBySlug(slug: string): BlogPost | undefined { ... }
```

**APIフェッチ:**

```typescript
// libs/fetch/getLastCommitTime.ts
"use server";
// GitHubから最後のコミット時刻を非同期で取得
```

**メタデータ生成:**

```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({
  params,
}: BlogPostPageParams): Promise<Metadata> {
  const post = getPostBySlug(slug);
  // 動的メタデータの生成
}
```

### 3.4 状態管理

**使用状態:**

- React Hooks（`useState`、`useEffect`、`useMemo`）
- `next-themes`：ダークモード状態管理
- `useRouter`、`usePathname`：ナビゲーション状態

**グローバル状態は最小限:**

- テーマ情報（HeroUIProvider + NextThemesProvider経由）
- ナビゲーション状態（URLベース）

---

## 4. 主要技術スタック

### コア技術

| 技術              | バージョン | 用途                              |
| ----------------- | ---------- | --------------------------------- |
| Next.js           | 16.0.1     | Reactフレームワーク（App Router） |
| React             | 19.2.0     | UIライブラリ                      |
| TypeScript        | 5.9.3      | 型安全性                          |
| Tailwind CSS      | 4.1.16     | ユーティリティファーストCSS       |
| Tailwind Variants | 3.1.1      | CSS変数の管理                     |

### UIコンポーネント

| ライブラリ   | バージョン | 用途                                              |
| ------------ | ---------- | ------------------------------------------------- |
| HeroUI       | v2.x       | UIコンポーネント（Button、Card、Modal、Navbar等） |
| Lucide React | ^0.548.0   | SVGアイコン                                       |
| React Icons  | ^5.5.0     | ブランドアイコン（GitHub、Twitter等）             |

### 機能・ユーティリティ

| ライブラリ         | バージョン | 用途                               |
| ------------------ | ---------- | ---------------------------------- |
| next-themes        | ^0.4.6     | ダークモード管理                   |
| framer-motion      | 12.23.24   | アニメーション（MobileMenuで使用） |
| clsx               | 2.1.1      | 条件付きクラス名結合               |
| intl-messageformat | ^10.5.0    | 国際化フォーマット                 |

### 分析・パフォーマンス

| ライブラリ             | バージョン | 用途               |
| ---------------------- | ---------- | ------------------ |
| @vercel/analytics      | ^1.4.1     | Web Analytics      |
| @vercel/speed-insights | ^1.1.0     | パフォーマンス計測 |

### 開発ツール

| ツール               | バージョン | 用途                                                       |
| -------------------- | ---------- | ---------------------------------------------------------- |
| Biome                | 2.0.6      | コード品質チェック＋コード整形（ESLint + Prettier の代替） |
| PostCSS              | 8.5.6      | CSS処理                                                    |
| Autoprefixer         | 10.4.21    | ベンダープレフィックス自動追加                             |
| @tailwindcss/postcss | 4.1.16     | Tailwind CSS v4 PostCSS プラグイン                         |

---

## 5. 重要な設定ファイル

### 5.1 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "strict": true,
    "jsx": "preserve",
    "paths": {
      "@/*": ["./*"] // @ エイリアスで根ルートアクセス可能
    },
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

**重点:**

- `@/*` パスエイリアスで絶対パスインポート
- `strict: true` で厳格な型チェック
- `jsx: "preserve"` でNext.jsがJSX変換を処理

### 5.2 next.config.js

```javascript
const nextConfig = {};
module.exports = nextConfig;
```

現在はシンプル。必要に応じて画像最適化や環境変数設定を追加可能。

### 5.3 postcss.config.js（Tailwind CSS v4対応）

**Tailwind CSS v4では、PostCSSプラグインが別パッケージに分離されました。**

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

**重要な変更点:**

- **v3以前:** `tailwindcss` パッケージ内にPostCSSプラグインが含まれていた
- **v4:** `@tailwindcss/postcss` という専用パッケージが必要
- `npm install @tailwindcss/postcss` で追加インストールが必要

### 5.4 globals.css（Tailwind CSS v4対応）

**Tailwind CSS v4では、インポート構文が変更されました。**

```css
@import "tailwindcss";
```

**変更点:**

- **v3以前:** `@tailwind base;` `@tailwind components;` `@tailwind utilities;` の3行が必要
- **v4:** `@import "tailwindcss";` の1行のみ
- よりシンプルで直感的な構文に進化

### 5.5 tailwind.config.js

```javascript
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
```

**重点:**

- HeroUIプラグイン統合
- カスタムフォント変数（CSS変数）
- ダークモード: `class` ベース（next-themes統合）
- **注意:** Tailwind CSS v4でも、config ファイルの構文は互換性あり

### 5.6 biome.json

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 120
  },
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "a11y": {
        "useFocusableInteractive": "warn",
        "useKeyWithClickEvents": "warn"
      },
      "correctness": {
        "noUnusedImports": "warn",
        "noUnusedVariables": "warn",
        "useExhaustiveDependencies": "off"
      },
      "suspicious": {
        "noConsole": "warn",
        "noExplicitAny": "off"
      },
      "style": {
        "useSelfClosingElements": "warn"
      }
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "semicolons": "always",
      "trailingCommas": "all"
    }
  }
}
```

**重要なルール解説:**

#### コード品質

- `noConsole: "warn"` - console.log等の使用を警告（本番環境での不要なログを防止）
- `noUnusedVariables: "warn"` - 未使用変数を警告
- `noUnusedImports: "warn"` - 未使用インポートを警告

#### React関連

- `useExhaustiveDependencies: "off"` - useEffectの依存配列チェックを無効化
- `useSelfClosingElements: "warn"` - 子要素がない場合は自己クロージングタグを強制

#### アクセシビリティ

- `useFocusableInteractive: "warn"` - インタラクティブ要素にフォーカス可能性を要求
- `useKeyWithClickEvents: "warn"` - クリックイベントにキーボードイベントも追加

#### インポート管理

- `organizeImports: true` - インポートの自動整理を有効化

#### コードフォーマット

- `quoteStyle: "single"` - シングルクォート使用
- `semicolons: "always"` - セミコロン必須
- `trailingCommas: "all"` - 末尾カンマを全て追加
- `indentWidth: 2` - インデント幅2スペース
- `lineWidth: 120` - 最大行幅120文字

### 5.7 package.json スクリプト

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "biome check --write .",
    "format": "biome format --write ."
  }
}
```

**開発フロー:**

- `npm run dev` - 開発サーバー起動（Next.js 16からTurbopackがデフォルト）
- `npm run build` - 本番ビルド
- `npm run lint` - Biomeでコードチェック+自動修正
- `npm run format` - Biomeでコード整形

---

## 6. データとコンテンツ管理

### 6.1 ブログシステム（data/blog.ts）

**データ構造:**

```typescript
export interface BlogPost {
  slug: string; // URL用ID（例："php-conference-2025"）
  title: string; // 記事タイトル
  content: string[]; // 段落配列（改行で分割）
  date: string; // 発行日（日本語形式）
  images: string[]; // 記事内画像ファイル名
  tags?: string[]; // タグ（オプション）
}
```

**リンク記法:**

```
[表示テキスト](URL)      // 内部リンク
[表示テキスト](_URL)     // 外部リンク（先頭に_）
```

**ユーティリティ関数:**

```typescript
getSortedPosts(); // 日付降順でソート
getPostBySlug(slug); // スラッグから記事を検索
```

**画像管理:**

- 保存先: `/public/images/blog/`
- 命名規則: `YYYY年MM月DD日-記事ID-番号.拡張子`

### 6.2 プロジェクト管理（data/projects.ts）

**データ構造:**

```typescript
export interface Project {
  title: string;
  description: string[];
  image: string;
  links: {
    [key: string]: {
      description: string;
      url: string;
    };
  };
  language: string; // 開発言語（Rust、PHP等）
}
```

**例:**

```typescript
{
  title: 'rdb tunnel',
  description: [
    'rdbを介したl2レベルでのパケット転送...',
    'パケット保存で時系列解析が可能...'
  ],
  image: 'rdb-tunnel.png',
  links: {
    github: {
      description: 'Github Repository',
      url: 'https://github.com/aida0710/rdb-tunnel'
    }
  },
  language: 'Rust'
}
```

### 6.3 受賞歴管理（data/awards.ts）

```typescript
export interface Award {
  organization: string; // 団体名
  description: string; // 受賞内容
  image: string; // サムネイル画像
  link: string; // 詳細ページURL
  date: string; // 受賞日
}
```

### 6.4 ギャラリー管理（data/gallery.ts）

```typescript
export interface GalleryImage {
  src: string; // 画像ファイル名
  description: string; // 説明
  date: string; // 撮影日
  detail: string; // 詳細情報
}
```

### 6.5 設定ファイル（config/site.ts）

```typescript
export const siteConfig = {
  name: "Aida Profile",
  description: "@aida_0710のプロフィールページ",
  twitter_id: "@aida_0710",
  url: "https://www.aida0710.work",
  image: "https://www.aida0710.work/public_image.png",
};
```

OGメタデータの生成に使用。

### 6.6 ユーティリティライブラリ（libs/fetch/）

#### getLastCommitTime.ts

**目的:** GitHub APIから最新のコミット時刻を取得し、日本時間でフォーマット

**使用場所:** Footer.tsx（最終更新時刻の表示）

**コード構造:**

```typescript
"use server"; // Server Actionとして実行

type CommitResult = {
  success: boolean;
  data: Date | string; // 成功時はDate、失敗時はエラーメッセージ
};

// メイン関数（外部から呼び出される）
export default async function getLastCommitTime(): Promise<string>;

// GitHub APIからコミット情報を取得
async function getLastCommit(): Promise<CommitResult>;

// 日本時間にフォーマット
async function formatDate(date: Date): Promise<string>;
```

**実装の詳細:**

1. **getLastCommit()** - GitHub API呼び出し
   - エンドポイント: `https://api.github.com/repos/aida0710/profile/commits`
   - メソッド: GET
   - エラーハンドリング: HTTPエラー、データ不在、例外を全てキャッチ
   - 戻り値: 成功時は最新コミットの日時、失敗時はエラーメッセージ

2. **formatDate(date)** - 日時フォーマット
   - タイムゾーン変換: UTC → Asia/Tokyo（日本時間）
   - フォーマット: `YYYY/MM/DD HH:MM:SS (曜日)`
   - ロケール: `ja-JP`（日本語表記）

3. **getLastCommitTime()** - 統合関数
   - getLastCommit()を呼び出し
   - 成功時: formatDate()で整形
   - 失敗時: エラーメッセージをそのまま返す

**使用例:**

```typescript
// components/layout/Footer.tsx
'use client';

import getLastCommitTime from '@/libs/fetch/getLastCommitTime';

export function Footer() {
  const [commitTime, setCommitTime] = useState('読み込み中...');

  useEffect(() => {
    getLastCommitTime().then(setCommitTime);
  }, []);

  return <p>最終更新: {commitTime}</p>;
}
```

**注意点:**

- `'use server'`ディレクティブでサーバー側実行を保証
- GitHub APIはレート制限あり（未認証: 60リクエスト/時）
- エラー時もUIを崩さないよう文字列を返す設計

---

## 7. TypeScript型定義リファレンス（types/index.ts）

プロジェクト全体で使用される型定義の完全リスト。

### 7.1 Awards（受賞歴）関連

```typescript
export interface Award {
  organization: string; // 主催団体名（例: "SecHack365"）
  description: string; // 受賞内容の説明
  image: string; // サムネイル画像ファイル名
  link: string; // 詳細ページURL
  date: string; // 受賞日（例: "2025年03月09日"）
}
```

**使用箇所:** `data/awards.ts`, `components/features/award/AwardCard.tsx`

### 7.2 Gallery（ギャラリー）関連

```typescript
export interface GalleryImage {
  src: string; // 画像ファイル名（public/images/gallery/内）
  description: string; // 画像の説明文
  date: string; // 撮影日（例: "2025年01月15日"）
  detail: string; // 詳細情報（撮影場所、カメラ設定等）
}
```

**使用箇所:** `data/gallery.ts`, `components/features/gallery/ImageGallery.tsx`, `ImageCard.tsx`

### 7.3 Projects（プロジェクト）関連

```typescript
export interface Project {
  title: string; // プロジェクト名
  description: string[]; // 説明文の配列（段落ごと）
  image: string; // サムネイル画像
  links: {
    // 関連リンク（柔軟な構造）
    [key: string]: {
      // 例: "github", "demo", "docs"
      description: string; // リンクの説明
      url: string; // URL
    };
  };
  language: string; // 主要開発言語（例: "Rust", "TypeScript"）
}
```

**使用箇所:** `data/projects.ts`, `components/features/projects/ProjectCard.tsx`

**リンクの例:**

```typescript
links: {
  github: {
    description: "Github Repository",
    url: "https://github.com/aida0710/rdb-tunnel"
  },
  demo: {
    description: "Live Demo",
    url: "https://demo.example.com"
  }
}
```

### 7.4 Skills（スキル）関連

```typescript
export interface SkillCategory {
  key: string; // カテゴリーID（例: "languages", "frameworks"）
  title: string; // カテゴリー名（例: "プログラミング言語"）
  contents: string[]; // スキルのリスト
}
```

**使用箇所:** 将来的なスキルページ用（現在は未使用の可能性あり）

### 7.5 Blog（ブログ）関連

```typescript
export interface BlogPost {
  slug: string; // URL用の一意識別子（例: "php-conference-2025"）
  title: string; // 記事タイトル
  content: string[]; // 本文の段落配列
  date: string; // 公開日（例: "2025年06月28日"）
  images: string[]; // 記事内画像のファイル名配列
  tags?: string[]; // タグ（オプション）
}
```

**使用箇所:** `data/blog.ts`, `components/features/blog/`配下の全コンポーネント

**content配列の特殊記法:**

- `[表示テキスト](URL)` - 内部リンク
- `[表示テキスト](_URL)` - 外部リンク（`_`プレフィックス）

### 7.6 Navigation（ナビゲーション）関連

```typescript
export interface NavItem {
  path: string; // ルートパス（例: "/blog"）
  label: string; // 表示ラベル（例: "Blog"）
  icon: ReactNode; // アイコンコンポーネント（lucide-react使用）
}
```

**使用箇所:** `components/layout/NavigationBar.tsx`, `MobileMenu.tsx`

### 7.7 共通コンポーネントProps

#### BlockFrameProps

```typescript
export interface BlockFrameProps {
  title: string; // セクションタイトル
  description: string; // セクション説明
  children: ReactNode; // グリッド内に表示する子要素
}
```

**使用箇所:** `components/common/BlockFrame.tsx`

#### TextBlockProps

```typescript
export interface TextBlockProps {
  messages: string[]; // 表示する段落の配列
}
```

**使用箇所:** `components/common/TextBlock.tsx`

#### SocialLink

```typescript
export interface SocialLink {
  href: string; // リンク先URL
  icon: ReactNode; // アイコン（react-icons使用）
  label: string; // アクセシビリティ用ラベル
}
```

**使用箇所:** `components/features/home/SocialIcons.tsx`, `components/layout/Footer.tsx`

### 7.8 型のインポート方法

```typescript
// 単一の型をインポート
import { BlogPost } from "@/types";

// 複数の型をインポート
import { Award, Project, GalleryImage } from "@/types";

// 型のみをインポート（Type-Only Import）
import type { NavItem, SocialLink } from "@/types";
```

**ベストプラクティス:**

- コンポーネントのpropsは必ず型定義
- 新しいデータ構造は`types/index.ts`に追加
- オプショナルフィールドには`?`を使用
- 配列型は`string[]`形式で記述

---

## 8. コンポーネント設計パターン

### 8.1 共通コンポーネント

#### TextBlock.tsx

```typescript
interface TextBlockProps {
  messages: string[];
}

export function TextBlock({messages}: TextBlockProps) {
  return (
    <div className='p-6'>
      {messages.map((message, index) => (
        <p key={index} className='text-base leading-relaxed md:text-lg'>
          {message}
        </p>
      ))}
    </div>
  );
}
```

**用途:** 複数の段落を表示する汎用コンポーネント

#### BlockFrame.tsx

```typescript
interface BlockFrameProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function BlockFrame({title, description, children}: BlockFrameProps) {
  return (
    <section className='mx-auto w-full max-w-7xl px-4'>
      <header className='mb-6 ml-5'>
        <h1 className='mb-1.5 text-3xl font-medium md:text-4xl'>{title}</h1>
        <p className='text-sm font-normal md:text-base'>{description}</p>
      </header>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {children}
      </div>
    </section>
  );
}
```

**用途:** セクション/グリッドレイアウト（Projects、Awards用）

### 8.2 ブログコンポーネント

#### BlogCard.tsx

- ブログ記事プレビューカード
- 画像、タイトル、内容抜粋を表示
- 検索ハイライト機能搭載

#### BlogContent.tsx

- 記事詳細ページのメイン表示
- リンク解析（`parseContentWithLinks`）で Markdown形式のリンクを自動変換
- 画像ギャラリー統合

#### SearchBar.tsx + BlogSearchContainer.tsx

- **特徴:** デバウンス検索（500ms待機）
- **検索対象:** タイトル、内容、タグ
- **状態管理:** useState でローカル状態管理
- **パフォーマンス:** useMemo で検索結果をメモ化

### 8.3 レイアウトコンポーネント

#### NavigationBar.tsx

- **機能:**
  - ナビゲーション表示（パスに応じたアクティブ状態）
  - ダークモード切り替えボタン
  - GitHubリポジトリリンク
  - モバイルメニュー統合
- **タイプ:** クライアントコンポーネント（usePathname、useTheme使用）

#### MobileMenu.tsx

- **機能:** モバイル用フルスクリーンメニュー（モーダル）
- **特徴:** framer-motion でアニメーション対応
- **条件表示:** `sm:hidden` でモバイルのみ表示

#### ThemeToggle.tsx

- **機能:** ダークモード/ライトモード切り替え
- **特徴:** hydration ミスマッチ対策（useEffect でマウント後に表示）
- **状態:** `next-themes` で管理

#### Footer.tsx

- **機能:** ソーシャルリンク表示、最新コミット時刻表示
- **特徴:** GitHub API 非同期フェッチ（getLastCommitTime）
- **型:** クライアントコンポーネント（useEffect 使用）

---

## 9. 開発者向けガイドライン

### 9.1 新しいページの追加

```
1. /app/[pageName]/page.tsx を作成
2. メタデータを定義（SEO対応）
3. NavigationBar の NAVIGATION_ITEMS に追加（必要に応じて）
```

**例:**

```typescript
// app/projects/page.tsx
import {Metadata} from 'next';
import {BlockFrame} from '@/components/common/BlockFrame';
import {projects} from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: '...'
};

export default function ProjectsPage() {
  return (
    <BlockFrame
      title='Projects'
      description='...'
    >
      {projects.map((project) => (
        // Component
      ))}
    </BlockFrame>
  );
}
```

### 9.2 新しいコンポーネントの追加

```
1. components/[category]/[ComponentName].tsx を作成
2. props を TypeScript インターフェースで定義
3. 再利用可能性を検討
4. HeroUI コンポーネント活用
```

**ベストプラクティス:**

```typescript
'use client';  // 必要に応じて（インタラクティブなら）

import React, {useState} from 'react';
import {Card} from '@heroui/card';
import {Button} from '@heroui/button';

interface MyComponentProps {
  title: string;
  onAction: () => void;
}

export function MyComponent({title, onAction}: MyComponentProps) {
  const [state, setState] = useState(false);

  return (
    <Card>
      <h3>{title}</h3>
      <Button onPress={onAction}>
        Action
      </Button>
    </Card>
  );
}
```

### 9.3 新しい型の追加

```typescript
// types/index.ts に追加
export interface MyType {
  id: string;
  name: string;
  // ...
}
```

### 9.4 スタイリングガイドライン

**Tailwind CSS クラスの使用:**

```typescript
// 直接クラス記述
<div className='mb-6 text-center text-3xl font-bold'>

// 条件付きクラスは clsx 使用
<div className={clsx('p-4', {
  'bg-blue-500': isActive,
  'bg-gray-300': !isActive
})}>

// レスポンシブ対応
<div className='text-base md:text-lg lg:text-xl'>

// ダークモード対応（自動：Tailwind dark: プレフィックス）
<div className='bg-white dark:bg-gray-900'>
```

### 9.5 画像の最適化

```typescript
import Image from 'next/image';

<Image
  src='/images/blog/xxx.png'
  alt='説明'
  width={1280}
  height={720}
  className='rounded-lg'
/>
```

**注意:** `next/image` を使用し、width/height を指定（レイアウトシフト防止）

### 9.6 コード品質チェック

```bash
# Biomeでコードチェック＋自動修正
npm run lint

# Biomeでコード整形
npm run format
```

**Biomeルール:**

- `noConsole: "warn"` - console 出力は警告
- `noUnusedImports: "warn"` - 未使用インポートを警告
- `noUnusedVariables: "warn"` - 未使用変数を警告
- `organizeImports: true` - インポート自動整理
- `useSelfClosingElements: "warn"` - 自己クロージングタグを強制
- `useKeyWithClickEvents: "warn"` - クリックイベントにキーボードイベント追加を推奨

---

## 10. デプロイメント情報

### 10.1 環境

- **ホスティング:** Vercel（推奨）
- **ビルドコマンド:** `next build`
- **スタート:** `next start`

### 10.2 分析とパフォーマンス

- **Vercel Analytics:** Google Analyticsの代替
- **Vercel Speed Insights:** Web Vitals 自動計測

### 10.3 SEO最適化

- **メタデータ:** `app/layout.tsx` + 各ページの `generateMetadata`
- **Open Graph:** Twitter Card 対応
- **Sitemap:** Next.js 自動生成（未実装時は追加検討）

### 10.4 環境変数

現在、`.env` ファイル不要。必要に応じて以下を追加：

```
# .env.local
NEXT_PUBLIC_SITE_URL=https://www.aida0710.work
```

---

## 11. よくある開発タスク

### ブログ記事を追加

```typescript
// data/blog.ts
export const blogPosts: BlogPost[] = [
  {
    slug: "my-new-article",
    title: "記事タイトル",
    content: ["本文段落1", "本文段落2", "[リンク](URL)"],
    date: "2025年01月01日",
    images: ["image.png"],
    tags: ["tag1", "tag2"],
  },
  // ... 既存記事
];
```

### プロジェクトを追加

```typescript
// data/projects.ts
export const projects: Project[] = [
  {
    title: "プロジェクト名",
    description: ["説明1", "説明2"],
    image: "image.png",
    links: {
      github: {
        description: "Github Repository",
        url: "https://github.com/...",
      },
    },
    language: "TypeScript",
  },
  // ... 既存プロジェクト
];
```

### テーマ色をカスタマイズ

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#1f2937',
      // ...
    }
  }
}
```

---

## 12. パフォーマンス最適化のポイント

1. **Next.js 最適化:**
   - App Router で自動コード分割
   - Image コンポーネントで画像最適化
   - 動的インポートで Bundle 削減

2. **Tailwind CSS:**
   - PurgeCSS で未使用スタイル削除
   - content 設定で不要なスキャン削除

3. **リレンダリング最適化:**
   - useMemo で計算結果メモ化（BlogSearchContainer）
   - useCallback で関数参照保持

4. **アクセシビリティ:**
   - HeroUI の ARIA 属性対応
   - ESLint `jsx-a11y` プラグイン

---

## 13. トラブルシューティング

### Hydration ミスマッチエラー

**症状:** サーバー側とクライアント側でレンダリング結果が異なる  
**原因:** useEffect 前にレンダリングされたコンポーネント  
**解決:** ThemeToggle.tsx のように `isMounted` チェック

```typescript
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null; // クライアント側でのみレンダリング
```

### スタイルが反映されない

**確認事項:**

1. Tailwind CSS `content` 設定で対象ファイルが含まれているか
2. HeroUI プラグインが tailwind.config.js に追加されているか
3. ビルド後キャッシュをクリア（`.next/` 削除）

### 画像が表示されない

**確認事項:**

1. `/public/` フォルダに画像があるか
2. `next/image` の width/height が正しいか
3. alt テキストは指定されているか

### framer-motion 12型エラー

**症状:** ビルド時に「Type 'string' is not assignable to type 'Easing'」エラー
**原因:** framer-motion 12で型定義が厳格化され、文字列のease値が受け付けられなくなった
**解決:** cubic-bezier配列 + `as const` を使用

```typescript
// ❌ エラーになるコード（framer-motion 11以前は動作）
const variants = {
  enter: {
    transition: {
      ease: "easeOut", // 文字列は型エラー
    },
  },
};

// ✅ 正しいコード（framer-motion 12対応）
const variants = {
  enter: {
    transition: {
      ease: [0, 0, 0.2, 1] as const, // cubic-bezier + readonly tuple
    },
  },
};
```

**一般的なeasing値の変換表:**

- `'easeOut'` → `[0, 0, 0.2, 1] as const`
- `'easeIn'` → `[0.4, 0, 1, 1] as const`
- `'easeInOut'` → `[0.4, 0, 0.2, 1] as const`
- `'linear'` → `[0, 0, 1, 1] as const`

**重要:** `as const` を付けることで、number[]ではなく readonly tuple型として扱われ、型エラーが解消されます。

---

## 14. 参考リソース

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [Tailwind CSS公式](https://tailwindcss.com)
- [HeroUI コンポーネント](https://nextui.org)
- [TypeScript ハンドブック](https://www.typescriptlang.org/docs)
- [React 公式](https://react.dev)

---

**最終更新:** 2025年10月29日
**バージョン:** 2.1.0
**更新内容:**

- Next.js 15.0.4 → 16.0.1へアップグレード
- React 18.3.1 → 19.2.0へアップグレード
- Tailwind CSS 3.4.16 → 4.1.16へ完全移行
  - `@tailwindcss/postcss` パッケージ導入
  - `postcss.config.js` を v4 構文に更新
  - `globals.css` を `@import "tailwindcss"` 構文に変更
- framer-motion 12.23.24へアップグレード
  - 型定義の厳格化に対応（MobileMenu.tsx の ease プロパティを cubic-bezier 配列に変更）
- ESLint + Prettier → Biome 2.0.6へ移行
- 開発ツールの一新とコード品質チェック方法の変更
- React 19対応のコード修正（JSX.Element → React.ReactElement等）
