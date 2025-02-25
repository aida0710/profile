import {BlogPost} from '@/types';

export const blogPosts: BlogPost[] = [
    {
        slug: 'first-post',
        title: '新しくブログを実装しました',
        content: ['ブログ機能を追加しました。', 'これからブログを通して適当なことを呟いていきたいなぁと考えています。', '下に添付された画像は、サンプルです。'],
        date: '2025年2月25日',
        images: ['/images/gallery/2025年1月4日_荒川河川敷.JPG', '/images/gallery/2024年12月7日_お台場の夕日.JPG'],
        tags: ['Blog', 'Init'],
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
