// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-4 text-sm text-center text-gray-500">
      <div className="container mx-auto px-4">
        <p>
          © {new Date().getFullYear()} Snap Tools. Semua Hak Dilindungi. | Dibuat dengan ❤️ untuk efisiensi online.
        </p>
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="hover:underline">Kebijakan Privasi</a>
          <a href="/terms" className="hover:underline">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  )
}
