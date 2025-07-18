"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Add smooth transition class to body
    document.body.classList.add("theme-transition")
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
