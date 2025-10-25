import "./TeamsSection.css";
import imageTira from "../../../assets/about/teams/png/tira.png";
import imageRinto from "../../../assets/about/teams/png/rinto.png";
import imageAndi from "../../../assets/about/teams/png/andi.png";
import imageKasim from "../../../assets/about/teams/png/kasim.png";
import imageWulan from "../../../assets/about/teams/png/wulan.png";
import imagePandu from "../../../assets/about/teams/png/pandu.png";
import imageIvan from "../../../assets/about/teams/png/ivan.png";

import backgroundRumah4 from '../../../assets/background/about/rumah4.png';
import backgroundRumah5 from '../../../assets/background/about/rumah5.png';
import backgroundRumah6 from '../../../assets/background/about/rumah6.png';
import { useEffect, useRef, useState } from "react";

import Slider from "react-slick";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
  cormorant: '"Cormorant", serif',
};

const teamsData = [
  {
    image: imageTira,
    name: "Tira Hartini",
    role: "Quality Control",
  },
  {
    image: imageRinto,
    name: "Rinto Wijayanto",
    role: "Founder",
  },
  {
    image: imageAndi,
    name: "Andi Wijaya",
    role: "Co-Founder",
  },
  {
    image: imageKasim,
    name: "Kasim Permadi",
    role: "Manager",
  },
  {
    image: imageWulan,
    name: "Wulan Winarsih",
    role: "Recipe Consultant",
  },
  {
    image: imagePandu,
    name: "Pandu Hidayanto",
    role: "Head Chef",
  },
  {
    image: imageIvan,
    name: "Ivan Mahendra",
    role: "Culinary Partner",
  },
];

const TextContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex textContent flex-col gap-2.5 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <h1
        className="hero-paragraph text-[#EAAE8F] font-bold text-6xl leading-[78px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Di Balik <span className="text-[#C54300]">Sajian Nusantara</span>
      </h1>
      <p
        className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Dari warisan rasa yang terjaga di setiap hidangan, kami hadirkan yang terbaik untuk
        <br />
        Anda.
      </p>
    </div>

    {/* Small */}
    <div
      className={`flex lg:hidden textContent flex-col gap-2.5 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <h1
        className="hero-paragraph text-[#EAAE8F] font-bold text-[32px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Di Balik <span className="text-[#C54300]">Sajian Nusantara</span>
      </h1>
      <p
        className="max-w-[330px] text-xl text-[#BDBDBD] font-semibold"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Dari warisan rasa yang terjaga di setiap hidangan, kami hadirkan yang terbaik untuk Anda.
      </p>
    </div>
  </>
);

const TeamsSlider = ({ teamsData, isVisible }) => {

  const slides = [
    teamsData.slice(0, 4), // Slide 0: 4 orang
    teamsData.slice(4),    // Slide 1: 3 orang
  ];

  return (
    <div className="block lg:hidden w-full mt-10 relative">
      {/* Container scroll horizontal */}
      <div className="flex overflow-x-auto overflow-y-clip snap-x snap-mandatory scrollbar-hide">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="grid grid-cols-2 gap-4 snap-center min-w-full px-4">
            {slide.map((team, index) => (
              <div
                key={index}
                className={`flex flex-col items-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: isVisible ? `${index * 200}ms` : "0ms" }}
              >
                <img
                  src={team.image}
                  className="h-40 mt-4 object-cover rounded-full"
                  loading="lazy"
                />
                <div className="flex flex-col items-center mt-4">
                  <p className="font-bold text-2xl text-[#C54300] whitespace-nowrap" style={{ fontFamily: font.cormorantUpright }}>
                    {team.name}
                  </p>
                  <p className="text-[18px] font-bold text-[#EAAE8F]" style={{ fontFamily: font.cormorantGaramond }}>
                    <span style={{ fontFamily: font.cormorant }}>{team.role.charAt(0)}</span>
                    {team.role.slice(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamsContent = ({ isVisible }) => {
  return (
    <>
      {/* Large */}
      <div
        className={`hidden lg:block mt-10 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Baris Pertama */}
        <div className="grid grid-cols-4 gap-10">
          {teamsData.slice(0, 4).map((team, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 400}ms` : "0ms",
              }}
            >
              <img src={team.image} className="w-full h-max" loading="lazy" />
              <div className="flex flex-col items-center mt-4">
                <p
                  className="font-bold text-4xl text-[#C54300]"
                  style={{ fontFamily: font.cormorantUpright }}
                >
                  {team.name}
                </p>
                <p
                  className="text-[28px] font-bold text-[#EAAE8F]"
                  style={{ fontFamily: font.cormorantGaramond }}
                >
                  <span style={{ fontFamily: font.cormorant }}>
                    {team.role.charAt(0)}
                  </span>
                  {team.role.slice(1)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Baris kedua*/}
        <div className="flex justify-center gap-10 mt-10">
          {teamsData.slice(4).map((team, index) => (
            <div
              key={index + 4}
              className={`flex flex-col items-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 600}ms` : "0ms",
              }}
            >
              <img src={team.image} className="w-full h-max" loading="lazy" />
              <div className="flex flex-col items-center mt-4">
                <p
                  className="font-bold text-4xl text-[#C54300]"
                  style={{ fontFamily: font.cormorantUpright }}
                >
                  {team.name}
                </p>
                <p
                  className="text-[28px] font-bold text-[#EAAE8F]"
                  style={{ fontFamily: font.cormorantGaramond }}
                >
                  <span style={{ fontFamily: font.cormorant }}>
                    {team.role.charAt(0)}
                  </span>
                  {team.role.slice(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Small */}
      <TeamsSlider teamsData={teamsData} isVisible={isVisible} />
    </>
  )
}


export const TeamsSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [teamsVisible, setTeamsVisible] = useState(false);
  const textRef = useRef(null);
  const teamsRef = useRef(null);

  // Observer Text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer Teams
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTeamsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (teamsRef.current) observer.observe(teamsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 px-4 mb-20 flex flex-col items-center justify-start overflow-hidden">
      {/* Backgrounds */}
      <img
        className="absolute opacity-50 top-0 z-0 scale-110 left-70 pointer-events-none select-none"
        src={backgroundRumah4}
        alt="Background Rumah 4"
      />
      <img
        className="absolute opacity-50 bottom-80 scale-110 right-30 pointer-events-none select-none"
        src={backgroundRumah5}
        alt="Background Rumah 5"
      />
      <img
        className="absolute opacity-50 bottom-30 scale-110 left-60 pointer-events-none select-none"
        src={backgroundRumah6}
        alt="Background Rumah 6"
      />

      {/* Konten */}
      <div ref={textRef}>
        <TextContent isVisible={textVisible} />
      </div>

      <div ref={teamsRef}>
        <TeamsContent isVisible={teamsVisible} />
      </div>
    </section>
  );
};