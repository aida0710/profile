import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'mado',
    description: [
      '複数の S3 互換ストレージを横断的に管理する Web ツール。バケット・ディレクトリのブラウズ、テキスト・画像・音声・tar/tar.gz/tar.xz のインラインプレビュー、Web URL / S3 URL のワンクリックコピーに対応',
      '各ディレクトリに Markdown の README を残せる（履歴付き）ほか、チーム全体で共有する Markdown ノート機能も搭載。プレビューペインは幅可変で、幅の設定は自動保存される',
      'Hono + PostgreSQL のバックエンドと Vite フロントエンドを Docker Compose で構成。S3 認証情報は AES-256-GCM で保存時暗号化し、CSRF 防御・PG ロール分離でプライベートネットワーク内運用を想定した設計',
    ],
    image: 'mado.png',
    links: {
      github: {
        description: 'Github Repository',
        url: 'https://github.com/aida0710/mado',
      },
    },
    language: 'TypeScript',
  },
  {
    title: 'Mochi Hosting',
    description: [
      'Minecraft Bedrock 版・Java 版のサーバーを、ブラウザだけで作成・管理できるホスティングプラットフォーム',
      'BDS / PocketMine-MP / Paper / Spigot / Forge / Fabric / Vanilla などの主要サーバーソフトに対応し、Web コンソール・SFTP・ファイル編集・複数ユーザー共同管理・自動停止を Web 画面に集約',
      '各サーバーを Docker コンテナとして隔離し、ポート割り当て・リソース制限・監査ログ・SFTP 認証など運用面の機能も自己実装',
    ],
    image: 'mochi-hosting.png',
    links: {
      github: {
        description: 'ホームページ',
        url: 'https://hosting.aida0710.work/',
      },
    },
    language: 'TypeScript',
  },
  {
    title: 'mdx-cli',
    description: [
      'MDX I クラウドインフラプラットフォームの非公式 CLI ツール。Web ポータル (oprpl.mdx.jp) での VM 管理・ネットワーク設定をターミナルから一括操作できる',
      'VM の一括作成・起動・停止・削除・構成変更に対応し、`worker-{a-g}-{0-9}` のようなパターン展開で数十台規模の操作を 1 コマンドで実行。10 並列・リトライ付きで大規模運用にも耐える設計',
      'Shibboleth SSO 認証 (keyring によるクレデンシャル保管)、DNAT/ACL/グローバル IP 管理、Web ポータルと同じ列構成での CSV 出力、シェル補完など、日常運用に必要な機能を一通り網羅',
    ],
    image: 'mdx-cli.png',
    links: {
      github: {
        description: 'Github Repository',
        url: 'https://github.com/aida0710/mdx-cli',
      },
    },
    language: 'Python',
  },
  {
    title: 'Dango Hosting',
    description: [
      'ロビーから各サーバーへ、串団子のように繋がるMinecraft Java Editionのサーバーネットワーク',
      'ゲーム内コマンドで自分だけのサーバーを作成でき、サーバーごとに招待やユーザー権限を設定可能。共通のチャット・経済・レベル・マイルストーン・ランキングなどの機能を搭載',
      '普通のサバイバルやクリエイティブを、みんなでもっと楽しく気軽に。そんなサーバーを目指して開発しました。',
    ],
    image: 'dango-hosting.png',
    links: {
      github: {
        description: 'Github Repository',
        url: 'https://github.com/aida0710/dango-hosting',
      },
    },
    language: 'Kotlin / TypeScript',
  },
  {
    title: 'Audio Player Plugin',
    description: [
      'JetBrains IDE向けの拡張機能',
      '音声ファイルをクリックした時にカスタムUIが表示され、再生・停止はもちろん、スペクトラム表示などにも対応',
    ],
    image: 'audio-player-plugin.png',
    links: {
      github: {
        description: 'Github Repository',
        url: 'https://github.com/aida0710/jetbrains-audio-player-plugin',
      },
      marketplace: {
        description: 'JetBrains Marketplace',
        url: 'https://plugins.jetbrains.com/plugin/30608-audio-player',
      },
    },
    language: 'Kotlin',
  },
  {
    title: '人流楽器',
    description: [
      '人の移動を音楽に変換するモバイルアプリ',
      '街演奏モード・移動の軌跡で演奏するモード・デジタルマップ機能の3つのモードを搭載し、定禅寺ストリートジャズフェスティバルで実践',
    ],
    image: 'mobility-instrument.png',
    links: {
      web: {
        description: '公開サイト',
        url: 'https://mobility-instrument-special.studio.site/',
      },
      festival: {
        description: '第34回 定禅寺ストリートジャズフェスティバル',
        url: 'http://j-streetjazz.com/history/34th/',
      },
    },
    language: 'Dart / TypeScript',
  },
  {
    title: 'rdb tunnel',
    description: [
      'rdbを介したl2レベルでのパケットの転送を行い、仮想的に別々のネットワーク空間をつなげることが可能',
      'パケットを確実に洩れなくすべて保存するため、時系列データとして解析なども可能',
    ],
    image: 'rdb-tunnel.png',
    links: {
      github: {
        description: 'Github Repository',
        url: 'https://github.com/aida0710/rdb-tunnel',
      },
    },
    language: 'Rust',
  },
  {
    title: '教育目的、演習目的のDosツール',
    description: [
      'syn flood攻撃やudp flood攻撃、不正なip headerの送信などが可能なツールです。',
      '※ 犯罪ですので、攻撃目的の使用はしないでください。',
    ],
    image: 'dos-attack-tool.png',
    links: {
      github_single: {
        description: '単一スレッド処理のプロジェクト',
        url: 'https://github.com/aida0710/dos-attack-tool',
      },
      github_multi: {
        description: '複数スレッド処理のプロジェクト',
        url: 'https://github.com/aida0710/parallel-dos-attack-tool',
      },
    },
    language: 'Rust',
  },
  {
    title: 'ネットワークパケット傍聴ツール',
    description: [
      'パケットをキャプチャし、ip fragmentsの再構築とtcp streamの再構成を行います。',
      '非暗号通信のみにはなりますが、中身を見ることが可能です。',
    ],
    image: 'ip-reassembly.png',
    links: {
      github: {
        description: 'Github Repository',
        url: 'https://github.com/aida0710/ip-reassembly',
      },
    },
    language: 'Rust',
  },
  {
    title: 'Catsial',
    description: ['Web単語帳アプリ', '現在開発中 データベースはMySQLを使用'],
    image: 'catsial.png',
    links: {
      web: {
        description: '公開サイト(現在公開停止中)',
        url: 'https://www.catsial.app',
      },
      awards: {
        description: '岐阜協立大学 第6回 高校生ビジネスアイデアコンテスト',
        url: 'https://www.gku.ac.jp/topics/event/post-354.html',
      },
    },
    language: 'TypeScript',
  },
  {
    title: 'Web Network Simulator',
    description: ['100pro 5期で作成したネットワークシミュレータ', '主にフロントエンドなどを担当し、Next.jsで開発'],
    image: 'network-simulator.png',
    links: {
      web: {
        description: '公開サイト',
        url: 'https://www.nw-sim.net/',
      },
      github: {
        description: 'Github Repositories',
        url: 'https://github.com/orgs/web-network-simulator/repositories',
      },
    },
    language: 'TypeScript / Python',
  },
  {
    title: 'Desktop Mascot',
    description: ['100pro 5期で作成したデスクトップマスコット', 'Unity + C# + Google Calendar Api for .Netで開発'],
    image: 'desktop-mascot.png',
    links: {
      web: {
        description: '100Program公式サイト',
        url: 'https://100program.jp/',
      },
    },
    language: 'C#',
  },
  {
    title: 'Zircon Lang',
    description: ['Kotlin製自作インタープリター言語', '開発中(字句解析器/構文解析器/インタープリター実装済み)'],
    image: 'zircon-lang.png',
    links: {
      github: {
        description: 'Github Repository',
        url: 'https://github.com/aida0710/zircon-lang',
      },
    },
    language: 'Kotlin',
  },
  {
    title: 'Blur Focus',
    description: [
      '初めて作成したクローム拡張機能。',
      '文章を読むときに文字が滑るので、文字が滑らないように対策する拡張機能',
    ],
    image: 'blur-focus.png',
    links: {
      github: {
        description: 'Github Repository',
        url: 'https://github.com/aida0710/blur-focus',
      },
    },
    language: 'TypeScript',
  },
  {
    title: 'Folivora',
    description: ['マインクラフトサーバのプラグイン。真面目に設計を頑張ったプロジェクト'],
    image: 'folivora.png',
    links: {
      github: {
        description: 'Github Repository',
        url: 'https://github.com/aida0710/Folivora',
      },
    },
    language: 'PHP',
  },
  {
    title: 'Profile',
    description: ['この自己紹介サイトのソースコード'],
    image: 'profile.png',
    links: {
      web: {
        description: '公開サイト',
        url: 'https://www.aida0710.work/',
      },
      github: {
        description: 'Github Repository',
        url: 'https://github.com/aida0710/profile',
      },
    },
    language: 'TypeScript',
  },
];
