import './globals.css'

export const metadata = {
  title: 'Amirul Aziz',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
