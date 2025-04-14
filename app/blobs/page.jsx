import Head from 'next/head';
import Header from '../../components/Header';

export default function News() {
  return (
    <div>
      <Head>
        <title>Kdeco - Tin tức</title>
        <meta name="description" content="Cập nhật tin tức mới nhất từ Kdeco." />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-[#2C4A89]">Tin tức</h1>
        <p className="text-lg text-gray-700 mb-4">
          Cập nhật các thông tin và sự kiện mới nhất từ Kdeco.
        </p>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-[#2C4A89]">Kdeco hoàn thành dự án tại Bình Dương</h2>
            <p className="text-gray-700">Chúng tôi vừa hoàn thành tư vấn pháp lý cho một dự án lớn tại Bình Dương, đảm bảo tuân thủ mọi quy định pháp luật.</p>
            <p className="text-sm text-gray-500">Ngày đăng: 10/04/2025</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-[#2C4A89]">Hội thảo về quản lý dự án hiệu quả</h2>
            <p className="text-gray-700">Kdeco tổ chức hội thảo chia sẻ kinh nghiệm quản lý dự án tại TP. Hồ Chí Minh.</p>
            <p className="text-sm text-gray-500">Ngày đăng: 05/04/2025</p>
          </div>
        </div>
      </main>
    </div>
  );
}
