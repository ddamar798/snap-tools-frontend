// layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Snap Tools - Tools Online Gratis',
  description: 'Alat-alat online gratis untuk PDF, Gambar, Teks, dan Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* ✅ Tambahkan link Tailwind via CDN */}
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="bg-gray-100 text-gray-800">{children}</body>
    </html>
  )
}
