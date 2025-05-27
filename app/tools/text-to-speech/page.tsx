'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import TextToolForm from '../../../components/TextToolForm'

export default function ToolPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Text to Speech</h1>
        <p className="text-gray-400 mb-6">Ubah teks menjadi suara.</p>

        <div className="bg-white p-6 rounded-lg shadow">
          <TextToolForm
            endpoint="http://localhost:8080/api/tools/text-to-speech"
            title="Masukkan teks"
            buttonLabel="Ubah ke Suara"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}