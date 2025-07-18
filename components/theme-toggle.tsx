"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // Add transition class before changing theme
    document.documentElement.classList.add("theme-transitioning")

    setTheme(theme === "light" ? "dark" : "light")

    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning")
    }, 1000)
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 h-12 w-12 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-500 hover:scale-110 shadow-lg"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-700 dark:-rotate-90 dark:scale-0 text-slate-700 dark:text-slate-300" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-700 dark:rotate-0 dark:scale-100 text-slate-700 dark:text-slate-300" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
