import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body style={{ background: 'rgb(249, 250, 252)'}}>{children}</body>
    </html>
  )
}
