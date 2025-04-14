import Head from 'next/head';
import Header from '../components/Header';

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
        <p className="text-lg text-gray-700">
          Chúng tôi cung cấp các dịch vụ tư vấn chuyên nghiệp cho các dự án của bạn.
        </p>
      </main>
    </div>
  );
}
