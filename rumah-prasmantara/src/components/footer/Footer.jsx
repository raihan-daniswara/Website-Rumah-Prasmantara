import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantSC: '"Cormorant SC", serif',
};

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <section
      ref={footerRef}
      className={`max-w-[80%] h-fit mx-auto flex justify-around items-center pb-10 transition-all duration-1200 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
    >
      {/* Hubungi Kami */}
      <div className='flex flex-col gap-6'>
        <h1
          className='text-[32px] text-[#EAAE8F] tracking-[4%] text-center font-normal'
          style={{ fontFamily: font.cormorantUpright }}
        >
          Hubungi Kami
        </h1>
        <p
          className='leading-9 text-2xl font-bold tracking-[4%] text-center text-[#BDBDBD]'
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Taman, Jl. Cut Mutia No.1 <br />
          +62 858-1187-1116 <br />
          @rm_prasmantara <br />
          @rm_prasmantara_ad
        </p>
      </div>

      {/* Rumah Prasmantara */}
      <div className='relative z-1 flex flex-col gap-[26px] items-center w-[600px]'>
        <img
          src="/logo/rumah-prasmantara.svg"
          alt="Logo Rumah Prasmantara"
          className="w-25 h-25"
        />
        <div className='flex flex-col gap-2.5'>
          <h1
            className='text-[40px] text-[#EAAE8F] font-bold tracking-[4%] text-center'
            style={{ fontFamily: font.cormorantUpright }}
          >
            RUMAH <span className='text-[#C54300]'>PRASMANTARA</span>
          </h1>
          <p
            className='leading-9 text-2xl font-bold tracking-[4%] text-center text-[#BDBDBD]'
            style={{ fontFamily: font.cormorantGaramond }}
          >
            "Kami percaya, melayani Anda sepenuh hati adalah cara terbaik kami menemukan arti.”
          </p>
          <div className="flex gap-8 mt-4 items-center justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BDBDBD] hover:text-[#C54300] transition duration-300 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BDBDBD] hover:text-[#C54300] transition duration-300 text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BDBDBD] hover:text-[#C54300] transition duration-300 text-3xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Jam Buka */}
      <div className='flex-col'>
        <h1
          className='text-[32px] text-[#EAAE8F] tracking-[4%] text-center font-normal'
          style={{ fontFamily: font.cormorantUpright }}
        >
          Jam Buka
        </h1>
        <p
          className='leading-9 text-2xl font-bold tracking-[4%] text-center text-[#BDBDBD]'
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Senin - Jumat: <br />
          08:00 - 22:00 <br />
          Sabtu - Minggu: <br />
          08:00 - 16:00
        </p>
      </div>
    </section>
  );
}
