# Aida Profile デザインリニューアル Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** ウォームニュートラルカラー、サイドナビゲーション、適度なアニメーションで、シンプルかつ洗練されたプロフィールサイトにリニューアルする。

**Architecture:** Next.js 16 App Routerの既存構造を維持しつつ、レイアウトをトップナビ→サイドナビに変更。CSS変数でカラーパレットを管理し、ダークモード切替をスムーズに。framer-motionで適度なアニメーションを追加。

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, HeroUI, framer-motion, next-themes, Google Fonts (Outfit, Source Sans 3, JetBrains Mono)

---

### Task 1: フォント設定の変更

**Files:**
- Modify: `config/fonts.ts`

**Step 1: フォントを Outfit + Source Sans 3 + JetBrains Mono に変更**

```typescript
import { JetBrains_Mono as FontMono, Outfit as FontHeading, Source_Sans_3 as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontHeading = FontHeading({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});
```

**Step 2: layout.tsx にフォント変数を追加**

`app/layout.tsx` の `<body>` に `fontHeading.variable` と `fontMono.variable` を追加:

```typescript
import { fontHeading, fontMono, fontSans } from '@/config/fonts';

// body の className:
<body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable, fontHeading.variable, fontMono.variable)}>
```

**Step 3: tailwind.config.cjs にフォントファミリーを追加**

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-sans)'],
      heading: ['var(--font-heading)'],
      mono: ['var(--font-mono)'],
    },
  },
},
```

**Step 4: ビルド確認**

Run: `npm run build`
Expected: ビルド成功

**Step 5: コミット**

```bash
git add config/fonts.ts app/layout.tsx tailwind.config.cjs
git commit -m "feat: フォントをOutfit/Source Sans 3/JetBrains Monoに変更"
```

---

### Task 2: カラーパレットのCSS変数定義

**Files:**
- Modify: `styles/globals.css`

**Step 1: CSS変数でウォームニュートラルパレットを定義**

`styles/globals.css` に以下を追加（`@import "tailwindcss";` の後）:

```css
@import "tailwindcss";
@config "../tailwind.config.cjs";
@plugin './hero.mjs';
@source '../node_modules/@heroui/theme/dist/**/**.{js,ts,jsx,tsx}';
@custom-variant dark (&:is(.dark *));

:root {
  --color-warm-bg: #FAF8F5;
  --color-warm-surface: #F0EDE8;
  --color-warm-text: #2C2825;
  --color-warm-subtext: #8A8580;
  --color-warm-accent: #C4703F;
  --color-warm-accent-hover: #B5633A;
  --color-warm-border: #E8E4DF;
}

.dark {
  --color-warm-bg: #1A1816;
  --color-warm-surface: #252220;
  --color-warm-text: #E8E4DF;
  --color-warm-subtext: #8A8580;
  --color-warm-accent: #D4885A;
  --color-warm-accent-hover: #E09A6C;
  --color-warm-border: #333028;
}
```

**Step 2: tailwind.config.cjs にカスタムカラーを追加**

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-sans)'],
      heading: ['var(--font-heading)'],
      mono: ['var(--font-mono)'],
    },
    colors: {
      warm: {
        bg: 'var(--color-warm-bg)',
        surface: 'var(--color-warm-surface)',
        text: 'var(--color-warm-text)',
        subtext: 'var(--color-warm-subtext)',
        accent: 'var(--color-warm-accent)',
        'accent-hover': 'var(--color-warm-accent-hover)',
        border: 'var(--color-warm-border)',
      },
    },
  },
},
```

**Step 3: ビルド確認**

Run: `npm run build`
Expected: ビルド成功

**Step 4: コミット**

```bash
git add styles/globals.css tailwind.config.cjs
git commit -m "feat: ウォームニュートラルカラーパレットをCSS変数で定義"
```

---

### Task 3: サイドナビゲーション作成

**Files:**
- Create: `components/layout/Sidebar.tsx`
- Modify: `app/layout.tsx`

**Step 1: Sidebar コンポーネントを作成**

`components/layout/Sidebar.tsx`:

```typescript
'use client';

import { Link } from '@heroui/link';
import { Image } from '@heroui/image';
import { AppWindowIcon, AwardIcon, HomeIcon, ImagesIcon, PenToolIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { BsGithub } from 'react-icons/bs';

import { ThemeToggle } from '@/components/layout/ThemeToggle';
import type { NavItem } from '@/types';

const NAVIGATION_ITEMS: NavItem[] = [
  { path: '/', label: 'Home', icon: <HomeIcon aria-hidden="true" size={20} /> },
  { path: '/awards', label: 'Awards', icon: <AwardIcon aria-hidden="true" size={20} /> },
  { path: '/projects', label: 'Projects', icon: <AppWindowIcon aria-hidden="true" size={20} /> },
  { path: '/blog', label: 'Blog', icon: <PenToolIcon aria-hidden="true" size={20} /> },
  { path: '/gallery', label: 'Gallery', icon: <ImagesIcon aria-hidden="true" size={20} /> },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col border-r border-warm-border bg-warm-bg sm:flex">
      {/* Profile section */}
      <div className="flex flex-col items-center px-6 pb-6 pt-8">
        <Image
          isBlurred
          alt="profile-icon"
          className="h-20 w-20"
          radius="full"
          src="/neko.jpg"
        />
        <p className="mt-3 font-heading text-lg font-semibold text-warm-text">Masaki Aida</p>
        <p className="text-sm text-warm-subtext">Engineer</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="flex flex-col gap-1">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`group flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-warm-accent/10 text-warm-accent'
                    : 'text-warm-subtext hover:bg-warm-surface hover:text-warm-text'
                }`}
              >
                <span className={isActive(item.path) ? 'text-warm-accent' : 'text-warm-subtext group-hover:text-warm-text'}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="flex items-center justify-between border-t border-warm-border px-6 py-4">
        <Link
          aria-label="GitHub repository"
          className="rounded-full p-2 text-warm-subtext transition-colors hover:text-warm-text"
          href="https://github.com/aida0710/profile"
          target="_blank"
        >
          <BsGithub aria-hidden="true" className="h-5 w-5" />
        </Link>
        <ThemeToggle />
      </div>
    </aside>
  );
}
```

**Step 2: layout.tsx をサイドバーレイアウトに変更**

`app/layout.tsx` の `RootLayout` 関数:

```typescript
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileHeader } from '@/components/layout/MobileHeader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="ja">
      <body className={clsx('min-h-screen bg-warm-bg font-sans antialiased transition-colors duration-300', fontSans.variable, fontHeading.variable, fontMono.variable)}>
        <Analytics />
        <SpeedInsights />
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <Sidebar />
          <MobileHeader />
          <main className="min-h-screen sm:ml-60">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
```

NavigationBar と Footer のインポートを削除。

**Step 3: ビルド確認**

Run: `npm run build`
Expected: ビルド成功（MobileHeaderはまだ作成しないのでビルドエラー → Step 4で作成）

---

### Task 4: モバイルヘッダー作成

**Files:**
- Create: `components/layout/MobileHeader.tsx`

**Step 1: MobileHeader コンポーネントを作成**

モバイルでは上部にシンプルなヘッダー + ハンバーガーメニュー。既存の `MobileMenu.tsx` のモーダル方式を活用。

```typescript
'use client';

import { AppWindowIcon, AwardIcon, HomeIcon, ImagesIcon, PenToolIcon } from 'lucide-react';

import { MobileMenu } from '@/components/layout/MobileMenu';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import type { NavItem } from '@/types';

const NAVIGATION_ITEMS: NavItem[] = [
  { path: '/', label: 'Home', icon: <HomeIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} /> },
  { path: '/awards', label: 'Awards', icon: <AwardIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} /> },
  { path: '/projects', label: 'Projects', icon: <AppWindowIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} /> },
  { path: '/blog', label: 'Blog', icon: <PenToolIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} /> },
  { path: '/gallery', label: 'Gallery', icon: <ImagesIcon aria-hidden="true" color="currentColor" size={32} strokeWidth={3} /> },
];

export function MobileHeader() {
  return (
    <header className="fixed top-0 z-40 flex w-full items-center justify-between border-b border-warm-border bg-warm-bg px-4 py-3 sm:hidden">
      <MobileMenu navItems={NAVIGATION_ITEMS} />
      <p className="font-heading text-lg font-semibold text-warm-text">Masaki Aida</p>
      <ThemeToggle />
    </header>
  );
}
```

**Step 2: モバイル表示時にメインコンテンツの上部パディングを追加**

`app/layout.tsx` の `<main>` を修正:

```typescript
<main className="min-h-screen pt-14 sm:ml-60 sm:pt-0">
```

**Step 3: ビルド確認**

Run: `npm run build`
Expected: ビルド成功

**Step 4: コミット**

```bash
git add components/layout/Sidebar.tsx components/layout/MobileHeader.tsx app/layout.tsx
git commit -m "feat: サイドナビゲーションとモバイルヘッダーを追加"
```

---

### Task 5: ホームページのリデザイン

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/features/home/SocialIcons.tsx`

**Step 1: ホームページをプロフィール+SNSに集中したデザインに変更**

`app/page.tsx`:

```typescript
import { Image } from '@heroui/image';

import { SocialIcons } from '@/components/features/home/SocialIcons';
import { profileMessages } from '@/data/profile';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-start justify-center px-6 py-12 md:py-20">
      <div className="w-full max-w-2xl">
        {/* Profile hero - only shown on mobile since sidebar has it on desktop */}
        <div className="mb-10 flex flex-col items-center sm:hidden">
          <Image
            isBlurred
            alt="profile-icon"
            className="h-32 w-32"
            radius="full"
            src="/neko.jpg"
          />
        </div>

        <div className="mb-8">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl">
            Masaki Aida
          </h1>
          <p className="mt-1 font-heading text-lg text-warm-subtext md:text-xl">
            相田 優希
          </p>
          <p className="mt-2 text-warm-subtext">Frontend / Backend Engineer</p>
        </div>

        {/* About section */}
        <section className="mb-10">
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent">
            About
          </h2>
          <div className="space-y-2">
            {profileMessages.map((message) => (
              <p key={message} className="text-warm-text/80 leading-relaxed">
                {message}
              </p>
            ))}
          </div>
        </section>

        {/* Links section */}
        <section>
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent">
            Links
          </h2>
          <SocialIcons />
        </section>
      </div>
    </div>
  );
}
```

**Step 2: SocialIcons をリデザイン**

`components/features/home/SocialIcons.tsx`:

```typescript
import { Link } from '@heroui/link';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { SiQiita, SiWakatime } from 'react-icons/si';

import type { SocialLink } from '@/types';

const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/aida0710', icon: <BsGithub aria-hidden="true" className="h-5 w-5" />, label: 'GitHub' },
  { href: 'https://twitter.com/aida_0710', icon: <BsTwitter aria-hidden="true" className="h-5 w-5" />, label: 'Twitter' },
  { href: 'https://www.instagram.com/aida_07100/', icon: <BsInstagram aria-hidden="true" className="h-5 w-5" />, label: 'Instagram' },
  { href: 'https://qiita.com/aida0710', icon: <SiQiita aria-hidden="true" className="h-5 w-5" />, label: 'Qiita' },
  { href: 'https://wakatime.com/@aida_0710', icon: <SiWakatime aria-hidden="true" className="h-5 w-5" />, label: 'Wakatime' },
];

export function SocialIcons() {
  return (
    <div className="flex flex-wrap gap-3">
      {SOCIAL_LINKS.map((link) => (
        <Link
          key={link.label}
          aria-label={link.label}
          className="flex items-center gap-2 rounded-lg border border-warm-border bg-warm-surface px-4 py-2.5 text-sm text-warm-text transition-all duration-200 hover:border-warm-accent hover:text-warm-accent"
          href={link.href}
          target="_blank"
        >
          {link.icon}
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
```

**Step 3: NavigationButtons.tsx を削除（不要になるため）**

`components/features/home/NavigationButtons.tsx` を削除。

**Step 4: ビルド確認**

Run: `npm run build`
Expected: ビルド成功

**Step 5: コミット**

```bash
git add app/page.tsx components/features/home/SocialIcons.tsx
git rm components/features/home/NavigationButtons.tsx
git commit -m "feat: ホームページをプロフィール+SNS中心にリデザイン"
```

---

### Task 6: 共通コンポーネントのスタイル更新

**Files:**
- Modify: `components/common/BlockFrame.tsx`
- Modify: `components/common/TextBlock.tsx`
- Modify: `components/layout/ThemeToggle.tsx`

**Step 1: BlockFrame をウォームトーンに更新**

```typescript
import type { BlockFrameProps } from '@/types';

export function BlockFrame({ title, description, children }: BlockFrameProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6">
      <header className="mb-8">
        <h1 className="mb-2 font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl">{title}</h1>
        <p className="text-sm text-warm-subtext md:text-base">{description}</p>
      </header>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  );
}
```

**Step 2: TextBlock をウォームトーンに更新**

```typescript
import type { TextBlockProps } from '@/types';

export function TextBlock({ messages }: TextBlockProps) {
  return (
    <div className="py-4">
      {messages.map((message) => (
        <p key={message} className="break-words text-base leading-relaxed text-warm-text/80 md:text-lg">
          {message}
        </p>
      ))}
    </div>
  );
}
```

**Step 3: ThemeToggle をウォームトーンに更新**

```typescript
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  const toggleTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = theme === 'light';
  const ThemeIcon = isLight ? BsFillMoonStarsFill : BsFillSunFill;

  return (
    <button
      type="button"
      aria-label={isLight ? 'ダークモードに切り替え' : 'ライトモードに切り替え'}
      className="cursor-pointer rounded-full p-2 text-warm-subtext transition-colors hover:text-warm-text"
      onClick={toggleTheme}
    >
      <ThemeIcon aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
```

**Step 4: ビルド確認**

Run: `npm run build`
Expected: ビルド成功

**Step 5: コミット**

```bash
git add components/common/BlockFrame.tsx components/common/TextBlock.tsx components/layout/ThemeToggle.tsx
git commit -m "feat: 共通コンポーネントをウォームニュートラルに更新"
```

---

### Task 7: カードコンポーネントのリデザイン

**Files:**
- Modify: `components/features/award/AwardCard.tsx`
- Modify: `components/features/projects/ProjectCard.tsx`
- Modify: `components/features/projects/ProjectCardModal.tsx`
- Modify: `components/features/blog/BlogCard.tsx`

**Step 1: AwardCard をリデザイン**

```typescript
import Image from 'next/image';
import Link from 'next/link';
import type { Award } from '@/types';

interface AwardCardProps {
  award: Award;
}

export function AwardCard({ award }: AwardCardProps) {
  return (
    <Link href={award.link} target="_blank">
      <article className="group h-full overflow-hidden rounded-xl border border-warm-border bg-warm-surface transition-all duration-300 hover:-translate-y-1 hover:border-warm-accent/30 hover:shadow-lg hover:shadow-warm-accent/5">
        <div className="p-5">
          <p className="text-xs font-medium text-warm-subtext">{award.organization}</p>
          <p className="mt-0.5 font-mono text-xs text-warm-subtext">{award.date}</p>
          <h3 className="mt-2 font-heading text-base font-semibold text-warm-text">{award.description}</h3>
        </div>
        <div className="px-5 pb-5">
          <Image
            alt={award.description}
            className="aspect-video rounded-lg object-contain object-center"
            height={1080}
            src={`/images/awards/${award.image}`}
            width={1920}
          />
        </div>
      </article>
    </Link>
  );
}
```

**Step 2: ProjectCard をリデザイン**

```typescript
import Image from 'next/image';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <button type="button" className="h-full w-full cursor-pointer text-left" onClick={onOpen}>
      <article className="group h-full overflow-hidden rounded-xl border border-warm-border bg-warm-surface transition-all duration-300 hover:-translate-y-1 hover:border-warm-accent/30 hover:shadow-lg hover:shadow-warm-accent/5">
        <div className="p-5">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-heading text-base font-semibold text-warm-text">{project.title}</h2>
            <span className="rounded-full bg-warm-accent/10 px-2.5 py-0.5 font-mono text-xs text-warm-accent">{project.language}</span>
          </div>
          {project.description.map((item) => (
            <p key={item} className="text-sm leading-relaxed text-warm-subtext">
              {item}
            </p>
          ))}
        </div>
        <div className="px-5 pb-5">
          <Image
            alt={project.title}
            className="aspect-video rounded-lg"
            height={1080}
            src={`/images/projects/${project.image}`}
            width={1920}
          />
        </div>
      </article>
    </button>
  );
}
```

**Step 3: ProjectCardModal をリデザイン**

```typescript
'use client';
import { Button } from '@heroui/button';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@heroui/modal';
import Link from 'next/link';
import type { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface ProjectCardModalProps {
  project: Project;
}

export function ProjectCardModal({ project }: ProjectCardModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ProjectCard project={project} onOpen={onOpen} />
      <Modal isOpen={isOpen} placement="center" size="xl" onOpenChange={onOpenChange} className="overscroll-contain border border-warm-border bg-warm-bg">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="font-heading text-warm-text">{project.title}</ModalHeader>
              <ModalBody>
                <div className="mb-3">
                  {project.description.map((item) => (
                    <p key={item} className="text-sm leading-relaxed text-warm-text/80">
                      {item}
                    </p>
                  ))}
                </div>
                {Object.entries(project.links).map(([key, link]) => (
                  <Link
                    key={key}
                    className="block rounded-lg border border-warm-border bg-warm-surface px-4 py-3 text-sm text-warm-accent transition-colors hover:border-warm-accent/30 hover:bg-warm-accent/5"
                    href={link.url}
                    target="_blank"
                  >
                    {link.description}
                  </Link>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button className="text-warm-subtext" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
```

**Step 4: BlogCard をリデザイン**

```typescript
import { Chip } from '@heroui/chip';
import { Link } from '@heroui/link';
import { CalendarDays } from 'lucide-react';
import Image from 'next/image';
import { BLOG_PICTURE_DIRECTORY } from '@/data/blog';
import type { BlogPost } from '@/types';
import { HighlightText } from './HighlightText';

interface BlogCardProps {
  post: BlogPost;
  searchQuery?: string;
}

export function BlogCard({ post, searchQuery = '' }: BlogCardProps) {
  const stripLinkMarkdown = (text: string): string => {
    return text.replace(/\[(.*?)]\(.*?\)/g, '$1');
  };

  const getDisplayText = (): string => {
    if (post.content.length === 0) return '';
    return stripLinkMarkdown(post.content[0]);
  };

  const displayText = getDisplayText();

  return (
    <Link href={`/blog/${post.slug}`} className="block w-full">
      <article className="flex w-full flex-col gap-4 overflow-hidden rounded-xl border border-warm-border bg-warm-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-warm-accent/30 hover:shadow-lg hover:shadow-warm-accent/5 md:flex-row">
        <div className="w-full md:w-2/3">
          <h2 className="mb-2 font-heading text-lg font-semibold text-warm-text">
            <HighlightText text={post.title} highlight={searchQuery} />
          </h2>
          <p className="line-clamp-2 text-sm text-warm-subtext">
            <HighlightText text={displayText} highlight={searchQuery} />
          </p>
        </div>

        {post.images.length > 0 && (
          <div className="order-first w-full flex-shrink-0 md:order-last md:w-1/3">
            <div className="relative h-32 w-full overflow-hidden rounded-lg">
              <Image
                src={BLOG_PICTURE_DIRECTORY + post.images[0]}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="flex w-full flex-wrap items-center justify-between gap-2 border-t border-warm-border pt-3 md:w-2/3">
          <div className="flex items-center font-mono text-xs text-warm-subtext">
            <CalendarDays aria-hidden="true" size={14} className="mr-1.5" />
            {post.date}
          </div>
          {post.tags && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  size="sm"
                  className={`${
                    searchQuery && tag.toLowerCase().includes(searchQuery.toLowerCase())
                      ? 'border-warm-accent bg-warm-accent/10 text-warm-accent'
                      : 'border-warm-border bg-warm-bg text-warm-subtext'
                  } border`}
                  variant="flat"
                >
                  <HighlightText text={tag} highlight={searchQuery} />
                </Chip>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
```

**Step 5: ビルド確認**

Run: `npm run build`
Expected: ビルド成功

**Step 6: コミット**

```bash
git add components/features/award/AwardCard.tsx components/features/projects/ProjectCard.tsx components/features/projects/ProjectCardModal.tsx components/features/blog/BlogCard.tsx
git commit -m "feat: カードコンポーネントをウォームニュートラルにリデザイン"
```

---

### Task 8: 各ページのスタイル更新

**Files:**
- Modify: `app/awards/page.tsx`
- Modify: `app/projects/page.tsx`
- Modify: `app/blog/page.tsx`
- Modify: `app/gallery/page.tsx`

**Step 1: 各ページに統一的なパディングとスタイルを適用**

Awards (`app/awards/page.tsx`):
```typescript
export default function AwardsPage() {
  return (
    <div className="px-2 py-10 md:py-16">
      <BlockFrame description="頂いた賞の一覧" title="Award">
        {awards.map((award) => (
          <AwardCard key={`${award.organization}-${award.description}-${award.date}`} award={award} />
        ))}
      </BlockFrame>
    </div>
  );
}
```

Projects (`app/projects/page.tsx`):
```typescript
export default function ProjectsPage() {
  return (
    <div className="px-2 py-10 md:py-16">
      <BlockFrame description="自分が開発した又は携わったプロジェクト" title="Projects">
        {projects.map((project: Project) => (
          <ProjectCardModal key={project.title} project={project} />
        ))}
      </BlockFrame>
    </div>
  );
}
```

Blog (`app/blog/page.tsx`):
```typescript
export default function BlogPage() {
  const posts: BlogPost[] = getSortedPosts();

  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="mb-8 px-6">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl">Blog</h1>
        <TextBlock messages={BLOG_INTRODUCTION} />
      </div>

      <div className="mx-auto max-w-3xl px-4">
        {posts.length > 0 ? (
          <BlogSearchContainer posts={posts} />
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-warm-subtext">現在投稿されている記事はありません。</p>
          </div>
        )}
      </div>
    </div>
  );
}
```

Gallery (`app/gallery/page.tsx`):
```typescript
export default function GalleryPage() {
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="mb-8 px-6">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl">Photo Gallery</h1>
        <TextBlock messages={GALLERY_INTRODUCTION} />
      </div>

      <ImageGallery images={images} />
    </div>
  );
}
```

**Step 2: ビルド確認**

Run: `npm run build`
Expected: ビルド成功

**Step 3: コミット**

```bash
git add app/awards/page.tsx app/projects/page.tsx app/blog/page.tsx app/gallery/page.tsx
git commit -m "feat: 各ページのスタイルをウォームトーンに統一"
```

---

### Task 9: アニメーション追加

**Files:**
- Create: `components/common/AnimatedSection.tsx`
- Modify: `components/common/BlockFrame.tsx`

**Step 1: スタガーアニメーション用の共通コンポーネントを作成**

`components/common/AnimatedSection.tsx`:

```typescript
'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

**Step 2: BlockFrame でスタガーアニメーションを使用**

`components/common/BlockFrame.tsx`:

```typescript
'use client';

import { AnimatedSection } from '@/components/common/AnimatedSection';
import type { BlockFrameProps } from '@/types';
import { Children } from 'react';

export function BlockFrame({ title, description, children }: BlockFrameProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6">
      <AnimatedSection>
        <header className="mb-8">
          <h1 className="mb-2 font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl">{title}</h1>
          <p className="text-sm text-warm-subtext md:text-base">{description}</p>
        </header>
      </AnimatedSection>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Children.map(children, (child, index) => (
          <AnimatedSection delay={index * 80}>
            {child}
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
```

**Step 3: ビルド確認**

Run: `npm run build`
Expected: ビルド成功

**Step 4: コミット**

```bash
git add components/common/AnimatedSection.tsx components/common/BlockFrame.tsx
git commit -m "feat: スクロール連動スタガーアニメーションを追加"
```

---

### Task 10: 不要コンポーネントの削除とクリーンアップ

**Files:**
- Delete: `components/layout/NavigationBar.tsx`
- Delete: `components/layout/Footer.tsx`
- Delete: `components/features/home/NavigationButtons.tsx`
- Modify: `components/layout/MobileMenu.tsx` (ウォームトーン適用)

**Step 1: 不要ファイルを削除**

```bash
git rm components/layout/NavigationBar.tsx
git rm components/layout/Footer.tsx
```

（NavigationButtons.tsx は Task 5 で削除済み）

**Step 2: MobileMenu をウォームトーンに更新**

`components/layout/MobileMenu.tsx` のスタイルを更新:
- `ModalContent` に `bg-warm-bg` クラスを追加
- リンクのアクティブ色を `text-warm-accent` に変更
- 閉じるボタンを `text-warm-subtext` に変更

**Step 3: MobileMenu.tsx の更新内容**

```typescript
'use client';

import { Divider } from '@heroui/divider';
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@heroui/modal';
import clsx from 'clsx';
import { MenuIcon, XIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import type { NavItem } from '@/types';

const MOTION_VARIANTS = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <>
      <button type="button" aria-label="メニューを開く" className="cursor-pointer text-warm-text" onClick={onOpen}>
        <MenuIcon aria-hidden="true" className="h-6 w-6" />
      </button>

      <Modal
        hideCloseButton
        backdrop="blur"
        isOpen={isOpen}
        motionProps={{ variants: MOTION_VARIANTS }}
        size="full"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="bg-warm-bg">
          <ModalHeader className="flex items-center">
            <button type="button" aria-label="メニューを閉じる" className="mr-4 cursor-pointer text-warm-text" onClick={onClose}>
              <XIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <p className="font-heading text-lg font-semibold text-warm-text">Menu</p>
          </ModalHeader>

          <Divider className="bg-warm-border" />

          <ModalBody className="py-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                className={clsx('flex items-center gap-4 rounded-lg px-4 py-3 text-2xl font-medium transition-colors', {
                  'text-warm-accent': isActive(item.path),
                  'text-warm-text hover:text-warm-accent': !isActive(item.path),
                })}
                href={item.path}
                onClick={onClose}
              >
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
```

**Step 4: ビルド確認**

Run: `npm run build`
Expected: ビルド成功

**Step 5: Biome lint を実行**

Run: `npm run lint`
Expected: エラーなし

**Step 6: コミット**

```bash
git add -A
git commit -m "feat: 不要コンポーネント削除とMobileMenuのスタイル更新"
```

---

### Task 11: 最終確認と微調整

**Step 1: 開発サーバーで全ページを目視確認**

Run: `npm run dev`

確認項目:
- [ ] ホームページ: プロフィール+SNS表示、フォント・色が正しい
- [ ] Awards: カードグリッド表示、スタガーアニメーション動作
- [ ] Projects: カード+モーダル動作
- [ ] Blog: 検索機能動作、カードスタイル
- [ ] Gallery: 画像グリッド表示
- [ ] サイドナビ: アクティブ状態の表示、テーマ切替動作
- [ ] モバイル: ヘッダー表示、ハンバーガーメニュー動作
- [ ] ダークモード/ライトモード切替: 全ページで色が正しく変わる

**Step 2: 微調整**

目視確認で見つかった問題を修正。

**Step 3: ビルド最終確認**

Run: `npm run build`
Expected: ビルド成功、警告なし

**Step 4: コミット**

```bash
git add -A
git commit -m "feat: デザインリニューアル完了 - ウォームニュートラル+サイドナビ"
```
