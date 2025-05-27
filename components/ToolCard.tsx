// components/ToolCard.tsx

import Link from 'next/link'

// Komponen ini menerima props dari halaman utama
interface ToolCardProps {
  title: string
  description: string
  slug: string // slug ini digunakan untuk routing ke halaman tool
  icon?: string // emoji atau ikon sederhana
}

export default function ToolCard({ title, description, slug, icon }: ToolCardProps) {
  return (
    <div className="bg-white shadow rounded-xl p-4 transition hover:shadow-md">
      <div className="flex items-center space-x-3">
        {/* Ikon atau Emoji */}
        <div className="text-3xl">{icon}</div>

        {/* Judul & Deskripsi Tool */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* Tombol Gunakan */}
      <div className="mt-4 text-right">
        <Link
          href={`/tools/${slug}`}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
        >
          Gunakan
        </Link>
      </div>
    </div>
  )
}
