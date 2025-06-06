import {BlogPost} from '@/types';

export const BLOG_INTRODUCTION: string[] = ['これまでの経験や活動について書いていきます。'];
export const BLOG_PICTURE_DIRECTORY = '/images/blog/';

// 記事のデータ
// linkは[表示](リンク)で生成できます。リンクの先頭に_をつけると外部リンクになります。
export const blogPosts: BlogPost[] = [
    {
        slug: 'enrolled-in-open-university-of-japan',
        title: '放送大学に入学しました。',
        content: ['放送大学に入学しました。', '', '[放送大学](_https://www.ouj.ac.jp/)'],
        date: '2025年04月012日',
        images: ['2025年04月01日-open-university.png'],
        tags: ['放送大学', '大学'],
    },
    {
        slug: 'SecHack365-complete',
        title: 'SecHack365 2024年度が修了しました。',
        content: [
            'SecHack365 2024年度 学習駆動コース　坂井ゼミが修了しました。',
            '最終的に、RDBを介したL2アプリケーショントンネルを開発しました。',
            'Rustで開発したのはSechack365が初めてで、LinuxカーネルやSocketレイヤーの知識も得れたことで、非常に良い経験になりました。',
            '',
            '[Sechack365 最終成果発表ポスターを掲示しているページ](_https://sechack365.nict.go.jp/achievement/2024/#area_01Ss)',
            '[SecHack365 最終成果発表ポスター (pdf)](_https://sechack365.nict.go.jp/achievement/2024/pdf/01Ss.pdf)',
        ],
        date: '2025年03月09日',
        images: ['2025年04月09日-sechack365-web.png', '2025年04月09日-sechack365-poster.png', '2025年04月09日-sechack365-final.jpg'],
        tags: ['SecHack365'],
    },
    {
        slug: '100Program-alumni-mentor',
        title: '100Program アラムナイ メンターになりました。',
        content: [
            '100Program 7期からアラムナイメンターとして運営に協力させていただけることになりました。',
            'よろしくお願いいたします。',
            '',
            '[東京大学 産学協創本部主催 100Program](_https://100program.jp/)',
        ],
        date: '2025年02月03日',
        images: ['2025年02月03日-100program-mentor.png', '2025年02月03日-100program-homepage.png'],
        tags: ['100Program', 'メンター'],
    },
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
        images: ['2024年05月25日-sechack365-homepage.png'],
        tags: ['SecHack365'],
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
        images: ['2024年02月05日-100program-desktop-mascot-1.png', '2024年02月05日-100program-desktop-mascot-2.png', '2025年02月03日-100program-homepage.png'],
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
        images: ['2024年08月03日-100program-nebula.png', '2025年02月03日-100program-homepage.png'],
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
        images: ['2023年09月16日-nkserver-homepage.png', '2023年09月16日-nkserver-last.png'],
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
