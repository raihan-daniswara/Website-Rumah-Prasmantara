import React, { useEffect, useState, useRef, useCallback } from "react";
import "./SpesialSection.css";
import imageKapurung from "../../../assets/produk/spesial/kapurung.png";
import imagePieSusuBali from "../../../assets/produk/spesial/pie-susu-bali.png";

import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SpecialMenuCard } from "../../../components/menu/SpecialMenu";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

// 🔸 Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-20 top-1/2 -translate-y-1/2 hover:bg-[#2D1F18] hover:cursor-pointer hover:border-[#2D1F18] border-[5px] border-[#EAAE8F]/45 hover:text-[#C54300] text-[#EAAE8F]/60 p-3  rounded-full transition-all duration-300 z-10"
  >
    <FaArrowLeft className="text-4xl" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-20 top-1/2 -translate-y-1/2 hover:bg-[#2D1F18] hover:cursor-pointer hover:border-[#2D1F18] border-[5px] border-[#EAAE8F]/45 hover:text-[#C54300] text-[#EAAE8F]/60 p-3  rounded-full transition-all duration-300 z-10"
  >
    <FaArrowRight className="text-4xl" />
  </button>
);

const TextContent = ({ isVisible }) => (
  <div
    className={`textContent flex flex-col gap-2.5 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
  >
    <h1
      className="hero-paragraph text-[#EAAE8F] font-bold text-6xl leading-[78px]"
      style={{ fontFamily: font.cormorantUpright }}
    >
      Menu <span className="text-[#C54300]">Spesial</span> Kami
    </h1>
    <p
      className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Sajian istimewa yang diracik dengan penuh dedikasi, menghadirkan paduan rasa
      <br />
      autentik khas Nusantara dan hanya hadir di hari spesial saja.
    </p>
  </div>
);

const CardContent = () => {
  const SpecialData = [
    {
      name: "Kapurung",
      image: imageKapurung,
      rating: 4.5,
      description:
        "Kapurung khas Sulawesi Selatan berbahan sagu dengan kuah sayuran segar dan cita rasa asam gurih.",
      price: 25000,
      day: "Senin",
    },
    // {
    //   name: "Coto Makassar",
    //   image: imageCotoMakassar,
    //   rating: 4.6,
    //   description:
    //     "Coto Makassar yang gurih dengan kuah kacang dan potongan daging sapi lembut.",
    //   price: 30000,
    //   day: "Jumat",
    // },
    {
      name: "Pie Susu Bali",
      image: imagePieSusuBali,
      rating: 4.2,
      description:
        "Pie khas Bali dengan kulit tipis renyah berpadu dengan isian susu manis lembut yang lumer di mulut.",
      price: 5000,
      day: "Rabu",
    },
  ];
  return (
    <div className="flex flex-col gap-12 items-center mt-10">
      {SpecialData.map((item, index) => (
        <SpecialMenuCard key={index} {...item} />
      ))}
    </div>
  );
}
const CategorySlider = () => {
  const categories = ["Semua", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Lebaran"];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1441,
        settings: { slidesToShow: 5, slidesToScroll: 5 },
      },
    ],
  };

  return (
    <div className="special-section w-[80vw] px-10 mt-10 relative">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="px-2">
            <div
              className="hover:bg-[#2D1F18] hover:border-[#2D1F18] hover:text-[#C54300] border-[5px] border-[#EAAE8F]/45 text-[#EAAE8F]/60 text-4xl font-bold rounded-full leading-6 py-5 text-center transition-all duration-300 hover:cursor-pointer"
              style={{ fontFamily: font.cormorantUpright }}
            >
              {category}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export const SpecialSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const sectionRef = useRef(null);
  const textObserverRef = useRef(null);
  const cardObserverRef = useRef(null);

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

  const handleCardIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !cardVisible) {
        setTimeout(() => setCardVisible(true), 100);
        cardObserverRef.current?.unobserve(entry.target);
      }
    },
    [cardVisible]
  );

  useEffect(() => {
    textObserverRef.current = new IntersectionObserver(handleTextIntersection, {
      threshold: 0.3,
    });
    cardObserverRef.current = new IntersectionObserver(handleCardIntersection, {
      threshold: 0.3,
    });

    if (sectionRef.current) {
      textObserverRef.current.observe(sectionRef.current);
      cardObserverRef.current.observe(sectionRef.current);
    }

    return () => {
      textObserverRef.current?.disconnect();
      cardObserverRef.current?.disconnect();
    };
  }, [handleTextIntersection, handleCardIntersection]);

  return (
    <section
      ref={sectionRef}
      className="pb-40 pt-20 w-full h-[100vh] overflow-hidden flex flex-col items-center relative"
    >
      <TextContent isVisible={textVisible} />
      <CategorySlider />
      <CardContent />
    </section>
  );
};
