import heroImage1 from '../../../assets/home/hero-image1.png';
import heroImage2 from '../../../assets/home/hero-image2.png';
import heroImage3 from '../../../assets/home/hero-image3.png';
import arrowDown from '../../../assets/home/arrow-down.png';
import './HeroSection.css';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

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
    <div className="my-2.5">
      <h2
        className="hero-header-2 text-[#DBCECE] text-5xl font-medium transition-all duration-1000 ease-out"
        style={{ fontFamily: font.greatVibes }}
      >
        Rumah Prasmantara
      </h2>
      <h1
        className="hero-header-1 text-7xl text-[#EAAE8F] font-bold transition-all duration-1000 ease-out"
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
  <div className="w-full text-lg align-middle text-center font-bold text-[#EAAE8F] tracking-wide flex flex-col items-center justify-center">
    <p
      className=""
      style={{ fontFamily: font.cormorantUpright }}
    >
      SCROLL
    </p>
    <img src={arrowDown} alt="Arrow Down" />
  </div>
);

// Wave Component
const WaveEffect = () => (
  <div className="wave-container absolute bottom-0 left-0 w-full overflow-hidden">
    <svg
      className="wave-svg relative block w-full h-[150px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        className="wave-path"
        fill="#2C231E"
        fillOpacity="1"
        d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,208C672,192,768,192,864,208C960,224,1056,256,1152,256C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
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
        <WaveEffect />
      </section>
      <section className='h-[100vh]'></section>
    </>
  );
};