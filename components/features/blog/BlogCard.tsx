import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Card, CardBody, CardFooter} from '@heroui/card';
import {Chip} from '@heroui/chip';
import {CalendarDays} from 'lucide-react';

import {BlogPost} from '@/types';
import {HighlightText} from './HighlightText';

interface BlogCardProps {
    post: BlogPost;
    searchQuery?: string;
}

export function BlogCard({post, searchQuery = ''}: BlogCardProps) {
    const stripLinkMarkdown = (text: string): string => {
        return text.replace(/\[(.*?)]\(.*?\)/g, '$1');
    };

    const getDisplayText = (): string => {
        if (post.content.length === 0) return '';

        return stripLinkMarkdown(post.content[0]);
    };

    const displayText = getDisplayText();

    return (
        <Link
            href={`/blog/${post.slug}`}
            className='block w-full'>
            <Card
                isHoverable
                isPressable
                className='w-full transition-transform'>
                <CardBody className='flex  flex-col gap-4 md:flex-row'>
                    <div className='w-full md:w-2/3'>
                        <h2 className='mb-2 text-xl font-semibold'>
                            <HighlightText
                                text={post.title}
                                highlight={searchQuery}
                            />
                        </h2>
                        <p className='line-clamp-2 text-default-500'>
                            <HighlightText
                                text={displayText}
                                highlight={searchQuery}
                            />
                        </p>
                    </div>

                    {post.images.length > 0 && (
                        <div className='order-first w-full flex-shrink-0 md:order-last md:w-1/3'>
                            <div className='relative h-32 w-full overflow-hidden rounded-lg'>
                                <Image
                                    src={post.images[0]}
                                    alt={post.title}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        </div>
                    )}
                </CardBody>

                <CardFooter className='flex flex-wrap items-center justify-between gap-2'>
                    <div className='flex items-center text-sm text-default-400'>
                        <CalendarDays
                            size={16}
                            className='mr-1'
                        />
                        {post.date}
                    </div>

                    {post.tags && (
                        <div className='flex flex-wrap gap-1'>
                            {post.tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    size='sm'
                                    color={searchQuery && tag.toLowerCase().includes(searchQuery.toLowerCase()) ? 'warning' : 'primary'}
                                    variant='flat'>
                                    <HighlightText
                                        text={tag}
                                        highlight={searchQuery}
                                    />
                                </Chip>
                            ))}
                        </div>
                    )}
                </CardFooter>
            </Card>
        </Link>
    );
}
