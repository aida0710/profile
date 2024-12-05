export const statusMessages: () => string[] = (): string[] => {
    return ['風景の撮影や旅行趣味です', "最近の技術トレンドは、rustを利用したネットワークプログラミングです"];
};

export interface TimeLineItem {
    date: string;
    title: string;
    description: string;
}

export const timeTableData = (): TimeLineItem[] => {
    return [
        {
            date: '2024年5月25日~現在',
            title: 'SecHack365 2024',
            description: '学習駆動コース 坂井ゼミに所属。データベースを介してパケットの転送を行うアプリケーショントンネルを開発しています。',
        },
        {
            date: '2024年4月1日~現在',
            title: '大江戸テレコム株式会社へ入社',
            description: '新卒として入社。データベース関係やインフラ周りをやっています。',
        },
        {
            date: '2024年3月31日',
            title: '高校卒業',
            description: '全日制 普通課程の高校を卒業',
        },
        {
            date: '2024年2月5日~同年3月24日',
            title: '100Program 5期 参加・受賞',
            description: 'webネットワークシミュレータ/デスクトップマスコット/自作インタープリタ言語を開発しました',
        },
        {
            date: '2024年8月3日~同年9月24日',
            title: '100Program 4期 参加・受賞',
            description: '人と人との関係がForce Graphで表現するコミュニティー支援用SNSアプリを開発しました',
        },
        {
            date: '2017年11月頃~2023年7月頃',
            title: 'マインクラフトサーバーの運営・開発',
            description:
                'PocketMine-MPを利用したマインクラフトサーバーの開発と運営を行いました。インフラからプラグインの開発、コミュニティ管理まで行い、約700人規模のコミュニティへと成長させました',
        },
    ];
};
