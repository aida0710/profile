import React from 'react';
import Image from 'next/image';
import {CalendarDays, ChevronLeft} from 'lucide-react';
import {Chip} from '@heroui/chip';
import {Button} from '@heroui/button';
import {BlogPost} from '@/types';
import {Link} from '@heroui/link';
import {BLOG_PICTURE_DIRECTORY} from '@/data/blog';
import {Divider} from '@heroui/divider';

interface BlogContentProps {
    post: BlogPost;
}

function parseContentWithLinks(text: string): React.ReactNode {
    const linkRegex = /\[(.*?)]\((.*?)\)/g;

    const parts: Array<string | JSX.Element> = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }
        const [, linkText, linkUrl] = match;
        const isExternalLink = linkUrl.startsWith('_');
        const url = isExternalLink ? linkUrl.substring(1) : linkUrl;

        parts.push(
            <Link
                key={match.index}
                href={url}
                color='primary'
                showAnchorIcon={isExternalLink}
                isExternal={true}
                className='px-2'>
                {linkText}
            </Link>,
        );

        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts;
}

export function BlogContent({post}: BlogContentProps) {
    return (
        <div className='mx-auto max-w-6xl p-6'>
            <div className='mb-6'>
                <Link href='/blog'>
                    <Button
                        variant='light'
                        startContent={<ChevronLeft size={16} />}
                        className='mb-4'>
                        記事一覧に戻る
                    </Button>
                </Link>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='mb-2 text-3xl font-bold'>{post.title}</h1>
            </div>
            <div className='flex flex-wrap items-center justify-between gap-2 py-5'>
                <div className='flex items-center gap-2 text-default-500'>
                    <CalendarDays size={18} />
                    <span>{post.date}</span>
                </div>
                {post.tags && post.tags.length > 0 && (
                    <div className='mt-2 flex flex-wrap gap-2'>
                        {post.tags.map((tag) => (
                            <Chip
                                key={tag}
                                color='primary'
                                variant='flat'>
                                {tag}
                            </Chip>
                        ))}
                    </div>
                )}
            </div>

            <div className='prose mb-8 max-w-none'>
                {post.content.map((paragraph, index) => (
                    <p
                        key={index}
                        className='mb-2 leading-relaxed'>
                        {parseContentWithLinks(paragraph)}
                    </p>
                ))}
            </div>

            {post.images.length > 0 && (
                <>
                    <Divider className='my-3' />
                    <h2 className='mb-2 text-xl font-semibold'>記事に紐図けられた画像一覧</h2>
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                        {post.images.map((image, index) => (
                            <div
                                key={index}
                                className='flex aspect-auto w-full flex-col items-center justify-center'>
                                <div className='relative w-full overflow-hidden rounded-lg'>
                                    <Image
                                        src={BLOG_PICTURE_DIRECTORY + image}
                                        alt={`${post.title}の画像 ${index + 1}`}
                                        width={1280}
                                        height={720}
                                        className='max-h-96 w-auto rounded-lg'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
