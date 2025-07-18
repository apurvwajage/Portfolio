"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, CheckCircle } from "lucide-react"
import { personalInfo } from "@/lib/data"
import nextConfig from "@/next.config.mjs"

export function ResumeDownloadClean() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)

  const handleDownload = async () => {
    if (isDownloading || isDownloaded) return

    setIsDownloading(true)

    try {
      const resumeUrl =
        personalInfo.resumeUrl || "/Apurva_Wajage.pdf"

      const response = await fetch(resumeUrl)
      const blob = await response.blob()

      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.target="_blank"
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
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant="outline"
      className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-500"
    >
      <div className="flex items-center space-x-2">
        {isDownloaded ? (
          <CheckCircle className="h-4 w-4 text-green-500" />
        ) : isDownloading ? (
          <div className="h-4 w-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
        ) : (
          <Download className="h-4 w-4" />
        )}
        <span>{isDownloaded ? "Downloaded!" : isDownloading ? "Downloading..." : "Download Resume"}</span>
      </div>
    </Button>
  )
}
