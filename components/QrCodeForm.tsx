// Komponen khusus QR Code Generator
'use client'

import { useState } from 'react'

export default function QrCodeForm() {
  const [text, setText] = useState('')
  const [qrUrl, setQrUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const generateQr = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setQrUrl(null)

    try {
      const res = await fetch('http://localhost:8080/api/tools/qr-code-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const data = await res.json()
      if (res.ok && data.qrUrl) {
        setQrUrl(data.qrUrl)
      } else {
        setQrUrl(null)
      }
    } catch {
      setQrUrl(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={generateQr} className="space-y-4 text-gray-800">
      <label className="block text-sm font-medium mb-1">Teks / URL:</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Contoh: https://snaptools.id"
        className="w-full p-2 border rounded text-gray-800"
      />

      <button
        type="submit"
        disabled={!text || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'Membuat QR...' : 'Buat QR Code'}
      </button>

      {qrUrl && (
        <div className="mt-4">
          <p className="mb-2">Hasil QR Code:</p>
          <img src={qrUrl} alt="QR Code" className="w-40 h-40 border" />
        </div>
      )}
    </form>
  )
}
