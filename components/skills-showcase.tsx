"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 90, color: "from-blue-600 to-indigo-600" },
  { name: "Node.js", level: 88, color: "from-green-500 to-emerald-500" },
  { name: "Python", level: 85, color: "from-yellow-500 to-orange-500" },
  { name: "AWS/Cloud", level: 82, color: "from-orange-500 to-red-500" },
  { name: "Docker", level: 80, color: "from-purple-500 to-pink-500" },
  { name: "GraphQL", level: 78, color: "from-pink-500 to-rose-500" },
  { name: "MongoDB", level: 85, color: "from-green-600 to-teal-600" },
]

export function SkillsShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-indigo-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mastering the tools that build the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="group relative overflow-hidden bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:border-purple-500/50 transition-all duration-500"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>

                {/* Progress bar container */}
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  {/* Animated progress bar */}
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer"></div>
                  </div>

                  {/* Glow effect */}
                  <div
                    className={`absolute top-0 h-full bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
