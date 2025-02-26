import {BlogPost} from '@/types';

export const BLOG_INTRODUCTION: string[] = ['これまでの経験や活動について書いていきます。'];

// 記事のデータ
// linkは[表示](リンク)で生成できます。リンクの先頭に_をつけると外部リンクになります。
export const blogPosts: BlogPost[] = [
    {
        slug: 'SecHack365-2024',
        title: 'SecHack365 2024年度に採択されました。',
        content: [
            'SecHack365 2024年度 学習駆動コース　坂井ゼミにて採択されました。',
            'ネットワーク関係の技術に疎いため、学習を兼ねてIDSを作っていきたい所存です。',
            '',
            '[SecHack365](_https://sechack365.nict.go.jp/)',
        ],
        date: '2024年05月25日',
        images: [],
        tags: ['SecHack365'],
    },
    {
        slug: '100Program-alumni-mentor',
        title: '100Program 7期からアラムナイ メンターとして運営に協力します。',
        content: [
            '100Program 7期からアラムナイメンターとして運営に協力させていただけることになりました。',
            'よろしくお願いいたします。',
            '',
            '[東京大学 産学協創本部主催 100Program](_https://100program.jp/)',
        ],
        date: '2025年02月03日',
        images: [],
        tags: ['100Program', 'メンター'],
    },
    {
        slug: '100Program-5th',
        title: '100Program 5thに参加しました。',
        content: [
            '高校生最後の春休みに100Program 5期に参加しました。',
            '最後の春休みということあり、300時間以上もの時間を費やしましたが、その甲斐あってか、100Program内全体で過去一番の開発時間を記録することが出来ました。',
            '開発したものは、webネットワークシミュレータ、デスクトップマスコット、自作インタープリタ言語です。',
            'この中で、デスクトップマスコットは「優秀アプリ賞」「MKI賞」を頂くことが出来ました。',
            '',
            '[東京大学 産学協創本部主催 100Program](_https://100program.jp/)',
        ],
        date: '2024年2月5日',
        images: [],
        tags: ['100Program'],
    },
    {
        slug: '100Program-4th',
        title: '100Program 4期に参加しました。',
        content: [
            '高校三年生で100Program 4期に参加。チームで開発しながら1からweb技術などをキャッチアップするいい機会になりました。',
            '人と人との関係がForce Graphで表現するコミュニティー支援用SNSアプリを開発し、優秀アプリ賞を頂きました。',
            '',
            '[東京大学 産学協創本部主催 100Program](_https://100program.jp/)',
        ],
        date: '2024年08月03日',
        images: [],
        tags: ['100Program'],
    },
    {
        slug: 'minecraft-server-development-closure',
        title: 'マインクラフトサーバーの運営・開発を終了しました',
        content: [
            '2017年11月頃から2023年9月16日まで運営してまいりました「なまけものサーバ」のサービスを終了いたしました。',
            '本サーバは、PocketMine-MPを利用したマインクラフトサーバーの開発と運営を行ってきましたが、私自身の環境の変化により運営継続が困難となったためです。',
            'ゼロからサーバーインフラの構築、プラグインの開発、コミュニティ管理まで一貫して行い、約700人規模のコミュニティへと成長させることができたことを大変嬉しく思います。',
            '今後は様々な技術に触れながら新たな挑戦をしていく所存ですので、引き続き応援いただけますと幸いです。',
            '',
            '周辺リポジトリは以下になります。',
            '- [GitHub: サーバ内全プラグイン](_https://github.com/aida0710/nk-plugins)',
            '- [GitHub: 新コアプラグイン(開発停止)](_https://github.com/aida0710/folivora)',
            '- [GitHub: update-notice](_https://github.com/aida0710/nkserver-update)',
        ],
        date: '2023年09月16日',
        images: [],
        tags: ['Minecraft', 'PocketMine-MP'],
    },
];

// 日付でソートする関数（新しい記事が先頭に来るようにする）
export function getSortedPosts(): BlogPost[] {
    return [...blogPosts].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

// slugで記事を検索する関数
export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}
