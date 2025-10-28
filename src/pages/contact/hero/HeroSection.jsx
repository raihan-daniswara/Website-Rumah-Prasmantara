import Tilt from 'react-parallax-tilt';

import contactCard from '../../../assets/contact/contact-card.svg';
import instagramLogo from '../../../assets/contact/instagram.svg';
import whatsappLogo from '../../../assets/contact/whatsapp.svg';
import locationLogo from '../../../assets/contact/location.svg';
import './HeroSection.css';
import { useEffect, useState } from 'react';

import backgroundCircle from '../../../assets/background/contact/circle.png';
import backgroundCall from '../../../assets/background/contact/call.png';
import backgroundSend from '../../../assets/background/contact/send.png';
import backgroundRumahPrasmantaraMap from '../../../assets/background/contact/rumah-prasmantara-map.png';

// font 
const font = {
  greatVibes: '"Great Vibes", cursive',
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif'
};

const TiltCard = ({ logo, title, address, paragraph, url, mobileParagraph, delay, isVisible }) => (
  <Tilt
    tiltMaxAngleX={8}
    tiltMaxAngleY={8}
    perspective={1000}
    scale={1.03}
    transitionSpeed={400}
    tiltReverse={true}
    className={`contact-hero-card relative lg:w-[310px] w-[180px] mx-auto transition-all duration-1000 ease-out transform
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    `}
    style={{
      transitionDelay: `${delay}s`,
    }}
  >
    <img src={contactCard} alt="Contact Card Background" className="w-full h-auto" />
    <a href={url} target="_blank" className="absolute inset-0 flex flex-col items-center justify-center px-3 py-10">
      <img src={logo} alt={title} className="lg:size-16 size-8 " />
      <div className="mt-3 text-center text-[#FBEED5]">
        <h2
          className="lg:text-[32px] text-[18px] text-[#EAAE8F] font-bold lg:mb-1"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          {title}
        </h2>
        <p
          className="lg:text-4xl text-[20px] text-[#C84F1C] font-bold whitespace-nowrap"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          {address}
        </p>
        <p
          className="hidden lg:block lg:text-[16px] text-[13px] lg:mt-3 text-[#BDBDBD] font-bold lg:leading-[18px]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          {paragraph}
        </p>
        <p
          className="block lg:hidden text-center lg:text-[16px] text-[13px] lg:mt-3 text-[#BDBDBD] font-bold lg:leading-[18px]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          {mobileParagraph}
        </p>
      </div>
    </a>
  </Tilt>
);

const HeroText = ({ isVisible }) => {
  const contactData = [
    {
      logo: instagramLogo,
      title: "Instagram",
      address: "@rm_prasmantara",
      paragraph: "Lihat menu spesial, promo, dan momen seru di Instagram kami.",
      mobileParagraph: "Lihat menu spesial, promo di Instagram kami.",
      url: "https://www.instagram.com/"
    },
    {
      logo: whatsappLogo,
      title: "Whatsapp",
      address: "+62 858-1187-1116",
      paragraph: "Admin kami siap menjawab pertanyaan Anda 24 jam penuh.",
      mobileParagraph: "Admin kami siap menjawab pertanyaan Anda.",
      url: "https://wa.me/qr/AUPBC5NJ3ZNMN1"
    },
    {
      logo: locationLogo,
      title: "Lokasi Utama",
      address: "Jl. Cut Mutia",
      paragraph: "Datang dan nikmati pengalaman kuliner terbaik di sini.",
      mobileParagraph: "Nikmati pengalaman kuliner terbaik di sini.",
      url: "https://www.google.com/maps/place/Rumah+Makan+Ibu+Ida"
    }
  ];

  return (
    <>
      {/* Large */}
      <div
        className={`hidden lg:flex flex-col items-center gap-[25px] text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
      >
        <div className="my-2.5 flex flex-col items-center gap-2.5">
          <h2
            className="hero-header-2 text-[#DBCECE] text-[40px] font-medium"
            style={{ fontFamily: font.greatVibes }}
          >
            Hubungi Kami
          </h2>
          <h1
            className="produk-hero-header-1 text-[80px] text-[#EAAE8F] font-bold"
            style={{ fontFamily: font.cormorantUpright }}
          >
            Bertanya Seputar{" "}
            <span className="text-[#C54300]">Rumah Prasmantara</span>?
          </h1>
          <p
            className="hero-paragraph text-[36px] font-semibold text-[#BDBDBD]"
            style={{ fontFamily: font.cormorantGaramond }}
          >
            Ada hal yang belum jelas? Kami dengan senang hati menjawab setiap pertanyaan Anda.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center lg:gap-[30px] gap-2 mt-6">
          {contactData.map((contact, index) => (
            <TiltCard
              key={index}
              logo={contact.logo}
              title={contact.title}
              address={contact.address}
              paragraph={contact.paragraph}
              url={contact.url}
              mobileParagraph={contact.mobileParagraph}
              delay={index * 0.4}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* Small */}
      <div
        className={`flex lg:hidden flex-col items-center gap-[25px] text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
      >
        <div className="my-2.5 flex flex-col items-center gap-2.5">
          <h2
            className="hero-header-2 text-[#DBCECE] text-[24px] font-medium"
            style={{ fontFamily: font.greatVibes }}
          >
            Hubungi Kami
          </h2>
          <h1
            className="produk-hero-header-1 text-[40px] text-[#EAAE8F] max-w-[360px] font-bold"
            style={{ fontFamily: font.cormorantUpright }}
          >
            Bertanya Seputar{" "}
            <span className="text-[#C54300]">Rumah Prasmantara</span>?
          </h1>
          <p
            className="hero-paragraph text-xl font-semibold max-w-[380px] text-[#BDBDBD]"
            style={{ fontFamily: font.cormorantGaramond }}
          >
            Ada hal yang belum jelas? Kami dengan senang hati menjawab setiap pertanyaan Anda.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center lg:gap-[30px] gap-2 mt-6">
          {contactData.map((contact, index) => (
            <TiltCard
              key={index}
              logo={contact.logo}
              title={contact.title}
              address={contact.address}
              paragraph={contact.paragraph}
              mobileParagraph={contact.mobileParagraph}
              delay={index * 0.4}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </>
  );
};

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
        className="hidden lg:block absolute opacity-50 z-0 top-3 scale-110 -left-3 pointer-events-none select-none"
        src={backgroundCircle}
        alt="Background Circle"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-0 top-3 scale-110 -right-3 rotate-y-180 pointer-events-none select-none"
        src={backgroundCircle}
        alt="Background Circle"
      />
      <img
        className="hidden lg:block absolute opacity-50 z-0 top-1/2 scale-110 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        src={backgroundRumahPrasmantaraMap}
        alt="Background Map"
      />
      <img
        className="hidden lg:block absolute opacity-100 z-0 top-40 right-80 pointer-events-none select-none"
        src={backgroundCall}
        alt="Background Call"
      />
      <img
        className="hidden lg:block absolute opacity-100 z-0 bottom-20 left-20 pointer-events-none select-none"
        src={backgroundSend}
        alt="Background Send"
      />

      {/* Background Small */}
      <img
        className="block lg:hidden absolute opacity-70 z-0 -top-21 scale-30 -left-29 pointer-events-none select-none"
        src={backgroundCircle}
        alt="Background Circle"
      />
      <img
        className="block lg:hidden absolute opacity-70 z-0 -top-21 scale-30 -right-29 rotate-y-180 pointer-events-none select-none"
        src={backgroundCircle}
        alt="Background Circle"
      />
      <img
        className="block lg:hidden absolute opacity-50 z-0 top-45 scale-90 left-1/2 transform -translate-x-1/2 pointer-events-none select-none"
        src={backgroundRumahPrasmantaraMap}
        alt="Background Map"
      />
      <img
        className="block lg:hidden absolute opacity-100 z-0 bottom-20 right-0 rotate-y-180 scale-70 pointer-events-none select-none"
        src={backgroundSend}
        alt="Background Send"
      />

      <div className="flex gap-10 items-center justify-center absolute top-1/2 -translate-y-1/2 z-10">
        <HeroText isVisible={isVisible} />
      </div>
    </section>
  );
};
