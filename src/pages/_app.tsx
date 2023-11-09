"use client";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "@/components/layout/layout";
import { NextUIProvider } from "@nextui-org/system";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="class">
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
