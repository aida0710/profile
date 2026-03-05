import {Image} from '@heroui/image';

import {SocialIcons} from '@/components/features/home/SocialIcons';
import {profileMessages} from '@/data/profile';

export default function HomePage() {
    return (
        <div className='flex min-h-screen items-start justify-center px-6 py-12 md:py-20'>
            <div className='w-full max-w-2xl'>
                {/* Profile hero - only shown on mobile since sidebar has it on desktop */}
                <div className='mb-10 flex flex-col items-center sm:hidden'>
                    <Image isBlurred alt='Masaki Aida のプロフィール写真' className='h-32 w-32' radius='full'
                           src='/neko.jpg' />
                </div>

                <div className='mb-8'>
                    <h1 className='font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl'>Masaki
                        Aida</h1>
                    <p className='mt-1 font-heading text-lg text-warm-subtext md:text-xl'>相田 優希</p>
                    <p className='mt-2 text-warm-subtext'>Frontend / Backend Engineer</p>
                </div>

                {/* About section */}
                <section className='mb-10'>
                    <h2 className='mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent'>About</h2>
                    <div className='space-y-2'>
                        {profileMessages.map((message) => (
                            <p key={message} className='leading-relaxed text-warm-text/80'>
                                {message}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Now section */}
                <section className='mb-10'>
                    <h2 className='mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent'>Now</h2>
                    <div className='space-y-2'>
                        <p className='leading-relaxed text-warm-text/80'>
                            最近は機械学習に注力しています。データの収集・前処理から事後学習まで、幅広く取り組んでいます。
                        </p>
                        <p className='leading-relaxed text-warm-text/80'>
                            ネットワークの構築・運用や、ロードバイクでどこかに出かけるのも好きです。
                        </p>
                    </div>
                </section>

                {/* Links section */}
                <section>
                    <h2 className='mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent'>Links</h2>
                    <SocialIcons />
                </section>
            </div>
        </div>
    );
}
