import heroImage1 from '../../../assets/home/hero-image1.png';
import heroImage2 from '../../../assets/home/hero-image2.png';
import heroImage3 from '../../../assets/home/hero-image3.png';
import arrowDown from '../../../assets/home/arrow-down.png';
import './HeroSection.css';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { WaveBottom } from '../../../components/wave/WaveBottom';

// font 
const font = {
  greatVibes: '"Great Vibes", cursive',
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif'
};

// Hero Content Components
const HeroImages = ({ isVisible }) => (
  <div className={`image-container flex gap-5 items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0 floating-container' : 'opacity-0 translate-x-20'
    }`}>
    <div className="relative image-wrapper rounded-full floating-item hover:scale-102 hover:cursor-pointer transition-all duration-400" style={{
      '--float-delay': '0.6s',
      '--float-duration': '6s',
      '--float-amplitude': '8px'
    }}>
      <img
        src={heroImage1}
        alt="Food Image 1"
        className="rounded-full w-[165px] h-[450px] object-cover darken-20"
      />
    </div>
    <div className="relative image-wrapper rounded-full floating-item hover:scale-102 hover:cursor-pointer transition-all duration-400" style={{
      '--float-delay': '1s',
      '--float-duration': '7s',
      '--float-amplitude': '12px'
    }}>
      <img
        src={heroImage2}
        alt="Food Image 2"
        className="rounded-full w-[165px] h-[650px] object-cover darken-20"
      />
    </div>
    <div className="relative image-wrapper rounded-full floating-item hover:scale-102 hover:cursor-pointer transition-all duration-400" style={{
      '--float-delay': '1.4s',
      '--float-duration': '5.5s',
      '--float-amplitude': '6px'
    }}>
      <img
        src={heroImage3}
        alt="Food Image 3"
        className="rounded-full w-[165px] h-[450px] object-cover darken-20"
      />
    </div>
  </div>
);

const HeroText = ({ isVisible }) => (
  <div className={`text flex flex-col items-start gap-5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
    }`}>
    <div className="my-2.5 flex flex-col gap-2.5">
      <h2
        className="hero-header-2 text-[#DBCECE] text-5xl font-medium transition-all duration-1000 ease-out"
        style={{ fontFamily: font.greatVibes }}
      >
        Rumah Prasmantara
      </h2>
      <h1
        className="hero-header-1 text-[80px] text-[#EAAE8F] font-bold transition-all duration-1000 ease-out"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Ragam Nusan<span className="text-[#C54300]">tara</span> <br />di Satu <span className="text-[#C54300]">Prasman</span>an
      </h1>
      <p
        className="hero-paragraph text-4xl font-semibold text-[#BDBDBD] transition-all duration-1000 ease-out"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Rasakan ragam masakan tradisional Indonesia,<br />setiap suapan lebih dari sekadar makanan, melainkan<br /> perjalanan kuliner Nusantara yang autentik.
      </p>
    </div>
    <NavLink
      to="/produk"
      className={({ isActive }) => `px-10 py-4 text-4xl rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
        }`}
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Lihat <span className='text-[#C54300]'>Menu</span>
    </NavLink>
  </div>
);

const ScrollText = () => (
  <div className="w-full text-lg align-middle text-center font-bold text-[#EAAE8F] tracking-wide flex flex-col items-center justify-center -translate-y-25">
    <p
      className=""
      style={{ fontFamily: font.cormorantUpright }}
    >
      SCROLL
    </p>
    <img src={arrowDown} alt="Arrow Down" />
  </div>
);

// Main Hero Section
export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, []);

  return (
    <>
      <section className="relative flex flex-col h-[100vh] w-full items-center justify-end bg-gradient-to-b from-[#3C261A] to-[#442717] overflow-hidden">
        <div className="flex gap-10 items-center justify-center absolute top-1/2 -translate-y-1/2">
          <HeroText isVisible={isVisible} />
          <HeroImages isVisible={isVisible} />
        </div>
        <ScrollText />
        <WaveBottom />
      </section>
    </>
  );
};