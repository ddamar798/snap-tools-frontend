'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ToolForm from '../../../components/ToolForm'
import TextToolForm from '../../../components/TextToolForm'

export default function ToolPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-4 text-white">Compress PDF</h1>
        <p className="text-gray-400 mb-6">Kompres ukuran file PDF tanpa mengurangi kualitas.</p>

        <div className="bg-white p-6 rounded-lg shadow">
          <ToolForm endpoint="http://localhost:8080/api/tools/compress-pdf" accept=".pdf" title="Unggah File" buttonLabel="Kompres PDF" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
