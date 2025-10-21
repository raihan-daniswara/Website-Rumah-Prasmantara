import "./QuestionSection.css";
import questionLogo from '../../../assets/contact/question.svg';
import questionMascott from '../../../assets/contact/question-mascott.svg';
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

const QuestionContent = () => {
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
    <div className="flex justify-center items-center gap-14">
    <img src={questionMascott} className="" />
      <div className="flex flex-col gap-[50px]">
        {questionData.map((item, index) => (
          <div key={index} className="flex gap-5 items-start">
            {/* Icon box */}
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
                className="font-semibold text-[#BDBDBD] text-[32px] leading-[39px]!"
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
      className="h-fit py-50 flex flex-col gap-20 items-center"
    >
      <HeaderContent />
      <QuestionContent />
    </section>
  );
};
