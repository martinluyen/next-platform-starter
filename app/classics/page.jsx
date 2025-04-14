import Head from 'next/head';
import Header from '../../components/Header';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Kdeco - Liên hệ</title>
        <meta name="description" content="Liên hệ với Kdeco để được tư vấn." />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-[#2C4A89]">Liên hệ</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Thông tin liên hệ */}
          <div>
            <h2 className="text-xl font-semibold text-[#2C4A89] mb-2">Thông tin liên hệ</h2>
            <p className="text-lg text-gray-700">
              Địa chỉ: 30/3 Đường Số 5, Phường 5, Quận Gò Vấp, Thành Phố Hồ Chí Minh, Việt Nam
            </p>
            <p className="text-lg text-gray-700">
              Email: <a href="mailto:contact@kdeco.vn" className="text-[#2C4A89] hover:text-[#00A859]">contact@kdeco.vn</a>
            </p>
            <p className="text-lg text-gray-700">
              Web: <a href="https://www.kdeco.vn" className="text-[#2C4A89] hover:text-[#00A859]">www.kdeco.vn</a>
            </p>
          </div>
          {/* Biểu mẫu liên hệ */}
          <div>
            <h2 className="text-xl font-semibold text-[#2C4A89] mb-2">Gửi tin nhắn</h2>
            <form name="contact" method="POST" data-netlify="true" className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block text-gray-700">Họ tên</label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded-lg" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded-lg" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Tin nhắn</label>
                <textarea id="message" name="message" className="w-full p-2 border rounded-lg" rows="4" required></textarea>
              </div>
              <button type="submit" className="bg-[#00A859] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#008f4a] transition-colors">
                Gửi
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
