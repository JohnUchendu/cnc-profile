import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? 'https://tlneabi.org.uk'
  ),
  title: 'Norwyn Solution LTD (F2065) | The Association of British Investigators',
  description:
    'Norwyn Solution LTD is a verified member of the Association of British Investigators, offering fraud investigations, asset tracing, specialist forensic services, and more.',
  openGraph: {
    title: 'Norwyn Solution LTD (F2065) | ABI Verified Member',
    description:
      'Verified ABI member offering fraud investigations, asset tracing, specialist & forensic services, tracing & status reports, undercover investigations, and brand protection.',
    url: process.env.NEXT_PUBLIC_BASE_URL ?? 'https://tlneabi.org.uk',
    siteName: 'The Association of British Investigators',
    locale: 'en_GB',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Norwyn Solution LTD (F2065) | ABI Verified Member',
    description:
      'Verified ABI member offering fraud investigations, asset tracing, forensic services, and more.',
  },
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
