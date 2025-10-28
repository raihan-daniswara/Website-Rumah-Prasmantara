import { NavLink } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { WaveTop } from "../components/wave/WaveTop";
import { useEffect, useState } from "react";

// font 
const font = {
  greatVibes: '"Great Vibes", cursive',
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif'
};

const HeroText = ({ isVisible }) => {
  const errorText = [
    "Ups! Piringnya kosong… Sepertinya halaman ini belum dihidangkan.",
    "Halaman ini sudah direservasi pengunjung sebelumnya. Coba menu lain, yuk!",
    "Halaman ini kosong, tapi perutmu nggak harus ikut kosong juga!",
    "Kamu mencari rasa… tapi halaman ini cuma aroma harapan.",
    "Ups, ini bukan lauk yang kamu cari. Tapi masih banyak menu lezat di beranda!",
    "Halaman ini nggak ada di daftar menu. Tapi cinta chef rinto tetap ada untukmu.",
    "Menunya gak ngumpet di sini, cari lagi di beranda yuk!",
    "Ayu lagi masak halaman ini, jangan diganggu!",
  ];

  const randomErrorText = errorText[Math.floor(Math.random() * errorText.length)];

  return (
    <>
      {/* Large */}
      <div
        className={`hidden lg:flex flex-col items-center gap-[25px] text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="my-2.5 flex flex-col items-center gap-2.5">
          <h2
            className="text-[#DBCECE] text-5xl font-medium"
            style={{ fontFamily: font.greatVibes }}
          >
            Tidak Ditemukan
          </h2>
          <h1
            className="text-[256px] text-[#C54300] font-bold leading-[200px]"
            style={{ fontFamily: "'Cormorant Infant', serif" }}
          >
            4<span className="text-[#EAAE8F]">0</span>4
          </h1>
          <p
            className="text-4xl font-semibold text-[#BDBDBD] max-w-[800px]"
            style={{ fontFamily: font.cormorantGaramond }}
          >
            {randomErrorText}
          </p>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${
              isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
            }`
          }
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Kembali ke <span className="text-[#C54300]">Beranda</span>
        </NavLink>
      </div>

      {/* Small */}
      <div
        className={`flex lg:hidden flex-col items-center gap-[25px] text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="my-2.5 flex flex-col items-center gap-2.5">
          <h2
            className="text-[#DBCECE] text-[24px] font-medium"
            style={{ fontFamily: font.greatVibes }}
          >
            Tidak Ditemukan
          </h2>
          <h1
            className="text-[128px] text-[#C54300] font-bold leading-[100px]"
            style={{ fontFamily: "'Cormorant Infant', serif" }}
          >
            4<span className="text-[#EAAE8F]">0</span>4
          </h1>
          <p
            className="text-xl max-w-[360px] font-semibold text-[#BDBDBD]"
            style={{ fontFamily: font.cormorantGaramond }}
          >
            {randomErrorText}
          </p>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${
              isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
            }`
          }
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Kembali ke <span className="text-[#C54300]">Beranda</span>
        </NavLink>
      </div>
    </>
  );
};

export function NotFoundPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay animasi biar smooth seperti HeroSection
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="flex w-full justify-center items-center relative h-screen overflow-hidden">
        {/* Animasi teks */}
        <HeroText isVisible={isVisible} />
        {/* Wave background di atas */}
        <WaveTop />
      </div>
      {/* Footer */}
      <div className="relative bg-[#3C261A] overflow-hidden">
        <Footer />
      </div>
    </section>
  );
}
