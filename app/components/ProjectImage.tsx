"use client"
import { useState } from "react"
import Image from "next/image"

interface Props {
  src: string
  name: string
  gradient: string
  accent: string
}

export default function ProjectImage({ src, name, gradient, accent }: Props) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`relative h-44 bg-gradient-to-br ${gradient} border-b border-white/5 flex items-center justify-center overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <span className={`text-5xl font-black opacity-10 ${accent} select-none`}>
          {name[0]}
        </span>
      </div>
    )
  }

  return (
    <div className="relative h-44 overflow-hidden border-b border-white/5">
      <Image
        src={src}
        alt={`${name} screenshot`}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        onError={() => setError(true)}
      />
    </div>
  )
}
