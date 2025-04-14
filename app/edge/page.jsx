import Head from 'next/head';
import Header from '../../components/Header';

export default function Management() {
  return (
    <div>
      <Head>
        <title>Kdeco - Tư vấn quản lý dự án</title>
        <meta name="description" content="Dịch vụ tư vấn quản lý dự án chuyên nghiệp từ Kdeco." />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-[#2C4A89]">Tư vấn quản lý dự án</h1>
        <p className="text-lg text-gray-700 mb-4">
          Kdeco hỗ trợ quản lý dự án hiệu quả với các dịch vụ:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Lập kế hoạch và quản lý tiến độ dự án.</li>
          <li>Phối hợp giữa các bên liên quan để đảm bảo tính đồng bộ.</li>
          <li>Kiểm soát chi phí và tối ưu hóa nguồn lực.</li>
        </ul>
        <p className="text-lg text-gray-700">
          Đội ngũ của chúng tôi sẽ đồng hành cùng bạn để đảm bảo dự án thành công và hiệu quả.
        </p>
      </main>
    </div>
  );
}
