import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ToolCard from '../components/ToolCard'

export default function Home() {
  const tools = [
    // PDF Tools
    {
      title: 'PDF to Word',
      description: 'Ubah file PDF ke format Word.',
      slug: 'pdf-to-word',
      icon: '📄',
    },
    {
      title: 'Word to PDF',
      description: 'Konversi file Word menjadi PDF.',
      slug: 'word-to-pdf',
      icon: '📝',
    },
    {
      title: 'Merge PDF',
      description: 'Gabungkan beberapa file PDF menjadi satu.',
      slug: 'merge-pdf',
      icon: '📎',
    },
    {
      title: 'Compress PDF',
      description: 'Kompres ukuran file PDF tanpa mengurangi kualitas.',
      slug: 'compress-pdf',
      icon: '📉',
    },

    // Image Tools
    {
      title: 'Image to Text (OCR)',
      description: 'Ekstrak teks dari gambar secara otomatis.',
      slug: 'image-to-text',
      icon: '🖼️',
    },
    {
      title: 'Resize Image',
      description: 'Ubah ukuran gambar sesuai kebutuhan.',
      slug: 'resize-image',
      icon: '📐',
    },
    {
      title: 'Convert to WebP',
      description: 'Ubah gambar ke format WebP yang lebih efisien.',
      slug: 'convert-to-webp',
      icon: '🖼️',
    },

    // Text Tools
    {
      title: 'Text to Speech',
      description: 'Ubah teks menjadi suara secara instan.',
      slug: 'text-to-speech',
      icon: '🗣️',
    },
    {
      title: 'Case Converter',
      description: 'Ubah huruf ke UPPERCASE atau lowercase.',
      slug: 'case-converter',
      icon: '🔠',
    },
    {
      title: 'Word Counter',
      description: 'Hitung jumlah kata dan karakter dari teks.',
      slug: 'word-counter',
      icon: '🔢',
    },

    // Developer Tools
    {
      title: 'JSON Formatter',
      description: 'Format dan beautify data JSON.',
      slug: 'json-formatter',
      icon: '🔧',
    },
    {
      title: 'Base64 Encode/Decode',
      description: 'Encode atau decode data dalam format Base64.',
      slug: 'base64-encode-decode',
      icon: '🔐',
    },
    {
      title: 'QR Code Generator',
      description: 'Buat QR Code dari teks atau tautan.',
      slug: 'qr-code-generator',
      icon: '🔲',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="p-4 max-w-6xl mx-auto min-h-[70vh]">
        <h1 className="text-2xl font-bold mb-6">Pilih Tool yang Kamu Butuhkan</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              slug={tool.slug}
              icon={tool.icon}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
