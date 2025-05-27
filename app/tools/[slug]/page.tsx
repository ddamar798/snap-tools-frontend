import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ToolForm from '../../../components/ToolForm'

const tools = [
  { slug: 'pdf-to-word', title: 'PDF to Word', description: 'Ubah file PDF ke format Word.' },
  { slug: 'word-to-pdf', title: 'Word to PDF', description: 'Konversi file Word menjadi PDF.' },
  { slug: 'merge-pdf', title: 'Merge PDF', description: 'Gabungkan beberapa file PDF menjadi satu.' },
  { slug: 'compress-pdf', title: 'Compress PDF', description: 'Kompres ukuran file PDF.' },
  { slug: 'image-to-text', title: 'Image to Text (OCR)', description: 'Ekstrak teks dari gambar.' },
  { slug: 'resize-image', title: 'Resize Image', description: 'Ubah ukuran gambar.' },
  { slug: 'convert-to-webp', title: 'Convert to WebP', description: 'Ubah gambar ke format WebP.' },
  { slug: 'text-to-speech', title: 'Text to Speech', description: 'Ubah teks menjadi suara.' },
  { slug: 'case-converter', title: 'Case Converter', description: 'Ubah huruf ke besar/kecil.' },
  { slug: 'word-counter', title: 'Word Counter', description: 'Hitung kata dan karakter.' },
  { slug: 'json-formatter', title: 'JSON Formatter', description: 'Format data JSON.' },
  { slug: 'base64-encode-decode', title: 'Base64 Encode/Decode', description: 'Konversi Base64.' },
  { slug: 'qr-code-generator', title: 'QR Code Generator', description: 'Buat QR Code.' },
]

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find(t => t.slug === params.slug)

  if (!tool) return notFound()

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl text-gray-800 font-bold mb-2">{tool.title}</h1>
        <p className="text-gray-800 mb-6">{tool.description}</p>

        <div className="bg-white p-6 rounded-lg shadow">
        <ToolForm endpoint="http://localhost:8080/api/tools/pdf-to-word" />
            </div>
      </main>
      <Footer />
    </div>
  )
}
