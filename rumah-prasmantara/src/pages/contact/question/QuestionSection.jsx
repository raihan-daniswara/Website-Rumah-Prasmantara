import "./QuestionSection.css";
import questionLogo from '../../../assets/contact/question.svg';
import questionMascott from '../../../assets/contact/question-mascott.svg';
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import backgroundQuestion from '../../../assets/background/contact/question.png';
const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

const HeaderContent = ({ isVisible }) => (
  <div
    className={`header-content flex flex-col gap-2.5 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
  >
    <h1
      className="hero-paragraph text-center text-[#EAAE8F] font-bold text-6xl leading-[78px]"
      style={{ fontFamily: font.cormorantUpright }}
    >
      Yang <span className="text-[#C54300]">Sering</span> Ditanyakan <span className="text-[#C54300]"> Tamu Kami</span>
    </h1>
    <p
      className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Temukan jawaban dari pertanyaan umum tentang layanan, menu, dan pengalaman
      <br />
      di Rumah Prasmantara.
    </p>
  </div>
);

const QuestionContent = ({ isVisible }) => {
  const questionData = [
    {
      title: (
        <>
          Apa itu <span className="text-[#C54300]">Rumah Prasmantara</span>?
        </>
      ),
      paragraph:
        "Rumah Prasmantara adalah restoran prasmanan khas Nusantara dengan cita rasa autentik."
    },
    {
      title: (
        <>
          Bagaimana Cara <span className="text-[#C54300]">Reservasi Meja</span>?
        </>
      ),
      paragraph:
        "Reservasi meja bisa dilakukan melalui email atau melalui nomor kontak kami."
    },
    {
      title: (
        <>
          Bisa <span className="text-[#C54300]">Pesan Makanan Untuk Dibawa Pulang</span>?
        </>
      ),
      paragraph:
        "Ya, tersedia layanan takeaway dan pengantaran praktis untuk semua menu."
    },
    {
      title: (
        <>
          Apakah <span className="text-[#C54300]">Rumah Prasmantara Melayani Acara</span>?
        </>
      ),
      paragraph:
        "Ya, kami melayani acara keluarga, komunitas, dan perusahaan yang dapat dipesan melalui form."
    }
  ];

  return (
    <div
      className={`flex justify-center items-center gap-14 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <img src={questionMascott} className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`} />
      <div className="flex flex-col gap-[50px]">
        {questionData.map((item, index) => (
          <div key={index} className="flex gap-5 items-start">
            <div className="p-[15px] rounded-[10px] bg-[#EAAE8F]">
              <img src={questionLogo} alt="Question icon" className="size-[50px]" />
            </div>

            {/* Text section */}
            <div className="-mt-1.5 w-[640px]">
              <h4
                className="text-[#EAAE8F] text-[32px] font-bold"
                style={{ fontFamily: font.cormorantGaramond }}
              >
                {item.title}
              </h4>
              <p
                className="font-semibold text-[#BDBDBD] text-[32px] leading-[39px]! "
                style={{ fontFamily: font.cormorantGaramond }}
              >
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const QuestionSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  // Observer Header
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setHeaderVisible(entry.isIntersecting),
        { threshold: 0.3 }
      );
      if (headerRef.current) observer.observe(headerRef.current);
      return () => observer.disconnect();
    }, []);
  
    // Observer Content
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setContentVisible(entry.isIntersecting),
        { threshold: 0.3 }
      );
      if (contentRef.current) observer.observe(contentRef.current);
      return () => observer.disconnect();
    }, []);

  return (
    <section
      className="relative h-fit py-50 flex flex-col gap-20 items-center"
    >
      <img
        className="absolute opacity-100 z-0 top-5 right-40 pointer-events-none select-none"
        src={backgroundQuestion}
        alt="Background BabackgroundRumah4"
      />
      <div ref={headerRef}>
        <HeaderContent isVisible={headerVisible} />
      </div>
      <div ref={contentRef}>
        <QuestionContent isVisible={contentVisible} />
      </div>
    </section>
  );
};
