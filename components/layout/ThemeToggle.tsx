"use client";

import { Button } from "@heroui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  // テーマの切り替え処理
  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // hydration mismatch を避けるためにマウント後にのみレンダリング
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkTheme = theme === "light";
  const ThemeIcon = isDarkTheme ? BsFillMoonStarsFill : BsFillSunFill;

  return (
    <Button
      isIconOnly
      aria-label={
        isDarkTheme ? "ダークモードに切り替え" : "ライトモードに切り替え"
      }
      className="block p-2"
      radius="full"
      variant="ghost"
      onPress={toggleTheme}
    >
      <ThemeIcon className="h-full w-full" />
    </Button>
  );
}
