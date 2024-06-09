import {TimeTableData} from '@/app/index/time-table';

export const statusMessages: () => string[] = (): string[] => {
    return [
        '最近はネットワークセキュリティに興味があります。',
        'next.jsやreact native, express.jsを使った開発を主に行っています。',
        'データベースに関する知識は、第3正規化までの設計や小規模のSNSが作れる程度です。',
        '色んなことをしてみたい。',
    ];
};

export const timeTableData: () => TimeTableData[] = (): TimeTableData[] => {
    return [
        {
            date: '2024年5月25日~',
            content: ['SecHack365 2024 参加'],
            link: 'https://sechack365.nict.go.jp/',
        },
        {
            date: '2024年3月31日',
            content: ['高校卒業'],
        },
        {
            date: '2024年2月5日~同年3月24日',
            content: ['100Program 5期 参加'],
            link: 'https://100program.jp/',
        },
        {
            date: '2024年8月3日~同年9月24日',
            content: ['100Program 4期 参加'],
            link: 'https://100program.jp/',
        },
        {
            date: '2017年11月頃~2023年7月頃',
            content: ['マインクラフトサーバーの運営・開発'],
        },
    ];
};
