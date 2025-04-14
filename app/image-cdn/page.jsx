import Head from 'next/head';
import Header from '../../components/Header';

export default function Supervision() {
  return (
    <div>
      <Head>
        <title>Kdeco - Tư vấn giám sát dự án</title>
        <meta name="description" content="Dịch vụ tư vấn giám sát dự án chuyên nghiệp từ Kdeco." />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-[#2C4A89]">Tư vấn giám sát dự án</h1>
        <p className="text-lg text-gray-700 mb-4">
          Dịch vụ tư vấn giám sát dự án của Kdeco bao gồm:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Giám sát tiến độ thi công và chất lượng công trình.</li>
          <li>Đảm bảo tuân thủ các tiêu chuẩn kỹ thuật và an toàn lao động.</li>
          <li>Báo cáo thường xuyên về tình trạng dự án và đề xuất giải pháp kịp thời.</li>
        </ul>
        <p className="text-lg text-gray-700">
          Chúng tôi cam kết giúp dự án của bạn hoàn thành đúng tiến độ và đạt chất lượng cao nhất.
        </p>
      </main>
    </div>
  );
}
