import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import React from "react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Flightmates',
    description: 'Chat with your flightmates from upcoming flights!',
    generator: "Next.js",
    applicationName: "Flightmates",
    authors: [{name: "Nicola Migone", url: "https://www.ilariamigone.eu"}, {name: "Gabriel Noe Napiere", url: "02portfolio.vercel.app"}]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body>
            <Navbar/>
            {children}
        </body>
    </html>
  )
}
