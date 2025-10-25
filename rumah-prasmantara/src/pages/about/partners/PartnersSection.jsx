import React, { useEffect, useState, useRef } from "react";
import "./PartnersSection.css";
import qrisLogo from "../../../assets/about/qris.png";
import shopeeFoodLogo from "../../../assets/about/shopee-food.png";
import gojekLogo from "../../../assets/about/gojek.png";
import grabLogo from "../../../assets/about/grab.png";
import maximLogo from "../../../assets/about/maxim.png";
import { NavLink } from "react-router-dom";

import backgroundRumah1 from '../../../assets/background/about/rumah1.png';
import backgroundRumah2 from '../../../assets/background/about/rumah2.png';
import backgroundRumah3 from '../../../assets/background/about/rumah3.png';
import backgroundOndelCewe from '../../../assets/background/about/ondel-cewe.png';
import backgroundOndelLaki from '../../../assets/background/about/ondel-laki.png';
const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantSC: '"Cormorant SC", serif',
};

const TextContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex flex-col items-start gap-8 w-fit transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {/* Header */}
      <div className="textContent flex flex-col gap-2.5">
        <h1
          className="strengthHeader text-[#EAAE8F] font-bold text-6xl leading-[78px]!"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Didukung oleh <span className="text-[#C54300]">Mitra</span>
          <br />
          Terbaik <span className="text-[#C54300]">Kami</span>
        </h1>
        <p
          className="text-4xl text-[#BDBDBD] font-semibold leading-[52px]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Nikmati sajian kami dengan mudah lewat
          <br />
          GoFood, GrabFood, dan ShopeeFood, serta
          <br />
          bayar praktis menggunakan QRIS dan
          <br />
          e-wallet favorit Anda.
        </p>
      </div>
      <NavLink
        to="/produk"
        className={({ isActive }) =>
          `px-10 py-4 text-4xl rounded-full font-bold button-text hover:scale-103 bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
          }`
        }
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat <span className="text-[#C54300]">Selengkapnya</span>
      </NavLink>
    </div>

    {/* Small */}
    <div
      className={`flex lg:hidden flex-col items-center gap-[30px] w-fit transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {/* Header */}
      <div className="textContent flex flex-col gap-2.5 justify-center items-center">
        <h1
          className="strengthHeader text-[#EAAE8F] max-w-[330px] font-bold text-[32px] text-center"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Didukung <span className="text-[#C54300]">oleh</span> Beberapa {" "}
          <span className="text-[#C54300]">Mitra</span> Terbaik <span className="text-[#C54300]">Kami</span>
        </h1>
        <p
          className="text-xl text-[#BDBDBD] font-semibold max-w-[390px] text-center"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Nikmati sajian kami dengan mudah lewat
          GoFood, GrabFood, dan ShopeeFood, serta
          bayar praktis menggunakan QRIS dan
          e-wallet favorit Anda.
        </p>
      </div>
      <ImageContent />
      <NavLink
        to="/produk"
        className={({ isActive }) => `lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold button-text bg-[#2D1F18] text-[#C54300] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
          }`}
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Selengkapnya
      </NavLink>
    </div>
  </>
);

const ImageContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex gap-[15px] h-max duration-1000 ease-out transition-all ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
    >
      {/* Kolom kiri */}
      <div className="relative flex flex-col gap-[15px] items-end">
        <img
          className="absolute opacity-50 -top-35 scale-120 -z-1 -left-15 pointer-events-none select-none"
          src={backgroundOndelCewe}
          alt="Background BabackgroundOndelCewe"
        />
        <img
          className="absolute opacity-50 -top-35 scale-120 -z-1 -right-55 pointer-events-none select-none"
          src={backgroundOndelLaki}
          alt="Background BabackgroundOndelCewe"
        />
        <div className="largePartnerImage rounded-[40px] bg-[#C54300] w-[316px] h-[316px] overflow-hidden">
          <img
            src={qrisLogo}
            alt="qris"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="smallPartnerImage rounded-[40px] bg-[#EAAE8F] w-[150px] h-[150px] overflow-hidden">
          <img
            src={shopeeFoodLogo}
            alt="shopeeFood"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Kolom kanan */}
      <div className="flex flex-col gap-[15px]">
        <div className="smallPartnerImage rounded-[40px] bg-[#EAAE8F] w-[150px] h-[150px] overflow-hidden">
          <img
            src={gojekLogo}
            alt="gojek"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="smallPartnerImage rounded-[40px] bg-[#EAAE8F] w-[150px] h-[150px] overflow-hidden">
          <img
            src={grabLogo}
            alt="grab"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="smallPartnerImage rounded-[40px] bg-[#EAAE8F] w-[150px] h-[150px] overflow-hidden">
          <img
            src={maximLogo}
            alt="maxim"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>

    {/* Small */}
    <div
      className={`flex flex-col items-center lg:hidden gap-[15px] h-max duration-1000 ease-out transition-all`}
    >
      {/* Kolom kiri */}
      <div className="relative flex gap-[15px] items-end">
        <div className="smallPartnerImage rounded-[25px] bg-[#EAAE8F] w-[100px] h-[100px] overflow-hidden">
          <img
            src={gojekLogo}
            alt="gojek"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="smallPartnerImage rounded-[25px] bg-[#C54300] w-[100px] h-[100px] overflow-hidden">
          <img
            src={qrisLogo}
            alt="qris"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="smallPartnerImage rounded-[25px] bg-[#EAAE8F] w-[100px] h-[100px] overflow-hidden">
          <img
            src={grabLogo}
            alt="grab"
            className="object-cover w-full h-full"
          />
        </div>

      </div>

      {/* Kolom kanan */}
      <div className="flex gap-[15px]">
        <div className="smallPartnerImage rounded-[25px] bg-[#EAAE8F] w-[100px] h-[100px] overflow-hidden">
          <img
            src={shopeeFoodLogo}
            alt="shopeeFood"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="smallPartnerImage rounded-[25px] bg-[#EAAE8F] w-[100px] h-[100px] overflow-hidden">
          <img
            src={maximLogo}
            alt="maxim"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </>
);


export const PartnersSection = () => {
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
    <section className="relative h-screen flex gap-20 py-16 px-4 items-center justify-center">
      {/* Background */}
      <img
        className="hidden lg:block absolute opacity-50 top-0 scale-110 left-70 pointer-events-none select-none"
        src={backgroundRumah1}
        alt="Background Rumah 1"
      />
      <img
        className="hidden lg:block absolute opacity-50 bottom-50 scale-110 left-130 pointer-events-none select-none"
        src={backgroundRumah2}
        alt="Background Rumah 2"
      />
      <img
        className="hidden lg:block absolute opacity-50 bottom-0 scale-110 right-50 pointer-events-none select-none"
        src={backgroundRumah3}
        alt="Background Rumah 3"
      />

      <div ref={textRef}>
        <TextContent isVisible={textVisible} />
      </div>
      <div ref={imageRef} className="hidden lg:block">
        <ImageContent isVisible={imageVisible} />
      </div>
    </section>
  );
};