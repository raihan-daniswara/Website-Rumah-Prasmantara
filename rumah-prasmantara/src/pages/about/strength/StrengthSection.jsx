import { useEffect, useState, useRef } from "react";
import "./StrengthSection.css";
import MasakanNusantara1 from "../../../assets/about/masakan-nusantara1.png";
import MasakanNusantara2 from "../../../assets/about/masakan-nusantara2.png";
import MakananGIF from "../../../assets/about/makanan.gif";
import { NavLink } from "react-router-dom";

import backgroundWayang from '../../../assets/background/about/wayang.png';

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
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex flex-col items-center gap-8 w-fit transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
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

    {/* Small */}
    <div
      className={`flex lg:hidden flex-col items-center gap-8 w-fit transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
    >
      {/* Header */}
      <div className="textContent flex flex-col items-center gap-2.5">
        <h1
          className="strengthHeader text-[#EAAE8F] max-w-[300px] text-center font-bold text-[32px]"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Semua Rasa <span className="text-[#C54300]">Nusantara</span>{' '}
          Hadir di <span className="text-[#C54300]">Satu Tempat</span>
        </h1>
        <p
          className="text-xl text-[#BDBDBD] font-semibold text-center max-w-[370px]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Kami percaya, kelezatan masakan Nusantara
          tak hanya memanjakan lidah, tetapi juga
          menghadirkan kehangatan yang kami sajikan
          dalam satu pengalaman prasmanan.
        </p>
      </div>

      <ImageContent />
      <NavLink
        to="/produk"
        className={({ isActive }) => `lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
          }`}
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat <span className='text-[#C54300]'>Menu</span>
      </NavLink>
    </div>
  </>
);
const ImageContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex gap-5 h-[630px] duration-1000 ease-out transition-all ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
    >
      <div className="flex flex-col gap-5 justify-end items-end">
        <img
          src={MasakanNusantara1}
          alt="Masakan Nusantara 1"
          className="strengthImage rounded-tr-[50px] rounded-tl-[300px] rounded-br-[50px] rounded-bl-[50px] object-cover w-[300px] h-60"
        />
        <img
          src={MasakanNusantara2}
          alt="Masakan Nusantara 2"
          className="strengthImage rounded-t-[100px] rounded-b-[300px] object-cover w-60 h-[340px]"
        />
      </div>
      <div className="strengthImage rounded-l-[50px] rounded-r-[220px] overflow-hidden w-[300px] h-[600px]">
        <img
          src={MakananGIF}
          alt="Masakan Animasi"
          className="strengthImage object-cover w-full h-full"
        />
      </div>
    </div>

    {/* Small */}
    <div
      className={`flex lg:hidden gap-[15px] h-[346px] duration-1000 ease-out items-center transition-all `}
    >
      <div className="flex flex-col gap-[15px] justify-end items-end">
        <div
          className="relative flex flex-col justify-center items-center text-center rounded-tr-[20px] rounded-tl-[200px] rounded-br-[20px] rounded-bl-[20px] w-[155px] h-[150px] overflow-hidden"
          style={{
            backgroundImage: `url(${MasakanNusantara1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="absolute inset-0 bg-radial from-[#C54300]/30 to-[#C54300]/0 z-0" />

          {/* Content */}
          <div className="relative z-10 ml-5">
            <p
              className="cardValue text-[48px] text-[#C54300] font-bold"
              style={{ fontFamily: font.cormorantSC }}
            >
              20+
            </p>
            <p
              className="text-lg text-[#EAAE8F] font-bold leading-tight"
              style={{ fontFamily: font.cormorantGaramond }}
            >
              Makanan
              <br />
              <span className="text-[#C54300]">Utama</span>
            </p>
          </div>
        </div>

        <div
          className="relative rounded-t-[20px] rounded-b-[200px] w-[125px] h-[180px] overflow-hidden"
          style={{
            backgroundImage: `url(${MasakanNusantara2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="absolute inset-0 bg-radial from-[#C54300]/30 to-[#C54300]/0 z-0" />

          {/* Content */}
          <div className="relative z-10 mt-4">
            <p
              className="cardValue text-[48px] text-[#C54300] font-bold text-center"
              style={{ fontFamily: font.cormorantSC }}
            >
              10+
            </p>
            <p
              className="text-lg text-[#EAAE8F] font-bold text-center "
              style={{ fontFamily: font.cormorantGaramond }}
            >
              Minuman
              <br />
              <span className="text-[#C54300]">Segar</span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative rounded-l-[50px] rounded-r-[220px] overflow-hidden w-[155px] h-[330px]"
        style={{
          backgroundImage: `url(${MakananGIF})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-radial from-[#C54300]/30 to-[#C54300]/0 z-0" />

        {/* Content */}
        <div className="relative z-10 mt-25">
          <p
            className="cardValue text-[48px] text-[#C54300] font-bold text-center"
            style={{ fontFamily: font.cormorantSC }}
          >
            15+
          </p>
          <p
            className="text-lg text-[#EAAE8F] font-bold text-center "
            style={{ fontFamily: font.cormorantGaramond }}
          >
            Makanan
            <br />
            <span className="text-[#C54300]">Ringan</span>
          </p>
        </div>
      </div>
    </div>
  </>
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
    <section
      className="h-screen relative flex flex-col lg:flex-row gap-20 py-16 px-4 items-center justify-center"
    >
      {/* Background Large */}
      <img
        className="hidden lg:block absolute opacity-50 bottom-40 scale-120 -left-20 pointer-events-none select-none"
        src={backgroundWayang}
        alt="Background Wayang Kiri"
      />
      <img
        className="hidden lg:block absolute opacity-50 top-40 scale-120 -right-20 rotate-y-180 pointer-events-none select-none"
        src={backgroundWayang}
        alt="Background Wayang Kanan"
      />

      {/* Background Small */}
      <img
        className="block lg:hidden absolute opacity-50 bottom-10 scale-50 -left-30 pointer-events-none select-none"
        src={backgroundWayang}
        alt="Background Wayang Kiri"
      />
      <img
        className="block lg:hidden absolute opacity-50 top-40 scale-50 -right-30 rotate-y-180 pointer-events-none select-none"
        src={backgroundWayang}
        alt="Background Wayang Kanan"
      />

      <div ref={imageRef} className="hidden lg:block">
        <ImageContent isVisible={imageVisible} />
      </div>
      <div ref={textRef}>
        <TextContent isVisible={textVisible} />
      </div>
    </section>
  );
};