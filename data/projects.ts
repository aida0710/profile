import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: { ja: 'pdf-translate', en: 'pdf-translate' },
    description: {
      ja: [
        '英語論文を読める日本語に対訳翻訳する Web ツール。図表・段組みのレイアウトを保ったまま翻訳し、訳文 / 原文 / 対訳を切り替えて読める',
        'フォルダ + 色付きタグで論文棚を整理。ドラッグ&ドロップ・一括移動・横断検索に対応し、冒頭から日本語要約を自動生成することで積ん読の中身を一目で把握できる',
        'OpenAI・Anthropic 等のAPIキーに対応し、OpenAI互換APIならセルフホスト LLM も利用可。APIキー代を除き利用は無料',
      ],
      en: [
        'A web tool that turns English papers into readable Japanese side-by-side translations. Figures and multi-column layouts are preserved, and you can switch between translation, original, and parallel views.',
        'Organize your library with folders and colored tags. Supports drag & drop, bulk moves, and cross-library search, and auto-generates a Japanese summary from the opening so you can see at a glance what is sitting in your backlog.',
        'Works with OpenAI, Anthropic, and other API keys — any OpenAI-compatible endpoint, including self-hosted LLMs. Free to use apart from your own API costs.',
      ],
    },
    image: 'pdf-translation.png',
    links: {
      web: {
        description: { ja: '公開サイト', en: 'Website' },
        url: 'https://translation.aida0710.work/',
      },
    },
    language: 'TypeScript',
  },
  {
    title: { ja: 'mado', en: 'mado' },
    description: {
      ja: [
        '複数の S3 互換ストレージを横断的に管理する Web ツール。バケット・ディレクトリのブラウズ、テキスト・画像・音声・tar/tar.gz/tar.xz のインラインプレビュー、Web URL / S3 URL のワンクリックコピーに対応',
        '各ディレクトリに Markdown の README を残せる(履歴付き)ほか、チーム全体で共有する Markdown ノート機能も搭載。プレビューペインは幅可変で、幅の設定は自動保存される',
        'Hono + PostgreSQL のバックエンドと Vite フロントエンドを Docker Compose で構成。S3 認証情報は AES-256-GCM で保存時暗号化し、CSRF 防御・PG ロール分離でプライベートネットワーク内運用を想定した設計',
      ],
      en: [
        'A web tool for managing multiple S3-compatible storage backends side by side. Browse buckets and directories, preview text / images / audio / tar / tar.gz / tar.xz inline, and copy Web or S3 URLs in one click.',
        'Each directory can keep a Markdown README (with history), and the workspace ships with team-wide Markdown notes. The preview pane is resizable and the width is auto-saved.',
        'Built with a Hono + PostgreSQL backend and a Vite frontend, all wired together via Docker Compose. S3 credentials are encrypted at rest with AES-256-GCM, and the design uses CSRF protection plus PostgreSQL role isolation, assuming operation inside a private network.',
      ],
    },
    image: 'mado.png',
    links: {
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/mado',
      },
    },
    language: 'TypeScript',
  },
  {
    title: { ja: 'Mochi Hosting', en: 'Mochi Hosting' },
    description: {
      ja: [
        'Minecraft Bedrock 版・Java 版のサーバーを、ブラウザだけで作成・管理できるホスティングプラットフォーム',
        'BDS / PocketMine-MP / Paper / Spigot / Forge / Fabric / Vanilla などの主要サーバーソフトに対応し、Web コンソール・SFTP・ファイル編集・複数ユーザー共同管理・自動停止を Web 画面に集約',
        '各サーバーを Docker コンテナとして隔離し、ポート割り当て・リソース制限・監査ログ・SFTP 認証など運用面の機能も自己実装',
      ],
      en: [
        'A hosting platform that lets you create and manage Minecraft Bedrock and Java Edition servers entirely from your browser.',
        'Supports the major server runtimes — BDS, PocketMine-MP, Paper, Spigot, Forge, Fabric, Vanilla — with web console, SFTP, file editing, multi-user shared management, and auto-stop all in one UI.',
        'Each server runs in an isolated Docker container, with port allocation, resource limits, audit logs, and SFTP authentication all implemented in-house.',
      ],
    },
    image: 'mochi-hosting.png',
    links: {
      github: {
        description: { ja: 'ホームページ', en: 'Website' },
        url: 'https://hosting.aida0710.work/',
      },
    },
    language: 'TypeScript',
  },
  {
    title: { ja: 'mdx-cli', en: 'mdx-cli' },
    description: {
      ja: [
        'MDX I クラウドインフラプラットフォームの非公式 CLI ツール。Web ポータル (oprpl.mdx.jp) での VM 管理・ネットワーク設定をターミナルから一括操作できる',
        'VM の一括作成・起動・停止・削除・構成変更に対応し、`worker-{a-g}-{0-9}` のようなパターン展開で数十台規模の操作を 1 コマンドで実行。10 並列・リトライ付きで大規模運用にも耐える設計',
        'Shibboleth SSO 認証 (keyring によるクレデンシャル保管)、DNAT/ACL/グローバル IP 管理、Web ポータルと同じ列構成での CSV 出力、シェル補完など、日常運用に必要な機能を一通り網羅',
      ],
      en: [
        'An unofficial CLI for the MDX I cloud infrastructure platform, bringing VM management and network configuration from the web portal (oprpl.mdx.jp) into the terminal.',
        'Supports bulk create / start / stop / delete / reconfigure of VMs, with pattern expansion like `worker-{a-g}-{0-9}` so dozens of hosts can be touched in a single command. Runs 10-way parallel with retries to hold up under large-scale operations.',
        'Covers what you actually need day to day: Shibboleth SSO with keyring-backed credential storage, DNAT / ACL / global-IP management, CSV export that mirrors the web portal columns, and shell completion.',
      ],
    },
    image: 'mdx-cli.png',
    links: {
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/mdx-cli',
      },
    },
    language: 'Python',
  },
  {
    title: { ja: 'Dango Hosting', en: 'Dango Hosting' },
    description: {
      ja: [
        'ロビーから各サーバーへ、串団子のように繋がるMinecraft Java Editionのサーバーネットワーク',
        'ゲーム内コマンドで自分だけのサーバーを作成でき、サーバーごとに招待やユーザー権限を設定可能。共通のチャット・経済・レベル・マイルストーン・ランキングなどの機能を搭載',
        '普通のサバイバルやクリエイティブを、みんなでもっと楽しく気軽に。そんなサーバーを目指して開発しました。',
      ],
      en: [
        'A Minecraft Java Edition server network where a central lobby strings each individual server together like dango on a skewer.',
        'Players can create their own server with an in-game command and configure invites and permissions per server. The network ships with shared chat, economy, levels, milestones, and ranking systems.',
        'Designed to make ordinary survival and creative play more fun and approachable as a group.',
      ],
    },
    image: 'dango-hosting.png',
    links: {
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/dango-hosting',
      },
    },
    language: 'Kotlin / TypeScript',
  },
  {
    title: { ja: 'Audio Player Plugin', en: 'Audio Player Plugin' },
    description: {
      ja: [
        'JetBrains IDE向けの拡張機能',
        '音声ファイルをクリックした時にカスタムUIが表示され、再生・停止はもちろん、スペクトラム表示などにも対応',
      ],
      en: [
        'A JetBrains IDE plugin.',
        'Clicking an audio file opens a custom UI with play / stop controls and a spectrum visualizer.',
      ],
    },
    image: 'audio-player-plugin.png',
    links: {
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/jetbrains-audio-player-plugin',
      },
      marketplace: {
        description: { ja: 'JetBrains Marketplace', en: 'JetBrains Marketplace' },
        url: 'https://plugins.jetbrains.com/plugin/30608-audio-player',
      },
    },
    language: 'Kotlin',
  },
  {
    title: { ja: '人流楽器', en: 'Mobility Instrument' },
    description: {
      ja: [
        '人の移動を音楽に変換するモバイルアプリ',
        '街演奏モード・移動の軌跡で演奏するモード・デジタルマップ機能の3つのモードを搭載し、定禅寺ストリートジャズフェスティバルで実践',
      ],
      en: [
        'A mobile app that turns the movement of people into music.',
        'Ships with three modes — street performance, performance driven by your movement trail, and a digital map — and was used live at the Jozenji Street Jazz Festival.',
      ],
    },
    image: 'mobility-instrument.png',
    links: {
      web: {
        description: { ja: '公開サイト', en: 'Website' },
        url: 'https://mobility-instrument-special.studio.site/',
      },
      festival: {
        description: {
          ja: '第34回 定禅寺ストリートジャズフェスティバル',
          en: '34th Jozenji Street Jazz Festival',
        },
        url: 'http://j-streetjazz.com/history/34th/',
      },
    },
    language: 'Dart / TypeScript',
  },
  {
    title: { ja: 'rdb tunnel', en: 'rdb tunnel' },
    description: {
      ja: [
        'rdbを介したl2レベルでのパケットの転送を行い、仮想的に別々のネットワーク空間をつなげることが可能',
        'パケットを確実に洩れなくすべて保存するため、時系列データとして解析なども可能',
      ],
      en: [
        'Forwards L2 packets via a relational database so that separate network spaces can be virtually joined together.',
        'Every packet is reliably persisted, so the captured stream can be analyzed as time-series data.',
      ],
    },
    image: 'rdb-tunnel.png',
    links: {
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/rdb-tunnel',
      },
    },
    language: 'Rust',
  },
  {
    title: {
      ja: '教育目的、演習目的のDosツール',
      en: 'DoS Tool for Educational Use',
    },
    description: {
      ja: [
        'syn flood攻撃やudp flood攻撃、不正なip headerの送信などが可能なツールです。',
        '※ 犯罪ですので、攻撃目的の使用はしないでください。',
      ],
      en: [
        'A tool that can perform SYN flood, UDP flood, and malformed IP-header sends — built for learning and lab exercises.',
        '* Misusing this for actual attacks is illegal. Do not use it against systems you do not own or have permission to test.',
      ],
    },
    image: 'dos-attack-tool.png',
    links: {
      github_single: {
        description: { ja: '単一スレッド処理のプロジェクト', en: 'Single-threaded implementation' },
        url: 'https://github.com/aida0710/dos-attack-tool',
      },
      github_multi: {
        description: { ja: '複数スレッド処理のプロジェクト', en: 'Multi-threaded implementation' },
        url: 'https://github.com/aida0710/parallel-dos-attack-tool',
      },
    },
    language: 'Rust',
  },
  {
    title: {
      ja: 'ネットワークパケット傍聴ツール',
      en: 'Network Packet Sniffer',
    },
    description: {
      ja: [
        'パケットをキャプチャし、ip fragmentsの再構築とtcp streamの再構成を行います。',
        '非暗号通信のみにはなりますが、中身を見ることが可能です。',
      ],
      en: [
        'Captures packets and reassembles IP fragments along with TCP streams.',
        'For unencrypted traffic only, you can inspect the payload contents.',
      ],
    },
    image: 'ip-reassembly.png',
    links: {
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/ip-reassembly',
      },
    },
    language: 'Rust',
  },
  {
    title: { ja: 'Catsial', en: 'Catsial' },
    description: {
      ja: ['Web単語帳アプリ', '現在開発中 データベースはMySQLを使用'],
      en: ['A web flashcard / vocabulary app.', 'Under development. Backed by MySQL.'],
    },
    image: 'catsial.png',
    links: {
      web: {
        description: {
          ja: '公開サイト(現在公開停止中)',
          en: 'Website (currently offline)',
        },
        url: 'https://www.catsial.app',
      },
      awards: {
        description: {
          ja: '岐阜協立大学 第6回 高校生ビジネスアイデアコンテスト',
          en: 'Gifu Kyoritsu University — 6th High School Business Idea Contest',
        },
        url: 'https://www.gku.ac.jp/topics/event/post-354.html',
      },
    },
    language: 'TypeScript',
  },
  {
    title: { ja: 'Web Network Simulator', en: 'Web Network Simulator' },
    description: {
      ja: ['100pro 5期で作成したネットワークシミュレータ', '主にフロントエンドなどを担当し、Next.jsで開発'],
      en: [
        'A network simulator built during the 100program 5th cohort.',
        'I primarily worked on the frontend, built with Next.js.',
      ],
    },
    image: 'network-simulator.png',
    links: {
      web: {
        description: { ja: '公開サイト', en: 'Website' },
        url: 'https://www.nw-sim.net/',
      },
      github: {
        description: { ja: 'Github Repositories', en: 'GitHub Repositories' },
        url: 'https://github.com/orgs/web-network-simulator/repositories',
      },
    },
    language: 'TypeScript / Python',
  },
  {
    title: { ja: 'Desktop Mascot', en: 'Desktop Mascot' },
    description: {
      ja: ['100pro 5期で作成したデスクトップマスコット', 'Unity + C# + Google Calendar Api for .Netで開発'],
      en: [
        'A desktop mascot built during the 100program 5th cohort.',
        'Built with Unity + C# + Google Calendar API for .NET.',
      ],
    },
    image: 'desktop-mascot.png',
    links: {
      web: {
        description: { ja: '100Program公式サイト', en: '100Program official site' },
        url: 'https://100program.jp/',
      },
    },
    language: 'C#',
  },
  {
    title: { ja: 'Zircon Lang', en: 'Zircon Lang' },
    description: {
      ja: ['Kotlin製自作インタープリター言語', '開発中(字句解析器/構文解析器/インタープリター実装済み)'],
      en: [
        'A custom interpreted language implemented in Kotlin.',
        'Under development — lexer, parser, and interpreter are already in place.',
      ],
    },
    image: 'zircon-lang.png',
    links: {
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/zircon-lang',
      },
    },
    language: 'Kotlin',
  },
  {
    title: { ja: 'Blur Focus', en: 'Blur Focus' },
    description: {
      ja: ['初めて作成したクローム拡張機能。', '文章を読むときに文字が滑るので、文字が滑らないように対策する拡張機能'],
      en: [
        'My first Chrome extension.',
        'Helps keep your eyes on the line you are reading by dimming the rest of the text.',
      ],
    },
    image: 'blur-focus.png',
    links: {
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/blur-focus',
      },
    },
    language: 'TypeScript',
  },
  {
    title: { ja: 'Folivora', en: 'Folivora' },
    description: {
      ja: ['マインクラフトサーバのプラグイン。真面目に設計を頑張ったプロジェクト'],
      en: ['A Minecraft server plugin — a project where I put serious effort into the design.'],
    },
    image: 'folivora.png',
    links: {
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/Folivora',
      },
    },
    language: 'PHP',
  },
  {
    title: { ja: 'Profile', en: 'Profile' },
    description: {
      ja: ['この自己紹介サイトのソースコード'],
      en: ['The source code for this profile site.'],
    },
    image: 'profile.png',
    links: {
      web: {
        description: { ja: '公開サイト', en: 'Website' },
        url: 'https://www.aida0710.work/',
      },
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/profile',
      },
    },
    language: 'TypeScript',
  },
];
