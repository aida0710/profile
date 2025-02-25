import React from 'react';
import {Metadata} from 'next';
import {notFound} from 'next/navigation';

import {getPostBySlug} from '@/data/blog';
import {BlogContent} from '@/components/features/blog/BlogContent';

interface BlogPostPageParams {
    params: Promise<{slug: string}>;
}

// 動的メタデータ
export async function generateMetadata({params}: BlogPostPageParams): Promise<Metadata> {
    const {slug} = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'ブログ記事が見つかりません',
        };
    }

    const stripLinkMarkdown = (text: string): string => {
        return text.replace(/\[(.*?)]\(.*?\)/g, '$1');
    };

    const getDisplayText = (): string => {
        if (post.content.length === 0) return '';

        return stripLinkMarkdown(post.content[0]);
    };

    return {
        title: post.title,
        description: getDisplayText().slice(0, 150),
    };
}

export default async function BlogPostPage({params}: BlogPostPageParams) {
    const {slug} = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return <BlogContent post={post} />;
}
