import "./globals.css";

import localFont from 'next/font/local'

const stabilGrotesk = localFont({
  src: '../public/fonts/StabilGrotesk-Regular.otf',
  variable: '--font-stabil',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${stabilGrotesk.variable}`}>
      <body className="font-stabil antialiased">
        {children}
      </body>
    </html>
  )
}