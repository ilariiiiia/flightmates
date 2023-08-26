import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import React from "react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flightmates',
  description: 'Chat with your flightmates from upcoming flights!',
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
