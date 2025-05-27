// components/Navbar.tsx

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white px-4 py-3 flex items-center justify-between shadow">
      <Link href="/" className="flex items-center space-x-2">
        {/* Logo kiri */}
        <Image
          src="/snapToolLogoWeb.png"
          alt="Snap Tool Logo"
          width={30}
          height={30}
          className="rounded"
        />
        <span className="text-xl font-semibold">Snap Tools</span>
      </Link>

      {/* Navigasi kanan */}
      <div className="space-x-4 text-sm">
        <Link href="/" className="hover:text-blue-400">Beranda</Link>
        <Link href="#kategori" className="hover:text-blue-400">Kategori</Link>
        <Link href="#tentang" className="hover:text-blue-400">Tentang</Link>
      </div>
    </nav>
  )
}
