// Komponen khusus untuk tool berbasis teks (Word Counter, Case Converter, dll)
'use client'

import { useState } from 'react'

interface TextToolFormProps {
  endpoint: string
  title?: string
  buttonLabel?: string
}

export default function TextToolForm({ endpoint, title, buttonLabel = 'Proses' }: TextToolFormProps) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const data = await res.json()
      if (res.ok) {
        setResult(data.result || 'Berhasil')
      } else {
        setResult(data.error || 'Terjadi kesalahan.')
      }
    } catch (err) {
      setResult('Gagal terhubung ke server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        className="w-full p-2 border rounded text-gray-800"
        placeholder="Tulis atau tempelkan teks di sini..."
      />

      <button
        type="submit"
        disabled={!text || loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
      >
        {loading ? 'Memproses...' : buttonLabel}
      </button>

      {result && <p className="mt-2 text-sm">Hasil: {result}</p>}
    </form>
  )
}
