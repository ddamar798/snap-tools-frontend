'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import TextToolForm from '../../../components/TextToolForm'


export default function ToolPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-4 text-white">Base64 Encode/Decode</h1>
        <p className="text-gray-400 mb-6">Encode atau decode teks dalam format Base64.</p>

        <div className="bg-white p-6 rounded-lg shadow">
          <TextToolForm
            endpoint="http://localhost:8080/api/tools/base64-encode-decode"
            title="Masukkan teks"
            buttonLabel="Proses Base64"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}