"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center space-x-1 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 dark:border-white/10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10",
              activeSection === item.href.slice(1)
                ? "bg-white/30 dark:bg-white/20 text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-300",
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
