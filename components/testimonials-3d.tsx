"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content:
      "Working with this developer was an absolute game-changer. The attention to detail and innovative solutions exceeded all expectations.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupXYZ",
    content:
      "Incredible technical skills combined with excellent communication. Delivered a complex project ahead of schedule with zero bugs.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer at CreativeStudio",
    content:
      "The perfect blend of technical expertise and creative vision. Transformed our ideas into a stunning, functional reality.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
]

export function Testimonials3D() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="w-full py-24 lg:py-32 relative overflow-hidden">
      {/* Epic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Client Love
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What amazing people say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* 3D Testimonial Cards */}
          <div className="relative h-96 perspective-1000">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex
              const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length
              const isNext = index === (currentIndex + 1) % testimonials.length

              let transform = "translateX(100%) rotateY(45deg) scale(0.8)"
              let opacity = 0
              let zIndex = 0

              if (isActive) {
                transform = "translateX(0%) rotateY(0deg) scale(1)"
                opacity = 1
                zIndex = 3
              } else if (isPrev) {
                transform = "translateX(-100%) rotateY(-45deg) scale(0.8)"
                opacity = 0.6
                zIndex = 2
              } else if (isNext) {
                transform = "translateX(100%) rotateY(45deg) scale(0.8)"
                opacity = 0.6
                zIndex = 2
              }

              return (
                <Card
                  key={index}
                  className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 transition-all duration-700 ease-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="text-center space-y-6">
                      {/* Stars */}
                      <div className="flex justify-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <Avatar className="h-16 w-16 border-2 border-white/30">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</div>
                          <div className="text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
