import React, { useEffect, useState, useRef, useCallback } from "react";
import "./StrengthSection.css";
import MasakanNusantara1 from "../../../assets/about/masakan-nusantara1.png";
import MasakanNusantara2 from "../../../assets/about/masakan-nusantara2.png";
import MakananGIF from "../../../assets/about/makanan.gif";
import { NavLink } from "react-router-dom";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantSC: '"Cormorant SC", serif',
};

const cardData = [
  {
    value: "20+",
    title: "Makanan",
    highlight: "Utama",
    size: "80px"
  },
  {
    value: "15+",
    title: "Makanan",
    highlight: "Ringan",
    size: "80px",
  },
  {
    value: "10+",
    title: "Minuman",
    highlight: "Segar",
    size: "80px",
  },
];

const StrengthCard = ({ value, title, highlight, size, isVisible }) => (
  <div
    className={`card py-8 w-[205px] rounded-4xl bg-[#2D1F18] flex flex-col items-center justify-center transition-all duration-1000 ease-out hover:cursor-pointer hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
      }`}
    style={{
      borderRadius: "32px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    }}
  >
    <p
      className={`cardValue text-[${size}] text-[#C54300] font-bold -mt-10`}
      style={{ fontFamily: font.cormorantSC }}
    >{value}</p>
    <div className="-mt-3 flex flex-col gap-5">
      <p
        className="text-2xl text-[#EAAE8F] font-bold text-center"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        {title}
        <br />
        <span className="text-[#C54300]">{highlight}</span>
      </p>
    </div>
  </div>
);

const TextContent = ({ isVisible }) => (
  <div
    className={`flex flex-col items-center gap-8 w-fit transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
  >
    {/* Header */}
    <div className="textContent flex flex-col gap-2.5">
      <h1
        className="strengthHeader text-[#EAAE8F] font-bold text-6xl leading-[78px]!"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Semua Rasa <span className="text-[#C54300]">Nusantara</span>
        <br />
        Hadir di <span className="text-[#C54300]">Satu Tempat</span>
      </h1>
      <p
        className="text-4xl text-[#BDBDBD] font-semibold leading-[52px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Kami percaya, kelezatan masakan Nusantara
        <br />
        tak hanya memanjakan lidah, tetapi juga
        <br />
        menghadirkan kehangatan yang kami sajikan
        <br />
        dalam satu pengalaman prasmanan.
      </p>
    </div>

    {/* Cards */}
    <div className="card-wrapper flex flex-wrap gap-5 justify-center">
      {cardData.map((card, index) => (
        <StrengthCard
          key={index}
          value={card.value}
          title={card.title}
          highlight={card.highlight}
          size={card.size}
          isVisible={isVisible}
        />
      ))}
    </div>
    <NavLink
      to="/produk"
      className={({ isActive }) =>
        `px-10 py-4 text-4xl rounded-full font-bold button-text hover:scale-103 bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
        }`
      }
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Lihat <span className="text-[#C54300]">Menu</span>
    </NavLink>
  </div>
);
const ImageContent = ({ isVisible }) => (
  <div
    className={`flex gap-5 h-[630px] duration-[1000ms] ease-out transition-all ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
    }`}
  >
    {/* Kolom kiri */}
    <div className="flex flex-col gap-5 justify-end items-end">
      <img
        src={MasakanNusantara1}
        alt="Masakan Nusantara 1"
        className="rounded-tr-[50px] rounded-tl-[300px] rounded-br-[50px] rounded-bl-[50px] object-cover w-[300px] h-[240px]"
      />
      <img
        src={MasakanNusantara2}
        alt="Masakan Nusantara 2"
        className="strengthImage rounded-t-[100px] rounded-b-[300px] object-cover w-[240px] h-[340px]"
      />
    </div>

    {/* Kolom kanan (GIF) */}
    <div className="strengthImage rounded-l-[50px] rounded-r-[220px] overflow-hidden w-[300px] h-[600px]">
      <img
        src={MakananGIF}
        alt="Masakan Animasi"
        className="strengthImage object-cover w-full h-full"
      />
    </div>
  </div>
);

export const StrengthSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const sectionRef = useRef(null);
  const textObserverRef = useRef(null);
  const imageObserverRef = useRef(null);

  const handleTextIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !textVisible) {
        setTimeout(() => {
          setTextVisible(true);
        }, 100);
        textObserverRef.current?.unobserve(entry.target);
      }
    },
    [textVisible]
  );

  const handleImageIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !imageVisible) {
        setTimeout(() => {
          setImageVisible(true);
        }, 100);
        imageObserverRef.current?.unobserve(entry.target);
      }
    },
    [imageVisible]
  );

  useEffect(() => {
    textObserverRef.current = new IntersectionObserver(handleTextIntersection, {
      threshold: 0.3,
    });
    imageObserverRef.current = new IntersectionObserver(handleImageIntersection, {
      threshold: 0.3,
    });

    if (sectionRef.current) {
      textObserverRef.current.observe(sectionRef.current);
      imageObserverRef.current.observe(sectionRef.current);
    }

    return () => {
      textObserverRef.current?.disconnect();
      imageObserverRef.current?.disconnect();
    };
  }, [handleTextIntersection, handleImageIntersection]);

  return (
    <section
      ref={sectionRef}
      className="h-[100vh] flex gap-20 py-16 px-4 items-center justify-center"
    >
      <ImageContent isVisible={imageVisible} />
      <TextContent isVisible={textVisible} />
    </section>
  );
};