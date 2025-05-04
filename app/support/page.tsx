import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 md:py-12">
        <div className="mb-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Back to Home
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Support Center</h1>
          <p className="text-lg text-muted-foreground mb-12">
            We're here to help you get the most out of Canvo. Find the support option that works best for you.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-semibold mb-3">Email Support</h2>
              <p className="text-muted-foreground mb-4">
                Have a question or need assistance? Our support team is ready to help.
              </p>
              <Button asChild>
                <Link href="mailto:canvohelp@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Support
                </Link>
              </Button>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-semibold mb-3">FAQ</h2>
              <p className="text-muted-foreground mb-4">
                Find quick answers to common questions about using Canvo.
              </p>
              <Button asChild variant="secondary">
                <Link href="/#faq">View FAQ</Link>
              </Button>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-semibold mb-3">Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                Learn about how we protect your privacy and handle your data.
              </p>
              <Button asChild variant="secondary">
                <Link href="/privacy">View Privacy Policy</Link>
              </Button>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Support Hours</h2>
            <p className="text-muted-foreground mb-4">
              Our support team is available Monday through Friday, 9:00 AM to 5:00 PM EST. 
              We strive to respond to all inquiries within 24 hours.
            </p>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong>Email:</strong> canvohelp@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                For urgent matters, please include "URGENT" in your email subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 