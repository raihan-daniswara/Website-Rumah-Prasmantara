import Background from "../../../assets/testimoni/hero.png";
import BackgroundMobile from "../../../assets/testimoni/hero-mobile.png";
import backgroundHeadset from "../../../assets/background/testimoni/headset.png";
import backgroundTask from "../../../assets/background/testimoni/task.png";
import backgroundComment from "../../../assets/background/testimoni/comment.png";
import backgroundThumb from "../../../assets/background/testimoni/thumb.png";
import backgroundInternet from "../../../assets/background/testimoni/internet.png";
import './HeroSection.css';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

// font
const font = {
  greatVibes: '"Great Vibes", cursive',
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif'
};

const HeroText = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex text flex-col items-center gap-[25px] text-center transition-all duration-1000 ease-out ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-10'
        }`}
    >  
      <div className="my-2.5 flex flex-col items-center gap-2.5">
        <h2
          className="hero-header-2 text-[#DBCECE] text-5xl font-medium"
          style={{ fontFamily: font.greatVibes }}
        >
          Testimoni
        </h2>
        <h1
          className="produk-hero-header-1 text-[80px] text-[#EAAE8F] font-bold leading-tight"
          style={{ fontFamily: font.cormorantUpright }}
        >
          <span className="text-[#C54300]">Rumah Prasmantara</span>
          <br />
          Dipercayai oleh pelanggan kami
        </h1>
        <p
          className="hero-paragraph text-4xl font-semibold text-[#BDBDBD] leading-[52px]!"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Nikmati beragam hidangan khas Nusantara dari Sabang hingga Merauke.
          <br />
          Setiap menu kami dibuat dengan resep autentik dan bahan pilihan.
        </p>
      </div>

      <NavLink
        to="#"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("rating-section");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={({ isActive }) =>
          `lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive
            ? "border-[#C54300]"
            : "border-transparent hover:text-[#EAAE8F]"
          }`
        }
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat <span className="text-[#C54300]">Rating</span>
      </NavLink>
    </div>

    {/* Small */}
    <div
      className={`flex lg:hidden text flex-col items-center gap-[25px] text-center transition-all duration-1000 ease-out ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-10'
        }`}
    >
      <div className="my-2.5 flex flex-col items-center">
        <h2
          className="hero-header-2 text-[#DBCECE] text-[24px] font-medium"
          style={{ fontFamily: font.greatVibes }}
        >
          Testimoni
        </h2>
        <div className="flex flex-col items-center gap-2.5">
          <h1
            className="produk-hero-header-1 text-[36px] max-w-[395px] text-[#EAAE8F] font-bold"
            style={{ fontFamily: font.cormorantUpright }}
          >
            <span className="text-[#C54300]">Rumah Prasmantara</span> {" "}
            Dipercaya Pembeli Kami
          </h1>
          <p
            className="hero-paragraph text-xl max-w-[375px] font-semibold text-[#BDBDBD]"
            style={{ fontFamily: font.cormorantGaramond }}
          >
            Nikmati beragam hidangan khas Nusantara dari Sabang hingga Merauke.
            Setiap menu kami dibuat dengan resep autentik dan bahan pilihan.
          </p>
        </div>
      </div>

      <NavLink
        to="#"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("rating-section");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={({ isActive }) =>
          `lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive
            ? "border-[#C54300]"
            : "border-transparent hover:text-[#EAAE8F]"
          }`
        }
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat <span className="text-[#C54300]">Rating</span>
      </NavLink>
    </div>
  </>
);

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col h-screen w-full items-center justify-end overflow-hidden">
      {/* Background Large */}
      <img
        className="hidden lg:block absolute opacity-50 bottom-20 right-[20%]"
        src={backgroundHeadset}
        alt="Background Headset"
      />
      <img
        className="hidden lg:block absolute opacity-50 bottom-10 right-1/2 scale-70 transform translate-x-1/2"
        src={backgroundTask}
        alt="Background Task"
      />
      <img
        className="hidden lg:block absolute opacity-50 bottom-20 left-[20%]"
        src={backgroundComment}
        alt="Background Comment"
      />

      {/* Background Small */}
      <img
        className="block lg:hidden absolute opacity-50 bottom-40 scale-60 -right-3"
        src={backgroundHeadset}
        alt="Background Headset"
      />
      <img
        className="block lg:hidden absolute opacity-50 bottom-25 right-1/2 scale-50 -rotate-2 transform translate-x-1/2"
        src={backgroundTask}
        alt="Background Task"
      />
      <img
        className="block lg:hidden absolute opacity-50 bottom-10 scale-50 -rotate-10 -left-8"
        src={backgroundComment}
        alt="Background Comment"
      />
      <img
        className="block lg:hidden absolute opacity-50 bottom-15 -right-3"
        src={backgroundThumb}
        alt="Background Thumb"
      />
      <img
        className="block lg:hidden absolute opacity-50 bottom-50 -left-5"
        src={backgroundInternet}
        alt="Background Internet"
      />

      {/* Background image */}
      <img
        src={Background}
        className="hidden lg:block absolute inset-0 object-cover w-full opacity-15 z-0"
        alt="Gambar Makanan Tradisional"
      />
      <img
        src={BackgroundMobile}
        className="block lg:hidden absolute inset-0 object-cover w-full opacity-15 z-0"
        alt="Gambar Makanan Tradisional"
      />

      {/* <img
        className="hidden lg:block absolute opacity-50 top-90 scale-110 left-[40%]"
        src={backgroundPiring}
        alt="Background Piring"
      />
      <img
        className="hidden lg:block absolute opacity-50 top-180 scale-110 left-0"
        src={backgroundMenyajikan}
        alt="Background Menyajikan"
      /> */}

      <div className="flex gap-10 items-center justify-center absolute top-1/2 -translate-y-1/2 z-10">
        <HeroText isVisible={isVisible} />
      </div>
    </section>
  );
};
