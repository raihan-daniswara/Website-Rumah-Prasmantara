import React, { useEffect, useState, useRef, useCallback } from "react";
import "./LocationSection.css";
import indonesiaMap from "../../../assets/about/indonesia-map.svg";
import { NavLink } from "react-router-dom";
import { WaveBottom } from "../../../components/wave/WaveBottom";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantSC: '"Cormorant SC", serif',
};

const TextContent = ({ isVisible }) => (
  <div
    className={`flex flex-col items-start gap-8 w-fit transition-all duration-1000 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
    }`}
  >
    <div className="textContent flex flex-col gap-2.5">
      <h1
        className="strengthHeader text-[#EAAE8F] font-bold text-6xl leading-[78px]!"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Temukan{" "}
        <span className="text-[#C54300]">
          Rumah
          <br />
          Prasmantara
        </span>{" "}
        di <span className="text-[#C54300]">Dekatmu</span>
      </h1>
      <p
        className="text-4xl text-[#BDBDBD] font-semibold leading-[52px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Temukan cabang Rumah Prasmantara
        <br />
        terdekat dan nikmati makanan khas daerah
        <br />
        dari Sabang sampai Merauke di satu tempat.
      </p>
    </div>
    <NavLink
      to="https://www.google.com/maps"
      className={({ isActive }) =>
        `px-10 py-4 text-4xl rounded-full font-bold button-text hover:scale-103 bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${
          isActive
            ? "border-[#C54300]"
            : "border-transparent hover:text-[#EAAE8F]"
        }`
      }
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Lihat <span className="text-[#C54300]">Peta</span>
    </NavLink>
  </div>
);

const locations = [
  { 
    name: "Jakarta Pusat", 
    address: "Jl. Sabang, Menteng", 
    top: "434px", 
    left: "378px" 
  },
  { 
    name: "Surabaya", 
    address: "Jl. Kembang Jepun", 
    top: "470px", 
    left: "548px" 
  },
  { 
    name: "Pekanbaru", 
    address: "Jl. Jenderal Sudirman", 
    top: "191px", 
    left: "205px" 
  },
  { 
    name: "Pontianak", 
    address: "Jl. Gajah Mada", 
    top: "213px", 
    left: "470px" 
  },
  { 
    name: "Makassar", 
    address: "Jl. Penghibur", 
    top: "317px", 
    left: "623px" 
  },
];


const ImageContent = ({ isVisible }) => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [HoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`relative duration-1000 ease-out transition-all ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
      }`}
    >
      {/* Peta */}
      <img
        src={indonesiaMap}
        alt="Peta Lokasi Rumah Prasmantara"
        className="object-cover w-[776px] h-[550px]"
      />

      {/* Titik Lokasi */}
      {locations.map((loc, index) => (
        <div
          key={index}
          className="absolute cursor-pointer group"
          style={{
            top: loc.top,
            left: loc.left,
            transform: "translate(-50%, -50%)",
          }}
          onMouseEnter={() => {
            setActiveLocation(index);
            setHoveredIndex(index);
          }}
          onMouseLeave={() => {
            setActiveLocation(null);
            setTimeout(() => setHoveredIndex(null), 250); // delay unmount 250ms
          }}
        >
          {/* Dot */}
          <div
            className={`transition-all duration-300 ${
              activeLocation === index
                ? "w-5 h-5 bg-[#C54300] scale-125 ring-8 ring-[#9C3500]/40 rounded-full"
                : "dotLocation w-5 h-5 bg-[#C54300] rounded-full"
            }`}
          />

          {/* Tooltip (selalu di-DOM, tapi animasi opacity & posisi) */}
          <div
            className={`absolute bottom-[140%] left-1/2 -translate-x-1/2 px-5 py-2 rounded-[12px] text-center whitespace-nowrap border border-[#C54300]/30
              bg-[#3C261A] text-[#EAAE8F] shadow-[0_0_12px_rgba(60,38,26,1)] transition-all duration-300 ease-in-out 
              ${activeLocation === index
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 translate-y-3 invisible"
              }`}
            style={{ fontFamily: font.cormorantUpright }}
          >
            <div className="text-2xl font-bold text-[#C54300]">
              {loc.name}
            </div>
            <div className="text-xl font-bold">{loc.address}</div>
            {/* Segitiga kecil */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#3C261A]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const LocationSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const sectionRef = useRef(null);
  const textObserverRef = useRef(null);
  const imageObserverRef = useRef(null);

  const handleTextIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !textVisible) {
        setTimeout(() => setTextVisible(true), 100);
        textObserverRef.current?.unobserve(entry.target);
      }
    },
    [textVisible]
  );

  const handleImageIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !imageVisible) {
        setTimeout(() => setImageVisible(true), 100);
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
      className="relative h-screen flex gap-[10px] py-16 px-4 items-center justify-center"
    >
      <WaveBottom />
      <ImageContent isVisible={imageVisible} />
      <TextContent isVisible={textVisible} />
    </section>
  );
};
