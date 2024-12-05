'use client';
import {Button} from '@nextui-org/react';
import {useTheme, UseThemeProps} from 'next-themes';
import React, {useEffect, useState} from 'react';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';

export function ThemeButton() {
    const [mounted, setMounted] = useState(false);
    const {setTheme, theme}: UseThemeProps = useTheme();

    const handleSetTheme = (): void => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Button
            className='block p-2'
            radius='full'
            variant='ghost'
            onClick={handleSetTheme}
            isIconOnly>
            {theme === 'light' ? <BsFillMoonStarsFill className='h-full w-full' /> : <BsFillSunFill className='h-full w-full' />}
        </Button>
    );
}
