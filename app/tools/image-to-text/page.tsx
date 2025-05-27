'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ToolForm from '../../../components/ToolForm'

export default function ToolPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Image to Text (OCR)</h1>
        <p className="text-gray-400 mb-6">Ekstrak teks dari gambar dengan teknologi OCR.</p>

        <div className="bg-white p-6 rounded-lg shadow">
          <ToolForm endpoint="http://localhost:8080/api/tools/image-to-text" accept="image/*" title="Unggah File" buttonLabel="Ekstrak Teks" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
