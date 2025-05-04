"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link
              href="#why"
              className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              Why Canvo
            </Link>
            <Link
              href="#features"
              className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#real-talk"
              className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              Real Talk
            </Link>
            <Link
              href="#faq"
              className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <div className="px-2 py-2">
              <Button asChild className="w-full" size="sm" onClick={() => setIsOpen(false)}>
                <Link href="#download">Try Free →</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
