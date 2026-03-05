import { Link } from '@heroui/link';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { SiQiita, SiWakatime } from 'react-icons/si';

import type { SocialLink } from '@/types';

// ソーシャルリンクの定義
const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/aida0710',
    icon: <BsGithub aria-hidden="true" className="h-full w-full" />,
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/aida_0710',
    icon: <BsTwitter aria-hidden="true" className="h-full w-full" />,
    label: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/aida_07100/',
    icon: <BsInstagram aria-hidden="true" className="h-full w-full" />,
    label: 'Instagram',
  },
  {
    href: 'https://qiita.com/aida0710',
    icon: <SiQiita aria-hidden="true" className="h-full w-full" />,
    label: 'Qiita',
  },
  {
    href: 'https://wakatime.com/@aida_0710',
    icon: <SiWakatime aria-hidden="true" className="h-full w-full" />,
    label: 'Wakatime',
  },
];

export function SocialIcons() {
  return (
    <div className="my-4 flex w-full justify-center">
      <div className="grid grid-cols-5 gap-x-10">
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.label}
            aria-label={link.label}
            className="flex h-10 w-10 items-center justify-center rounded-md p-2 transition-transform hover:scale-125 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            href={link.href}
            target="_blank"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
