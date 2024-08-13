import {IChronologicalTableData} from '@/app/index/chronological-table';

export const statusMessages: () => string[] = (): string[] => {
    return [
        "最近は、ネットワークインフラとネットワークセキュリティー分野に手を出しています。",
        "Rustムズイ。",
        "SecHack365 2024 学習駆動コース 坂井ゼミに参加しています。",
    ];
};

export const chronologicalTableData: () => IChronologicalTableData[] = (): IChronologicalTableData[] => {
    return [
        {
            date: '2024年05月25日~',
            content: ['SecHack365 2024 参加'],
            link: 'https://sechack365.nict.go.jp/',
        },
        {
            date: '2024年03月31日',
            content: ['高校卒業'],
        },
        {
            date: '2024年03月19日',
            content: ['JAPAN WEB3.0 AWARD αU賞 受賞'],
            link: 'https://prtimes.jp/main/html/rd/p/000000024.000056442.html',
        },
        {
            date: '2024年03月11日',
            content: ['第6回 高校生ビジネスアイデアコンテスト 奨励賞 受賞'],
            link: 'https://www.gku.ac.jp/topics/event/post-354.html',
        },
        {
            date: '2024年03月02日',
            content: ['異能ベーション 2023年度 ジェネレーションアワード部門 ノミネート'],
            link: 'https://www.inno.go.jp/result/2023/generation/nominate/',
        },
        {
            date: '2024年02月05日~同年03月24日',
            content: ['100Program 5期 参加'],
            link: 'https://100program.jp/',
        },
        {
            date: '2024年08月03日~同年09月24日',
            content: ['100Program 4期 参加'],
            link: 'https://100program.jp/',
        },
        {
            date: '2017年11月頃~2023年07月頃',
            content: ['マインクラフトサーバーの運営・開発'],
        },
    ];
};
