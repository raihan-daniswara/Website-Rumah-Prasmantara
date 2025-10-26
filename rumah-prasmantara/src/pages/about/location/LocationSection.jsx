import React, { useEffect, useState, useRef } from "react";
import "./LocationSection.css";
import indonesiaMap from "../../../assets/about/indonesia-map.png";
import { NavLink } from "react-router-dom";
import { WaveBottom } from "../../../components/wave/WaveBottom";

import backgroundLingkaran from '../../../assets/background/about/lingkaran.png';
import { WaveTop } from "../../../components/wave/WaveTop";
const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantSC: '"Cormorant SC", serif',
};

const TextContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex flex-col items-start gap-8 w-fit transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
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
      <a
        href="https://www.google.com/maps"
        target="_blank"
        className={`lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 hover:border-[#C54300] hover:text-[#EAAE8F]`}
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat <span className="text-[#C54300]">Peta</span>
      </a>
    </div>

    {/* Small */}
    <div
      className={`flex lg:hidden flex-col items-start gap-8 w-fit transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
    >
      <div className="textContent flex flex-col items-center gap-2.5">
        <h1
          className="strengthHeader text-[#EAAE8F] font-bold text-[32px] max-w-[330px] text-center"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Temukan <span className="text-[#C54300]"> Rumah Prasmantara</span> di <span className="text-[#C54300]">Dekatmu</span>
        </h1>
        <p
          className="text-xl text-[#BDBDBD] font-semibold max-w-[380px] text-center"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Temukan cabang Rumah Prasmantara terdekat dan nikmati makanan khas daerah dari Sabang sampai Merauke di satu tempat.
        </p>
      </div>
      <ImageContent />
      <a
        href="https://www.google.com/maps"
        target="_blank"
        className={`lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 hover:border-[#C54300] hover:text-[#EAAE8F]`}
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat <span className="text-[#C54300]">Peta</span>
      </a>
    </div>
  </>
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
  },];

const mobileLocations = [
  {
    name: "Jakarta Pusat",
    address: "Jl. Sabang, Menteng",
    top: "207px",
    left: "180px"
  },
  {
    name: "Surabaya",
    address: "Jl. Kembang Jepun",
    top: "224px",
    left: "261px"
  },
  {
    name: "Pekanbaru",
    address: "Jl. Jenderal Sudirman",
    top: "91px",
    left: "98px"
  },
  {
    name: "Pontianak",
    address: "Jl. Gajah Mada",
    top: "102px",
    left: "224px"
  },
  {
    name: "Makassar",
    address: "Jl. Penghibur",
    top: "151px",
    left: "297px"
  },
];


const ImageContent = ({ isVisible }) => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [HoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {/* Large */}
      <div
        className={`hidden lg:block relative duration-1000 ease-out transition-all ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
      >
        {/* Peta */}
        <img
          src={indonesiaMap}
          alt="Peta Lokasi Rumah Prasmantara"
          className="object-cover w-[776px] h-[550px]"
        />

        {/* Koordinat Lokasi */}
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
              setTimeout(() => setHoveredIndex(null), 250);
            }}
          >
            {/* Dot */}
            <div
              className={`transition-all duration-300 ${activeLocation === index
                ? "w-5 h-5 bg-[#C54300] scale-125 ring-8 ring-[#9C3500]/40 rounded-full"
                : "dotLocation w-5 h-5 bg-[#C54300] rounded-full"
                }`}
            />

            {/* Detail */}
            <div
              className={`absolute bottom-[140%] left-1/2 -translate-x-1/2 px-5 py-2 rounded-xl text-center whitespace-nowrap border border-[#C54300]/30
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
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#3C261A]" />
            </div>
          </div>
        ))}
      </div>

      {/* Small */}
      <div
        className={`block lg:hidden relative duration-1000 ease-out transition-all"
          }`}
      >
        {/* Peta */}
        <img
          src={indonesiaMap}
          alt="Peta Lokasi Rumah Prasmantara"
          className="object-cover w-[370px] h-max"
        />

        {/* Koordinat Lokasi */}
        {mobileLocations.map((loc, index) => (
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
              setTimeout(() => setHoveredIndex(null), 250);
            }}
          >
            {/* Dot */}
            <div
              className={`transition-all duration-300 ${activeLocation === index
                ? "w-3 h-3 bg-[#C54300] scale-125 ring-8 ring-[#9C3500]/40 rounded-full"
                : "dotLocation w-3 h-3 bg-[#C54300] rounded-full"
                }`}
            />

            {/* Detail */}
            <div
              className={`absolute bottom-[140%] left-1/2 -translate-x-1/2 px-5 py-2 rounded-xl text-center whitespace-nowrap border border-[#C54300]/30
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
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#3C261A]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const LocationSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Observer Text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer Image
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setImageVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen flex gap-10 py-16 px-4 items-center justify-center overflow-hidden">
      <WaveBottom />
      {/* Background Large*/}
      <img
        className="hidden lg:block absolute opacity-50 -z-10 -top-12 scale-110 -right-20 pointer-events-none select-none"
        src={backgroundLingkaran}
        alt="Background Lingkaran"
      />
      <img
        className="hidden lg:block absolute opacity-50 -z-1 -bottom-10 scale-110 -left-20 rotate-180 pointer-events-none select-none"
        src={backgroundLingkaran}
        alt="Background BabackgroundRumah4"
      />

      {/* Background Small*/}
      <img
        className="block lg:hidden absolute opacity-50 -z-10 -top-14 scale-70 -right-24 pointer-events-none select-none"
        src={backgroundLingkaran}
        alt="Background Lingkaran"
      />
      <img
        className="block lg:hidden absolute opacity-50 -z-1 -bottom-14 scale-70 -left-24 rotate-180 pointer-events-none select-none"
        src={backgroundLingkaran}
        alt="Background BabackgroundRumah4"
      />

      {/* Konten */}
      <div ref={imageRef} className="hidden lg:block">
        <ImageContent isVisible={imageVisible} />
      </div>
      <div ref={textRef}>
        <TextContent isVisible={textVisible} />
      </div>
      <WaveTop />
    </section>
  );
};
