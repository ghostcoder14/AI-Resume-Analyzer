import "./globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Resume Analyzer",
  description: "Analyze and improve your resume with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
