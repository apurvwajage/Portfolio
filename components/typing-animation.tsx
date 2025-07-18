"use client"

import { useState, useEffect } from "react"

const roles = [
  "Software Developer",
  "Full Stack Engineer",
  "Backend Developer",
  "Web Developer",
  "Python Developer",
  "C++ Developer"
]

export function TypingAnimation() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          setCurrentText(currentRole.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        } else {
          setCurrentText(currentRole.substring(0, currentText.length + 1))

          if (currentText === currentRole) {
            setIsPaused(true)
          }
        }
      },
      isDeleting ? 50 : isPaused ? 2000 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentRoleIndex])

  return (
    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      {currentText}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  )
}
