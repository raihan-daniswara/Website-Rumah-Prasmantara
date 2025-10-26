import heroImage1 from '../../../assets/produk/hero-image.png';
import './HeroSection.css';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

// font 
const font = {
  greatVibes: '"Great Vibes", cursive',
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif'
};

const HeroText = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex text flex-col items-center gap-[25px] text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
    >
      <div className="my-2.5 flex flex-col items-center gap-2.5">
        <h2
          className="hero-header-2 text-[#DBCECE] text-5xl font-medium"
          style={{ fontFamily: font.greatVibes }}
        >
          Menu Kami
        </h2>
        <h1
          className="produk-hero-header-1 text-[80px] text-[#EAAE8F] font-bold leading-tight"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Cita Rasa <span className="text-[#C54300]">Nusantara</span>
          <br />
          dalam <span className="text-[#C54300]">Setiap Sajiannya</span>
        </h1>
        <p
          className="hero-paragraph text-4xl font-semibold text-[#BDBDBD] leading-[52px]!"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Nikmati beragam hidangan khas Nusantara dari Sabang hingga Merauke.
          <br />
          Setiap menu kami dibuat dengan resep autentik dan bahan pilihan.
        </p>
      </div>
      <NavLink
        to="#"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("menu-section");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={({ isActive }) =>
          `lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"}`
        }
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Jelajahi <span className="text-[#C54300]">Kategori</span>
      </NavLink>
    </div>

    {/* Small */}
    <div
      className={`flex lg:hidden text flex-col items-center gap-[25px] text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
    >
      <div className="my-2.5 flex flex-col items-center gap-2.5">
        <h2
          className="hero-header-2 text-[#DBCECE] text-[24px] font-medium"
          style={{ fontFamily: font.greatVibes }}
        >
          Menu Kami
        </h2>
        <h1
          className="produk-hero-header-1 text-[40px] max-w-[375px] text-[#EAAE8F] font-bold"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Cita Rasa <span className="text-[#C54300]">Nusantara</span>
          <br />
          dalam <span className="text-[#C54300]">Setiap Sajiannya</span>
        </h1>
        <p
          className="hero-paragraph text-xl max-w-[360px] font-semibold text-[#BDBDBD]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Nikmati beragam hidangan khas Nusantara dari Sabang hingga Merauke.
          Setiap menu kami dibuat dengan resep autentik dan bahan pilihan.
        </p>
      </div>
      <NavLink
        to="#"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("menu-section");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={({ isActive }) =>
          `lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"}`
          }
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Jelajahi <span className="text-[#C54300]">Kategori</span>
      </NavLink>
    </div>
  </>
);

// Main Hero Section
export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col h-screen w-full items-center justify-end overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage1}
        className="absolute inset-0 object-cover object-[13%_50%] h-screen w-full opacity-43 blur-[1.5px]"
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#3C261A]/40 via-[#3C261A]/90 to-[#3C261A]" />
      <div className="flex gap-10 items-center justify-center absolute top-1/2 -translate-y-1/2 z-10">
        <HeroText isVisible={isVisible} />
      </div>
    </section>
  );
};
