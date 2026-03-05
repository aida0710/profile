import Image from 'next/image';
import Link from 'next/link';
import type {Award} from '@/types';

interface AwardCardProps {
    award: Award;
}

export function AwardCard({award}: AwardCardProps) {
    return (
        <Link
            href={award.link}
            target='_blank'
            className='block focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:rounded-xl focus-visible:outline-none'
        >
            <article
                className='group h-full overflow-hidden rounded-xl border border-warm-border bg-warm-surface transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-warm-accent/30 hover:shadow-lg hover:shadow-warm-accent/5'>
                <div className='p-5'>
                    <p className='text-xs font-medium text-warm-subtext'>{award.organization}</p>
                    <p className='mt-0.5 font-mono text-xs text-warm-subtext'>{award.date}</p>
                    <h3 className='mt-2 font-heading text-base font-semibold text-warm-text'>{award.description}</h3>
                </div>
                <div className='px-5 pb-5'>
                    <Image
                        alt={award.description}
                        className='aspect-video rounded-lg object-contain object-center'
                        height={1080}
                        src={`/images/awards/${award.image}`}
                        width={1920}
                    />
                </div>
            </article>
        </Link>
    );
}
