'use client'

import { useState } from 'react'
import FancyButton from './FancyButton'
import Toast from './Toast'

interface ToolFormProps {
  endpoint: string
  accept?: string
  title?: string
  buttonLabel?: string
}

export default function ToolForm({ endpoint, accept = '*', title, buttonLabel = 'Submit' }: ToolFormProps) {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setLoading(true)
    setToast(null)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      })

      const result = await res.json()
      if (res.ok) {
        setToast({ message: `✅ Berhasil: ${result.filename || 'file diproses'}`, type: 'success' })
      } else {
        setToast({ message: `❌ ${result.error || 'Terjadi kesalahan.'}`, type: 'error' })
      }
    } catch {
      setToast({ message: '❌ Gagal terhubung ke server.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}

        <div>
          <label className="block text-sm font-medium mb-1">Pilih file:</label>

          <div className="relative w-fit">
            <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
              Pilih File
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

        <FancyButton type="submit" label={loading ? 'Memproses...' : buttonLabel} />
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
