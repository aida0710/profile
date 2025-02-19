import {TimeLineItem} from '@/app/index/types/timeine';

export const statusMessages: () => string[] = (): string[] => {
    return [
        '趣味は旅先での風景撮影で、カメラを片手に各地を巡るのが好きです。',
        '技術面では最近、Arduinoを使ったハードウェア実装やRustを使ったネットワークプログラミングに取り組んでいます。',
        'IT企業に勤務する傍ら、100Program アラムナイメンターをやってたり、Sechack365 学習駆動 坂井ゼミでRBDを介したアプリケーショントンネルの開発を行っています。',
    ];
};

export const timeTableData = (): TimeLineItem[] => {
    return [
        {
            date: '2025年02月03日~現在',
            title: '100Programs アラムナイ メンター',
            description: '100Programsのアラムナイメンターとして、第7期から運営のサポートを行っています。',
        },
        {
            date: '2024年05月25日~現在',
            title: 'SecHack365 2024',
            description: '学習駆動コース 坂井ゼミに所属。データベースを介してパケットの転送を行うアプリケーショントンネルを開発しています。',
        },
        {
            date: '2024年04月01日~現在',
            title: '大江戸テレコム株式会社へ入社',
            description: '新卒として入社。データベース関係やインフラ周りをやっています。',
        },
        {
            date: '2024年03月31日',
            title: '高校卒業',
            description: '全日制 普通課程の高校を卒業',
        },
        {
            date: '2024年2月5日~同年3月24日',
            title: '100Program 5期 参加・受賞',
            description: 'webネットワークシミュレータ/デスクトップマスコット/自作インタープリタ言語を開発しました',
        },
        {
            date: '2024年08月03日~同年09月24日',
            title: '100Program 4期 参加・受賞',
            description: '人と人との関係がForce Graphで表現するコミュニティー支援用SNSアプリを開発しました',
        },
        {
            date: '2017年11月頃~2023年07月頃',
            title: 'マインクラフトサーバーの運営・開発',
            description:
                'PocketMine-MPを利用したマインクラフトサーバーの開発と運営を行いました。ゼロからサーバー周りのインフラやプラグインの開発、コミュニティ管理まで行い、約700人規模のコミュニティへと成長させました',
        },
    ];
};
