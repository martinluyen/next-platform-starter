import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Kdeco - Trang chủ</title>
        <meta name="description" content="Kdeco - Giải pháp tư vấn dự án chuyên nghiệp." />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-[#2C4A89]">Chào mừng đến với Kdeco</h1>
        <p className="text-lg text-gray-700 mb-6">
          Kdeco là công ty chuyên cung cấp các dịch vụ tư vấn dự án chuyên nghiệp, bao gồm tư vấn pháp lý, giám sát và quản lý dự án. Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết mang lại giải pháp tối ưu cho khách hàng.
        </p>
        <Link href="/contact">
          <button className="bg-[#00A859] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#008f4a] transition-colors">
            Liên hệ ngay
          </button>
        </Link>
      </main>
    </div>
  );
}
