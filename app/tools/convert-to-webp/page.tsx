'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ToolForm from '../../../components/ToolForm'

export default function ToolPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Convert to WebP</h1>
        <p className="text-gray-400 mb-6">Ubah gambar ke format WebP yang efisien.</p>

        <div className="bg-white p-6 rounded-lg shadow">
          <ToolForm endpoint="http://localhost:8080/api/tools/convert-to-webp" accept="image/*" title="Unggah File" buttonLabel="Konversi ke WebP" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
