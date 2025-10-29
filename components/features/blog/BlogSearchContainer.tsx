"use client";

import { Card } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import { useEffect, useMemo, useState } from "react";
import { BlogCard } from "@/components/features/blog/BlogCard";
import { SearchBar } from "@/components/features/blog/SearchBar";
import type { BlogPost } from "@/types";

interface BlogSearchContainerProps {
  posts: BlogPost[];
}

export function BlogSearchContainer({ posts }: BlogSearchContainerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stripLinkMarkdown = (text: string): string => {
    return text.replace(/\[(.*?)]\(.*?\)/g, "$1");
  };

  const getNormalizedText = (post: BlogPost): string => {
    const titleText = post.title.toLowerCase();
    const contentText = post.content
      .map((text) => stripLinkMarkdown(text).toLowerCase())
      .join(" ");
    const tagsText = post.tags ? post.tags.join(" ").toLowerCase() : "";
    return `${titleText} ${contentText} ${tagsText}`;
  };

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }

    const query = searchQuery.toLowerCase();

    return posts.filter((post) => {
      const normalizedText = getNormalizedText(post);
      return normalizedText.includes(query);
    });
  }, [posts, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const SkeletonBlogCard = () => (
    <Skeleton className="w-full rounded-lg">
      <Card className="h-48 w-full">
        <div className="flex h-48 flex-col gap-4 p-4 md:flex-row">
          <div className="w-full md:w-2/3">
            <div className="mb-4 h-6 w-3/4 rounded bg-default-200" />
            <div className="mb-2 h-4 w-full rounded bg-default-100" />
            <div className="h-4 w-5/6 rounded bg-default-100" />
          </div>
          <div className="order-first w-full md:order-last md:w-1/3">
            <div className="h-32 w-full rounded bg-default-200" />
          </div>
        </div>
      </Card>
    </Skeleton>
  );

  return (
    <div className="w-full">
      <SearchBar onSearchAction={handleSearch} />

      <div className="flex w-full flex-col items-center gap-6">
        {!isMounted ? (
          <>
            <SkeletonBlogCard />
            <SkeletonBlogCard />
            <SkeletonBlogCard />
          </>
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.slug} className="w-full">
              <BlogCard post={post} searchQuery={searchQuery} />
            </div>
          ))
        ) : (
          <div className="py-12 text-center">
            <p className="text-xl text-default-500">
              「{searchQuery}」に一致する記事は見つかりませんでした。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
