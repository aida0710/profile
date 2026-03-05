'use client';

import {Children} from 'react';

import {AnimatedSection} from '@/components/common/AnimatedSection';
import type {BlockFrameProps} from '@/types';

export function BlockFrame({title, description, children}: BlockFrameProps) {
    return (
        <section className='mx-auto w-full max-w-7xl px-6'>
            <AnimatedSection>
                <header className='mb-8'>
                    <h1 className='mb-2 font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl'>
                        {title}
                    </h1>
                    <p className='text-sm text-warm-subtext md:text-base'>{description}</p>
                </header>
            </AnimatedSection>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {Children.map(children, (child, index) => (
                    <AnimatedSection delay={index * 80}>{child}</AnimatedSection>
                ))}
            </div>
        </section>
    );
}
