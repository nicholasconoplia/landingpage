import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Menu, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DynamicThreeIPhone } from "@/components/three-iphone"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MobileMenu } from "@/components/mobile-menu"
import React, { useState } from "react"
import { CopyButton } from "@/components/ui/CopyButton"

const canvoEmailTemplate = `Subject: Request for Canvas Access Token for Canvo App\n\nDear [IT Support / Canvas Administrator's Name],\n\nI am a student at [Your University Name] and recently downloaded the Canvo app to help me stay organized with my coursework. I often find Canvas overwhelming and difficult to keep track of all my assignments, deadlines and course information in one place.\n\nCanvo promises to simplify this process by automatically organizing my tasks and deadlines, but it requires access to my Canvas access token. Unfortunately, I do not currently have access to generate an access token from my account.\n\nI am requesting your assistance in enabling access token generation for my account so I can use Canvo to:\n- Automatically sync all my assignments, quizzes, and deadlines\n- Receive smart reminders and visual task calendars\n- Stay on top of my coursework and reduce stress\n\nI understand that access token usage is subject to security and policy considerations. I want to assure you that:\n- The app will only access data tied to my personal Canvas account\n- No third-party data will be collected or shared\n- The access token will be stored securely and encrypted on your local device only.\n- I am happy to follow any additional guidelines or submit a formal request if needed.\n\nIf student access is restricted, I would greatly appreciate your advice on whether there's an alternative path—such as faculty sponsorship or a sandbox environment—that would allow me to move forward responsibly.\n\nThank you for considering my request. If you have any questions about Canvo, you can visit https://canvo.vercel.app, contact support at canvohelp@gmail.com, or use the support page at https://canvo.vercel.app/support.\n\nBest regards,\n[Your Full Name]\n[Your Student ID]\n[Your Email Address]\n[Your Degree Program / Faculty]\n\nCanvo Privacy Policy Highlights:\n- Your data never leaves your device. Everything is stored locally for maximum privacy.\n- Your Canvas access token is stored securely and encrypted on your local device only.\n- You can remove your access token at any time through the app settings.\n- All your tasks, assignments, and settings are stored locally on your device.\n- Course information is synced directly between your device and Canvas.\n- No task or assignment data is ever sent to our servers.\n- We do not collect any personal information or track your usage.\n- We do not use analytics or tracking tools.\n- All communication is directly between your device and Canvas.\n- You have complete control: uninstall the app to remove all stored data.\n- The only external service Canvo interacts with is Canvas LMS, and this communication happens directly from your device using your provided access token.\n
Full policy: https://canvo.vercel.app/privacy`

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
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#real-talk" className="text-sm font-medium hover:text-primary">
              My Story
            </Link>
            <Link href="#download" className="text-sm font-medium hover:text-primary">
              Get Canvo
            </Link>
            <Link href="/access-token" className="text-sm font-medium hover:text-primary">
              Access Token Help
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
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 sm:space-y-4">
                  <Badge className="w-fit mb-2 text-sm">🎓 Only 30 Students So Far - 470 Free Spots Left</Badge>
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
                    Never Miss a Deadline Again.
                  </h1>
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    One App. Zero Stress. Better Grades.
                  </h2>
                  <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-[600px]">
                    This is THE ONLY app that automatically organizes your Canvas assignments, quizzes, and deadlines in under 10 seconds.
                  </p>
                  <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-[600px] font-medium">
                    I built this because I was that student. Now my grades are up, my stress is down, and I actually have free time again.
                  </p>
                </div>
                
                <div className="space-y-4 text-sm xs:text-base">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>For students who want better grades but feel overwhelmed by Canvas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Not for people who enjoy chaos or don't care about their grades</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:gap-4">                  
                  <div className="relative">
                    <Button asChild size="lg" className="w-full sm:w-auto px-3 sm:px-8 text-sm sm:text-lg relative">
                      <Link href="#download" className="flex items-center gap-2 justify-center">
                        Get Free Early Access
                        <Badge className="ml-2 bg-primary-foreground text-primary text-xs">470 Spots Left</Badge>
                      </Link>
                    </Button>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2">👉 Takes 60 seconds to sync your Canvas assignments</p>
                    <p className="text-xs text-muted-foreground/80 mt-1">Free for early users — I'm a student, not a company</p>
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

        {/* Section 1 – The Struggle */}
        <section className="py-8 sm:py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">I Was Always Refreshing Canvas — But Still Missing Deadlines.</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>Canvas had due dates all over the place; modules, assignments, quizzes, announcements – I was stuck.</p>
                <p>I had alarms, sticky notes, even an aesthetic colour coded Notion board — and I still forgot stuff – there was too much to look at.</p>
                <p>It made me feel messy, slow, behind… even when I was trying.</p>
                <p>I felt like everyone else was managing — and I was secretly drowning.</p>
                <p>That's why I made Canvo.</p>
                <p>It's simple, clear, and it works.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – Who This Is For */}
        <section className="py-8 sm:py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">This Is For Students Who Want to Stop Feeling Behind</h2>
              
              <div className="bg-background rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">You know that feeling when...</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>You're lying in bed at 2 AM, sweating because you can't remember if that assignment was due tonight or tomorrow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Your friend mentions a quiz due tonight and your stomach drops — because you had no idea it existed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>You spend an hour organizing your tasks instead of actually doing them — and still feel overwhelmed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>You can't enjoy your weekend because there's always this nagging feeling you forgot something important</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">But imagine if instead...</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>You could see every assignment, quiz, and deadline in one clean view — automatically synced from Canvas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>You got reminders before things were due — not after you missed them</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>You could actually relax on weekends because you know exactly what's done and what's next</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Your friends asked how you always seem to be on top of everything (while having free time)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-lg font-medium">This isn't for everyone. And that's okay.</p>
                <p className="text-muted-foreground">If you enjoy the chaos of last-minute cramming or don't care about your grades, you can stop reading.</p>
                <p className="text-muted-foreground">But if you want to do better and feel better — Canvo was built for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – What Canvo Does */}
        <section id="features" className="py-8 sm:py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Here's Everything I Built Into Canvo — And Why It Helps Me</h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
              {/* Feature 1: Canvas Sync */}
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">📥 Canvas Sync</h3>
                <p className="text-muted-foreground">I don't enter anything manually. Canvo pulls all my assignments, quizzes, and due dates in one click. I see everything, clearly.</p>
              </div>

              {/* Feature 2: Smart Task List */}
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">🧠 Smart Task List</h3>
                <p className="text-muted-foreground">I add personal tasks too. I sort by priority, swipe to finish, and never second guess where to start.</p>
              </div>

              {/* Feature 3: The Task Spinner */}
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">🎡 The Task Spinner</h3>
                <p className="text-muted-foreground">When I'm stuck or overwhelmed, I just spin the wheel. It picks for me — and I start moving.</p>
              </div>

              {/* Feature 4: Visual Calendar */}
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">📅 Visual Calendar</h3>
                <p className="text-muted-foreground">I finally understand my week. Everything's color-coded and in order. No more surprises.</p>
              </div>

              {/* Feature 5: Reminders That Actually Help */}
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">🔔 Reminders That Actually Help</h3>
                <p className="text-muted-foreground">Canvo reminds me before things are due — and keeps reminding me until it's done. No more "I forgot."</p>
              </div>

              {/* Feature 6: Designed to Stay Out of My Way */}
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">🎨 Designed to Stay Out of My Way</h3>
                <p className="text-muted-foreground">I switch between dark mode and light mode. I choose my color. Everything's fast and smooth.</p>
              </div>

              {/* Feature 7: Private and Local */}
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">🔐 Private and Local</h3>
                <p className="text-muted-foreground">I don't need an account. My Canvas login is locked on my device. Nothing is tracked or sold.</p>
              </div>

              {/* Feature 8: Fast Setup */}
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">🚀 Fast Setup</h3>
                <p className="text-muted-foreground">I connected to my Canvas in 2 minutes and it just worked. No mess, no stress.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 – Why I Made This */}
        <section id="why" className="py-8 sm:py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Look, I'm Just One Student Who Got Tired of Missing Deadlines</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  I'm not a big company. I'm not VC-funded. I'm a student who built this app during exam season because I was drowning in Canvas deadlines.
                </p>
                <p className="text-lg">
                  Truth is, I'm not even selling it yet. I want 500 students to use it for free, tell me what sucks, and help me make it better.
                </p>
                
                <div className="bg-background rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Here's what kept happening to me:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>I'd screenshot assignments because Canvas was too messy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>I'd use 4 different apps to track everything</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>I'd still miss quizzes hidden in random modules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>I'd waste more time organizing than actually studying</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-bold mb-3">So I Built Something Simple That Actually Works</h3>
                  <p className="text-lg mb-4">
                    Notion couldn't do it. ToDoist couldn't do it. Even Canvas couldn't do it. They don't know what it's like to be a student drowning in their own system.
                  </p>
                  <p className="text-lg font-medium">
                    I do. And that's why Canvo is different.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 – The Result */}
        <section id="real-talk" className="py-8 sm:py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Plot Twist: I Built This During Finals — And Still Got Better Grades</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">Here's the crazy part: I used Canvo throughout the term to track everything. It worked so well, I actually had time during finals to build new features.</p>
                <p className="text-lg">Think about that. While others were cramming, I was coding — because all my assignments were already done.</p>
                <p className="text-lg">For the first time, I wasn't just barely keeping up. I was ahead enough to build an entire app.</p>
                
                <div className="bg-muted rounded-lg p-6 shadow-sm my-6">
                  <div className="relative w-full max-w-2xl mx-auto">
                    <Image
                      src="/images/transcript.png"
                      alt="Academic transcript showing improved grades from Credit results to High Distinction results"
                      width={800}
                      height={400}
                      className="rounded-md w-full"
                    />
                    <p className="text-sm text-muted-foreground mt-4 text-center">My actual grades before and after using Canvo</p>
                  </div>
                </div>
                
                <p className="text-lg">Notion couldn't do this. ToDoist couldn't do this. Even Canvas couldn't do this.</p>
                <p className="text-lg">They don't know what it's like to be drowning in their own system. I do.</p>
                <p className="text-lg font-medium">That's why I built something that actually works.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 – Sound Familiar? */}
        <section className="py-8 sm:py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Does This Sound Like You?</h2>
              <ul className="space-y-4 text-muted-foreground text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>You wake up wondering if you forgot something due</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>You open Canvas and instantly feel lost</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>You miss quizzes you didn't know were there because they were hidden behind a size 4 font and the tutors didn't email you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>You feel like you're working hard but still behind</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>You waste more time planning than doing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>You keep saying "I'll get organized" — and never do</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>You scroll Canvas until your eyes blur — and still miss something important</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>You keep "organising" instead of doing — and it never feels finished</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground mt-8">If that's you, then I made Canvo for you.</p>
              <p className="text-lg font-medium text-muted-foreground mt-4">It won't fix everything — but it'll make staying on track feel way easier.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="py-8 sm:py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-primary-foreground/10 text-primary-foreground text-sm font-medium px-3 py-1 rounded-full w-fit mb-6">
                🎓 Only 30 Students Using It — 470 Free Spots Left
              </div>
              
              <div className="space-y-6 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Here's What Happens When You Download:</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-foreground/20 text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <p className="font-medium">Download Canvo (Takes 10 Seconds)</p>
                      <p className="text-primary-foreground/80 text-sm">Just click the App Store button below</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-foreground/20 text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <p className="font-medium">Connect Your Canvas (Takes 50 Seconds)</p>
                      <p className="text-primary-foreground/80 text-sm">Add your Canvas API key and watch everything sync automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-foreground/20 text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <p className="font-medium">Feel Instant Relief</p>
                      <p className="text-primary-foreground/80 text-sm">See all your tasks in one place, organized and clear</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-base sm:text-lg w-full sm:w-auto">
                  <Link href="https://apps.apple.com/au/app/canvo/id6745335226" className="flex items-center gap-2 justify-center">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.21 2.33-.91 3.57-.84 1.5.09 2.63.68 3.35 1.76-2.99 1.77-2.46 5.9.17 7.03-.92 2.1-2.11 4.19-4.17 6.22M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Download Free (470 Spots Left)
                  </Link>
                </Button>
              </div>
              
              <p className="text-sm text-center mt-4 text-primary-foreground/80">
                PS: If you don't like it, just delete it. No commitment, no hassle.
              </p>
            </div>
          </div>
        </section>

        {/* Why It's Free Section */}


        {/* FAQ Section */}
        <section id="faq" className="py-8 sm:py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Canvo?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Canvo is a student-built to-do list app designed specifically for Canvas users. It automatically syncs with your Canvas account to import all assignments, quizzes, and deadlines, and organizes them in a way that makes it almost impossible to miss deadlines.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it really free?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes! The first 500 early access users get lifetime free access. No credit card, no hidden fees, no catches. Once we hit 500 users, this free lifetime deal will end.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I connect it to Canvas?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Canvo connects to Canvas using an access token. This is a special code that gives Canvo permission to read (but not modify) your Canvas information.
                      </p>
                      <p>
                        You'll need to generate an access token in your Canvas account. We have a step-by-step guide to help you do this. Some schools restrict access token generation, in which case you may need to request access from your school's IT department.
                      </p>
                      <p>
                        For detailed instructions, check out our <Link href="/access-token" className="text-primary hover:underline">Access Token Guide</Link>.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Is my data safe and private?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="font-medium">Yes, your privacy is the top priority:</p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>All your data is stored locally on your device only</li>
                        <li>Your Canvas token is stored securely and encrypted on your device only</li>
                        <li>We don't collect any personal information</li>
                        <li>No analytics or tracking of any kind</li>
                        <li>We don't have access to your assignments or grades</li>
                      </ul>
                      <p>
                        For more details, see our full <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I use Canvo without giving access to my Canvas account?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Not currently. Canvo's primary value comes from automatically syncing with Canvas to import your assignments and deadlines. Without this connection, you'd miss out on the main benefit. However, once your assignments are imported, you can continue using Canvo even if you temporarily disconnect from Canvas.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>My school doesn't allow students to generate access tokens. What can I do?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Some schools restrict access token generation for security reasons. You have a few options:
                      </p>
                      <ol className="space-y-2 list-decimal pl-5">
                        <li>Contact your school's IT support and request permission to generate an access token specifically for Canvo</li>
                        <li>Ask a professor or TA to request this on your behalf</li>
                        <li>Check if your school has a developer or API request process</li>
                      </ol>
                      <p>
                        We've created an email template you can use to request access. Visit our <Link href="/access-token" className="text-primary hover:underline">Access Token Help page</Link> to copy it.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes! Canvo is available for iOS. An Android version is currently in development and will be released soon.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>What happens if I have questions or need help?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You can reach out to us at <a href="mailto:canvohelp@gmail.com" className="text-primary hover:underline">canvohelp@gmail.com</a> or visit our <Link href="/support" className="text-primary hover:underline">Support Page</Link>. As this is a student-built project in its early stages, please be patient with response times. We're committed to helping you get the most out of Canvo!
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-8 sm:py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions or need assistance? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="lg">
                  <Link href="/support">Visit Support Page</Link>
                </Button>
                <Button asChild size="lg">
                  <a href="mailto:canvohelp@gmail.com">Email Us</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                For help with Canvas access tokens, visit our <Link href="/access-token" className="text-primary hover:underline">Access Token Guide</Link>.
              </p>
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

function OpenInEmailButton() {
  const subject = "Request for Canvas Access Token for Canvo App"
  const body = `Dear [IT Support / Canvas Administrator's Name],\n\nI am a student at [Your University Name] and recently downloaded the Canvo app to help me stay organized with my coursework. I often find Canvas overwhelming and difficult to keep track of all my assignments, deadlines and course information in one place.\n\nCanvo promises to simplify this process by automatically organizing my tasks and deadlines, but it requires access to my Canvas access token. Unfortunately, I do not currently have access to generate an access token from my account.\n\nI am requesting your assistance in enabling access token generation for my account so I can use Canvo to:\n- Automatically sync all my assignments, quizzes, and deadlines\n- Receive smart reminders and visual task calendars\n- Stay on top of my coursework and reduce stress\n\nI understand that access token usage is subject to security and policy considerations. I want to assure you that:\n- The app will only access data tied to my personal Canvas account\n- No third-party data will be collected or shared\n- The access token will be stored securely and encrypted on your local device only.\n- I am happy to follow any additional guidelines or submit a formal request if needed.\n\nIf student access is restricted, I would greatly appreciate your advice on whether there's an alternative path—such as faculty sponsorship or a sandbox environment—that would allow me to move forward responsibly.\n\nThank you for considering my request. If you have any questions about Canvo, you can visit https://canvo.vercel.app, contact support at canvohelp@gmail.com, or use the support page at https://canvo.vercel.app/support.\n\nBest regards,\n[Your Full Name]\n[Your Student ID]\n[Your Email Address]\n[Your Degree Program / Faculty]\n\nCanvo Privacy Policy Highlights:\n- Your data never leaves your device. Everything is stored locally for maximum privacy.\n- Your Canvas access token is stored securely and encrypted on your local device only.\n- You can remove your access token at any time through the app settings.\n- All your tasks, assignments, and settings are stored locally on your device.\n- Course information is synced directly between your device and Canvas.\n- No task or assignment data is ever sent to our servers.\n- We do not collect any personal information or track your usage.\n- We do not use analytics or tracking tools.\n- All communication is directly between your device and Canvas.\n- You have complete control: uninstall the app to remove all stored data.\n- The only external service Canvo interacts with is Canvas LMS, and this communication happens directly from your device using your provided access token.\n
Full policy: https://canvo.vercel.app/privacy`
  const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return (
    <a
      href={mailto}
      className="mt-2 px-3 py-1 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/80 transition-colors border border-primary/30 flex items-center"
      aria-label="Open in email client"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open in Email
    </a>
  )
}
