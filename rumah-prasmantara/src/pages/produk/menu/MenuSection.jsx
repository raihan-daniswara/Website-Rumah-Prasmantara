import "./MenuSection.css";
import imageSotoBetawi from "../../../assets/home/soto-betawi.png";
import imageNasiLiwet from "../../../assets/home/nasi-liwet.png";
import imageSateLilit from "../../../assets/home/sate-lilit.png";
import imageRendang from "../../../assets/home/rendang.png";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

const HeaderContent = () => (
  <div className="header-content flex flex-col gap-2.5 text-center">
    <h1
      className="hero-paragraph text-[#EAAE8F] font-bold text-6xl leading-[78px]"
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

const TextMainDishContent = () => (
  <div
    className={`flex flex-col items-center gap-8 w-fit transition-all duration-1000 ease-out`}
  >
    {/* Header */}
    <div className="text-main-dish-content flex flex-col gap-2.5">
      <h1
        className="strengthHeader text-[#EAAE8F] font-bold text-6xl leading-[78px]!"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Aneka <span className="text-[#C54300]">Hidangan Utama</span>
      </h1>
      <p
        className="text-4xl text-[#BDBDBD] text-center font-semibold leading-[52px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Makanan utama pilihan khas nusantara
        <br />
        yang gurih dan mengenyangkan, berupa
        <br />
        lauk, sayur, nasi, dan lain-lain.
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

// const ImageContent = ({ isVisible }) => (
//   <div
//     className={`flex gap-[15px] h-max duration-[1000ms] ease-out transition-all ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
//       }`}
//   >
//     {/* Kolom kiri */}
//     <div className="flex flex-col gap-[15px] items-end">
//       <div className="largePartnerImage rounded-[40px] bg-[#C54300] w-[316px] h-[316px] overflow-hidden">
//         <img
//           src={qrisLogo}
//           alt="qris"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       <div className="smallPartnerImage rounded-[40px] bg-[#EAAE8F] w-[150px] h-[150px] overflow-hidden">
//         <img
//           src={shopeeFoodLogo}
//           alt="shopeeFood"
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>

//     {/* Kolom kanan */}
//     <div className="flex flex-col gap-[15px]">
//       <div className="smallPartnerImage rounded-[40px] bg-[#EAAE8F] w-[150px] h-[150px] overflow-hidden">
//         <img
//           src={gojekLogo}
//           alt="gojek"
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="smallPartnerImage rounded-[40px] bg-[#EAAE8F] w-[150px] h-[150px] overflow-hidden">
//         <img
//           src={grabLogo}
//           alt="grab"
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="smallPartnerImage rounded-[40px] bg-[#EAAE8F] w-[150px] h-[150px] overflow-hidden">
//         <img
//           src={maximLogo}
//           alt="maxim"
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   </div>
// );


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
      className="h-[200vh] flex flex-col gap-20 items-center justify-center"
    >
      <HeaderContent />
      <TextMainDishContent/>
      <TextMainDishContent/>
      <TextMainDishContent/>
    </section>
  );
};