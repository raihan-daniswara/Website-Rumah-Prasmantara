import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

import profile1 from "../../../assets/testimoni/profile/profile1.jpeg";
import profile2 from "../../../assets/testimoni/profile/profile2.jpeg";
import profile3 from "../../../assets/testimoni/profile/profile3.jpeg";
import OrangNunjuk from '../../../assets/testimoni/orangnunjuk.png';
import OrangNunjukMobile from '../../../assets/testimoni/orangnunjukmobile.png';
import backgroundThumb from '../../../assets/background/testimoni/thumb.png';
import backgroundPhonebook from '../../../assets/background/testimoni/phonebook.png';
import backgroundChat from '../../../assets/background/testimoni/chat.png';
import { Autoplay } from "swiper/modules";

function InteractiveArrowButton({
  direction = "left",
  onClick,
  className = "",
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    if (onClick) onClick();
  };

  const ArrowIcon = direction === "right" ? FaArrowRight : FaArrowLeft;

  return (
    <button
      onClick={handleClick}
      className={`w-[60px] h-[60px] flex items-center justify-center rounded-full border-4 transition-all duration-300 border-[#9E7662]/70 text-[#9E7662]/70 hover:cursor-pointer hover:text-[#C54300]/70 hover:border-[#2D1F18] hover:bg-[#2D1F18]
        ${isClicked ? "scale-90" : "scale-100"} ${className}`}
    >
      <ArrowIcon className="transition-transform duration-300 size-[30px]" />
    </button>
  );
}

const TextContent = ({ isVisible }) => (
  <>
    {/* Large */}
    <div
      className={`hidden lg:block mb-2 px-4 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
    >
      <p
        className="hero-header-2 text-[#DBCECE] text-[40px]"
        style={{ fontFamily: '"Great Vibes", cursive' }}
      >
        Review Mereka
      </p>
      <h1
        className="text-[64px] font-semibold mb-2 leading-tight text-left"
        style={{
          fontFamily: "'Cormorant Upright', serif",
          textShadow: "0 4px 10px rgba(197, 67, 0, 0.25)",
        }}
      >
        <span className="text-[#EAAE8F]">Curhatan dari</span>
        <span className="text-[#C54300]"> Para Reviewer</span>
      </h1>
    </div>

    {/* Small */}
    <div
      className={`flex flex-col items-center justify-center lg:hidden mb-2 px-4 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
    >
      <p
        className="hero-header-2 text-center text-[#DBCECE] text-2xl leading-10"
        style={{ fontFamily: '"Great Vibes", cursive' }}
      >
        Review Mereka
      </p>
      <h1
        className="text-[32px] text-center font-semibold mb-2 leading-[39px]"
        style={{
          fontFamily: "'Cormorant Upright', serif",
          textShadow: "0 4px 10px rgba(197, 67, 0, 0.25)",
        }}
      >
        <span className="text-[#EAAE8F]">Curhatan dari</span>
        <span className="text-[#C54300]"> Para Reviewer</span>
      </h1>
      <img src={OrangNunjukMobile} alt="Orang Nunjuk" className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`} />
    </div>
  </>
);

const CardContent = ({
  reviews,
  currentSlide,
  setCurrentSlide,
  sliderRef,
  isVisible,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <>
      {/* Large */}
      <div
        className={`hidden lg:flex max-w-[650px] w-full flex-col gap-8 ml-4 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
      >
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="outline-none">
                {/* Profile & Rating */}
                <div className="mb-6 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover object-center shrink-0"
                  />
                  <div>
                    <h4
                      className="text-[#BDBDBD] font-bold text-4xl"
                      style={{ fontFamily: '"Cormorant Upright", serif' }}
                    >
                      {review.name}
                    </h4>

                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const getStarType = (pos, rating) =>
                          rating >= pos
                            ? "full"
                            : rating >= pos - 0.5
                              ? "half"
                              : "empty";

                        const starType = getStarType(star, review.rating);
                        return (
                          <div
                            key={star}
                            className="relative w-5 h-5"
                            style={{
                              filter:
                                "drop-shadow(0 0 4px rgba(250, 204, 21, 0.3))",
                            }}
                          >
                            {starType === "full" ? (
                              <FaStar className="w-5 h-5 text-yellow-400" />
                            ) : starType === "half" ? (
                              <div className="relative w-5 h-5">
                                <FaStar className="w-5 h-5 text-yellow-400 opacity-30 absolute" />
                                <div
                                  className="absolute inset-0 overflow-hidden"
                                  style={{ clipPath: "inset(0 50% 0 0)" }}
                                >
                                  <FaStar className="w-5 h-5 text-yellow-400" />
                                </div>
                              </div>
                            ) : (
                              <FaStar className="w-5 h-5 text-stone-600 fill-transparent" />
                            )}
                          </div>
                        );
                      })}
                      <span
                        className="text-[#DFB200] text-2xl ml-1 mt-0.5"
                        style={{ fontFamily: '"Cormorant Infant", serif' }}
                      >
                        {review.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative bg-transparent w-full h-40 flex items-center justify-center">
                  {/* Quote */}
                  <div className="absolute top-0 left-0 w-12 h-12 z-20 text-[#EAAE8F]">
                    <BiSolidQuoteAltLeft size={80} />
                  </div>
                  <div className="absolute bottom-5 right-10 w-12 h-12 z-20 text-[#C54300]">
                    <BiSolidQuoteAltRight size={80} />
                  </div>

                  {/* Text */}
                  <div className="absolute top-0 left-10 right-0 bottom-0 z-10 flex items-start px-12">
                    <p
                      className="text-[#BDBDBD] text-3xl text-left leading-11 font-semibold"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center h-20 gap-4">
          <InteractiveArrowButton
            onClick={() => sliderRef.current?.slickPrev()}
            direction="left"
            size={55}
          />

          <div className="flex items-center justify-center gap-4">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                onClick={() => sliderRef.current?.slickGoTo(index)}
                className={`rounded-full overflow-hidden transition-all ${currentSlide === index
                  ? "w-16 h-16 scale-110"
                  : "w-14 h-14 opacity-70 hover:opacity-90"
                  }`}
              >
                <img
                  src={review.avatar}
                  alt={review.name}
                  className={`w-full h-full object-cover object-center transition-all duration-500 ${currentSlide === index
                    ? "grayscale-0"
                    : "grayscale contrast-100 brightness-90"
                    }`}
                />
              </button>
            ))}
          </div>

          <InteractiveArrowButton
            onClick={() => sliderRef.current?.slickNext()}
            direction="right"
            size={55}
          />
        </div>
      </div>

      {/* Small */}
      <div
        className={`flex lg:hidden max-w-[400px] w-full flex-col gap-8 ml-4 -mt-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
      >
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review) => {
              const nameParts = review.name.split(" ");
              const firstName = nameParts[0];
              const lastName = nameParts.slice(1).join(" ");
              return (
                <div key={review.id} className="outline-none px-4">
                  {/* Profile & Rating */}
                  <div className="mb-6 flex flex-col items-center gap-2 text-center">
                    <div>
                      <h4
                        className="text-[#BDBDBD] text-center font-bold text-3xl"
                        style={{ fontFamily: '"Cormorant Upright", serif' }}
                      >
                        <span className="text-[#EAAE8F]">{firstName}</span>{" "}
                        {lastName && (
                          <span className="text-[#C54300]">{lastName}</span>
                        )}
                      </h4>

                      {/* Stars */}
                      <div className="flex items-center gap-1 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const getStarType = (pos, rating) =>
                            rating >= pos
                              ? "full"
                              : rating >= pos - 0.5
                                ? "half"
                                : "empty";

                          const starType = getStarType(star, review.rating);
                          return (
                            <div
                              key={star}
                              className="relative w-5 h-5"
                              style={{
                                filter:
                                  "drop-shadow(0 0 4px rgba(250, 204, 21, 0.3))",
                              }}
                            >
                              {starType === "full" ? (
                                <FaStar className="w-5 h-5 text-yellow-400" />
                              ) : starType === "half" ? (
                                <div className="relative w-5 h-5">
                                  <FaStar className="w-5 h-5 text-yellow-400 opacity-30 absolute" />
                                  <div
                                    className="absolute inset-0 overflow-hidden"
                                    style={{ clipPath: "inset(0 50% 0 0)" }}
                                  >
                                    <FaStar className="w-5 h-5 text-yellow-400" />
                                  </div>
                                </div>
                              ) : (
                                <FaStar className="w-5 h-5 text-stone-600 fill-transparent" />
                              )}
                            </div>
                          );
                        })}
                        <span
                          className="text-[#DFB200] text-2xl ml-1 mt-0.5"
                          style={{ fontFamily: '"Cormorant Infant", serif' }}
                        >
                          {review.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Text with Quotes */}
                  <div className="relative bg-transparent max-w-full h-27">
                    {/* Quote */}
                    <div className="absolute top-0 -left-3 w-12 h-12 z-20 text-[#EAAE8F]">
                      <BiSolidQuoteAltLeft size={40} />
                    </div>
                    <div className="absolute -bottom-4 -right-2 w-12 h-12 z-20 text-[#C54300]">
                      <BiSolidQuoteAltRight size={40} />
                    </div>

                    {/* Text */}
                    <div className="absolute inset-0 z-14 flex items-start justify-center px-8">
                      <p
                        className="text-[#BDBDBD] text-xl text-center leading-snug font-semibold"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* Avatar Navigation */}
        <div className="flex items-center justify-center gap-4 h-20">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className={`rounded-full overflow-hidden transition-all ${currentSlide === index
                ? "w-16 h-16 scale-110"
                : "w-14 h-14 opacity-50 hover:opacity-80 hover:border-orange-600/50"
                }`}
            >
              <img
                src={review.avatar}
                alt={review.name}
                className={`w-full h-full object-cover object-center ${currentSlide === index
                  ? "grayscale-0"
                  : "grayscale contrast-100 brightness-90"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export const CurhatanSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  // Observer Text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer Image
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setImageVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer Card
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCardVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Harsanto Putra",
      rating: 5,
      text: "Dari sate maranggi sampai soto betawi, semuanya enak! Serasa sedang keliling Indonesia. Sudah pasti datang lagi!",
      avatar: profile1,
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      rating: 5,
      text: "Rasa setiap hidangan enak sekali, otentik dan menggugah selera! Porsinya pas, dan pelayanannya luar biasa ramah.",
      avatar: profile3,
    },
    {
      id: 3,
      name: "Budi Santoso",
      rating: 4.5,
      text: "Pelayanan cepat dan ramah, makanannya nikmat! masakannya mantap, bumbunya pas, dan harga bersahabat selalu.",
      avatar: profile2,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row relative items-center justify-center py-20 overflow-hidden">
      {/* Background Large */}
      <img
        className="hidden lg:block absolute opacity-50 bottom-50 scale-150 rotate-y-180 -rotate-5 left-[45%]"
        src={backgroundThumb}
        alt="Background Thumb"
      />
      <img
        className="hidden lg:block absolute opacity-50 bottom-10 left-[7%]"
        src={backgroundPhonebook}
        alt="Background Phonebook"
      />
      <img
        className="hidden lg:block absolute opacity-50 bottom-20 right-[10%]"
        src={backgroundChat}
        alt="Background Chat"
      />

      {/* Background Small */}
      <img
        className="block lg:hidden absolute opacity-50 bottom-30 scale-55 -left-3"
        src={backgroundPhonebook}
        alt="Background Phonebook"
      />
      <img
        className="block lg:hidden absolute opacity-50 bottom-80 scale-80 -rotate-40 right-0"
        src={backgroundChat}
        alt="Background Chat"
      />

      <img src={OrangNunjuk} ref={imageRef} alt="Orang Nunjuk" className={`hidden lg:block transition-all duration-1000 ease-out ${imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`} />
      <div className="flex flex-col lg:gap-[25px]">
        <div ref={textRef}>
          <TextContent isVisible={textVisible} />
        </div>
        <div ref={cardRef}>
          <CardContent
            reviews={reviews}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            sliderRef={sliderRef}
            isVisible={cardVisible}
          />
        </div>
      </div>
    </section>
  );
};
