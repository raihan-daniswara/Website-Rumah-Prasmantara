import "./MenuSection.css";
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

import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuCard } from "../../../components/menu/Menu";
import Slider from "react-slick";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

const HeaderContent = () => (
  <div className="header-content flex flex-col gap-2.5 text-center">
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
);

const TextMainContent = ({ title, paragraph }) => (
  <div
    className={`w-[70vh] flex flex-col items-center gap-8 transition-all duration-1000 ease-out`}
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
      className={`px-10 py-4 text-4xl rounded-full font-bold button-text hover:scale-103 bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300`}
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Lihat <span className="text-[#C54300]">Selengkapnya</span>
    </NavLink>
  </div>
);

const CardContent = ({ type }) => {
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
          title: "Coto Makassar",
          rating: 4.3,
          description:
            "Coto Makassar khas Sulawesi Selatan dengan kuah kental rempah dan daging sapi lembut.",
        },
        {
          image: imageBaksoMalang,
          title: "Bakso Malang",
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
          title: "Daging Rendang",
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
          title: "Dadar Gulung",
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
          title: "Aneka Gorengan",
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
    slidesToShow: 1.25,
    arrows: false,
    swipeToSlide: true,
  };

  
  return (
    <div
      className={`menu-section w-[30vw] transition-all duration-1000 ease-out`}
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
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const sectionRef = useRef(null);
  const textObserverRef = useRef(null);
  const imageObserverRef = useRef(null);

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

  const handleImageIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !imageVisible) {
        setTimeout(() => {
          setImageVisible(true);
        }, 100);
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
      className="h-fit py-20 flex flex-col gap-20 items-center"
    >
      <HeaderContent />
      <div className="w-full main-menu flex gap-20 justify-center items-center">
        <TextMainContent title="Hidangan Utama" paragraph="Makanan utama pilihan khas nusantara yang gurih dan mengenyangkan, berupa lauk, sayur, nasi, dan lain-lain." />
        <CardContent isVisible={imageVisible} type="main" />
      </div>
      <div className="main-menu flex gap-20 items-center">
        <CardContent isVisible={imageVisible} type="snack" />
        <TextMainContent title="Makanan Ringan" paragraph="Makanan ringan pilihan khas nusantara yang renyah dan lezat, cocok sebagai teman santai, tersedia dalam berbagai rasa gurih hingga manis." />
      </div>
      <div className="main-menu flex gap-20 items-center">
        <TextMainContent title="Minuman Segar" paragraph="Minuman segar khas nusantara yang manis dan menyegarkan, hadir dengan berbagai pilihan rasa alami untuk melepas dahaga kapan saja." />
        <CardContent isVisible={imageVisible} type="drink" />
      </div>
    </section>
  );
};
