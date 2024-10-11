export interface ProjectsProps {
    title: string;
    description: string[];
    image: string;
    links: {
        [key: string]: {
            description: string;
            url: string;
        };
    };
    language: string;
}

export const projects: ProjectsProps[] = [
    {
        title: '教育目的、演習目的のDosツール',
        description: ['syn flood攻撃やudp flood攻撃、不正なip headerの送信などが可能なツールです。', '※ 犯罪ですので、攻撃目的の使用はしないでください。'],
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
        description: ['初めて作成したクローム拡張機能。', '文章を読むときに文字が滑るので、文字が滑らないように対策する拡張機能'],
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
