"use client"

import type React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ArrowRight, MapPin, Calendar, Coffee, Code, Loader2, CheckCircle, XCircle } from "lucide-react"
import { personalInfo, projects } from "@/lib/data"
import { ThemeToggle } from "@/components/theme-toggle"
import { CrystalNav } from "@/components/crystal-nav"
import { TypingAnimation } from "@/components/typing-animation"
import { AnimatedCounter } from "@/components/animated-counter"
import { ResumeDownloadClean } from "@/components/resume-download-clean"
import { useState } from "react"
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <ThemeToggle />
      <CrystalNav />

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-8">
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                    Hi, I'm {personalInfo.name}
                  </h1>
                  <div className="text-2xl lg:text-3xl font-medium mb-8">
                    I'm a <TypingAnimation />
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    {personalInfo.bio}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-500"
                  >
                    <Link href="#contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <ResumeDownloadClean />
                </div>

                <div className="flex gap-4 justify-center lg:justify-start">
                  {personalInfo.githubUrl && (
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-500"
                    >
                      <Link href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  {personalInfo.linkedinUrl && (
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-500"
                    >
                      <Link href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  {personalInfo.email && (
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-500"
                    >
                      <Link href={`mailto:${personalInfo.email}`}>
                        <Mail className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="relative">
                  <Avatar className="h-80 w-80 border-4 border-slate-200 dark:border-slate-700 shadow-2xl">
                    <AvatarImage src="/mainProfile.jpg?height=320&width=320" alt={personalInfo.name} />
                    <AvatarFallback className="text-4xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                      {personalInfo.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Passionate about creating efficient, scalable solutions and beautiful user experiences.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="flex items-center justify-center mb-3">
                      <Code className="h-8 w-8 text-blue-500" />
                    </div>
                    <AnimatedCounter end={12} suffix="+" />
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-2">Projects Built</div>
                  </div>
                  <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="flex items-center justify-center mb-3">
                      <Coffee className="h-8 w-8 text-amber-500" />
                    </div>
                    <AnimatedCounter end={278} suffix="+" />
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-2">Cups of Coffee</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <MapPin className="h-5 w-5" />
                    <span>Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Calendar className="h-5 w-5" />
                    <span>Available for new opportunities</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Skills & Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Python", "C/C++", "Java", "HTML/CSS", "JavaScript", "Node.js", "MySQL", "MongoDB", "AWS", "Data Structres and Algorithm"].map(
                    (skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
                        <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A selection of projects that showcase my skills and experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.slug}
                  className="group hover:shadow-xl transition-all duration-500 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:-translate-y-2"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.imageUrl || "/placeholder.svg?height=200&width=400"}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                      {project.shortDescription}
                    </CardDescription>

                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    <Button
                      asChild
                      variant="outline"
                      className="w-full bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-500"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can work together.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-500"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [resultMessage, setResultMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setResultMessage("");

    const formData = new FormData(event.currentTarget);
    // --- Paste your Web3Forms Access Key here ---
    formData.append("access_key", "86a97ff7-4f94-4c7e-b14a-94eb75741c6a"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setResultMessage("Message sent successfully! I'll get back to you soon.");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setResultMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setResultMessage("An error occurred. Please check your connection and try again.");
      console.error("Error sending message:", error);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@example.com"
                required
                className="border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              required
              className="min-h-[120px] border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 resize-none"
            />
          </div>
          {/* Submission Status and Result Message */}
          {status === "success" && (
            <div className="flex items-center gap-2 p-3 rounded-md text-sm bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">
              <CheckCircle className="h-4 w-4" />
              {resultMessage}
            </div>
          )}
          {status === "error" && (
              <div className="flex items-center gap-2 p-3 rounded-md text-sm bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200">
              <XCircle className="h-4 w-4" />
              {resultMessage}
            </div>
          )}
          <Button type="submit" disabled={status === "submitting"} className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-500 disabled:opacity-50 flex items-center justify-center">
            {status === "submitting" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {status === "submitting" ? "Sending..." : "Send Message"}
            {status !== "submitting" && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
