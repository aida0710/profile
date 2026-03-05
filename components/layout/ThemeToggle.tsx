'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const {setTheme, theme} = useTheme();

    const toggleTheme = (): void => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isLight = theme === 'light';
    const ThemeIcon = isLight ? BsFillMoonStarsFill : BsFillSunFill;

    return (
        <button
            type='button'
            aria-label={isLight ? 'ダークモードに切り替え' : 'ライトモードに切り替え'}
            className='cursor-pointer rounded-full p-2 text-warm-subtext transition-colors hover:text-warm-text focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none'
            onClick={toggleTheme}
        >
            <ThemeIcon aria-hidden='true' className='h-5 w-5' />
        </button>
    );
}
