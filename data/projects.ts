import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'sshc',
    category: 'Network',
    featured: true,
    title: { ja: 'sshc', en: 'sshc' },
    description: {
      ja: [
        'OpenSSHの設定ファイルをそのまま使う、ローカルファーストのSSHクライアント。接続管理、Terminal、SFTP、Workspace、スニペット、接続ごとのVPN、暗号化同期を1つのWeb UIとCLIから扱える',
        '設定ファイルのコメント・順序・空白・Includeを保った編集、中断再開やバックグラウンド転送キュー付きSFTP、最大4ペインを並べるWorkspace、Vaultによるパスワード・鍵パスフレーズ・TOTPの安全な保存と再利用に対応',
        'WireGuard・L2TP/IPsec・OpenConnect・OpenVPN・IKEv2/IPsec による接続ごとのVPN、S3互換ストレージへの暗号化スナップショット同期、Homebrew・インストーラー・APKでの各OS対応を備える',
      ],
      en: [
        'A local-first SSH client that works directly with your OpenSSH config files. Manages connections, Terminal, SFTP, Workspace, snippets, per-connection VPN, and encrypted sync from a single Web UI and CLI.',
        'Edits config files while preserving comments, order, whitespace, and Include directives. Ships with resumable SFTP with a background transfer queue, up to 4-pane Workspace, and a Vault for securely storing and reusing passwords, key passphrases, and TOTP keys.',
        'Supports per-connection VPN (WireGuard, L2TP/IPsec, OpenConnect, OpenVPN, IKEv2/IPsec), encrypted snapshot sync via S3-compatible storage, and installs on macOS, Linux, Windows, and Android.',
      ],
    },
    image: 'sshc.png',
    links: {
      docs: {
        description: { ja: 'ドキュメント', en: 'Documentation' },
        url: 'https://aida0710.github.io/sshc/',
      },
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/sshc',
      },
    },
    language: 'Go',
  },
  {
    id: 'mado-s3-datacatalog',
    category: 'Infra',
    featured: true,
    title: { ja: 'mado S3 Data Catalog', en: 'mado S3 Data Catalog' },
    description: {
      ja: [
        '複数の S3 アカウントと多数のバケットを横断して管理する Web ツール。テキスト・画像・音声・MP4 動画・tar/tar.gz/tar.xz の中身をダウンロードせずにその場でプレビューでき、Web URL / S3 URL をワンクリックでコピーできる',
        '各ディレクトリの README とチーム共有ノート(どちらも履歴付き)、音声の波形・スペクトログラムと同期プレイヤーでの聴き比べ、配下の件数・容量の集計と他ストレージへ移す場合の費用・時間の見積もり、バケット容量の推移グラフに対応',
        'OpenLineage 形式のデータセット系譜の可視化、Local User / OIDC SSO と 4 段階のロールによる権限管理と監査ログ、接続ごとの操作制限、機能単位で権限を選べるアクセストークンを備える',
      ],
      en: [
        'A web tool for managing many buckets across multiple S3 accounts. Preview text, images, audio, MP4 video, and the contents of tar / tar.gz / tar.xz in place without downloading, and copy Web or S3 URLs in one click.',
        'Per-directory READMEs and a team-wide shared note (both with history), audio waveforms, spectrograms, and a synced player for side-by-side listening, object count and size totals with cost and time estimates for moving data to other storage, and capacity charts per bucket.',
        'Includes OpenLineage-based dataset lineage views, Local User / OIDC SSO with four roles and audit logs, per-connection operation limits, and access tokens scoped by feature.',
      ],
    },
    image: 'mado-s3-datacatalog.png',
    links: {
      docs: {
        description: { ja: 'ドキュメント', en: 'Documentation' },
        url: 'https://aida0710.github.io/mado-s3-datacatalog/',
      },
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/mado-s3-datacatalog',
      },
    },
    language: 'TypeScript',
  },
  {
    id: 'mado-ml-tracking',
    category: 'Infra',
    title: { ja: 'mado ML Tracking', en: 'mado ML Tracking' },
    description: {
      ja: [
        '実験・モデル・実行コード・データセットを同じ Run に結び付けて管理する、MLflow 3 互換の実験管理基盤。パラメータ・時系列メトリクス・ログ・GPU 使用率を記録し、Run の比較やメディアのプレビューができる',
        'モデルの版ごとに重み・親モデル・生成元の Run を残し、登録をきっかけに推論・評価を自動でキューへ投入。コードは画面上のエディタで編集でき、SSH 経由の GPU ジョブとして実行・再実行できる',
        'React / Vite の画面、Hono の API、PostgreSQL、Python SDK と SSH worker で構成。公式 MLflow 3 SDK からも記録でき、成果物はファイルシステムか S3 互換ストレージを Project ごとに選べる',
      ],
      en: [
        'An MLflow 3-compatible experiment tracking platform that ties experiments, models, code, and datasets to the same Run. Records parameters, time-series metrics, logs, and GPU usage, with Run comparison and media previews.',
        'Each model version keeps its weights, parent model, and source Run, and registering a version can automatically queue inference and evaluation. Code is edited in an in-browser editor and runs as GPU jobs over SSH, with re-runs tracked separately.',
        'Built with a React / Vite frontend, a Hono API, PostgreSQL, a Python SDK, and an SSH worker. The official MLflow 3 SDK can log to it too, and artifacts go to the filesystem or S3-compatible storage, chosen per Project.',
      ],
    },
    image: 'mado-ml-tracking.png',
    links: {
      docs: {
        description: { ja: 'ドキュメント', en: 'Documentation' },
        url: 'https://aida0710.github.io/mado-ml-tracking/',
      },
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/mado-ml-tracking',
      },
    },
    language: 'TypeScript',
  },
  {
    id: 'versitygw-lustre-backend',
    category: 'Infra',
    title: { ja: 'versitygw Lustre backend', en: 'versitygw Lustre backend' },
    description: {
      ja: [
        'ファイルシステムを S3 として公開する Versity S3 Gateway に、Lustre のような並列ファイルシステム向けのバックエンドを追加したフォーク',
        'マルチパートアップロードの各 part を 1 本のスパースファイルの最終位置へ直接書き込み、完了処理は truncate と rename だけで済ませる。reflink が使えない Lustre でも、全データを 2 回書く結合コピーが発生しない',
        'オブジェクトとバケットの属性はバケット単位の SQLite に保存し、user xattr に頼らずメタデータサーバへの問い合わせも減らした。一覧取得の専用実行枠と属性取得の並列化、part を fsync してから成功を返す書き込みにも対応',
      ],
      en: [
        'A fork of the Versity S3 Gateway, which serves a filesystem over S3, that adds a backend for parallel filesystems such as Lustre.',
        'Each multipart part is written straight into its final position in one sparse file, so completing an upload is just a truncate and a rename. On Lustre, where reflink is unavailable, this avoids the concatenating copy that writes every byte twice.',
        'Object and bucket attributes live in a per-bucket SQLite database instead of user xattrs, cutting load on the metadata servers. It also adds a dedicated execution slot for listings, parallel attribute lookups, and fsyncs each part before reporting success.',
      ],
    },
    image: 'versitygw-lustre-backend.png',
    links: {
      github: {
        description: { ja: 'Github Repository', en: 'GitHub Repository' },
        url: 'https://github.com/aida0710/versitygw-lustre-backend',
      },
    },
    language: 'Go',
  },
  {
    id: 'mochi-hosting',
    category: 'Infra',
    featured: true,
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
    id: 'mdx-cli',
    category: 'Infra',
    featured: true,
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
    id: 'dango-hosting',
    category: 'Game',
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
    id: 'audio-player-plugin',
    category: 'Tool',
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
    id: 'mobility-instrument',
    category: 'Art',
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
    id: 'rdb-tunnel',
    category: 'Network',
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
    id: 'dos-attack-tool',
    category: 'Network',
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
    id: 'packet-sniffer',
    category: 'Network',
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
    id: 'catsial',
    category: 'Web',
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
    id: 'web-network-simulator',
    category: 'Network',
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
    id: 'desktop-mascot',
    category: 'App',
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
    id: 'zircon-lang',
    category: 'Language',
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
    id: 'blur-focus',
    category: 'Tool',
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
    id: 'folivora',
    category: 'Game',
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
    id: 'profile',
    category: 'Web',
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
