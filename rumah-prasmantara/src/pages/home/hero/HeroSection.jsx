import heroImage1 from '../../../assets/home/hero-image1.png';
import heroImage2 from '../../../assets/home/hero-image2.png';
import heroImage3 from '../../../assets/home/hero-image3.png';
import arrowDown from '../../../assets/home/arrow-down.png';

import backgroundCircle from '../../../assets/background/background-circle.svg';
import backgroundMendungKecil from '../../../assets/background/mega-mendung/mendung-kecil.svg';
import backgroundMendungBesar from '../../../assets/background/mega-mendung/mendung-besar.svg';

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
  <>
    {/* Large */}
    <div className={`hidden lg:flex image-container gap-5 items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0 floating-container' : 'opacity-0 translate-x-20'
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

    {/* Small */}
    <div className={`flex lg:hidden image-container gap-2.5 items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0 floating-container' : 'opacity-0 translate-x-20'
      }`}>
      <div className="relative image-wrapper rounded-full floating-item hover:scale-102 hover:cursor-pointer transition-all duration-400" style={{
        '--float-delay': '0.6s',
        '--float-duration': '6s',
        '--float-amplitude': '4px'
      }}>
        <img
          src={heroImage1}
          alt="Food Image 1"
          className="rounded-full w-[75px] h-[185px] object-cover darken-20"
        />
      </div>
      <div className="relative image-wrapper rounded-full floating-item hover:scale-102 hover:cursor-pointer transition-all duration-400" style={{
        '--float-delay': '1s',
        '--float-duration': '7s',
        '--float-amplitude': '6px'
      }}>
        <img
          src={heroImage2}
          alt="Food Image 2"
          className="rounded-full w-[75px] h-[280px] object-cover darken-20"
        />
      </div>
      <div className="relative image-wrapper rounded-full floating-item hover:scale-102 hover:cursor-pointer transition-all duration-400" style={{
        '--float-delay': '1.4s',
        '--float-duration': '5.5s',
        '--float-amplitude': '3px'
      }}>
        <img
          src={heroImage3}
          alt="Food Image 3"
          className="rounded-full w-[75px] h-[185px] object-cover darken-20"
        />
      </div>
    </div>
  </>
);

const HeroText = ({ isVisible }) => (
  <>
    {/* Large */}
    <div className={`hidden lg:flex text flex-col items-start gap-5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
      <div className="my-2.5 flex flex-col gap-2.5">
        <h2
          className="hero-header-2 text-[#DBCECE] text-5xl font-medium transition-all duration-1000 ease-out leading-[52px]"
          style={{ fontFamily: font.greatVibes }}
        >
          Rumah Prasmantara
        </h2>
        <h1
          className="hero-header-1 text-[80px] text-[#EAAE8F] font-bold transition-all duration-1000 ease-out"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Ragam Nusan<span className="text-[#C54300]">tara</span> <br />di Satu <span className="text-[#C54300] leading-[97px]">Prasman</span>an
        </h1>
        <p
          className="hero-paragraph text-4xl font-semibold max-w-[760px] text-[#BDBDBD] transition-all duration-1000 ease-out leading-[52px]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Rasakan ragam masakan tradisional Indonesia,<br /> setiap suapan lebih dari sekadar makanan, melainkan perjalanan kuliner Nusantara yang autentik.
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

    {/* Small */}
    <div className={`flex lg:hidden text flex-col items-start gap-2.5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
      <div className="my-2.5 flex flex-col gap-2.5">
        <h2
          className="hero-header-2 text-[#DBCECE] text-2xl font-medium transition-all duration-1000 ease-out text-center"
          style={{ fontFamily: font.greatVibes }}
        >
          Rumah Prasmantara
        </h2>
        <h1
          className="hero-header-1 text-[40px] text-[#EAAE8F] font-bold transition-all duration-1000 ease-out leading-12 text-center"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Ragam Nusan<span className="text-[#C54300]">tara</span> <br />di Satu <span className="text-[#C54300]">Prasman</span>an
        </h1>
        <div className='flex justify-center'>
          <HeroImages isVisible={isVisible} />
        </div>
        <p
          className="hero-paragraph text-[20px] font-semibold max-w-[350px] text-[#BDBDBD] transition-all duration-1000 ease-out text-center"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Rasakan ragam masakan tradisional Indonesia, setiap suapan lebih dari sekadar makanan, melainkan perjalanan kuliner Nusantara yang autentik.
        </p>
      </div>
      <NavLink
        to="/produk"
        className={({ isActive }) => `lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
          }`}
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat <span className='text-[#C54300]'>Menu</span>
      </NavLink>
    </div>
  </>
);

const ScrollText = () => (
  <div className="hidden lg:flex w-full text-lg align-middle text-center font-bold text-[#EAAE8F] tracking-wide flex-col items-center justify-center">
    <p
      className=""
      style={{ fontFamily: font.cormorantUpright }}
    >
      SCROLL
    </p>
    <img src={arrowDown} alt="Arrow Down" />
  </div>
);

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
      <section className="relative flex flex-col h-[90vh] w-full items-center justify-center lg:justify-end bg-linear-to-b from-[#442717] to-[#3C261A] overflow-hidden">
        <img
          className="hidden lg:block absolute scale-150 opacity-50 top-7 left-7 pointer-events-none select-none"
          src={backgroundCircle}
          alt="Background Circle"
        />

        <img
          className="hidden lg:block absolute scale-115 opacity-50 top-[40%] left-[-6%] pointer-events-none select-none"
          style={{ animation: 'mendungMove1 8s infinite ease-in-out' }}
          src={backgroundMendungKecil}
          alt="Mendung Kecil 1"
        />

        <img
          className="hidden lg:block absolute scale-115 opacity-50 top-[15%] left-[40%] rotate-190 mendung-anim pointer-events-none select-none"
          style={{ animation: 'mendungMove2 11s infinite ease-in-out' }}
          src={backgroundMendungBesar}
          alt="Mendung Besar 1"
        />

        <img
          className="hidden lg:block absolute scale-115 opacity-50 bottom-[35%] right-[-5%] mendung-anim pointer-events-none select-none"
          style={{ animation: 'mendungMove3 13s infinite ease-in-out' }}
          src={backgroundMendungBesar}
          alt="Mendung Besar 2"
        />

        <img
          className="hidden lg:block absolute scale-115 opacity-50 bottom-[10%] left-[30%] mendung-anim pointer-events-none select-none"
          style={{ animation: 'mendungMove1 14s infinite ease-in-out' }}
          src={backgroundMendungKecil}
          alt="Mendung Kecil 2"
        />

        <div className="flex gap-10 items-center justify-center lg:pb-5">
          <HeroText isVisible={isVisible} />
          <div className="hidden lg:flex">
            <HeroImages isVisible={isVisible} />
          </div>
        </div>
        <ScrollText />
      </section>
    </>
  );
};