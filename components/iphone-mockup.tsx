"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface IPhoneMockupProps {
  screenImage: string
  className?: string
}

export function IPhoneMockup({ screenImage, className = "" }: IPhoneMockupProps) {
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const phone = phoneRef.current
    if (!phone) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = phone.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      phone.style.transform = `
        perspective(1000px)
        rotateY(${x * 10}deg)
        rotateX(${-y * 10}deg)
        translateZ(0)
      `
    }

    const handleMouseLeave = () => {
      phone.style.transform = `
        perspective(1000px)
        rotateY(0)
        rotateX(0)
        translateZ(0)
      `
      phone.style.transition = "transform 0.5s ease"
    }

    const handleMouseEnter = () => {
      phone.style.transition = "transform 0.1s ease"
    }

    phone.addEventListener("mousemove", handleMouseMove)
    phone.addEventListener("mouseleave", handleMouseLeave)
    phone.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      phone.removeEventListener("mousemove", handleMouseMove)
      phone.removeEventListener("mouseleave", handleMouseLeave)
      phone.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  return (
    <div
      ref={phoneRef}
      className={`relative w-[280px] h-[560px] mx-auto ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.5s ease",
      }}
    >
      {/* Phone frame */}
      <div
        className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-purple-300 to-purple-400"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(-10px)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        }}
      ></div>

      {/* Side button */}
      <div
        className="absolute right-[-3px] top-[120px] w-[3px] h-[30px] bg-purple-600 rounded-r-md"
        style={{ transform: "translateZ(-5px)" }}
      ></div>

      {/* Volume buttons */}
      <div
        className="absolute left-[-3px] top-[100px] w-[3px] h-[30px] bg-purple-600 rounded-l-md"
        style={{ transform: "translateZ(-5px)" }}
      ></div>
      <div
        className="absolute left-[-3px] top-[140px] w-[3px] h-[30px] bg-purple-600 rounded-l-md"
        style={{ transform: "translateZ(-5px)" }}
      ></div>

      {/* Screen */}
      <div
        className="absolute inset-[8px] rounded-[32px] bg-black overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[14px] z-10">
          <div className="absolute top-[10px] right-[40px] w-[8px] h-[8px] bg-gray-700 rounded-full"></div>
          <div className="absolute top-[10px] left-[40px] w-[40px] h-[6px] bg-gray-700 rounded-full"></div>
        </div>

        {/* Screen content */}
        <div className="w-full h-full relative">
          <Image src={screenImage || "/placeholder.svg"} alt="App screenshot" fill className="object-cover" priority />
        </div>
      </div>

      {/* Reflection overlay */}
      <div
        className="absolute inset-[8px] rounded-[32px] bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"
        style={{ transform: "translateZ(1px)" }}
      ></div>
    </div>
  )
}
