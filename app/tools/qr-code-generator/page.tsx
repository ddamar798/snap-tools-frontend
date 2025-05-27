'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ToolForm from '../../../components/ToolForm'

export default function ToolPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-4 text-white">QR Code Generator</h1>
        <p className="text-gray-400 mb-6">Buat QR Code dari teks atau tautan.</p>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-800">Form ini akan menggunakan input teks khusus.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
