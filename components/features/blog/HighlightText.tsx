'use client';

// components/features/blog/HighlightText.tsx
import React from 'react';

interface HighlightTextProps {
    text: string;
    highlight: string;
}

export function HighlightText({text, highlight}: HighlightTextProps) {
    if (!highlight.trim()) {
        return <>{text}</>;
    }

    const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);

    return (
        <>
            {parts.map((part, i) => {
                if (part.toLowerCase() === highlight.toLowerCase()) {
                    return (
                        <mark
                            key={i}
                            className='rounded bg-primary-100 px-1 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'>
                            {part}
                        </mark>
                    );
                }
                return part;
            })}
        </>
    );
}
