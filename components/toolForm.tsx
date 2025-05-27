'use client'

import { useState } from 'react'

interface ToolFormProps {
  endpoint: string // endpoint backend misalnya /api/pdf-to-word
}

export default function ToolForm({ endpoint }: ToolFormProps) {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setLoading(true)
    setMessage(null)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      })

      const result = await res.json()
      if (res.ok) {
        setMessage(`✅ Konversi berhasil. [${result.filename}]`)
      } else {
        setMessage(`❌ Gagal: ${result.error || 'Terjadi kesalahan.'}`)
      }
    } catch (err) {
      setMessage('❌ Gagal terhubung ke server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-gray-800 font-medium">
        Unggah file PDF:
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block mt-1 text-gray-800"
        />
      </label>

      <button
        type="submit"
        disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'Mengonversi...' : 'Konversi ke Word'}
      </button>

      {message && <p className="text-sm text-gray-800">{message}</p>}
    </form>
  )
}
