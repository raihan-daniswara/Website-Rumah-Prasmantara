import "./ReserveSection.css";
import reserveMascott from '../../../assets/contact/reserve-mascott.svg';
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { WaveBottom } from "../../../components/wave/WaveBottom";

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
      Amankan <span className="text-[#C54300]">Meja</span> Anda di <span className="text-[#C54300]"> Rumah Prasmantara</span>
    </h1>
    <p
      className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Pesan meja sekarang dan rasakan kelezatan kuliner khas nusantara tanpa perlu
      <br />
      khawatir kehabisan meja.
    </p>
  </div>
);

const ReserveForm = () => {
  return (
    <div className="flex justify-center items-center gap-5 ">
      <div
        className="bg-[#3C261A] p-8 rounded-[20px] shadow-lg w-[700px]"
      >
        <form className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-1/2 bg-[#2C231E] text-[#BDBDBD] text-[24px] font-bold placeholder-[#BDBDBD]/40  px-4 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C54300]"
              style={{ fontFamily: font.cormorantGaramond }}
            />
            <input
              type="tel"
              placeholder="Nomor Telepon"
              className="w-1/2 bg-[#2C231E] text-[#BDBDBD] text-[24px] font-bold placeholder-[#BDBDBD]/40  px-4 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C54300]"
              style={{ fontFamily: font.cormorantGaramond }}
            />
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            <input
              type="date"
              placeholder="Tanggal Reservasi"
              className="w-1/2 bg-[#2C231E] text-[#BDBDBD] text-[24px] font-bold placeholder-[#BDBDBD]/40  px-4 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C54300]"
              style={{ fontFamily: font.cormorantGaramond }}
            />
            <input
              type="number"
              placeholder="Jumlah Orang"
              className="w-1/2 bg-[#2C231E] text-[#BDBDBD] text-[24px] font-bold placeholder-[#BDBDBD]/40  px-4 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C54300]"
              style={{ fontFamily: font.cormorantGaramond }}
            />
          </div>

          {/* Row 3 */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#2C231E] text-[#BDBDBD] text-[24px] font-bold placeholder-[#BDBDBD]/40   px-4 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C54300]"
            style={{ fontFamily: font.cormorantGaramond }}
          />

          {/* Row 4 */}
          <textarea
            placeholder="Catatan Khusus"
            rows="4"
            className="w-full bg-[#2C231E] text-[#BDBDBD] text-[24px] font-bold placeholder-[#BDBDBD]/40   px-4 py-3 rounded-[30px] resize-none focus:outline-none focus:ring-1 focus:ring-[#C54300]"
            style={{ fontFamily: font.cormorantGaramond }}
          ></textarea>

          <p className="text-[#EAAE8F] text-[24px] leading-[52px] font-semibold" style={{ fontFamily: font.cormorantGaramond }}>
            <span className="font-bold text-[#C54300]">*</span> Kami akan hubungi Anda untuk reservasi
            <span className="text-[#C54300]"> maksimal 24 jam</span>.
          </p>

          <button
            type="submit"
            className="mt-2 bg-[#2D1F18] text-[#EAAE8F] text-4xl font-bold py-3 rounded-full transition duration-300"
            style={{ fontFamily: font.cormorantGaramond }}
          >
            Kirim <span className="text-[#C54300] hover:text-white">Reservasi</span>
          </button>
        </form>
      </div>

      {/* Kolom kanan: Gambar resepsionis */}
      <div className="relative">
        <img
          src={reserveMascott}
          alt="Reserve Mascott"
          className="w-[630px] drop-shadow-xl"
        />
      </div>
    </div>
  );
};


export const ReserveSection = () => {
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
      className="relative h-fit py-50 flex flex-col gap-20 items-center"
    >
      <WaveBottom />
      <HeaderContent />
      <ReserveForm />
    </section>
  );
};