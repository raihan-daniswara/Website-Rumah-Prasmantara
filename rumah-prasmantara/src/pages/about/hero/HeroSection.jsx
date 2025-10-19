import whatsapp from '../../../assets/home/whatsapp.svg';
import instagram from '../../../assets/home/instagram.svg';
import facebook from '../../../assets/home/facebook.svg';
import blob from '../../../assets/home/blob.svg';
import blobStroke from '../../../assets/home/blob-stroke.svg';
import './HeroSection.css';
import { useEffect, useState } from 'react';

// Font
const font = {
  greatVibes: '"Great Vibes", cursive',
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
};

const HeroBlob = () => {
  return (
    <div className="blob-container absolute w-[700px] h-[700px] right-0 top-1/2 -translate-y-1/2 animate-pulse" style={{ zIndex: -1 }}>
      <img
        src={blob}
        className="absolute top-0 left-0 scale-110 translate-x-5 transition-all ease-in"
        alt="Blob"
        style={{ zIndex: 1 }}
      />
      <img
        src={blobStroke}
        className="absolute top-0 left-0 transition-all ease-in"
        alt="Blob Stroke"
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

const HeroText = ({ isVisible }) => (
  <div
    className={`text flex flex-col items-start gap-5 transition-all duration-1000 ease-out relative ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
    }`}
    style={{ zIndex: 10 }}
  >
    <div className="my-2.5">
      <h2
        className="hero-header-2 text-[#DBCECE] text-5xl font-medium transition-all duration-1000 ease-out"
        style={{ fontFamily: font.greatVibes }}
      >
        Tentang Kami
      </h2>
      <h1
        className="hero-header-1 text-7xl text-[#EAAE8F] font-bold transition-all duration-1000 ease-out"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Alasan <span className="text-[#C54300]">Rumah<br />Prasmantara</span> Hadir
      </h1>
      <p
        className="hero-paragraph text-4xl font-semibold text-[#BDBDBD] transition-all duration-1000 ease-out"
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
    <section className="relative flex h-[100vh] w-full items-center justify-center">
      <div className="w-[1323px] absolute top-1/2 -translate-y-1/2">
        <HeroText isVisible={isVisible} />
        <HeroBlob />
      </div>
    </section>
  );
};