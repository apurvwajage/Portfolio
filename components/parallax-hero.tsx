"use client"

import { useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { personalInfo } from "@/lib/data"
import { ResumeDownload } from "./resume-download"

export function ParallaxHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height

      mouseRef.current = { x, y }

      // 3D tilt effect
      heroRef.current.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg)`
    }

    const handleMouseLeave = () => {
      if (!heroRef.current) return
      heroRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      heroElement.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
        heroElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative transition-transform duration-300 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-float"></div>
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-12 relative z-10">
        {/* 3D Avatar with holographic effect */}
        <div className="relative group" style={{ transform: "translateZ(50px)" }}>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse animation-delay-500"></div>
          <Avatar className="relative h-48 w-48 border-4 border-white/30 dark:border-white/20 shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 transform group-hover:scale-105">
            <AvatarImage src="/placeholder.svg?height=192&width=192" alt={personalInfo.name} />
            <AvatarFallback className="text-3xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          {/* Holographic ring */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-spin-slow"></div>
          <div className="absolute inset-2 rounded-full border border-pink-500/20 animate-spin-reverse"></div>
        </div>

        {/* Glitch text effect */}
        <div className="space-y-6" style={{ transform: "translateZ(30px)" }}>
          <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-black">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
              {personalInfo.name}
            </span>
            {/* Glitch layers */}
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent opacity-0 animate-glitch-1">
              {personalInfo.name}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent opacity-0 animate-glitch-2">
              {personalInfo.name}
            </span>
          </h1>

          <div className="relative">
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light tracking-wide">
              {personalInfo.title}
            </p>
            {/* Typing cursor effect */}
            <span className="inline-block w-1 h-8 bg-purple-500 ml-2 animate-pulse"></span>
          </div>
        </div>

        {/* Epic CTA section */}
        <div className="flex flex-col sm:flex-row gap-6 items-center" style={{ transform: "translateZ(20px)" }}>
          <ResumeDownload />

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2 animate-scroll"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
