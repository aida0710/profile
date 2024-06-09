import {TimeTableData} from '@/app/index/time-table';
import {TableDate} from '@/app/index/utils/table-date';

export const statusMessages: () => string[] = (): string[] => {
    return [
        '最近はネットワークセキュリティに興味があります。',
        'next.jsやreact native, express.jsを使った開発を主に行っています。',
        'データベースに関する知識は、第3正規化までの設計や小規模のSNSが作れる程度です。',
        '色んなことをしてみたい。',
    ];
};

export const timeTableData: () => TimeTableData[] = (): TimeTableData[] => {
    const tableDate: TableDate = new TableDate();

    return [
        {
            date: tableDate.setYear(2024).setMonth(5).setDay(25),
            content: ['SecHack365 2024 参加'],
            link: 'https://sechack365.nict.go.jp/',
        },
        {
            date: tableDate.setYear(2024).setMonth(2),
            content: ['100Program 5期 参加'],
            link: 'https://100program.jp/',
        },
        {
            date: tableDate.setYear(2023).setMonth(8),
            content: ['100Program 4期 参加'],
            link: 'https://100program.jp/',
        },
        {
            date: tableDate.setYear(2023).setMonth(7),
            content: ['マインクラフトサーバの運営・開発終了'],
        },
        {
            date: tableDate.setYear(2017).setMonth(11),
            content: ['マインクラフトサーバーの運営・開発開始'],
        },
    ];
};
