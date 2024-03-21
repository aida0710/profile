export interface ProjectsProps {
    title: string;
    description: string;
    image: string;
    link: string;
    language: string;
}

export const projects: ProjectsProps[] = [
    {
        title: 'Catsial',
        description: 'Web単語帳アプリ',
        image: 'catsial.png',
        link: 'https://www.catsial.app',
        language: 'TypeScript',
    },
    {
        title: 'Zircon Lang',
        description: 'Rust製自作言語 インタープリタ式 開発中',
        image: 'zircon-lang.png',
        link: 'https://github.com/aida0710/zircon-lang',
        language: 'Rust',
    },
    {
        title: 'Blur Focus',
        description: '初めて作成したクローム拡張機能。文章を読むときに文字が滑るので、文字が滑らないように対策する拡張機能',
        image: 'blur-focus.png',
        link: 'https://github.com/aida0710/blur-focus',
        language: 'TypeScript',
    },
    {
        title: 'Folivora',
        description: 'マインクラフトサーバのプラグイン。真面目に設計を頑張ったプロジェクト',
        image: 'folivora.png',
        link: 'https://github.com/aida0710/Folivora',
        language: 'PHP',
    },
    {
        title: 'Profile',
        description: 'この自己紹介サイトのソースコード',
        image: 'profile.png',
        link: 'https://github.com/aida0710/profile',
        language: 'TypeScript',
    },
];
