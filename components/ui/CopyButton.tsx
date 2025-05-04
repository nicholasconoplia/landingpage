"use client"
import { useState } from "react"

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (text) {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="mt-2 px-3 py-1 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/80 transition-colors border border-primary/30"
      aria-label="Copy email script"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  )
} 