export interface AwardsProps {
    organization: string;
    description: string;
    image: string;
    link: string;
    date: string;
}

export const Awards: AwardsProps[] = [
    {
        organization: '総務省 / 株式会社角川アスキー総合研究所',
        description: '異能ベーション 2023年度 ジェネレーションアワード部門 ノミネート',
        image: '異能ベーション-ジェネレーションアワード_表彰状.png',
        link: 'https://www.inno.go.jp/result/2023/generation/nominate/',
        date: '2024年03月02日',
    },
    {
        organization: '東北大学 グリーン未来創造機構',
        description: '2023-2024 Academia in Action ファイナリスト',
        image: 'academia-in-action.png',
        link: 'https://www.ggi.tohoku.ac.jp/academia-in-action/',
        date: '2024年03月04日',
    },
    {
        organization: '東京大学 産学協創推進本部',
        description: '100program 4期 優秀アプリ賞 受賞',
        image: '100program-4.png',
        link: 'https://100program.jp/',
        date: '2023年09月22日',
    },
    {
        organization: "Transeeds Inc.",
        description: 'JAPAN WEB3.0 AWARD 特別賞 αU賞 受賞 by.KDDI株式会社',
        image: 'japan-web3-award.png',
        link: 'https://prtimes.jp/main/html/rd/p/000000024.000056442.html',
        date: '2024年03月19日',
    },
];