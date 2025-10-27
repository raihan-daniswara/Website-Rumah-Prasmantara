import React, { useEffect, useState, useRef } from "react";
import "./StrengthSection.css";
import chef from "../../../assets/home/chef.png";
import iconVariasi from "../../../assets/home/icon-variasi.png";
import iconKonsep from "../../../assets/home/icon-konsep.png";
import iconPesan from "../../../assets/home/icon-pesan.png";

import BackgroundFlower from "../../../assets/background/flower.png"
import BackgroundFlowerBig from "../../../assets/background/flower-big.png"
import BackgroundCircleBig from "../../../assets/background/background-circle-big.svg"
import { NavLink } from "react-router-dom";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
};

const cardData = [
  {
    icon: iconVariasi,
    title: "Variasi Masakan",
    highlight: "Nusantara",
    width: "128px",
    mobileWidth: "96px",
  },
  {
    icon: iconKonsep,
    title: "Konsep Unik",
    highlight: "Prasmanan",
    width: "92px",
    mobileWidth: "68px",
  },
  {
    icon: iconPesan,
    title: "Dapat Pesan",
    highlight: "Melalui Online",
    width: "128px",
    mobileWidth: "96px",
  },
];

const StrengthCard = ({ icon, title, highlight, width, isVisible }) => (
  <div
    className={`card group px-6 py-4 lg:py-5 w-[165px] lg:w-[205px] rounded-4xl bg-[#2D1F18] flex flex-col items-center justify-center gap-4 transition-all duration-300 ease-out hover:cursor-pointer hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
      }`}
    style={{
      borderRadius: "32px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    }}
  >
    <img src={icon} alt={title} className={`w-${width} h-auto transition-all duration-300 ease-in-out group-hover:drop-shadow-[0_4px_20px_rgba(197,67,0,0.1)]`} />
    <p
      className="text-lg lg:text-2xl text-[#EAAE8F] font-bold text-center"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      {title}
      <br />
      <span className="text-[#C54300]">{highlight}</span>
    </p>
  </div>
);

const TextContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex flex-col items-center gap-8 w-fit transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
    >
      {/* Header */}
      <div className="max-w-[660px] flex flex-col gap-2.5">
        <h1
          className="header-text text-[#EAAE8F] font-bold text-6xl leading-[78px]!"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Mengapa <span className="text-[#C54300]">Harus</span> Memilih
          <span className="text-[#C54300]"> Rumah Prasmantara</span>?
        </h1>
        <p
          className="text-4xl text-[#BDBDBD] font-semibold leading-[52px] text-shadow-[0_4px_10px_rgba(255,255,255,0.1)]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Beberapa pengalaman kuliner Nusantara yang
          unik dibandingkan dengan tempat lain.
        </p>
      </div>

      {/* Cards */}
      <div className="card-text card-wrapper flex flex-wrap gap-5 justify-center">
        {cardData.map((card, index) => (
          <StrengthCard
            key={index}
            icon={card.icon}
            title={card.title}
            highlight={card.highlight}
            width={card.width}
            isVisible={isVisible}
          />
        ))}
      </div>
      <NavLink
        to="/tentang"
        className={({ isActive }) =>
          `px-10 py-4 text-4xl rounded-full font-bold button-text hover:scale-103 bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
          }`
        }
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Tentang <span className="text-[#C54300]">Kami</span>
      </NavLink>
    </div>

    {/* Small */}
    <div
      className={`flex lg:hidden flex-col items-center gap-8 w-fit transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {/* Header */}
      <div className="max-w-[660px] flex flex-col items-center justify-center gap-2.5">
        <h1
          className="header-text max-w-[310px] text-[#EAAE8F] font-bold text-[32px] text-center"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Mengapa <span className="text-[#C54300]">Harus</span> Memilih
          <span className="text-[#C54300]"> Rumah Prasmantara</span>?
        </h1>
        <p
          className="text-xl text-[#BDBDBD] font-semibold max-w-[350px] text-center text-shadow-[0_4px_10px_rgba(255,255,255,0.1)]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Beberapa pengalaman kuliner Nusantara yang
          unik dibandingkan dengan tempat lain.
        </p>
      </div>

      {/* Cards */}
      <div className="card-text card-wrapper flex flex-wrap gap-5 justify-center">
        {cardData.map((card, index) => (
          <StrengthCard
            key={index}
            icon={card.icon}
            title={card.title}
            highlight={card.highlight}
            width={card.width}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  </>
);

const ImageContent = ({ isVisible }) => (
  <div className="relative">
    {/* background Large*/}
    <img src={BackgroundFlower} className="hidden lg:block absolute -left-20 -bottom-20 scale-150 opacity-50 pointer-events-none select-none" />
    <img src={BackgroundFlowerBig} className="hidden lg:block absolute left-60 -top-20 scale-125 opacity-50 pointer-events-none select-none" />

    {/* image content */}
    <div
      className={`chef-border relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] bg-[#C54300] rounded-full overflow-visible flex items-center justify-center 
        hover:cursor-pointer hover:scale-105 duration-300 ease-out transition-all group
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
      `}
    >
      {/* efek */}
      <div className="absolute w-3 h-3 lg:w-6 lg:h-6 right-0 bottom-0 lg:right-20 lg:bottom-20 lg:group-hover:right-0 lg:group-hover:bottom-0 rounded-full bg-[#C54300] shadow-[0_0_32px_6px_rgba(197,67,0,0.49)] 
        opacity-100 transition-all duration-500 ease-in-out pointer-events-none select-none"
      />
      <div className="absolute w-6 h-6 lg:w-12 lg:h-12 -left-3 -top-3 lg:left-20 lg:top-20 lg:group-hover:left-0 lg:group-hover:top-0 rounded-full bg-[#C54300] shadow-[0_0_43px_17px_rgba(197,67,0,0.49)] 
        opacity-50 transition-all duration-500 ease-in-out pointer-events-none select-none"
      />

      {/* konten */}
      <div className="absolute inset-0 flex items-center justify-center rounded-full">
        <div className="relative w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
          <img
            src={chef}
            alt="Chef"
            className="w-[300px] lg:w-[600px] h-full object-cover pointer-events-none select-none"
            style={{
              transform: "translateY(-49px)",
              clipPath: "inset(0 0 0 round 250px)",
              maskImage:
                "linear-gradient(to bottom, transparent -10%, black 15%, black 100%)",
            }}
          />
        </div>
      </div>
    </div>
  </div>
);


export const StrengthSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Observer Text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer Image
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setImageVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="strength-section relative h-fit flex flex-col lg:flex-row gap-10 lg:gap-20 lg:py-16 pb-4 px-4 items-center justify-center"
    >

      {/* Background Small*/}
      <img src={BackgroundFlower} className="lg:hidden block absolute -left-50 top-20 scale-75 opacity-70 rotate-x-180 rotate-90 pointer-events-none select-none" />
      <img
        src={BackgroundCircleBig}
        className="lg:hidden block absolute opacity-50 scale-90 -right-60 -top-40 pointer-events-none select-none"
      />
      <img src={BackgroundFlowerBig} className="lg:hidden block absolute -right-40 bottom-20 scale-75 opacity-70 -rotate-60 pointer-events-none select-none" />
      <img
        src={BackgroundCircleBig}
        className="lg:hidden block absolute opacity-50 scale-90 -left-60 -bottom-40 rotate-y-180 pointer-events-none select-none"
      />

      {/* Background Large*/}
      <img
        src={BackgroundCircleBig}
        className="hidden lg:block absolute opacity-50 -right-75 pointer-events-none select-none"
      />

      <div ref={imageRef}>
        <ImageContent isVisible={imageVisible} />
      </div>

      <div ref={textRef}>
        <TextContent isVisible={textVisible} />
      </div>
    </section>
  );
};