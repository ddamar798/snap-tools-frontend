// Ini adalah komponen ToolForm reusable untuk semua tools
'use client'

import { useState } from 'react'

interface ToolFormProps {
  endpoint: string
  accept?: string
  title?: string
  buttonLabel?: string
}

export default function ToolForm({ endpoint, accept = '*', title, buttonLabel = 'Submit' }: ToolFormProps) {
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
        setMessage(`✅ Berhasil: ${result.filename || 'file diproses'}`)
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
    <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}

      <div>
        <label className="block text-sm font-medium mb-2">Pilih file :</label>

        <div className="relative w-fit">
          <label className="bg-gray-500 text-white px-1 py-1 rounded cursor-pointer hover:bg-blue-700">
            Chose File
            <input
              type="file"
              accept={accept}
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>
          {file && <p className="mt-1 text-sm">{file.name}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={!file || loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
      >
        {loading ? 'Memproses...' : buttonLabel}
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  )
}