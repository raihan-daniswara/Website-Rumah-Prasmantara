import { useEffect, useState, useRef } from "react";
import "./SpesialSection.css";
import imageKapurung from "../../../assets/produk/spesial/kapurung.png";
import imagePieSusuBali from "../../../assets/produk/spesial/pie-susu-bali.png";

import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SpecialMenuCard, SpecialMenuModal } from "../../../components/menu/SpecialMenu";
import { WaveTop } from "../../../components/wave/WaveTop";
import { WaveBottom } from "../../../components/wave/WaveBottom";
import backgroundLingkaran from "../../../assets/background/about/lingkaran.png";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
};

const CustomPrevArrow = ({ onClick }) => (
  <>
    <button
      onClick={onClick}
      className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 hover:bg-[#2D1F18] hover:border-[#2D1F18] border-[5px] border-[#EAAE8F]/45 hover:text-[#C54300] text-[#EAAE8F]/60 p-3 rounded-full transition-all duration-300 z-10"
    >
      <FaArrowLeft className="text-4xl" />
    </button>
    <button
      onClick={onClick}
      className="block lg:hidden absolute -left-15 top-1/2 -translate-y-1/2 hover:bg-[#2D1F18] hover:border-[#2D1F18] border-[3px] border-[#EAAE8F]/45 hover:text-[#C54300] text-[#EAAE8F]/60 p-2 rounded-full transition-all duration-300 z-10"
    >
      <FaArrowLeft className="text-2xl" />
    </button>
  </>
);

const CustomNextArrow = ({ onClick }) => (
  <>
    <button
      onClick={onClick}
      className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 hover:bg-[#2D1F18] hover:border-[#2D1F18] border-[5px] border-[#EAAE8F]/45 hover:text-[#C54300] text-[#EAAE8F]/60 p-3 rounded-full transition-all duration-300 z-10"
    >
      <FaArrowRight className="text-4xl" />
    </button>
    <button
      onClick={onClick}
      className="block lg:hidden absolute -right-15 top-1/2 -translate-y-1/2 hover:bg-[#2D1F18] hover:border-[#2D1F18] border-[3px] border-[#EAAE8F]/45 hover:text-[#C54300] text-[#EAAE8F]/60 p-2 rounded-full transition-all duration-300 z-10"
    >
      <FaArrowRight className="text-2xl" />
    </button>
  </>
);

const TextContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:flex flex-col gap-2.5 text-center transform transition-all duration-1200 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h1
        className="text-[#EAAE8F] font-bold text-6xl leading-[78px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Menu <span className="text-[#C54300]">Spesial</span> Kami
      </h1>
      <p
        className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Sajian istimewa yang diracik dengan penuh dedikasi, menghadirkan paduan rasa
        <br /> autentik khas Nusantara dan hanya hadir di hari spesial saja.
      </p>
    </div>

    {/* Small */}
    <div
      className={`flex lg:hidden flex-col gap-2.5 text-center transform transition-all duration-1200 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h1
        className="text-[#EAAE8F] font-bold text-[32px]"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Menu <span className="text-[#C54300]">Spesial</span> Kami
      </h1>
      <p
        className="text-xl max-w-[370px] text-[#BDBDBD] font-semibold"
        style={{ fontFamily: font.cormorantGaramond }}
      >
        Sajian istimewa yang diracik dengan penuh dedikasi dan hanya hadir di hari spesial saja.
      </p>
    </div>
  </>
);

const CategorySlider = ({ isVisible, selectedCategory, onCategoryChange }) => {
  const categories = ["Semua", "Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

  const largeSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1441, settings: { slidesToShow: 5, slidesToScroll: 5 } },
    ],
  };

  const smallSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      {/* Large */}
      <div
        className={`hidden lg:block w-[80vw] px-10 mt-10 relative transform transition-all duration-1200 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <Slider {...largeSettings}>
          {categories.map((category, index) => (
            <div key={index} className="px-2">
              <div
                onClick={() => onCategoryChange(category)}
                className={`border-[5px] rounded-full py-4 text-center text-4xl font-bold transition-all duration-300 hover:cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#2D1F18] border-[#2D1F18] text-[#C54300]"
                    : "border-[#EAAE8F]/45 text-[#EAAE8F]/60 hover:bg-[#2D1F18] hover:border-[#2D1F18] hover:text-[#C54300]"
                }`}
                style={{ fontFamily: font.cormorantUpright }}
              >
                {category}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Small */}
      <div
        className={`block lg:hidden w-[80vw] px-10 mt-10 relative transform transition-all duration-1200 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <Slider {...smallSettings}>
          {categories.map((category, index) => (
            <div key={index} className="px-1">
              <div
                onClick={() => onCategoryChange(category)}
                className={`rounded-full py-2 text-center text-xl font-bold transition-all duration-300 hover:cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#2D1F18] border-[#2D1F18] text-[#C54300] border-3"
                    : "border-3 border-[#EAAE8F]/45 text-[#EAAE8F]/60 hover:bg-[#2D1F18] hover:border-[#2D1F18] hover:text-[#C54300]"
                }`}
                style={{ fontFamily: font.cormorantUpright }}
              >
                {category}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

const CardContent = ({ isVisible, onDetail, selectedCategory }) => {
  const SpecialData = [
    {
      title: "Kapurung",
      image: imageKapurung,
      rating: 4.5,
      description:
        "Kapurung khas Sulawesi Selatan berbahan sagu dengan kuah sayuran segar dan rasa asam gurih.",
      price: "25.000",
      day: "Senin",
    },
    {
      title: "Pie Susu Bali",
      image: imagePieSusuBali,
      rating: 4.2,
      description:
        "Pie khas Bali dengan kulit tipis renyah berpadu dengan isian susu manis lembut yang lumer di mulut.",
      price: "5.000",
      day: "Rabu",
    },
  ];

  const filteredData =
    selectedCategory === "Semua"
      ? SpecialData
      : SpecialData.filter((menu) => menu.day === selectedCategory);

  return (
    <div
      className={`lg:m-10 m-5 w-[1200px] h-[500px] overflow-y-auto custom-scrollbar mask-fade transform transition-all duration-600 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="relative flex flex-col lg:gap-12 gap-5 items-center lg:m-10 mt-5">
        {filteredData.length > 0 ? (
          filteredData.map((menu, index) => (
            <SpecialMenuCard
              key={index}
              image={menu.image}
              title={menu.title}
              rating={menu.rating}
              description={menu.description}
              price={menu.price}
              day={menu.day}
              onDetail={() => onDetail(menu)}
            />
          ))
        ) : (
          <p
            className={`text-[#BDBDBD]/40 text-xl lg:text-4xl w-full self-center text-center font-semibold mt-20 lg:mt-30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ fontFamily: font.cormorantGaramond }}
          >
            Tidak ada menu spesial untuk hari {String(selectedCategory)}.
          </p>
        )}
      </div>
    </div>
  );
};

export const SpecialSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const textRef = useRef(null);
  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  // Observers
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setSliderVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sliderRef.current) observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCardVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-40 w-full h-[120vh] overflow-hidden flex flex-col items-center relative">
      <WaveBottom />

      {/* Background */}
      <img
        className="hidden lg:block absolute opacity-50 -z-1 -top-11 scale-110 -right-21 pointer-events-none select-none"
        src={backgroundLingkaran}
        alt="Background Right"
      />
      <img
        className="hidden lg:block absolute opacity-50 -z-1 -bottom-11 scale-110 -left-21 rotate-180 pointer-events-none select-none"
        src={backgroundLingkaran}
        alt="Background Left"
      />

      {/* Small Background */}
      <img
        className="lg:hidden block absolute opacity-50 -z-1 -top-14 scale-70 -right-24 pointer-events-none select-none"
        src={backgroundLingkaran}
        alt="Background Right"
      />
      <img
        className="lg:hidden block absolute opacity-50 -z-1 -top-14 scale-70 -left-24 rotate-y-180 pointer-events-none select-none"
        src={backgroundLingkaran}
        alt="Background Left"
      />

      {/* Content */}
      <div ref={textRef}>
        <TextContent isVisible={textVisible} />
      </div>

      <div ref={sliderRef}>
        <CategorySlider
          isVisible={sliderVisible}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <div ref={cardRef} className="w-full flex items-center justify-center mx-auto">
        <CardContent
          isVisible={cardVisible}
          onDetail={setModalData}
          selectedCategory={selectedCategory}
        />
      </div>

      <SpecialMenuModal
        isOpen={!!modalData}
        onClose={() => setModalData(null)}
        menu={modalData}
      />
      <WaveTop />
    </section>
  );
};
