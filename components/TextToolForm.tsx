'use client'

import { useState } from 'react'
import FancyButton from './FancyButton'
import Toast from './Toast'

interface TextToolFormProps {
  endpoint: string
  title?: string
  buttonLabel?: string
}

export default function TextToolForm({ endpoint, title, buttonLabel = 'Proses' }: TextToolFormProps) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setToast(null)

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const data = await res.json()
      if (res.ok) {
        setResult(data.result || 'Berhasil')
        setToast({ message: '✅ Proses berhasil.', type: 'success' })
      } else {
        setToast({ message: `❌ ${data.error || 'Terjadi kesalahan.'}`, type: 'error' })
      }
    } catch (err) {
      setToast({ message: '❌ Gagal terhubung ke server.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="w-full p-2 border rounded text-gray-800"
          placeholder="Tulis atau tempelkan teks di sini..."
        />

        <FancyButton type="submit" label={loading ? 'Memproses...' : buttonLabel} />
        {result && <p className="mt-2 text-sm">Hasil: {result}</p>}
      </form>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
}
