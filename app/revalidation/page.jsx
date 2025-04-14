import Head from 'next/head';
import Header from '../../components/Header';

export default function LegalServices() {
  return (
    <div>
      <Head>
        <title>Kdeco - Tư vấn dịch vụ pháp lý dự án</title>
        <meta name="description" content="Dịch vụ tư vấn pháp lý dự án chuyên nghiệp từ Kdeco." />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-[#2C4A89]">Tư vấn dịch vụ pháp lý dự án</h1>
        <p className="text-lg text-gray-700 mb-4">
          Chúng tôi cung cấp dịch vụ tư vấn pháp lý toàn diện cho các dự án xây dựng, bao gồm:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Hỗ trợ xin cấp phép xây dựng và các giấy phép liên quan.</li>
          <li>Tư vấn hợp đồng, pháp lý liên quan đến đấu thầu và quản lý rủi ro.</li>
          <li>Giải quyết tranh chấp pháp lý trong quá trình thực hiện dự án.</li>
        </ul>
        <p className="text-lg text-gray-700">
          Với kinh nghiệm thực tiễn, Kdeco đảm bảo dự án của bạn tuân thủ các quy định pháp luật hiện hành.
        </p>
      </main>
    </div>
  );
}
