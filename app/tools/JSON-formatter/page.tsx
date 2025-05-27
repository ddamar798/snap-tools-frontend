'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import TextToolForm from '../../../components/TextToolForm'

export default function ToolPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-4 text-white">JSON Formatter</h1>
        <p className="text-gray-400 mb-6">Format teks JSON agar rapi & mudah dibaca.</p>

        <div className="bg-white p-6 rounded-lg shadow">
          <TextToolForm
            endpoint="http://localhost:8080/api/tools/json-formatter"
            title="Masukkan teks"
            buttonLabel="Format JSON"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}