import React, { useEffect, useState, useRef } from "react";
import "./FavoriteSection.css";
import imageSotoBetawi from "../../../assets/home/soto-betawi.png";
import imageNasiLiwet from "../../../assets/home/nasi-liwet.png";
import imageSateLilit from "../../../assets/home/sate-lilit.png";
import imageRendang from "../../../assets/home/rendang.png";
import { MenuCard } from "../../../components/menu/Menu";
import Slider from "react-slick";

import backgroundJempol from '../../../assets/background/produk/jempol.png';
import backgroundStars from '../../../assets/background/produk/stars.png';
const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

const TextContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex textContent flex-col gap-2.5 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
    >
      <h1
        className="hero-paragraph text-[#EAAE8F] font-bold text-6xl leading-[78px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Menu <span className="text-[#C54300]">Andalan</span> Kami
      </h1>
      <p
        className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Sajian favorit dan terlaris yang paling sering diburu pengunjung, cita rasa Nusantara
        <br />
        yang selalu jadi favorit setiap pengunjung.
      </p>
    </div>

    {/* Small */}
    <div
      className={`lg:hidden textContent flex flex-col gap-2.5 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
    >
      <h1
        className="hero-paragraph text-[#EAAE8F] font-bold text-[32px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Menu <span className="text-[#C54300]">Andalan</span> Kami
      </h1>
      <p
        className="text-xl text-[#BDBDBD] font-semibold max-w-[360px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Sajian yang paling sering diburu pengunjung, cita rasa Nusantara
        yang selalu jadi favorit setiap pengunjung.
      </p>
    </div>
  </>
);

const CardContent = ({ isVisible }) => {
  const menuData = [
    {
      image: imageSotoBetawi,
      title: "Soto Betawi",
      rating: 4.8,
      description:
        "Soto khas Betawi dengan kuah santan dan susu yang gurih, berpadu dengan daging sapi empuk.",
    },
    {
      image: imageNasiLiwet,
      title: "Nasi Liwet",
      rating: 4.6,
      description:
        "Nasi gurih dengan bumbu rempah khas Jawa, disajikan bersama ayam dan sayuran segar.",
    },
    {
      image: imageSateLilit,
      title: "Sate Lilit",
      rating: 4.7,
      description:
        "Sate khas Bali dari daging ikan atau ayam yang dibalut dengan bumbu rempah.",
    },
    {
      image: imageRendang,
      title: "Rendang",
      rating: 4.8,
      description:
        "Rendang khas Minangkabau dengan daging sapi empuk dimasak lama dengan santan dan rempah.",
    },
  ];

  const largeSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "3%",
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: () => <div className="custom-dot" />,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30%",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20%",
        },
      },
    ],
  };
  const smallSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "20%",
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: () => <div className="custom-dot" />
  };

  return (
    <>
      {/* Large */}
      <div
        className={`hidden lg:block favorite-section-home card-wrapper w-[80vw] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
      >
        <Slider {...largeSettings}>
          {menuData.map((menu, index) => (
            <div key={index} className="px-4 my-10">
              <MenuCard
                image={menu.image}
                title={menu.title}
                rating={menu.rating}
                description={menu.description}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Small */}
      <div
        className={`block lg:hidden favorite-section-home card-wrapper w-[120vw] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
      >
        <Slider {...smallSettings}>
          {menuData.map((menu, index) => (
            <div key={index} className="px-4 my-10">
              <MenuCard
                image={menu.image}
                title={menu.title}
                rating={menu.rating}
                description={menu.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export const FavoriteSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  // Observer Text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer Card
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCardVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative h-screen lg:h-[120vh] w-full flex flex-col items-center justify-center"
    >
      {/* Background */}
      <img
        className="hidden lg:block absolute opacity-50 z-1 top-20 scale-110 -left-6 pointer-events-none select-none"
        src={backgroundJempol}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-1 top-20 scale-110 -right-6 rotate-y-180 pointer-events-none select-none"
        src={backgroundJempol}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-1 bottom-20 scale-110 -right-6 pointer-events-none select-none"
        src={backgroundStars}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-1 bottom-20 scale-110 -left-6 rotate-y-180 pointer-events-none select-none"
        src={backgroundStars}
        alt="Background BabackgroundRumah4"
      />

      {/* Konten */}
      <div ref={textRef}>
        <TextContent isVisible={textVisible} />
      </div>
      <div ref={cardRef}>
        <CardContent isVisible={cardVisible} />
      </div>
    </section>
  );
};
