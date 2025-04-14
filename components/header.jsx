import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Kdeco Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-[#2C4A89] hover:text-[#00A859] font-medium">
            Trang chủ
          </Link>
          <Link href="/legal-services" className="text-[#2C4A89] hover:text-[#00A859] font-medium">
            Tư vấn dịch vụ pháp lý dự án
          </Link>
          <Link href="/supervision" className="text-[#2C4A89] hover:text-[#00A859] font-medium">
            Tư vấn giám sát dự án
          </Link>
          <Link href="/management" className="text-[#2C4A89] hover:text-[#00A859] font-medium">
            Tư vấn quản lý dự án
          </Link>
          <Link href="/news" className="text-[#2C4A89] hover:text-[#00A859] font-medium">
            Tin tức
          </Link>
          <Link href="/contact" className="text-[#2C4A89] hover:text-[#00A859] font-medium">
            Liên hệ
          </Link>
        </nav>

        {/* Menu hamburger cho mobile (ẩn trên desktop) */}
        <div className="md:hidden">
          <button className="text-[#2C4A89] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
