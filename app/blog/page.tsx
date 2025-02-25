import React from 'react';
import {Metadata} from 'next';

import {BLOG_INTRODUCTION, getSortedPosts} from '@/data/blog';
import {TextBlock} from '@/components/common/TextBlock';
import {BlogSearchContainer} from '@/components/features/blog/BlogSearchContainer';
import {BlogPost} from '@/types';

export const metadata: Metadata = {
    title: 'Blog',
    description: '開発や技術に関する記事を公開しています',
};

export default function BlogPage() {
    const posts: BlogPost[] = getSortedPosts();

    return (
        <main className='min-h-screen bg-background'>
            <div className='py-8'>
                <div className='text-center'>
                    <h1 className='text-3xl font-medium md:text-4xl'>Blog</h1>
                    <TextBlock messages={BLOG_INTRODUCTION} />
                </div>

                <div className='mx-auto max-w-3xl px-4'>
                    {posts.length > 0 ? (
                        <BlogSearchContainer posts={posts} />
                    ) : (
                        <div className='py-12 text-center'>
                            <p className='text-xl text-default-500'>現在投稿されている記事はありません。</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
