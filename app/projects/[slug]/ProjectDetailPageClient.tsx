"use client"

import { useState } from "react"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from 'next/image'

// Mock media data - replace with actual project media
const getProjectMedia = (project: any) => {
  return project.media || [{ type: "image", url: "/placeholder.svg?height=400&width=600", alt: "Project Screenshot" }]
}

export default function ProjectDetailPageClient({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  if (!project) {
    notFound()
  }

  const media = getProjectMedia(project)

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % media.length)
  }

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <ThemeToggle />

      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 py-4">
          <Button asChild variant="ghost" className="mb-4 hover:bg-slate-100 dark:hover:bg-slate-800">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Media Slideshow */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-slate-100 dark:bg-slate-700">
                  {media[currentMediaIndex].type === "image" ? (
                    <Image
                      src={media[currentMediaIndex].url || "/placeholder.svg"}
                      alt={media[currentMediaIndex].alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={media[currentMediaIndex].thumbnail || "/placeholder.svg"}
                        alt={media[currentMediaIndex].alt}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="rounded-full w-16 h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-2xl"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Navigation arrows */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    onClick={prevMedia}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    onClick={nextMedia}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  {/* Media indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {media.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMediaIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentMediaIndex
                            ? "bg-slate-900 dark:bg-white scale-125"
                            : "bg-slate-400 dark:bg-slate-600 hover:bg-slate-600 dark:hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Centered thumbnail strip */}
            <div className="flex justify-center">
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {media.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`flex-shrink-0 relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentMediaIndex
                        ? "border-slate-900 dark:border-white shadow-lg"
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
                    }`}
                  >
                    <Image
                      src={item.type === "image" ? item.url : item.thumbnail}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">{project.shortDescription}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                {project.liveUrl && (
                  <Button
                    asChild
                    className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
                  >
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-slate-300 dark:border-slate-600 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Scrollable content area */}
            <div className="max-h-96 overflow-y-auto pr-4 space-y-8 custom-scrollbar">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.longDescription}</p>
              </div>

              {project.technologies && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  {project.keyFeatures?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  )) || (
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Responsive design that works seamlessly across all devices
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Development Process</h3>
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  {project.developmentProcess?.map((phase, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{phase.phase}</h4>
                      <p>{phase.description}</p>
                    </div>
                  )) || (
                    <>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Planning & Design</h4>
                        <p>
                          Started with user research and wireframing to understand the requirements and create an
                          optimal user experience.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Development</h4>
                        <p>
                          Built using modern technologies with a focus on performance, scalability, and maintainability.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Testing & Deployment</h4>
                        <p>
                          Comprehensive testing across different devices and browsers before deploying to production.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
