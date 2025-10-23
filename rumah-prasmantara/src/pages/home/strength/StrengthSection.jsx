import React, { useEffect, useState, useRef, useCallback } from "react";
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
  },
  {
    icon: iconKonsep,
    title: "Konsep Unik",
    highlight: "Prasmanan",
    width: "92px",
  },
  {
    icon: iconPesan,
    title: "Dapat Pesan",
    highlight: "Melalui Online",
    width: "128px",
  },
];

const StrengthCard = ({ icon, title, highlight, width, isVisible }) => (
  <div
    className={`card group px-6 py-5 w-[205px] rounded-4xl bg-[#2D1F18] flex flex-col items-center justify-center gap-4 transition-all duration-300 ease-out hover:cursor-pointer hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
      }`}
    style={{
      borderRadius: "32px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    }}
  >
    <img src={icon} alt={title} className={`w-${width} h-auto transition-all duration-300 ease-in-out group-hover:drop-shadow-[0_4px_20px_rgba(197,67,0,0.1)]`} />
    <p
      className="text-2xl text-[#EAAE8F] font-bold text-center"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      {title}
      <br />
      <span className="text-[#C54300]">{highlight}</span>
    </p>
  </div>
);

const TextContent = ({ isVisible }) => (
  <div
    className={`flex flex-col items-center gap-8 w-fit transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
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
);

const ImageContent = ({ isVisible }) => (
  <div className="relative">
    {/* background */}
    <img src={BackgroundFlower} className="absolute -left-20 -bottom-20 scale-150 opacity-50 pointer-events-none select-none" />
    <img src={BackgroundFlowerBig} className="absolute left-60 -top-20 scale-125 opacity-50 pointer-events-none select-none" />

    {/* image content */}
    <div
      className={`chef-border relative w-[500px] h-[500px] bg-[#C54300] rounded-full overflow-visible flex items-center justify-center 
        hover:cursor-pointer hover:scale-105 duration-300 ease-out transition-all group
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
      `}
    >
      {/* efek */}
      <div className="absolute w-5 h-5 right-40 bottom-40 rounded-full bg-[#C54300] shadow-[0_0_32px_6px_rgba(197,67,0,0.49)] 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:right-0 group-hover:bottom-10 pointer-events-none select-none"
      />
      <div className="absolute w-1 h-1 left-40 top-40 rounded-full bg-[#C54300] shadow-[0_0_43px_17px_rgba(197,67,0,0.49)] 
        opacity-0 group-hover:opacity-50 transition-all duration-500 ease-in-out group-hover:left-0 group-hover:top-0 group-hover:w-10 group-hover:h-10 pointer-events-none select-none"
      />

      {/* konten */}
      <div className="absolute inset-0 flex items-center justify-center rounded-full">
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">
          <img
            src={chef}
            alt="Chef"
            className="w-full h-[600px] object-cover pointer-events-none select-none"
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
      once: true
    });
    imageObserverRef.current = new IntersectionObserver(handleImageIntersection, {
      threshold: 0.3,
      once: true
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
      className="strength-section relative h-fit flex gap-20 py-16 px-4 items-center justify-center"
    >
    <img src={BackgroundCircleBig} className="absolute opacity-50 -right-75 pointer-events-none select-none" />
      <ImageContent isVisible={imageVisible} />
      <TextContent isVisible={textVisible} />
    </section>
  );
};