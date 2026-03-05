'use client';

import {ExternalLinkIcon} from 'lucide-react';
import {useEffect, useState} from 'react';
import {BsGithub} from 'react-icons/bs';

import getLastCommitTime from '@/libs/fetch/getLastCommitTime';

export default function ColophonPage() {
    const [lastCommitTime, setLastCommitTime] = useState<string>('Loading…');

    useEffect(() => {
        getLastCommitTime()
            .then(setLastCommitTime)
            .catch(() => setLastCommitTime('取得できませんでした'));
    }, []);

    return (
        <div className='flex min-h-screen items-start justify-center px-6 py-12 md:py-20'>
            <div className='w-full max-w-2xl'>
                <div className='mb-8'>
                    <h1 className='font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl'>Colophon</h1>
                    <p className='mt-2 text-warm-subtext'>このサイトについて</p>
                </div>

                {/* Repository section */}
                <section className='mb-10'>
                    <h2 className='mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent'>
                        Repository
                    </h2>
                    <div className='rounded-xl border border-warm-border bg-warm-surface p-5'>
                        <div className='mb-3 flex items-center gap-3'>
                            <BsGithub aria-hidden='true' className='h-5 w-5 text-warm-text' />
                            <span className='font-heading font-semibold text-warm-text'>aida0710/profile</span>
                        </div>
                        <p className='mb-4 font-mono text-sm text-warm-subtext'>Last Commit: {lastCommitTime}</p>
                        <a
                            className='inline-flex items-center gap-1.5 text-sm text-warm-accent transition-colors hover:text-warm-accent-hover'
                            href='https://github.com/aida0710/profile'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            GitHub で見る
                            <ExternalLinkIcon aria-hidden='true' size={14} />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
