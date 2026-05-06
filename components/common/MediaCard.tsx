import { Button } from '@heroui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { BsGithub } from 'react-icons/bs';

export interface MediaCardLink {
  label: string;
  url: string;
  kind?: 'github' | 'external';
}

export interface MediaCardImage {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
}

interface MediaCardProps {
  image: MediaCardImage;
  links: MediaCardLink[];
  children: ReactNode;
}

// 任意のラベルがこの文字数以上なら、半幅では収まらないと判断して縦積みフォールバック
const STACK_THRESHOLD = 12;

function LinkIcon({ kind }: { kind: MediaCardLink['kind'] }) {
  if (kind === 'github') {
    return <BsGithub aria-hidden="true" className="h-3.5 w-3.5" />;
  }
  return <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />;
}

export function MediaCard({ image, links, children }: MediaCardProps) {
  const useStack = links.length === 1 || links.some((link) => link.label.length >= STACK_THRESHOLD);
  const imageClass =
    image.fit === 'contain' ? 'aspect-video rounded-lg object-contain object-center' : 'aspect-video rounded-lg';

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-warm-border bg-warm-surface transition-colors duration-200 hover:border-warm-accent/30">
      <div className="p-5">{children}</div>
      <div className="mt-auto flex flex-col gap-3 px-5 pb-5">
        <Image alt={image.alt} className={imageClass} height={1080} src={image.src} width={1920} />
        <div className={`grid gap-2 ${useStack ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {links.map((link) => (
            <Button
              key={link.url}
              as="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              variant="flat"
              radius="lg"
              className="h-auto min-h-10 whitespace-normal bg-warm-accent/10 py-2 font-medium text-warm-accent data-[hover=true]:bg-warm-accent/20"
              startContent={<LinkIcon kind={link.kind} />}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}
