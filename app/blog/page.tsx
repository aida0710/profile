import type {Metadata} from 'next';

import {TextBlock} from '@/components/common/TextBlock';
import {BlogSearchContainer} from '@/components/features/blog/BlogSearchContainer';
import {BLOG_INTRODUCTION, getSortedPosts} from '@/data/blog';
import type {BlogPost} from '@/types';

export const metadata: Metadata = {
    title: 'Blog',
    description: '開発や技術に関する記事を公開しています',
};

export default function BlogPage() {
    const posts: BlogPost[] = getSortedPosts();

    return (
        <div className='min-h-screen py-10 md:py-16'>
            <div className='mb-8 px-6'>
                <h1 className='font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl'>Blog</h1>
                <TextBlock messages={BLOG_INTRODUCTION} />
            </div>

            <div className='mx-auto max-w-3xl px-4'>
                {posts.length > 0 ? (
                    <BlogSearchContainer posts={posts} />
                ) : (
                    <div className='py-12 text-center'>
                        <p className='text-lg text-warm-subtext'>現在投稿されている記事はありません。</p>
                    </div>
                )}
            </div>
        </div>
    );
}
