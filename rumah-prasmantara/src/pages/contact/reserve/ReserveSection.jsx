import "./ReserveSection.css";
import reserveMascott from '../../../assets/contact/reserve-mascott.svg';
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { WaveBottom } from "../../../components/wave/WaveBottom";

import backgroundLingkaran from '../../../assets/background/about/lingkaran.png';
import { WaveTop } from "../../../components/wave/WaveTop";
const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

const HeaderContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex header-content flex-col gap-2.5 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
    >
      <h1
        className="hero-paragraph text-center text-[#EAAE8F] font-bold text-6xl leading-[78px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Amankan <span className="text-[#C54300]">Meja</span> Anda di <span className="text-[#C54300]"> Rumah Prasmantara</span>
      </h1>
      <p
        className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Pesan meja sekarang dan rasakan kelezatan kuliner khas nusantara tanpa perlu
        <br />
        khawatir kehabisan meja.
      </p>
    </div>

    {/* Small */}
    <div
      className={`flex lg:hidden header-content flex-col gap-2.5 text-center items-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
    >
      <h1
        className="hero-paragraph text-center text-[#EAAE8F] max-w-[370px] font-bold text-[32px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Amankan <span className="text-[#C54300]">Meja</span> Anda di <span className="text-[#C54300]"> Rumah Prasmantara</span>
      </h1>
      <p
        className="text-xl text-[#BDBDBD] max-w-[370px] font-semibold"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Pesan meja sekarang dan rasakan kelezatan kuliner khas nusantara tanpa perlu
        <br />
        khawatir kehabisan meja.
      </p>
    </div>
  </>
);

const ReserveForm = ({ isVisible }) => {
  return (
    <div
      className={`flex justify-center items-center gap-5 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
    >
      <div
        className="bg-[#3C261A] p-[15px] rounded-[20px] shadow-lg w-[370px] lg:w-[700px]"
      >
        <form className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-1/2 bg-[#2C231E] text-[#BDBDBD] text-[16px] lg:text-[24px] font-bold placeholder-[#BDBDBD]/40 px-6 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C54300]"
              style={{ fontFamily: font.cormorantGaramond }}
            />
            <input
              type="tel"
              placeholder="Nomor Telepon"
              className="w-1/2 bg-[#2C231E] text-[#BDBDBD] text-[16px] lg:text-[24px] font-bold placeholder-[#BDBDBD]/40 px-6 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C54300]"
              style={{ fontFamily: font.cormorantGaramond }}
            />
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            <input
              type="date"
              placeholder="Tanggal Reservasi"
              className="w-1/2 bg-[#2C231E] text-[#BDBDBD] text-[16px] lg:text-[24px] font-bold placeholder-[#BDBDBD]/40 px-6 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C54300]"
              style={{ fontFamily: font.cormorantGaramond }}
            />
            <input
              type="number"
              placeholder="Jumlah Orang"
              className="w-1/2 bg-[#2C231E] text-[#BDBDBD] text-[16px] lg:text-[24px] font-bold placeholder-[#BDBDBD]/40 px-6 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C54300]"
              style={{ fontFamily: font.cormorantGaramond }}
            />
          </div>

          {/* Row 3 */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#2C231E] text-[#BDBDBD] text-[16px] lg:text-[24px] font-bold placeholder-[#BDBDBD]/40 px-6 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C54300]"
            style={{ fontFamily: font.cormorantGaramond }}
          />

          {/* Row 4 */}
          <textarea
            placeholder="Catatan Khusus"
            rows="4"
            className="w-full bg-[#2C231E] text-[#BDBDBD] text-[16px] lg:text-[24px] font-bold placeholder-[#BDBDBD]/40 px-6 py-3 rounded-[30px] resize-none focus:outline-none focus:ring-1 focus:ring-[#C54300]"
            style={{ fontFamily: font.cormorantGaramond }}
          ></textarea>

          <p className="text-[#EAAE8F] text-[13px] lg:text-[24px] lg:leading-[52px] font-semibold" style={{ fontFamily: font.cormorantGaramond }}>
            <span className="font-bold text-[#C54300]">*</span> Kami akan hubungi Anda untuk reservasi
            <span className="text-[#C54300]"> maksimal 24 jam</span>.
          </p>

          <button
            type="submit"
            className="bg-[#2D1F18] text-[#EAAE8F] text-[18px] font-bold py-3 rounded-full transition duration-300"
            style={{ fontFamily: font.cormorantGaramond }}
          >
            Kirim <span className="text-[#C54300] hover:text-white">Reservasi</span>
          </button>
        </form>
      </div>

      <div className="hidden lg:block relative">
        <img
          src={reserveMascott}
          alt="Reserve Mascott"
          className={`w-[630px] drop-shadow-xl transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"}`}
        />
      </div>
    </div>
  );
};


export const ReserveSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  // Observer Header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer Content
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setContentVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      className="relative h-fit w-full py-50 flex flex-col lg:gap-20 gap-5 items-center"
    >
      <img
        className="absolute opacity-100 -z-1 -top-12 -right-21 pointer-events-none select-none"
        src={backgroundLingkaran}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="absolute opacity-100 z-0 -bottom-11 -left-21 rotate-180 pointer-events-none select-none"
        src={backgroundLingkaran}
        alt="Background BabackgroundRumah4"
      />
      <WaveBottom />
      <div ref={headerRef}>
        <HeaderContent isVisible={headerVisible} />
      </div>
      <div ref={contentRef}>
        <ReserveForm isVisible={contentVisible} />
      </div>
      <WaveTop />
    </section>
  );
};