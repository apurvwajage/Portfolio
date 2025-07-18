"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function CrystalNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

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
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
        isScrolled ? "mt-4" : "mt-6"
      }`}
    >
      <div className="flex items-center justify-center space-x-1 bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/20">
        {/* Navigation Items */}
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
              activeSection === item.href.slice(1)
                ? "text-slate-900 dark:text-white"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {activeSection === item.href.slice(1) && (
              <div className="absolute inset-0 bg-white/30 dark:bg-white/20 rounded-full transition-all duration-500" />
            )}
            <span className="relative z-10">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
