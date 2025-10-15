import './StatsSection.css';
import Tilt from 'react-parallax-tilt';
import { useEffect, useState, useRef, useCallback } from 'react';

// import gambar untuk masing-masing card
import cardImage1 from '/src/assets/home/card1.png';
import cardImage2 from '/src/assets/home/card2.png';
import cardImage3 from '/src/assets/home/card3.png';

// font 
const font = {
  greatVibes: '"Great Vibes", cursive',
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif'
};

const Header = ({ isVisible }) => (
  <header className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
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
);

// 🔥 TiltCard sekarang menerima prop "bgImage"
const TiltCard = ({ isVisible, children, slideClass = '-translate-x-5', bgImage }) => (
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
    {/* Layer gambar full cover (berbeda tiap card) */}
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center opacity-0 transition-all duration-700 ease-in-out 
        group-hover:opacity-10 group-hover:scale-110"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>

    {/* Lapisan semi-transparan opsional untuk kontras teks */}
    <div className="absolute inset-0 bg-black/20 opacity-0 transition-all duration-700 group-hover:opacity-30"></div>

    {/* Isi kartu */}
    <div className="relative z-10">
      {children}
    </div>
  </Tilt>
);

// 🔹 Card 1
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

// 🔹 Card 2
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

// 🔹 Card 3
const Card3 = ({ isVisible }) => (
  <TiltCard isVisible={isVisible} bgImage={cardImage3} slideClass="translate-x-5">
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

const Content = ({ contentVisible }) => (
  <div className="card-container flex justify-center gap-6 mt-11">
    <div className="card-content flex flex-col gap-6">
      <Card1 isVisible={contentVisible} />
      <Card2 isVisible={contentVisible} />
    </div>
    <Card3 isVisible={contentVisible} />
  </div>
);

export const Section = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerObserverRef = useRef(null);
  const contentObserverRef = useRef(null);

  const handleHeaderIntersection = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !headerVisible) {
      setTimeout(() => {
        setHeaderVisible(true);
      }, 100);
      headerObserverRef.current?.unobserve(entry.target);
    }
  }, [headerVisible]);

  const handleContentIntersection = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !contentVisible) {
      setTimeout(() => {
        setContentVisible(true);
      }, 100);
      contentObserverRef.current?.unobserve(entry.target);
    }
  }, [contentVisible]);

  useEffect(() => {
    headerObserverRef.current = new IntersectionObserver(handleHeaderIntersection, { threshold: 0.1 });
    contentObserverRef.current = new IntersectionObserver(handleContentIntersection, { threshold: 0.5 });

    if (sectionRef.current) {
      headerObserverRef.current.observe(sectionRef.current);
      contentObserverRef.current.observe(sectionRef.current);
    }

    return () => {
      headerObserverRef.current?.disconnect();
      contentObserverRef.current?.disconnect();
    };
  }, [handleHeaderIntersection, handleContentIntersection]);

  return (
    <div 
      ref={sectionRef} 
      className="section mt-10 mb-20 p-8 rounded-3xl"
    >
      <Header isVisible={headerVisible} />
      <Content contentVisible={contentVisible} />
    </div>
  );
};
