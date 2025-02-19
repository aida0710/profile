'use client';
import {useTheme, UseThemeProps} from 'next-themes';
import React, {useEffect, useState} from 'react';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';
import {Button} from '@heroui/button';

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
            isIconOnly
            className='block p-2'
            radius='full'
            variant='ghost'
            onPress={handleSetTheme}>
            {theme === 'light' ? <BsFillMoonStarsFill className='h-full w-full' /> : <BsFillSunFill className='h-full w-full' />}
        </Button>
    );
}
