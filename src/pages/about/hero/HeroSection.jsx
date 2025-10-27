import whatsapp from '../../../assets/home/whatsapp.svg';
import instagram from '../../../assets/home/instagram.svg';
import facebook from '../../../assets/home/facebook.svg';
import blob from '../../../assets/home/blob.svg';
import blobStroke from '../../../assets/home/blob-stroke.svg';
import './HeroSection.css';
import { useEffect, useState } from 'react';

import backgroundCircle from '../../../assets/background/background-circle.svg';
import backgroundBatikBunga from '../../../assets/background/about/batik-bunga.png';
import backgroundBatikDaun from '../../../assets/background/about/batik-daun.png';
import BackgroundFlower from "../../../assets/background/flower.png"
import BackgroundFlowerBig from "../../../assets/background/flower-big.png"
// Font
const font = {
  greatVibes: '"Great Vibes", cursive',
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
};

const HeroBlob = ({ isVisible }) => {
  return (
    <div className="blob-container absolute w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] left-1/2 top-1/2 -translate-y-1/2 lg:translate-x-0 -translate-x-1/2" style={{ zIndex: -1 }}>
      {/* Background */}
      <img
        className="hidden lg:block absolute opacity-50 -top-20 left-100 rotate-180  pointer-events-none select-none"
        src={backgroundBatikDaun}
        alt="Background BabackgroundBatikDaun"
      />

      {/* Konten */}
      <img
        src={blob}
        className={`absolute top-0 left-0 lg:translate-x-5 transition-all duration-1000 animate-pulse ease-out ${isVisible ? 'opacity-80 scale-110' : 'opacity-0 scale-90'
          }`}
        alt="Blob"
        style={{ zIndex: 1 }}
      />
      <img
        src={blobStroke}
        className={`blob-float absolute top-0 left-0 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-70'
          }`}
        alt="Blob Stroke"
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

const HeroText = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex text flex-col items-start gap-5 transition-all duration-1000 ease-out relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      style={{ zIndex: 10 }}
    >
      <div className="my-2.5 flex flex-col gap-2.5">
        <h2
          className="hero-header-2 text-[#DBCECE] text-5xl font-medium transition-all duration-1000 ease-out"
          style={{ fontFamily: font.greatVibes }}
        >
          Tentang Kami
        </h2>
        <h1
          className="hero-header-1 text-[80px] text-[#EAAE8F] font-bold transition-all duration-1000 ease-out"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Alasan <span className="text-[#C54300]">Rumah<br />Prasmantara</span> Hadir
        </h1>
        <p
          className="hero-paragraph text-4xl font-semibold text-[#BDBDBD] transition-all duration-1000 ease-out leading-[52px]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Kami hadir untuk menyatukan berbagai masakan khas<br />Nusantara dengan cita
          rasa autentik yang disajikan melalui <br />prasmanan.
        </p>
      </div>
      <div className="flex gap-[15px]">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src={facebook}
            alt="Facebook"
            className="media-icon w-[60px] h-[60px] hover:scale-110 transition-all ease-in"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src={instagram}
            alt="Instagram"
            className="media-icon w-[60px] h-[60px] hover:scale-110 transition-all ease-in"
          />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="media-icon w-[60px] h-[60px] hover:scale-110 transition-all ease-in"
          />
        </a>
      </div>
    </div>

    {/* Small */}
    <div
      className={`flex lg:hidden text flex-col items-center justify-center gap-2.5 transition-all duration-1000 ease-out relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      style={{ zIndex: 10 }}
    >
      <div className="my-2.5 flex flex-col gap-2.5 justify-center items-center">
        <h2
          className="hero-header-2 text-[#DBCECE] text-2xl font-medium text-center transition-all duration-1000 ease-out"
          style={{ fontFamily: font.greatVibes }}
        >
          Tentang Kami
        </h2>
        <h1
          className="hero-header-1 text-[40px] text-[#EAAE8F] text-center max-w-[400px] font-bold transition-all duration-1000 ease-out"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Alasan <span className="text-[#C54300]">Rumah Prasmantara</span> Hadir
        </h1>
        <p
          className="hero-paragraph text-xl font-semibold block text-center max-w-[365px] text-[#BDBDBD] transition-all duration-1000 ease-out"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Kami hadir untuk menyatukan berbagai masakan khas Nusantara dengan cita
          rasa autentik yang disajikan melalui  prasmanan.
        </p>
      </div>
      <div className="flex gap-[15px]">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src={facebook}
            alt="Facebook"
            className="media-icon w-[33px] h-[33px] hover:scale-110 transition-all ease-in"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src={instagram}
            alt="Instagram"
            className="media-icon w-[33px] h-[33px] hover:scale-110 transition-all ease-in"
          />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="media-icon w-[33px] h-[33px] hover:scale-110 transition-all ease-in"
          />
        </a>
      </div>
    </div>
  </>
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
    <section className="relative flex h-screen w-full items-center justify-center">
      {/* Background Large */}
      <img
        className="hidden lg:block absolute scale-150 opacity-50 top-7 left-7 pointer-events-none select-none"
        src={backgroundCircle}
        alt="Background Circle"
      />
      <img
        className="hidden lg:block absolute opacity-50 top-30 -left-40 pointer-events-none select-none"
        src={backgroundBatikBunga}
        alt="Background BabackgroundBatikBunga"
      />

      {/* Background Small */}
      <img
        className="block lg:hidden absolute scale-100 opacity-70 top-0 left-0 pointer-events-none select-none"
        src={backgroundCircle}
        alt="Background Circle"
      />
      <img src={BackgroundFlower} className="lg:hidden block absolute -left-60 bottom-30 scale-175 opacity-70 rotate-180 rotate-x-180 pointer-events-none select-none" />
      <img src={BackgroundFlowerBig} className="lg:hidden block absolute -right-40 top-20 scale-125 opacity-70 -rotate-60 pointer-events-none select-none" />

      {/* Konten */}
      <div className="w-[1323px] absolute top-1/2 -translate-y-1/2">
        <HeroText isVisible={isVisible} />
        <HeroBlob isVisible={isVisible} />
      </div>
    </section>
  );
};