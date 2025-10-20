import React, { useEffect, useState, useRef, useCallback } from "react";
import "./FavoriteSection.css";
import imageSotoBetawi from "../../../assets/home/soto-betawi.png";
import imageNasiLiwet from "../../../assets/home/nasi-liwet.png";
import imageSateLilit from "../../../assets/home/sate-lilit.png";
import imageRendang from "../../../assets/home/rendang.png";
import { MenuCard } from "../../../components/menu/Menu";
import Slider from "react-slick";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

const TextContent = ({ isVisible }) => (
  <div
    className={`textContent flex flex-col gap-2.5 text-center transition-all duration-1000 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
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
      title: "Daging Rendang",
      rating: 4.8,
      description:
        "Rendang khas Minangkabau dengan daging sapi empuk dimasak lama dengan santan dan rempah.",
    },
  ];

  const settings = {
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
    centerPadding: "0px",
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

  return (
    <div
      className={`favorite-section card-wrapper w-[80vw] transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
      }`}
    >
      <Slider {...settings}>
        {menuData.map((menu, index) => (
          <div key={index} className="px-4 my-[40px]">
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
  );
};

export const FavoriteSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const sectionRef = useRef(null);
  const textObserverRef = useRef(null);
  const cardObserverRef = useRef(null);

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

  const handleCardIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !cardVisible) {
        setTimeout(() => {
          setCardVisible(true);
        }, 100);
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
      className="h-[120vh] w-full flex flex-col items-center justify-center"
    >
      <TextContent isVisible={textVisible} />
      <CardContent isVisible={cardVisible} />
    </section>
  );
};