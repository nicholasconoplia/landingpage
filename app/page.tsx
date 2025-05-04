import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Menu, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DynamicThreeIPhone } from "@/components/three-iphone"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/app-icon.png"
              alt="Canvo Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold">Canvo</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#why" className="text-sm font-medium hover:text-primary">
              Why Canvo
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#real-talk" className="text-sm font-medium hover:text-primary">
              Real Talk
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="#download">Try Free →</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 lg:pt-8 lg:pb-20 bg-gradient-to-b from-background to-muted overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2 sm:space-y-4">
                  <Badge className="w-fit mx-auto lg:mx-0 mb-2 text-sm">🟣 Now Open: Free for Early Users</Badge>
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
                    Never Miss a Deadline Again.
                  </h1>
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    One App. Zero Stress. Better Grades.
                  </h2>
                  <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                    Organize every assignment, quiz, and deadline from Canvas in seconds — without juggling five different tools.
                    <span className="block mt-2 text-xs xs:text-sm sm:text-base font-medium">Built by a student who was tired of missing midnight submissions.</span>
                  </p>
                </div>
                
                <div className="flex flex-col gap-2 sm:gap-4">                  
                  <div className="relative">
                    <Button asChild size="lg" className="w-full sm:w-auto px-3 sm:px-8 text-sm sm:text-lg relative">
                      <Link href="#download" className="flex items-center gap-2 justify-center">
                        Start Using Canvo Free
                        <Badge className="ml-2 bg-primary-foreground text-primary text-xs">Early Access</Badge>
                      </Link>
                    </Button>
                    <p className="text-xs sm:text-base text-muted-foreground mt-2">Organize Your Semester in 60 Seconds →</p>
                    <p className="text-xs text-muted-foreground/80 mt-1">Launching now – limited free access for early users</p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center mt-8 sm:mt-12 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-300/10 rounded-full blur-3xl opacity-50"></div>
                <div className="relative w-[85%] xs:w-[80%] sm:w-[75%] md:w-[70%] lg:w-full h-[400px] xs:h-[450px] sm:h-[500px] md:h-[600px] lg:h-full z-10">
                  <DynamicThreeIPhone />
                </div>
                <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full z-20">
                  Student-built
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Canvo Exists */}
        <section id="why" className="py-8 sm:py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">You're Not Lazy. Canvas Just Sucks.</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                If you've ever missed a deadline because it was buried somewhere in Canvas, you know the pain.
                I made Canvo after one too many 11:59pm panic attacks.
              </p>
              <div className="grid gap-4 text-left">
                <p className="text-muted-foreground text-sm sm:text-base">You shouldn't have to:</p>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    Screenshot assignments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    Use 4 different reminder apps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    Constantly ask "Wait, when was that due?"
                  </li>
                </ul>
                <p className="text-base sm:text-lg mt-4">
                  With Canvo, every quiz, task, and deadline is imported automatically — and organized in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <div className="bg-background rounded-lg p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">😰 Before Canvo: Chaos.</h3>
                <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Canvas is a mess and you're always behind</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>You rely on sticky notes, screenshots, and half-working reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>You scramble last-minute and submit whatever will pass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>You find out about quizzes from classmates — too late</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>You feel behind while others seem effortlessly organized</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">✅ After Canvo: Control.</h3>
                <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Everything from Canvas in one view — deadlines, quizzes, tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Prioritize work with drag-and-drop and urgency filters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Get reminders before it's too late</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Focus on what matters most — and actually enjoy your free time again</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-8 sm:py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            </div>

            <div className="grid gap-12 sm:gap-16 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="space-y-6 sm:space-y-8 md:space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="font-bold text-base sm:text-lg">1</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">One-Click Canvas Import</h3>
                  <p className="text-base sm:text-lg mb-3 sm:mb-4">Connect your Canvas account in seconds.</p>
                  <p className="text-sm sm:text-base text-muted-foreground">🎯 All assignments, quizzes, and due dates are pulled in automatically.</p>
                </div>
                <div className="flex justify-center">
                  <div className="relative max-w-[280px] sm:max-w-sm mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-t from-muted via-transparent to-transparent -bottom-12 z-10" />
                    <Image
                      src="/images/import-demo.gif"
                      width={300}
                      height={600}
                      alt="One-Click Canvas Import Demo"
                      className="rounded-2xl shadow-lg mx-auto"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="space-y-6 sm:space-y-8 md:space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="font-bold text-base sm:text-lg">2</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Prioritize & Plan Instantly</h3>
                  <p className="text-base sm:text-lg mb-3 sm:mb-4">Use simple drag-and-drop to organize by urgency and importance.</p>
                  <p className="text-sm sm:text-base text-muted-foreground">🎨 Visual calendar, color-coded deadlines, and swipe-to-complete tasks.</p>
                </div>
                <div className="flex justify-center">
                  <div className="relative max-w-[280px] sm:max-w-sm mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-t from-muted via-transparent to-transparent -bottom-12 z-10" />
                    <Image
                      src="/images/prioritize-demo.gif"
                      width={300}
                      height={600}
                      alt="Task Organization Demo"
                      className="rounded-2xl shadow-lg mx-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="space-y-6 sm:space-y-8 md:space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="font-bold text-base sm:text-lg">3</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Spin the Wheel (When You're Overwhelmed)</h3>
                  <p className="text-base sm:text-lg mb-3 sm:mb-4">Can't decide what to start with? Just spin the Canvo Wheel.</p>
                  <p className="text-sm sm:text-base text-muted-foreground">🎮 Turns procrastination into progress.</p>
                </div>
                <div className="flex justify-center">
                  <div className="relative max-w-[280px] sm:max-w-sm mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-t from-muted via-transparent to-transparent -bottom-12 z-10" />
                    <Image
                      src="/images/wheel-demo.gif"
                      width={300}
                      height={600}
                      alt="Task Wheel Demo"
                      className="rounded-2xl shadow-lg mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Talk Section */}
        <section id="real-talk" className="py-8 sm:py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">I'm the First User — And That's the Point.</h2>
              <div className="prose prose-gray dark:prose-invert mx-auto">
                <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                  I made Canvo because I needed it. This isn't some VC-funded mega app.
                  It's a tool I built after missing deadlines, getting overwhelmed, and wasting hours trying to stay on top of Canvas.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Right now, I'm inviting the first wave of real students to try it — free.
                  Your feedback helps shape what Canvo becomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Early Access Offer */}
        <section id="download" className="py-8 sm:py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-block bg-primary-foreground text-primary text-sm sm:text-base font-medium px-3 py-1 rounded-full mb-4">
                🎁 Get Free Lifetime Access — Just for Being Early
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">What You Get:</h2>
              <div className="text-left max-w-md mx-auto mb-6 sm:mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Unlimited assignment syncing from Canvas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Smart reminders & visual task calendar</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Canvo Wheel — turn overwhelm into action</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">All future features, free for life</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm mt-4 text-primary-foreground/80">(No credit card. No catch.)</p>
              </div>
              <p className="text-base sm:text-lg mb-6 sm:mb-8">🎓 This is a limited early access — once we hit 500 users, this lifetime deal disappears.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-base sm:text-lg w-full sm:w-auto">
                  <Link href="https://apps.apple.com/au/app/canvo/id6745335226" className="flex items-center gap-2 justify-center">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.21 2.33-.91 3.57-.84 1.5.09 2.63.68 3.35 1.76-2.99 1.77-2.46 5.9.17 7.03-.92 2.1-2.11 4.19-4.17 6.22M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Download Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-8 sm:py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Quick Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm sm:text-base">How does Canvo connect to Canvas?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    You'll need to get your API key from your Canvas settings page. Once you add your API key to Canvo, everything imports automatically.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm sm:text-base">What if my school doesn't use Canvas?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Right now Canvo only works with Canvas. Other platforms coming soon.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm sm:text-base">Is it really free forever?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Yes — early users keep free access for life. No credit card needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm sm:text-base">Do I need to be tech-savvy to use it?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Nope. If you can use Canvas, you can use Canvo. It's faster, simpler, and built for students.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-4 sm:py-6">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/app-icon.png"
              alt="Canvo Logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-xs sm:text-sm font-medium">Built by a student. Now it's yours.</span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Canvo. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/support" className="text-xs text-muted-foreground hover:text-foreground">
              Support
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
