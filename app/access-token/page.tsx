import React from "react"
import { CopyButton } from "@/components/ui/CopyButton"

const canvoEmailTemplate = `Subject: Request for Canvas Access Token for Canvo App

Dear [IT Support / Canvas Administrator's Name],

I am a student at [Your University Name] and recently downloaded the Canvo app to help me stay organized with my coursework. I often find Canvas overwhelming and difficult to keep track of all my assignments, deadlines, and course information in one place.

Canvo promises to simplify this process by automatically organizing my tasks and deadlines, but it requires access to my Canvas access token. Unfortunately, I do not currently have access to generate an access token from my account.

I am requesting your assistance in enabling access token generation for my account so I can use Canvo to:
- Automatically sync all my assignments, quizzes, and deadlines
- Receive smart reminders and visual task calendars
- Stay on top of my coursework and reduce stress

I understand that access token usage is subject to security and policy considerations. I want to assure you that:
- The app will only access data tied to my personal Canvas account
- No third-party data will be collected or shared
- The access token will be stored securely and used solely for academic purposes
- I am happy to follow any additional guidelines or submit a formal request if needed

If student access is restricted, I would greatly appreciate your advice on whether there's an alternative path—such as faculty sponsorship or a sandbox environment—that would allow me to move forward responsibly.

Thank you for considering my request. If you have any questions about Canvo, you can visit https://canvo.vercel.app, contact support at canvohelp@gmail.com, or use the support page at https://canvo.vercel.app/support.

Best regards,
[Your Full Name]
[Your Student ID]
[Your Email Address]
[Your Degree Program / Faculty]

Canvo Privacy Policy Highlights:
- Your data never leaves your device. Everything is stored locally for maximum privacy.
- Your Canvas access token is stored securely and encrypted on your local device only.
- You can remove your access token at any time through the app settings.
- All your tasks, assignments, and settings are stored locally on your device.
- Course information is synced directly between your device and Canvas.
- No task or assignment data is ever sent to our servers.
- We do not collect any personal information or track your usage.
- We do not use analytics or tracking tools.
- All communication is directly between your device and Canvas.
- You have complete control: uninstall the app to remove all stored data.
- The only external service Canvo interacts with is Canvas LMS, and this communication happens directly from your device using your provided access token.

Full policy: https://canvo.vercel.app/privacy`

function OpenInEmailButton() {
  const subject = "Request for Canvas Access Token for Canvo App"
  const body = `Dear [IT Support / Canvas Administrator's Name],\n\nI am a student at [Your University Name] and recently downloaded the Canvo app to help me stay organized with my coursework. I often find Canvas overwhelming and difficult to keep track of all my assignments, deadlines, and course information in one place.\n\nCanvo promises to simplify this process by automatically organizing my tasks and deadlines, but it requires access to my Canvas access token. Unfortunately, I do not currently have access to generate an access token from my account.\n\nI am requesting your assistance in enabling access token generation for my account so I can use Canvo to:\n- Automatically sync all my assignments, quizzes, and deadlines\n- Receive smart reminders and visual task calendars\n- Stay on top of my coursework and reduce stress\n\nI understand that access token usage is subject to security and policy considerations. I want to assure you that:\n- The app will only access data tied to my personal Canvas account\n- No third-party data will be collected or shared\n- The access token will be stored securely and used solely for academic purposes\n- I am happy to follow any additional guidelines or submit a formal request if needed\n\nIf student access is restricted, I would greatly appreciate your advice on whether there's an alternative path—such as faculty sponsorship or a sandbox environment—that would allow me to move forward responsibly.\n\nThank you for considering my request. If you have any questions about Canvo, you can visit https://canvo.vercel.app, contact support at canvohelp@gmail.com, or use the support page at https://canvo.vercel.app/support.\n\nBest regards,\n[Your Full Name]\n[Your Student ID]\n[Your Email Address]\n[Your Degree Program / Faculty]\n\nCanvo Privacy Policy Highlights:\n- Your data never leaves your device. Everything is stored locally for maximum privacy.\n- Your Canvas access token is stored securely and encrypted on your local device only.\n- You can remove your access token at any time through the app settings.\n- All your tasks, assignments, and settings are stored locally on your device.\n- Course information is synced directly between your device and Canvas.\n- No task or assignment data is ever sent to our servers.\n- We do not collect any personal information or track your usage.\n- We do not use analytics or tracking tools.\n- All communication is directly between your device and Canvas.\n- You have complete control: uninstall the app to remove all stored data.\n- The only external service Canvo interacts with is Canvas LMS, and this communication happens directly from your device using your provided access token.\n\nFull policy: https://canvo.vercel.app/privacy`
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

export default function AccessTokenPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">How to Request Your Canvas Access Token</h1>
      <p className="mb-6 text-muted-foreground text-lg">Some universities do not allow students to generate a Canvas access token by default. If you need to request access, you can use the template below to email or call your IT department or Canvas administrator.</p>
      <p className="mt-4 font-semibold flex items-center gap-2">Here is a custom email (or script if you are going to call them) you can write to ask for permission: <span role="img" aria-label="point down">👇</span></p>
      <div className="flex gap-2 mt-2">
        <CopyButton text={canvoEmailTemplate} />
        <OpenInEmailButton />
      </div>
      <div className="bg-white dark:bg-zinc-900 border border-border rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="px-5 py-3 border-b border-border bg-zinc-50 dark:bg-zinc-800 flex flex-col gap-1">
          <div className="text-xs text-muted-foreground"><span className="font-semibold">From:</span> <span className="font-mono">your.email@university.edu</span></div>
          <div className="text-xs text-muted-foreground"><span className="font-semibold">To:</span> <span className="font-mono">canvas-support@university.edu</span></div>
          <div className="text-xs text-muted-foreground"><span className="font-semibold">Subject:</span> Request for Canvas Access Token for Canvo App</div>
        </div>
        <div className="px-5 py-4 text-sm font-sans leading-relaxed bg-white dark:bg-zinc-900">
          <div className="space-y-4">
            <div className="text-base font-semibold">Dear [IT Support / Canvas Administrator's Name],</div>
            <div className="border-l-4 border-primary pl-4 bg-primary/5 py-2 rounded">
              I am a student at [Your University Name] and recently downloaded the Canvo app to help me stay organized with my coursework. I often find Canvas overwhelming and difficult to keep track of all my assignments, deadlines, and course information in one place.
            </div>
            <div>
              Canvo promises to simplify this process by automatically organizing my tasks and deadlines, but it requires access to my Canvas access token. Unfortunately, I do not currently have access to generate an access token from my account.
            </div>
            <div>
              I am requesting your assistance in enabling access token generation for my account so I can use Canvo to:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Automatically sync all my assignments, quizzes, and deadlines</li>
                <li>Receive smart reminders and visual task calendars</li>
                <li>Stay on top of my coursework and reduce stress</li>
              </ul>
            </div>
            <div>
              I understand that access token usage is subject to security and policy considerations. I want to assure you that:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>The app will only access data tied to my personal Canvas account</li>
                <li>No third-party data will be collected or shared</li>
                <li>The access token will be stored securely and used solely for academic purposes</li>
                <li>I am happy to follow any additional guidelines or submit a formal request if needed</li>
              </ul>
            </div>
            <div>
              If student access is restricted, I would greatly appreciate your advice on whether there's an alternative path—such as faculty sponsorship or a sandbox environment—that would allow me to move forward responsibly.
            </div>
            <div>
              Thank you for considering my request. If you have any questions about Canvo, you can visit <a href="https://canvo.vercel.app" className="underline text-primary" target="_blank" rel="noopener noreferrer">canvo.vercel.app</a>, contact support at <a href="mailto:canvohelp@gmail.com" className="underline text-primary">canvohelp@gmail.com</a>, or use the support page at <a href="https://canvo.vercel.app/support" className="underline text-primary" target="_blank" rel="noopener noreferrer">canvo.vercel.app/support</a>.
            </div>
            <div className="text-base font-semibold">Best regards,<br />[Your Full Name]<br />[Your Student ID]<br />[Your Email Address]<br />[Your Degree Program / Faculty]</div>
            <div className="pt-2 text-xs text-muted-foreground bg-zinc-50 dark:bg-zinc-800 rounded border border-border px-4 py-3 mt-4">
              <span className="font-semibold text-primary">Canvo Privacy Policy Highlights:</span>
              <ul className="list-disc ml-6 mt-1 space-y-0.5">
                <li>Your data never leaves your device. Everything is stored locally for maximum privacy.</li>
                <li>Your Canvas access token is stored securely and encrypted on your local device only.</li>
                <li>You can remove your access token at any time through the app settings.</li>
                <li>All your tasks, assignments, and settings are stored locally on your device.</li>
                <li>Course information is synced directly between your device and Canvas.</li>
                <li>No task or assignment data is ever sent to our servers.</li>
                <li>We do not collect any personal information or track your usage.</li>
                <li>We do not use analytics or tracking tools.</li>
                <li>All communication is directly between your device and Canvas.</li>
                <li>You have complete control: uninstall the app to remove all stored data.</li>
                <li>The only external service Canvo interacts with is Canvas LMS, and this communication happens directly from your device using your provided access token.</li>
              </ul>
              <div className="mt-2">Full policy: <a href="https://canvo.vercel.app/privacy" className="underline text-primary" target="_blank" rel="noopener noreferrer">canvo.vercel.app/privacy</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 