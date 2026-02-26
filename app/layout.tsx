import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CNC Intelligence LTD (F2265) | The Association of British Investigators',
  description: 'Member profile for CNC Intelligence LTD - Association of British Investigators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
