'use client';

import {Button, Navbar, NavbarBrand, NavbarContent, NextUIProvider} from '@nextui-org/react';
import {useRouter} from 'next/navigation';
import {ThemeProvider} from 'next-themes';
import React from 'react';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {ProjectIcon} from "@/components/icons/project-icon";
import {BsGithub} from "react-icons/bs";
import {ThemeButton} from "@/app/components/theme-button";

export function Providers({children}: { children: React.ReactNode }) {
    const router: AppRouterInstance = useRouter();

    return (
        <ThemeProvider
            defaultTheme='dark'
            attribute='class'>
            <NextUIProvider navigate={router.push}>
                <Navbar isBordered>
                    <NavbarBrand>
                        <ProjectIcon/>
                        <p className="ml-5 font-bold text-inherit text-large">Profile</p>
                    </NavbarBrand>
                    <NavbarContent justify="end">
                        <Button
                            className="block p-2"
                            radius="full"
                            isIconOnly
                            variant="ghost"
                            onClick={() => {
                                window.open("https://github.com/aida0710/profile");
                            }}>
                            <BsGithub className="w-full h-full"/>
                        </Button>
                        <ThemeButton/>
                    </NavbarContent>
                </Navbar>
                {children}
            </NextUIProvider>
        </ThemeProvider>
    );
}
