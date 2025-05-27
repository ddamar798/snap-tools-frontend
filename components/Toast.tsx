'use client'

import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  type?: 'success' | 'error'
  duration?: number
  onClose: () => void
}

export default function Toast({ message, type = 'success', duration = 3000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 300) // wait for animation
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return visible ? (
    <div
      className={`fixed bottom-5 right-5 px-4 py-2 rounded shadow text-white transition-all animate-fade-in-up ${
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
      }`}
    >
      {message}
    </div>
  ) : null
}
