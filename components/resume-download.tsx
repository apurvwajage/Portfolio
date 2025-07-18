"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, FileText, CheckCircle } from "lucide-react"
import { personalInfo } from "@/lib/data"

export function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)

  const handleDownload = async () => {
    if (isDownloading || isDownloaded) return

    setIsDownloading(true)

    try {
      // Replace with your actual GitHub raw file URL
      const resumeUrl =
        personalInfo.resumeUrl || "https://raw.githubusercontent.com/yourusername/yourrepo/main/resume.pdf"

      const response = await fetch(resumeUrl)
      const blob = await response.blob()

      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${personalInfo.name.replace(" ", "_")}_Resume.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

      setIsDownloaded(true)
      setTimeout(() => setIsDownloaded(false), 3000)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Download failed. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="relative group">
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

      <Button
        onClick={handleDownload}
        disabled={isDownloading}
        className="relative px-8 py-4 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 hover:from-gray-800 hover:via-purple-800 hover:to-indigo-800 text-white border-0 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 group-hover:shadow-purple-500/50"
      >
        <div className="flex items-center space-x-3">
          {isDownloaded ? (
            <CheckCircle className="h-6 w-6 text-green-400 animate-bounce" />
          ) : isDownloading ? (
            <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <div className="relative">
              <FileText className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              <Download className="h-4 w-4 absolute -bottom-1 -right-1 text-purple-300 group-hover:animate-bounce" />
            </div>
          )}
          <span className="font-bold text-lg">
            {isDownloaded ? "Downloaded!" : isDownloading ? "Downloading..." : "Download Resume"}
          </span>
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </Button>
    </div>
  )
}
