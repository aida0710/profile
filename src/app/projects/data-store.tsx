export interface ProjectsProps {
    title: string;
    description: string[];
    image: string;
    link: string;
    language: string;
}

export const projects: ProjectsProps[] = [
    {
        title: 'Catsial',
        description: ['Web単語帳アプリ', '現在開発中 データベースはMySQLを使用'],
        image: 'catsial.png',
        link: 'https://www.catsial.app',
        language: 'TypeScript',
    },
    {
        title: 'Web Network Simulator',
        description: ['100pro 5期で作成したネットワークシミュレータ', 'フロントエンドなどを担当し、Next.jsで開発', '公開サイト https://nw-sim.net/'],
        image: 'network-simulator.png',
        link: 'https://github.com/orgs/web-network-simulator/repositories',
        language: 'TypeScript / Python',
    },
    {
        title: 'Zircon Lang',
        description: ['Kotlin製自作インタープリター言語', '開発中(字句解析器/構文解析器/インタープリター実装済み)'],
        image: 'zircon-lang.png',
        link: 'https://github.com/aida0710/zircon-lang',
        language: 'Kotlin',
    },
    {
        title: 'Blur Focus',
        description: ['初めて作成したクローム拡張機能。', '文章を読むときに文字が滑るので、文字が滑らないように対策する拡張機能'],
        image: 'blur-focus.png',
        link: 'https://github.com/aida0710/blur-focus',
        language: 'TypeScript',
    },
    {
        title: 'Folivora',
        description: ['マインクラフトサーバのプラグイン。真面目に設計を頑張ったプロジェクト'],
        image: 'folivora.png',
        link: 'https://github.com/aida0710/Folivora',
        language: 'PHP',
    },
    {
        title: 'Profile',
        description: ['この自己紹介サイトのソースコード'],
        image: 'profile.png',
        link: 'https://github.com/aida0710/profile',
        language: 'TypeScript',
    },
];
