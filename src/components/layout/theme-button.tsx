'use client';
import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";
import {UseThemeProps} from "next-themes/dist/types";
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs";
import {Tooltip} from "@nextui-org/tooltip";

export function ThemeButton() {
    const [mounted, setMounted] = useState(false)
    const {setTheme, theme}: UseThemeProps = useTheme();

    const handleSetTheme = (): void => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Tooltip content={
            <div>
                <div className="flex justify-center">Theme Change</div>
                <div className="flex justify-center">light / dark</div>
            </div>
        }>
            <Button
                className="block p-2"
                radius="full"
                variant="ghost"
                onClick={handleSetTheme}
                isIconOnly={true}
            >
                {theme === "light" ? (
                    <BsFillMoonStarsFill className="w-full h-full"/>
                ) : (
                    <BsFillSunFill className="w-full h-full"/>
                )}
            </Button>
        </Tooltip>
    );
}
