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
  <div
    className={`text flex flex-col items-center gap-[25px] text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
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
        className="hero-paragraph text-4xl font-semibold text-[#BDBDBD]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Nikmati beragam hidangan khas Nusantara dari Sabang hingga Merauke.
        <br />
        Setiap menu kami dibuat dengan resep autentik dan bahan pilihan.
      </p>
    </div>
    <NavLink
      to="/produk"
      className={({ isActive }) =>
        `px-10 py-4 text-4xl rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive
          ? "border-[#C54300]"
          : "border-transparent hover:text-[#EAAE8F]"
        }`
      }
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Jelajahi <span className="text-[#C54300]">Kategori</span>
    </NavLink>
  </div>
);

// Main Hero Section
export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col h-[100vh] w-full items-center justify-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-43 blur-[1.5px]"
        style={{
          backgroundImage: `url(${heroImage1})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#3C261A]/40 via-[#3C261A]/80 to-[#3C261A]" />
      <div className="flex gap-10 items-center justify-center absolute top-1/2 -translate-y-1/2 z-10">
        <HeroText isVisible={isVisible} />
      </div>
    </section>
  );
};
