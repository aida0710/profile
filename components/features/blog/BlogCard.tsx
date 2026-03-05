import { Chip } from '@heroui/chip';
import { Link } from '@heroui/link';
import { CalendarDays } from 'lucide-react';
import Image from 'next/image';
import { BLOG_PICTURE_DIRECTORY } from '@/data/blog';
import type { BlogPost } from '@/types';
import { HighlightText } from './HighlightText';

interface BlogCardProps {
  post: BlogPost;
  searchQuery?: string;
}

export function BlogCard({ post, searchQuery = '' }: BlogCardProps) {
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
      className="block w-full focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:rounded-xl focus-visible:outline-none"
    >
      <article className="flex w-full flex-col gap-4 overflow-hidden rounded-xl border border-warm-border bg-warm-surface p-5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-warm-accent/30 hover:shadow-lg hover:shadow-warm-accent/5 md:flex-row">
        <div className="w-full md:w-2/3">
          <h2 className="mb-2 font-heading text-lg font-semibold text-warm-text">
            <HighlightText text={post.title} highlight={searchQuery} />
          </h2>
          <p className="line-clamp-2 text-sm text-warm-subtext">
            <HighlightText text={displayText} highlight={searchQuery} />
          </p>
        </div>

        {post.images.length > 0 && (
          <div className="order-first w-full flex-shrink-0 md:order-last md:w-1/3">
            <div className="relative h-32 w-full overflow-hidden rounded-lg">
              <Image
                src={BLOG_PICTURE_DIRECTORY + post.images[0]}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="flex w-full flex-wrap items-center justify-between gap-2 pt-3 md:w-2/3">
          <div className="flex items-center font-mono text-xs text-warm-subtext">
            <CalendarDays aria-hidden="true" size={14} className="mr-1.5" />
            {post.date}
          </div>
          {post.tags && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  size="sm"
                  className={`${
                    searchQuery && tag.toLowerCase().includes(searchQuery.toLowerCase())
                      ? 'border-warm-accent bg-warm-accent/10 text-warm-accent'
                      : 'border-warm-border bg-warm-bg text-warm-subtext'
                  } border`}
                  variant="flat"
                >
                  <HighlightText text={tag} highlight={searchQuery} />
                </Chip>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
