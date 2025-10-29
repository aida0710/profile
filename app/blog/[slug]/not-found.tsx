import { Button } from '@heroui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">記事が見つかりません</h1>
      <p className="mb-8 max-w-md text-default-500">お探しの記事は存在しないか、削除された可能性があります。</p>
      <Link href="/blog">
        <Button color="primary" startContent={<ChevronLeft size={16} />}>
          ブログ一覧に戻る
        </Button>
      </Link>
    </div>
  );
}
