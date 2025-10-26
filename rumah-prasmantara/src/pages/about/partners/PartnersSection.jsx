import React, { useEffect, useState, useRef } from "react";
import "./PartnersSection.css";
import qrisLogo from "../../../assets/about/qris.png";
import shopeeFoodLogo from "../../../assets/about/shopee-food.png";
import gojekLogo from "../../../assets/about/gojek.png";
import grabLogo from "../../../assets/about/grab.png";
import maximLogo from "../../../assets/about/maxim.png";
import { NavLink } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";

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

const TextContent = ({ isVisible, onOpenModal }) => (
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
      <button
        onClick={onOpenModal}
        className="px-10 py-4 text-4xl rounded-full font-bold button-text hover:cursor-pointer hover:scale-103 bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat <span className="text-[#C54300]">Selengkapnya</span>
      </button>
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
      <button
        onClick={onOpenModal}
        className="lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] hover:cursor-pointer mx-auto rounded-full font-bold button-text bg-[#2D1F18] text-[#C54300] transition-all duration-300"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Selengkapnya
      </button>
    </div>
  </>
);

const PartnersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const partners = [
    {
      src: qrisLogo,
      alt: "QRIS",
      url: "https://qris.interactive.co.id/homepage"
    },
    {
      src: shopeeFoodLogo,
      alt: "ShopeeFood",
      url: "https://shopee.co.id/m/shopeefood"
    },
    {
      src: gojekLogo,
      alt: "Gojek",
      url: "https://www.gojek.com/gofood"
    },
    {
      src: grabLogo,
      alt: "Grab",
      url: "https://www.grab.com/id/food"
    },
    {
      src: maximLogo,
      alt: "Maxim",
      url: "https://taximaxim.com/id"
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/20 flex justify-center items-center z-50 backdrop-blur-sm transition-all duration-1000"
      onClick={onClose}
    >
      <div
        className="relative bg-[#3C261A] border border-[#C54300] rounded-3xl p-5 w-[80%] lg:w-[70%] max-h-[80vh] overflow-y-auto transition-all duration-1000"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 text-[#EAAE8F] text-2xl hover:text-[#C54300] transition"
          onClick={onClose}
        >
          <HiOutlineX />
        </button>

        <h2
          className="text-[#EAAE8F] text-6xl font-bold mb-8 text-center"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Mitra <span className="text-[#C54300]">Kami</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-4">
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EAAE8F]/10 hover:bg-[#EAAE8F]/20 transition-all p-6 rounded-2xl border border-[#C54300]/30 w-[120px] h-[120px] flex items-center justify-center hover:scale-105 duration-300"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* Background Large */}
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

      {/* Background Small */}
      <img
        className="block lg:hidden absolute opacity-50 top-0 scale-110 -right-30 pointer-events-none select-none"
        src={backgroundRumah1}
        alt="Background Rumah 1"
      />
      <img
        className="block lg:hidden absolute opacity-50 bottom-0 scale-110 -left-10 pointer-events-none select-none"
        src={backgroundRumah3}
        alt="Background Rumah 3"
      />

      <div ref={textRef}>
        <TextContent isVisible={textVisible} onOpenModal={() => setIsModalOpen(true)} />
      </div>
      <div ref={imageRef} className="hidden lg:block">
        <ImageContent isVisible={imageVisible} />
      </div>

      <PartnersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};