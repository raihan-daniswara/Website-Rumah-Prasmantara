import "./MenuSection.css";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuCard } from "../../../components/menu/Menu";
import Slider from "react-slick";

import imageSotoBetawi from "../../../assets/home/soto-betawi.png";
import imageCotoMakassar from "../../../assets/home/coto-makassar.png";
import imageBaksoMalang from "../../../assets/home/bakso-malang.png";
import imageNasiLiwet from "../../../assets/home/nasi-liwet.png";
import imageSateLilit from "../../../assets/home/sate-lilit.png";
import imageRendang from "../../../assets/home/rendang.png";

import imageDadarGulung from "../../../assets/home/dadar-gulung.png";
import imagePempek from "../../../assets/home/pempek.png";
import imageKlepon from "../../../assets/home/klepon.png";
import imageAnekaGorengan from "../../../assets/home/aneka-gorengan.png";

import imageEsDawet from "../../../assets/home/es-dawet.png";
import imageBirPletok from "../../../assets/home/bir-pletok.png";
import imageBajigur from "../../../assets/home/bajigur.png";
import imageTehTarik from "../../../assets/home/teh-tarik.png";

// background
import backgroundMasak from '../../../assets/background/produk/masak.png';
import backgroundPiring from '../../../assets/background/produk/piring.png';
import backgroundMenyajikan from '../../../assets/background/produk/menyajikan.png';
import backgroundKukusan from '../../../assets/background/produk/kukusan.png';
import backgroundSup from '../../../assets/background/produk/sup.png';
import backgroundWajan from '../../../assets/background/produk/wajan.png';
import backgroundTeko from '../../../assets/background/produk/teko.png';
import backgroundMinuman from '../../../assets/background/produk/minuman.png';

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

const HeaderContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex header-content flex-col gap-2.5 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
    >
      <h1
        className="hero-paragraph text-center text-[#EAAE8F] font-bold text-6xl leading-[78px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Menu Berdasarkan <span className="text-[#C54300]">Kategori</span>
      </h1>
      <p
        className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Jelajahi dan temukan aneka ragam sajian Nusantara berdasarkan kategorinya,
        <br />
        mulai dari makanan utama, makanan ringan, dan minuman.
      </p>
    </div>
  </>
);

const TextMainContent = ({ title, paragraph, paragraphMobile, mobileType, isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex w-[70vh] flex-col items-center gap-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="text-main-content flex flex-col gap-2.5">
        <h1
          className="strengthHeader text-[#EAAE8F] text-center font-bold text-6xl leading-[78px]! whitespace-nowrap"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Aneka <span className="text-[#C54300]">{title}</span>
        </h1>
        <p
          className="text-4xl text-[#BDBDBD] text-center font-semibold leading-[52px]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          {paragraph}
        </p>
      </div>
      <NavLink
        to="/produk"
        className="px-10 py-4 text-4xl rounded-full font-bold button-text hover:scale-103 bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat <span className="text-[#C54300]">Selengkapnya</span>
      </NavLink>
    </div>

    {/* Small */}
    <div
      className={` flex lg:hidden w-[100vh] flex-col items-center gap-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="text-main-content flex flex-col gap-2.5">
        <h1
          className="strengthHeader text-[#EAAE8F] text-center font-bold text-[32px] whitespace-nowrap"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Aneka <span className="text-[#C54300]">{title}</span>
        </h1>
        <p
          className="text-xl text-[#BDBDBD] text-center font-semibold max-w-[320px]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          {paragraphMobile}
        </p>
      </div>
      <CardContent type={mobileType} isVisible={isVisible} />
    </div>
  </>
);

const CardContent = ({ type, isVisible }) => {
  const menuData = [
    {
      type: "main",
      items: [
        {
          image: imageNasiLiwet,
          title: "Nasi Liwet",
          rating: 4.6,
          description:
            "Nasi gurih dengan bumbu rempah khas Jawa, disajikan bersama ayam dan sayuran segar.",
        },
        {
          image: imageSotoBetawi,
          title: "Soto Betawi",
          rating: 4.8,
          description:
            "Soto khas Betawi dengan kuah santan dan susu yang gurih, berpadu dengan daging sapi empuk.",
        },
        {
          image: imageCotoMakassar,
          title: "Coto",
          rating: 4.3,
          description:
            "Coto Makassar khas Sulawesi Selatan dengan kuah kental rempah dan daging sapi lembut.",
        },
        {
          image: imageBaksoMalang,
          title: "Bakso",
          rating: 4.4,
          description:
            "Bakso Malang khas Malang dengan kuah gurih, bakso kenyal, dan pelengkap yang beragam.",
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
      ],
    },
    {
      type: "snack",
      items: [
        {
          image: imageDadarGulung,
          title: "Darlung",
          rating: 4.1,
          description:
            "Dadar gulung khas Jawa, berisi parutan kelapa manis yang dimasak dengan gula merah harum.",
        },
        {
          image: imagePempek,
          title: "Pempek",
          rating: 4.6,
          description:
            "Pempek khas Palembang dengan tekstur kenyal gurih, yang disajikan dengan cuko asam manis pedas.",
        },
        {
          image: imageKlepon,
          title: "Klepon",
          rating: 4.5,
          description:
            "Klepon kenyal khas Jawa berisi gula merah cair dengan taburan kelapa parut wangi.",
        },
        {
          image: imageAnekaGorengan,
          title: "Gorengan",
          rating: 4.7,
          description:
            "Bakso Malang khas Malang dengan kuah gurih, bakso kenyal, dan pelengkap yang beragam.",
        },
      ],
    },
    {
      type: "drink",
      items: [
        {
          image: imageEsDawet,
          title: "Es Dawet",
          rating: 4.8,
          description:
            "Es dawet khas Jawa Tengah segar dengan cendol kenyal, santan gurih, dan gula merah manis.",
        },
        {
          image: imageBirPletok,
          title: "Bir Pletok",
          rating: 4.3,
          description:
            "Bir pletok segar khas Betawi beraroma jahe dan rempah pilihan tanpa alkohol.",
        },
        {
          image: imageBajigur,
          title: "Bajigur",
          rating: 4.6,
          description:
            "Bajigur berasal dari Jawa Barat berbahan santan, gula aren, dan rempah yang menenangkan.",
        },
        {
          image: imageTehTarik,
          title: "Teh Tarik",
          rating: 4.4,
          description:
            "Teh tarik berasal dari Aceh dengan buih lembut dan rasa manis yang khas dan segar.",
        },
      ],
    },
  ];

  const menuType = menuData.find((menu) => menu.type === type);

  const settings = {
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 1.4,
    arrows: false,
    swipeToSlide: true,
  };


  return (
    <div
      className={`menu-section lg:w-[30vw] w-[80vw] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-x-10"}`}
    >
      <Slider {...settings}>
        {menuType?.items.map((menu, index) => (
          <div key={index}>
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

export const MenuSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [text1Visible, setText1Visible] = useState(false);
  const [card1Visible, setCard1Visible] = useState(false);
  const [text2Visible, setText2Visible] = useState(false);
  const [card2Visible, setCard2Visible] = useState(false);
  const [text3Visible, setText3Visible] = useState(false);
  const [card3Visible, setCard3Visible] = useState(false);
  const headerRef = useRef(null);
  const text1Ref = useRef(null);
  const card1Ref = useRef(null);
  const text2Ref = useRef(null);
  const card2Ref = useRef(null);
  const text3Ref = useRef(null);
  const card3Ref = useRef(null);

  // Observer Header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer Text1
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setText1Visible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (text1Ref.current) observer.observe(text1Ref.current);
    return () => observer.disconnect();
  }, []);

  // Observer Card1
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCard1Visible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (card1Ref.current) observer.observe(card1Ref.current);
    return () => observer.disconnect();
  }, []);

  // Observer Text2
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setText2Visible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (text2Ref.current) observer.observe(text2Ref.current);
    return () => observer.disconnect();
  }, []);

  // Observer Card2
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCard2Visible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (card2Ref.current) observer.observe(card2Ref.current);
    return () => observer.disconnect();
  }, []);

  // Observer Text3
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setText3Visible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (text3Ref.current) observer.observe(text3Ref.current);
    return () => observer.disconnect();
  }, []);

  // Observer Card3
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCard3Visible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (card3Ref.current) observer.observe(card3Ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-fit py-20 flex flex-col gap-20 items-center">
      {/* Background */}
      <img
        className="hidden lg:block absolute opacity-50 z-1 top-50 scale-120 left-0 pointer-events-none select-none"
        src={backgroundMasak}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-1 top-90 scale-110 left-[40%] pointer-events-none select-none"
        src={backgroundPiring}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-1 top-180 scale-110 left-0 pointer-events-none select-none"
        src={backgroundMenyajikan}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-0 top-220 scale-110 left-[75%] pointer-events-none select-none"
        src={backgroundKukusan}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-0 top-30 scale-110 left-[85%] pointer-events-none select-none"
        src={backgroundSup}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-0 bottom-100 scale-110 left-[82%] pointer-events-none select-none"
        src={backgroundWajan}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-0 bottom-230 scale-110 left-[45%] pointer-events-none select-none"
        src={backgroundTeko}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-0 bottom-100 scale-110 -left-30 pointer-events-none select-none"
        src={backgroundMinuman}
        alt="Background BabackgroundRumah4"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-0 bottom-10 scale-60 -rotate-30 left-170 pointer-events-none select-none"
        src={backgroundMinuman}
        alt="Background BabackgroundRumah4"
      />
      <div ref={headerRef}>
        <HeaderContent isVisible={headerVisible} />
      </div>

      <div className="w-full main-menu flex gap-20 justify-center items-center">
        <div ref={text1Ref}>
          <TextMainContent
            title="Hidangan Utama"
            paragraph="Makanan utama pilihan khas nusantara yang gurih dan mengenyangkan, berupa lauk, sayur, nasi, dan lain-lain."
            paragraphMobile="Makanan utama pilihan khas nusantara yang gurih dan mengenyangkan."
            mobileType="main"
            isVisible={text1Visible}
          />
        </div>
        <div ref={card1Ref} className="hidden lg:block">
          <CardContent type="main" isVisible={card1Visible} />
        </div>
      </div>

      <div className="main-menu flex gap-20 items-center">
        <div ref={card2Ref} className="hidden lg:block">
          <CardContent type="snack" isVisible={card2Visible} />
        </div>
        <div ref={text2Ref} >
          <TextMainContent
            title="Makanan Ringan"
            paragraph="Makanan ringan pilihan khas nusantara yang renyah dan lezat, cocok sebagai teman santai, tersedia dalam berbagai rasa gurih hingga manis."
            paragraphMobile="Makanan ringan pilihan khas nusantara yang cocok sebagai teman santai"
            mobileType="snack"
            isVisible={text2Visible}
          />
        </div>
      </div>

      <div className="main-menu flex gap-20 items-center">
        <div ref={text3Ref}>
          <TextMainContent
            title="Minuman Segar"
            paragraph="Minuman segar khas nusantara yang manis dan menyegarkan, hadir dengan berbagai pilihan rasa alami untuk melepas dahaga kapan saja."
            paragraphMobile="Minuman segar khas nusantara yang manis dan menyegarkan"
            mobileType="drink"
            isVisible={text3Visible}
          />
        </div>
        <div ref={card3Ref} className="hidden lg:block">
          <CardContent type="drink" isVisible={card3Visible} />
        </div>
      </div>
    </section>
  );
};