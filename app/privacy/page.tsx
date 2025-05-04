import Link from "next/link"
import { Shield, Lock, Database, ExternalLink, RefreshCw, UserCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const sections = [
  {
    icon: Lock,
    title: "Local Data Storage",
    description: "Your data never leaves your device. Everything is stored locally for maximum privacy.",
    items: [
      {
        subtitle: "Canvas API Key",
        points: [
          "Your Canvas LMS API key is stored securely on your local device only",
          "The API key is encrypted and never leaves your device",
          "You can remove your API key at any time through the app settings"
        ]
      },
      {
        subtitle: "Task Management Data",
        points: [
          "All your tasks, assignments, and settings are stored locally on your device",
          "Course information is synced directly between your device and Canvas",
          "No task or assignment data is ever sent to our servers"
        ]
      }
    ]
  },
  {
    icon: Shield,
    title: "No Data Collection",
    description: "We want to be completely transparent about our zero-data-collection policy:",
    points: [
      "We do not collect any personal information",
      "We do not track your usage or behavior",
      "We do not use analytics or tracking tools",
      "We do not store any data on our servers",
      "All communication is directly between your device and Canvas"
    ]
  },
  {
    icon: UserCheck,
    title: "Your Data Control",
    description: "Since all data is stored locally, you have complete control:",
    points: [
      "Access your data directly on your device",
      "Uninstall the app to remove all stored data",
      "Your data remains private and under your control at all times"
    ]
  },
  {
    icon: ExternalLink,
    title: "Third-Party Services",
    description: "The only external service Canvo interacts with is Canvas LMS, and this communication happens directly from your device using your provided API key. We do not act as an intermediary for any data transfer."
  },
  {
    icon: RefreshCw,
    title: "Changes to Privacy Policy",
    description: "We may update this privacy policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will maintain our commitment to keeping your data local and private."
  },
  {
    icon: Database,
    title: "Contact Us",
    description: "For questions about our privacy practices:",
    points: [
      "Email: canvohelp@gmail.com",
      "Support: Visit our Support Center"
    ]
  }
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 md:py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last Updated: May 2, 2025</p>
          </div>

          {/* Introduction */}
          <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
            <div className="bg-muted/50 rounded-lg p-6 border border-border">
              <p className="text-lg leading-relaxed">
                Canvo is designed with your privacy as the top priority. We believe in complete data privacy, 
                which is why all your data is stored locally on your device. We do not collect, store, or 
                process any of your personal information on our servers.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    
                    {section.items && section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="mb-6 last:mb-0">
                        <h3 className="text-lg font-medium mb-2">{item.subtitle}</h3>
                        <ul className="space-y-2">
                          {item.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    
                    {section.points && (
                      <ul className="space-y-2">
                        {section.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {point.includes("Support:") ? (
                                <>
                                  Support:{" "}
                                  <Link href="/support" className="text-primary hover:underline">
                                    Visit our Support Center
                                  </Link>
                                </>
                              ) : (
                                point
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 