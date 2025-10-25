import './StatsSection.css';
import Tilt from 'react-parallax-tilt';
import { useEffect, useState, useRef } from 'react';

// import gambar
import cardImage1 from '/src/assets/home/card1.png';
import cardImage2 from '/src/assets/home/card2.png';
import cardImage3 from '/src/assets/home/card3.png';

import backgroundIndonesia from '../../../assets/background/background-indonesia.svg';
import BackgroundCircleBig from "../../../assets/background/background-circle-big2.svg";
import BackgroundBatik from "../../../assets/background/batik.png";
import { WaveTop } from '../../../components/wave/WaveTop';
import { WaveBottom } from '../../../components/wave/WaveBottom';


// font 
const font = {
  greatVibes: '"Great Vibes", cursive',
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif'
};

const Header = ({ isVisible }) => (
  <>
    {/* Large */}
    <header className={`hidden lg:block transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <h1
        className="hero-header-1 text-6xl text-center text-[#EAAE8F] font-bold"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Perpaduan <span className="text-[#C54300]">Makanan Nusantara</span> Yang Menyatu
      </h1>
      <h2
        className="hero-header-2 text-4xl text-center text-[#BDBDBD] font-semibold"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Ragam Makanan Nusantara Yang Bisa Kalian Rasakan di Rumah Prasmantara
      </h2>
    </header>

    {/* Small */}
    <header className={`transition-all duration-1000 flex lg:hidden flex-col items-center justify-center gap-2.5 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <h1
        className="hero-header-1 text-[32px] text-center text-[#EAAE8F] font-bold max-w-[380px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Perpaduan <span className="text-[#C54300]">Makanan Nusantara</span> Yang Menyatu
      </h1>
      <h2
        className="hero-header-2 text-xl text-center text-[#BDBDBD] font-semibold max-w-[380px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Ragam Makanan Nusantara Yang Bisa Kalian Rasakan di Rumah Prasmantara
      </h2>
    </header>
  </>
);

const TiltCard = ({ isVisible, children, slideClass = '-translate-x-10', bgImage }) => (
  <Tilt
    tiltMaxAngleX={8}
    tiltMaxAngleY={8}
    perspective={1000}
    scale={1.02}
    transitionSpeed={400}
    tiltReverse={true}
    className={`tilt-card relative rounded-2xl bg-[#3C261A] flex flex-col justify-end items-start text-white p-8 
      transition-all duration-1000 ease-out hover:cursor-pointer overflow-hidden 
      ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${slideClass}`} 
      group`}
    style={{
      borderRadius: '16px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    }}
  >
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center opacity-0 transition-all duration-700 ease-in-out 
        group-hover:opacity-30 group-hover:scale-110"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>

    <div className="absolute inset-0 bg-black/20 opacity-0 transition-all duration-700 group-hover:opacity-30"></div>

    <div className="relative z-10">
      {children}
    </div>
  </Tilt>
);

const Card1 = ({ isVisible }) => (
  <TiltCard isVisible={isVisible} bgImage={cardImage1}>
    <h1
      className="text-[80px] font-bold text-[#C54300]"
      style={{ fontFamily: font.cormorantUpright }}
    >
      92%
    </h1>
    <p
      className="text-2xl text-[#EAAE8F] font-bold"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Pelanggan <span className="text-[#C54300]">kembali pesan</span> menu kami
    </p>
    <p
      className="text-[#BDBDBD] font-bold text-[20px]"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Sudah banyak pelanggan berlangganan
    </p>
  </TiltCard>
);

const Card1Mobile = ({ isVisible }) => (
  <div
    className={`relative flex flex-col justify-end w-[350px] h-[180px] rounded-[20px] p-6 overflow-hidden text-white transition-all duration-700 ease-out transform
      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
    style={{
      backgroundImage: `url(${cardImage3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 0px 40px rgba(197, 67, 0, 0.5), 0 20px 30px rgba(0, 0, 0, 0.25)',
    }}
  >
    <div className="absolute inset-0 bg-[#3C261A]/90" />

    {/* Konten */}
    <div className="relative z-10">
      <h1
        className="text-[48px] font-bold text-[#C54300]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        45+
      </h1>
      <p
        className="text-xl text-[#EAAE8F] font-bold"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Variasi masakan <span className="text-[#C54300]">khas nusantara</span>
      </p>
      <p
        className="text-[#BDBDBD] font-bold text-[16px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Ga akan bosan dengan menu tiap harinya
      </p>
    </div>
  </div>
);

const Card2 = ({ isVisible }) => (
  <TiltCard isVisible={isVisible} bgImage={cardImage2}>
    <h1
      className="text-[80px] font-bold text-[#C54300]"
      style={{ fontFamily: font.cormorantUpright }}
    >
      5+
    </h1>
    <p
      className="text-2xl text-[#EAAE8F] font-bold"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Cabang tersebar di <span className="text-[#C54300]">Indonesia</span>
    </p>
    <p
      className="text-[#BDBDBD] font-bold text-[20px]"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Bisa coba dan pesan dimana saja
    </p>
  </TiltCard>
);

const Card2Mobile = ({ isVisible }) => (
  <div
    className={`relative flex flex-col justify-end w-[350px] h-[180px] rounded-[20px] p-6 overflow-hidden text-white transition-all duration-700 ease-out transform
      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
    style={{
      backgroundImage: `url(${cardImage1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 20px 30px rgba(0, 0, 0, 0.25)',
    }}
  >
    <div className="absolute inset-0 bg-[#3C261A]/90" />

    {/* Konten */}
    <div className="relative z-10">
      <h1
        className="text-[48px] font-bold text-[#C54300]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        92%
      </h1>
      <p
        className="text-xl text-[#EAAE8F] font-bold"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Pelanggan <span className="text-[#C54300]">kembali pesan</span> menu kami
      </p>
      <p
        className="text-[#BDBDBD] font-bold text-[16px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Sudah banyak pelanggan berlangganan
      </p>
    </div>
  </div>
);

const Card3 = ({ isVisible }) => (
  <TiltCard isVisible={isVisible} bgImage={cardImage3} slideClass="translate-x-10">
    <h1
      className="text-[80px] font-bold text-[#C54300]"
      style={{ fontFamily: font.cormorantUpright }}
    >
      45+
    </h1>
    <p
      className="text-2xl text-[#EAAE8F] font-bold"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Variasi masakan <span className="text-[#C54300]">khas nusantara</span>
    </p>
    <p
      className="text-[#BDBDBD] font-bold text-[20px]"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Ga akan bosan dengan menu tiap harinya
    </p>
  </TiltCard>
);

const Card3Mobile = ({ isVisible }) => (
  <div
    className={`relative flex flex-col justify-end w-[350px] h-[180px] rounded-[20px] p-6 overflow-hidden text-white transition-all duration-700 ease-out transform
      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
    style={{
      backgroundImage: `url(${cardImage1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 20px 30px rgba(0, 0, 0, 0.25)',
    }}
  >
    <div className="absolute inset-0 bg-[#3C261A]/90" />

    {/* Konten */}
    <div className="relative z-10">
      <h1
        className="text-[48px] font-bold text-[#C54300]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        5+
      </h1>
      <p
        className="text-xl text-[#EAAE8F] font-bold"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Cabang tersebar di <span className="text-[#C54300]">Indonesia</span>
      </p>
      <p
        className="text-[#BDBDBD] font-bold text-[16px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Bisa coba dan pesan dimana saja
      </p>
    </div>
  </div>
);

export const StatsSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisibleLg, setContentVisibleLg] = useState(false);
  const [contentVisibleSm, setContentVisibleSm] = useState(false);
  const headerRef = useRef(null);
  const contentRefLg = useRef(null);
  const contentRefSm = useRef(null);

  // Observer Header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer Content LG
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setContentVisibleLg(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (contentRefLg.current) observer.observe(contentRefLg.current);
    return () => observer.disconnect();
  }, []);

  // Observer Content SM
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setContentVisibleSm(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (contentRefSm.current) observer.observe(contentRefSm.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-fit w-full relative section py-40 lg:py-50 rounded-3xl">
      <WaveBottom />

      {/* Background */}
      <div className="hidden lg:block absolute w-full h-full">
        <img
          className="absolute -top-35 left-1/2 -translate-x-1/2 scale-115 opacity-50 pointer-events-none select-none"
          src={backgroundIndonesia}
          alt="Background Indonesia"
        />
        <img
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 scale-115 opacity-50 pointer-events-none select-none"
          src={BackgroundCircleBig}
          alt="Background Circle"
        />
        <img
          className="absolute bottom-20 left-20 scale-115 rotate-y-180 rotate-10 opacity-50 pointer-events-none select-none"
          src={BackgroundBatik}
          alt="Background Batik"
        />
        <img
          className="absolute bottom-20 right-20 scale-115 opacity-50 pointer-events-none select-none"
          src={BackgroundBatik}
          alt="Background Batik"
        />
      </div>

      {/* Header Section */}
      <div ref={headerRef}>
        <Header isVisible={headerVisible} />
      </div>

      {/* Cards Section Desktop */}
      <div ref={contentRefLg} className="hidden lg:flex mt-16 justify-center gap-6">
        <div className="flex flex-col gap-6">
          <Card1 isVisible={contentVisibleLg} />
          <Card2 isVisible={contentVisibleLg} />
        </div>
        <Card3 isVisible={contentVisibleLg} />
      </div>

      {/* Cards Section Mobile */}
      <div ref={contentRefSm} className="flex flex-col lg:hidden mt-[30px] items-center justify-center gap-5">
        <Card1Mobile isVisible={contentVisibleSm} />
        <Card2Mobile isVisible={contentVisibleSm} />
        <Card3Mobile isVisible={contentVisibleSm} />
      </div>

      <WaveTop />
    </div>
  );
};