import "./CommentSection.css";
import ImageNayataDewi from "../../../assets/home/nayata-dewi.png";
import ImageDedeKurniawan from "../../../assets/home/dede-kurniawan.png";
import ImageLaodeSilalahiIsmail from "../../../assets/home/laode-silalahi-ismail.png";
import ImageNoorBetty from "../../../assets/home/noor-betty.png";
import ImageAntoSubianto from "../../../assets/home/anto-subianto.png";
import ImageDeniIrawan from "../../../assets/home/deni-irawan.png";
import ImageRosmanHarianto from "../../../assets/home/rosman-haryanto.png";
import { NavLink } from "react-router-dom";
import { CommentCard } from "../../../components/comment/Comment";

import BackgroundCommentBatik from "../../../assets/background/comment-batik.png"
import BackgroundLemonSlice from "../../../assets/background/lemon-slice.png"
import BackgroundOnion from "../../../assets/background/onion.png"
import { useEffect, useRef, useState } from "react";
// Font
const font = {
  greatVibes: '"Great Vibes", cursive',
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
};

const TextContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div className={`hidden textContent lg:flex flex-col gap-2.5 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
      <h1
        className="hero-paragraph text-[#EAAE8F] font-bold text-6xl leading-[78px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Disukai Pecinta <span className="text-[#C54300]">Kuliner</span> di
        <span className="text-[#C54300]"> Seluruh Nusantara</span>
      </h1>
      <p
        className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat apa yang mereka katakan tentang pengalaman makan di Rumah Prasmantara.
        <br />
        Bukan hanya soal rasa, tapi juga kenangan yang tercipta di setiap suapan.
      </p>
    </div>

    {/* Small */}
    <div className={`flex textContent lg:hidden flex-col gap-[5px] text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <h1
        className="hero-paragraph text-[#EAAE8F] font-bold text-[32px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Disukai Pecinta <span className="text-[#C54300]">Kuliner</span> di
        <span className="text-[#C54300]"> Seluruh Nusantara</span>
      </h1>
      <p
        className="text-xl text-[#BDBDBD] font-semibold"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat apa yang mereka katakan tentang pengalaman makan di Rumah Prasmantara.
      </p>
    </div>
  </>
);

const CardContent = ({ isVisible }) => {
  const commentData = [
    {
      image: ImageNayataDewi,
      name: "Nayata Dewi",
      rating: 5,
      comment: "Makanan terasa sehat karena tidak terlalu asin, tidak terlalu gurih, dan tidak terlalu manis.",
      date: "Aug 10, 2025",
    },
    {
      image: ImageDedeKurniawan,
      name: "Dede Kurniawan",
      rating: 4,
      comment: "Salah satu rumah makan penghilang rasa rindu masakan rumah. Penyajiannya pun prasmanan. Jd kita bisa leluasa ambil.",
      date: "Sep 15, 2025",
    },
    {
      image: ImageLaodeSilalahiIsmail,
      name: "Laode Silalahi Ismail",
      rating: 5,
      comment: "Banyak pilihan menu lauknya, makanannya enak semua, pelayanan nya juga ramah.",
      date: "Oct 05, 2025",
    },
    {
      image: ImageNoorBetty,
      name: "Noor Betty",
      rating: 4,
      comment: "Makanan nya beraneka ragam alias komplit dan rasa masakan nya pun ok banget.",
      date: "Oct 12, 2025",
    },
    {
      image: ImageAntoSubianto,
      name: "Anto Subianto",
      rating: 5,
      comment: "Udah beberapa kali pesen, selalu tepat waktu dan makanannya masih hangat pas sampai. Favoritku nasi liwet, rasanya pas.",
      date: "Oct 18, 2025",
    },
    {
      image: ImageDeniIrawan,
      name: "Deni Irawan",
      rating: 4,
      comment: "Rasa makanan sangat autentik, namun harga sedikit di atas rata-rata.",
      date: "Oct 17, 2025",
    },
    {
      image: ImageRosmanHarianto,
      name: "Rosman Harianto",
      rating: 5,
      comment: "Saat siang hari masih lumayan komplit, banyak alternatif sayur dan lauk siap saji, bersih rapih dan enak.",
      date: "Oct 16, 2025",
    },
  ];

  return (
    <div className={`flex flex-col overflow-hidden transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      {/* Row 1 */}
      <div className="marquee translate-x-500 py-4">
        <div className="marquee-track">
          {commentData.map((c, i) => (
            <div key={i} className="marquee-item">
              <CommentCard key={i} {...c} />
            </div>
          ))}
          {commentData.map((c, i) => (
            <div key={`dup-${i}`} className="marquee-item">
              <CommentCard key={i} {...c} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="marquee marquee-right translate-x-500 py-4">
        <div className="marquee-track">
          {commentData.map((c, i) => (
            <div key={i} className="marquee-item">
              <CommentCard key={i} {...c} />
            </div>
          ))}
          {commentData.map((c, i) => (
            <div key={`dup-${i}`} className="marquee-item">
              <CommentCard key={i} {...c} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 3 mobile */}
      <div className="lg:hidden marquee translate-x-500 py-4">
        <div className="marquee-track">
          {commentData.map((c, i) => (
            <div key={i} className="marquee-item">
              <CommentCard key={i} {...c} />
            </div>
          ))}
          {commentData.map((c, i) => (
            <div key={`dup-${i}`} className="marquee-item">
              <CommentCard key={i} {...c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CommentSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCardVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-max py-16 px-4 lg:mb-8 flex flex-col gap-[35px] items-center justify-center">
      {/* Background Large */}
      <img
        className="hidden lg:block absolute right-30 top-20 opacity-50 scale-120 z-0 pointer-events-none select-none"
        src={BackgroundLemonSlice}
        alt="Background Lemon"
      />
      <img
        className="hidden lg:block absolute left-30 top-0 opacity-50 scale-120 z-0 pointer-events-none select-none"
        src={BackgroundOnion}
        alt="Background Onion"
      />
      <img
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 -bottom-45 opacity-50 scale-120 z-0 pointer-events-none select-none"
        src={BackgroundCommentBatik}
        alt="Background Batik"
      />

      {/* Background Small */}
      <img
        className="block lg:hidden absolute -right-15 top-20 opacity-70 rotate-y-180 -rotate-30 scale-80 z-0 pointer-events-none select-none"
        src={BackgroundLemonSlice}
        alt="Background Lemon"
      />
      <img
        className="block lg:hidden absolute -left-15 top-0 opacity-50 scale-70 rotate-y-180 z-0 pointer-events-none select-none"
        src={BackgroundOnion}
        alt="Background Onion"
      />

      <div ref={textRef}>
        <TextContent isVisible={textVisible} />
      </div>
      <div ref={cardRef}>
        <CardContent isVisible={cardVisible} />
      </div>

      <NavLink
        to="/testimoni"
        className={({ isActive }) => `lg:px-10 lg:py-4 lg:text-4xl px-5 py-[5px] text-[22px] mx-auto rounded-full font-bold button-text bg-[#2D1F18] text-[#EAAE8F] transition-all duration-300 ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"}`}
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Lihat <span className="text-[#C54300]">Testimoni</span>
      </NavLink>
    </section>
  );
};