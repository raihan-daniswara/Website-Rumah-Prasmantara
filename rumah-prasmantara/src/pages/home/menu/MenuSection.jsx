import React from "react";
import "./StrengthSection.css";
import chef from "../../../assets/home/chef.png";
import iconVariasi from "../../../assets/home/icon-variasi.png";
import iconKonsep from "../../../assets/home/icon-konsep.png";
import iconPesan from "../../../assets/home/icon-pesan.png";
import { NavLink } from "react-router-dom";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif'
};

const cardData = [
  {
    icon: iconVariasi,
    title: "Variasi Masakan",
    highlight: "Nusantara",
    width: "128px"
  },
  {
    icon: iconKonsep,
    title: "Konsep Unik",
    highlight: "Prasmanan",
    width: "92px"
  },
  {
    icon: iconPesan,
    title: "Dapat Pesan",
    highlight: "Melalui Online",
    width: "128px"
  }
];

const StrengthCard = ({ icon, title, highlight, width }) => (
  <div className="card px-6 py-5 w-[205px] rounded-4xl bg-[#2D1F18] flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
    <img src={icon} alt={title} className={`w-${width} h-auto`} />
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

const TextContent = () => (
  <div className="flex flex-col items-center gap-8 w-fit">
    {/* Header */}
    <div className="textContent flex flex-col gap-2.5">
      <h1
        className="hero-paragraph text-[#EAAE8F] font-bold text-6xl leading-[78px]! "
        style={{ fontFamily: font.cormorantUpright }}
      >
        Mengapa <span className="text-[#C54300]">Harus</span> Memilih
        <br />
        <span className="text-[#C54300]">Rumah Prasmantara</span>?
      </h1>
      <p
        className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Beberapa pengalaman kuliner Nusantara yang
        <br />
        unik dibandingkan dengan tempat lain.
      </p>
    </div>

    {/* Cards */}
    <div className="card-wrapper flex flex-wrap gap-5 justify-center">
      {cardData.map((card, index) => (
        <StrengthCard
          key={index}
          icon={card.icon}
          title={card.title}
          highlight={card.highlight}
        />
      ))}
    </div>
        <NavLink
          to="/tentang"
          className={({ isActive }) => `px-10 py-4 text-4xl rounded-full font-bold button-text hover:scale-103 bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
            }`}
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Tentang <span className='text-[#C54300]'>Kami</span>
        </NavLink>
  </div>
);

const ImageContent = () => (
  <div className="chef-border relative w-[500px] h-[500px] bg-[#C54300] rounded-full overflow-visible flex items-center justify-center hover:cursor-pointer hover:scale-105 duration-[300ms] ease-out transition-all">
    {/* Div kedua di tengah */}
    <div className="absolute inset-0 flex items-center justify-center rounded-full">
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        <img
          src={chef}
          alt="Chef"
          className="w-full h-[600px] object-cover"
          style={{
            transform: "translateY(-49px)",
            clipPath: "inset(0 0 0 round 250px)",
            maskImage:
              "linear-gradient(to bottom, transparent -10%, black 15%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent -10%, black 15%, black 100%)",
          }}
        />
      </div>
    </div>
  </div>
);

export const StrengthSection = () => {
  return (
    <section className="flex gap-20 py-16 px-4 items-center justify-center">
      <ImageContent />
      <TextContent />
    </section>
  );
};