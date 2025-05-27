'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ToolForm from '../../../components/ToolForm'

export default function ToolPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Merge PDF</h1>
        <p className="text-gray-400 mb-6">Gabungkan beberapa file PDF menjadi satu.</p>

        <div className="bg-white p-6 rounded-lg shadow">
          <ToolForm endpoint="http://localhost:8080/api/tools/merge-pdf" accept=".pdf" title="Unggah File" buttonLabel="Gabungkan PDF" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
