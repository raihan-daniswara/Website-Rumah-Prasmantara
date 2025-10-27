import { useEffect, useRef, useState } from "react";
import { CommentRatingCard } from "../../../components/comment/CommentRating";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./RatingSection.css";

import food1 from "../../../assets/testimoni/foodcollage/food1.jpeg";
import food2 from "../../../assets/testimoni/foodcollage/food2.jpeg";
import food3 from "../../../assets/testimoni/foodcollage/food3.jpeg";
import food4 from "../../../assets/testimoni/foodcollage/food4.jpeg";
import food5 from "../../../assets/testimoni/foodcollage/food5.jpeg";
import food6 from "../../../assets/testimoni/foodcollage/food6.jpeg";
import ImageNayataDewi from "../../../assets/home/nayata-dewi.png";
import ImageDedeKurniawan from "../../../assets/home/dede-kurniawan.png";
import ImageLaodeSilalahiIsmail from "../../../assets/home/laode-silalahi-ismail.png";
import ImageNoorBetty from "../../../assets/home/noor-betty.png";
import ImageAntoSubianto from "../../../assets/home/anto-subianto.png";
import ImageDeniIrawan from "../../../assets/home/deni-irawan.png";
import ImageRosmanHarianto from "../../../assets/home/rosman-haryanto.png";

import backgroundKoki from '../../../assets/background/testimoni/koki.png';
import backgroundSpoon from '../../../assets/background/testimoni/spoon.png';
import backgroundDish from '../../../assets/background/testimoni/dish.png';

// =================== COMPONENT: RatingDisplay ===================
function RatingDisplay({ rating, reviewCount, isVisible }) {
  const getStarType = (index) => {
    if (rating >= index) return "full";
    if (rating >= index - 0.5) return "half";
    return "empty";
  };

  return (
    <>
      {/* Large */}
      <div className={`hidden lg:flex flex-col gap-1.5 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

        <div cla ssName="flex justify-center items-center">
          <h1
            className={`text-[128px] font-semibold text-[#EAAE8F] leading-[120px]`}
            style={{
              fontFamily: "'Cormorant Infant', serif",
              textShadow:
                "0 0 10px rgba(234,174,143,0.4), 0 0 20px rgba(234,174,143,0.2)",
            }}
          >
            {rating.toFixed(2)}
          </h1>
        </div>

        <div className="flex justify-center gap-2.5">
          {[1, 2, 3, 4, 5].map((star) => {
            const type = getStarType(star);
            return (
              <div key={star} className="relative w-10 h-max flex items-center justify-center">
                {type === "full" && <FaStar className="text-yellow-400 w-10 h-max" style={{ filter: 'drop-shadow(0 4px 25px rgba(223, 178, 0, 0.3))' }} />}
                {type === "half" && <FaStarHalfAlt className="text-yellow-400 w-10 h-max" style={{ filter: 'drop-shadow(0 4px 25px rgba(223, 178, 0, 0.3))' }} />}
                {type === "empty" && <FaRegStar className="text-[#C9CACC] w-10 h-max" style={{ filter: 'drop-shadow(0 4px 25px rgba(223, 178, 0, 0.3))' }} />}
              </div>
            );
          })}
        </div>

        <div className="text-center mb-0">
          <p className="text-[#C9CACC] text-2xl font-bold" style={{ fontFamily: "'Cormorant', serif" }}>
            ({reviewCount.toLocaleString()} Reviews)
          </p>
        </div>
      </div >

      {/* Small */}
      <div div className={`flex lg:hidden flex-col transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} >
        <div className="flex justify-center items-center">
          <h1
            className={`text-[64px] font-semibold text-[#EAAE8F] leading-[78px]`}
            style={{
              fontFamily: "'Cormorant Infant', serif",
              textShadow:
                "0 0 10px rgba(234,174,143,0.4), 0 0 20px rgba(234,174,143,0.2)",
            }}
          >
            {rating.toFixed(2)}
          </h1>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-center gap-2.5">
            {[1, 2, 3, 4, 5].map((star) => {
              const type = getStarType(star);
              return (
                <div key={star} className="relative w-8 h-max flex items-center justify-center">
                  {type === "full" && <FaStar className="text-yellow-400 w-8 h-max" style={{ filter: 'drop-shadow(0 4px 25px rgba(223, 178, 0, 0.3))' }} />}
                  {type === "half" && <FaStarHalfAlt className="text-yellow-400 w-8 h-max" style={{ filter: 'drop-shadow(0 4px 25px rgba(223, 178, 0, 0.3))' }} />}
                  {type === "empty" && <FaRegStar className="text-[#C9CACC] w-8 h-max" style={{ filter: 'drop-shadow(0 4px 25px rgba(223, 178, 0, 0.3))' }} />}
                </div>
              );
            })}
          </div>

          <div className="text-center mb-0">
            <p className="text-[#C9CACC] text-[15px] font-bold" style={{ fontFamily: "'Cormorant', serif" }}>
              ({reviewCount.toLocaleString()} Reviews)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const HeaderContent = ({ isVisible }) => {
  return (
    <>
      {/* Large */}
      <div className={`hidden lg:flex flex-col gap-2.5 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
        <h1
          className="text-[64px] font-semibold mb-2 leading-tight text-[#EAAE8F] text-center"
          style={{
            fontFamily: "'Cormorant Upright', serif",
            textShadow: "0 0 20px rgba(234, 88, 12, 0.5)",
          }}
        >
          Dinilai
          <span className="text-[#C54300]"> Tinggi</span> {" "}
          oleh Pecinta Kuliner
          <span className="text-[#C54300]"> Nusantara</span>
        </h1>

        <p
          className="text-[#BDBDBD] text-xl lg:text-[36px] font-semibold leading-relaxed text-center mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            textShadow:
              "0 0 10px rgba(189, 189, 189, 0.3), 0 2px 6px rgba(0, 0, 0, 0.7)",
          }}
        >
          Kami percaya bahwa setiap ulasan merupakan saran istimewa. Kami berusaha menghadirkan
          pengalaman yang terbaik.
        </p>
      </div>

      {/* Small */}
      <div className={`flex lg:hidden flex-col items-center justify-center gap-[5px] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
        <h1
          className="text-[32px] max-w-[340px] font-semibold text-[#EAAE8F] text-center"
          style={{
            fontFamily: "'Cormorant Upright', serif",
            textShadow: "0 0 20px rgba(234, 88, 12, 0.5)",
          }}
        >
          Dinilai
          <span className="text-[#C54300]"> Tinggi</span> {" "}
          oleh Pecinta Kuliner
          <span className="text-[#C54300]"> Nusantara</span>
        </h1>

        <p
          className="text-[#BDBDBD] text-xl max-w-[360px] font-semibold text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            textShadow:
              "0 0 10px rgba(189, 189, 189, 0.3), 0 2px 6px rgba(0, 0, 0, 0.7)",
          }}
        >
          Kami percaya bahwa setiap ulasan merupakan saran istimewa. Kami berusaha menghadirkan
          pengalaman yang terbaik.
        </p>
      </div>
    </>
  )
}
// =================== COMPONENT: FoodCollage ===================
const FoodCollage = ({ imageUrls = [], isVisible }) => {
  return (
    <div
      className={`mt-10 flex justify-center w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col gap-3 w-full h-full">
        {/* Baris atas */}
        <div className="flex gap-3 h-[50%] ">
          <div className="rounded-[15px] lg:rounded-3xl overflow-hidden shadow-2xl flex-[0.55] hover:scale-[1.03] transition-all duration-300">
            <img src={imageUrls[0]} alt="food1" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[15px] lg:rounded-3xl overflow-hidden shadow-2xl flex-[0.45] h-[75%] self-end hover:scale-[1.03] transition-all duration-300">
            <img src={imageUrls[1]} alt="food2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Baris bawah */}
        <div className="flex gap-3 h-[50%]">
          <div className="rounded-[15px] lg:rounded-3xl overflow-hidden shadow-2xl flex-[0.35] h-[85%] hover:scale-[1.03] transition-all duration-300">
            <img src={imageUrls[2]} alt="food3" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[15px] lg:rounded-3xl overflow-hidden shadow-2xl flex-[0.33] h-[65%] hover:scale-[1.03] transition-all duration-300">
            <img src={imageUrls[3]} alt="food4" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-[0.32] gap-3">
            <div className="rounded-[15px] lg:rounded-3xl overflow-hidden shadow-2xl flex-1 hover:scale-[1.03] transition-all duration-300">
              <img src={imageUrls[4]} alt="food5" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[15px] lg:rounded-3xl overflow-hidden shadow-2xl flex-1 hover:scale-[1.03] transition-all duration-300">
              <img src={imageUrls[5]} alt="food6" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardContent = ({ isVisible }) => {
  const commentData = [
    {
      image: ImageNayataDewi,
      name: "Nayata Dewi",
      rating: 5,
      comment:
        "Makanan terasa sehat karena tidak terlalu asin, tidak terlalu gurih, dan tidak terlalu manis.",
      date: "Aug 10, 2025",
      images: [food1, food6],
    },
    {
      image: ImageDedeKurniawan,
      name: "Dede Kurniawan",
      rating: 4,
      comment:
        "Salah satu rumah makan penghilang rasa rindu masakan rumah. Penyajiannya pun prasmanan. Jadi kita bisa leluasa ambil.",
      date: "Sep 15, 2025",
      images: [food2],
    },
    {
      image: ImageLaodeSilalahiIsmail,
      name: "Laode Silalahi Ismail",
      rating: 5,
      comment:
        "Banyak pilihan menu lauknya, makanannya enak semua, pelayanannya juga ramah.",
      date: "Oct 05, 2025",
      images: [food3],
    },
    {
      image: ImageNoorBetty,
      name: "Noor Betty",
      rating: 4,
      comment:
        "Makanannya beraneka ragam alias komplit dan rasa masakannya pun ok banget.",
      date: "Oct 12, 2025",
      images: [food1, food3],
    },
    {
      image: ImageAntoSubianto,
      name: "Anto Subianto",
      rating: 5,
      comment:
        "Udah beberapa kali pesen, selalu tepat waktu dan makanannya masih hangat pas sampai. Favoritku nasi liwet, rasanya pas.",
      date: "Oct 18, 2025",
      images: [food2, food6],
    },
    {
      image: ImageDeniIrawan,
      name: "Deni Irawan",
      rating: 4,
      comment:
        "Rasa makanan sangat autentik, namun harga sedikit di atas rata-rata.",
      date: "Oct 17, 2025",
      images: [food4],
    },
    {
      image: ImageRosmanHarianto,
      name: "Rosman Harianto",
      rating: 5,
      comment:
        "Saat siang hari masih lumayan komplit, banyak alternatif sayur dan lauk siap saji, bersih rapih dan enak.",
      date: "Oct 16, 2025",
      images: [food3],
    },
  ];
  return (
    <div
      className={`mt-5 w-max h-[400px] lg:h-[500px] overflow-y-auto custom-scrollbar mask-fade transform transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col lg:gap-12 gap-5 items-center lg:m-10 mb-5 mt-5">
        {commentData.map((item, index) => (
          <CommentRatingCard
            key={index}
            image={item.image}
            name={item.name}
            rating={item.rating}
            comment={item.comment}
            date={item.date}
            images={item.images}
          />
        ))}
      </div>
    </div>
  );
}

export function RatingSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [ratingVisible, setRatingVisible] = useState(false);
  const [foodVisible, setFoodVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [ratingMobileVisible, setRatingMobileVisible] = useState(false);
  const [foodMobileVisible, setFoodMobileVisible] = useState(false);
  const [cardMobileVisible, setCardMobileVisible] = useState(false);

  const headerRef = useRef(null);
  const ratingRef = useRef(null);
  const foodRef = useRef(null);
  const cardRef = useRef(null);
  const ratingMobileRef = useRef(null);
  const foodMobileRef = useRef(null);
  const cardMobileRef = useRef(null);

  useEffect(() => {
    const observerHeader = new IntersectionObserver(([entry]) => setHeaderVisible(entry.isIntersecting), { threshold: 0.3 });
    if (headerRef.current) observerHeader.observe(headerRef.current);
    return () => observerHeader.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setRatingVisible(entry.isIntersecting), { threshold: 0.3 });
    if (ratingRef.current) observer.observe(ratingRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setFoodVisible(entry.isIntersecting), { threshold: 0.3 });
    if (foodRef.current) observer.observe(foodRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setCardVisible(entry.isIntersecting), { threshold: 0.3 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setRatingMobileVisible(entry.isIntersecting), { threshold: 0.3 });
    if (ratingMobileRef.current) observer.observe(ratingMobileRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setFoodMobileVisible(entry.isIntersecting), { threshold: 0.3 });
    if (foodMobileRef.current) observer.observe(foodMobileRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setCardMobileVisible(entry.isIntersecting), { threshold: 0.3 });
    if (cardMobileRef.current) observer.observe(cardMobileRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rating-section relative bg-[#3C261A] overflow-hidden">
      {/* Background Large */}
      <img
        className="hidden lg:block absolute opacity-50 top-70 left-50"
        src={backgroundKoki}
        alt="Background Koki"
      />
      <img
        className="hidden lg:block absolute opacity-50 top-75 right-40"
        src={backgroundSpoon}
        alt="Background Spoon"
      />
      <img
        className="hidden lg:block absolute opacity-50 bottom-10 right-125"
        src={backgroundDish}
        alt="Background Dish"
      />

      {/* Background Small */}
      <img
        className="block lg:hidden absolute opacity-50 top-80 scale-80 -rotate-20 -right-3"
        src={backgroundKoki}
        alt="Background Koki"
      />
      <img
        className="block lg:hidden absolute opacity-50 top-65 scale-60 rotate-80 -left-5"
        src={backgroundSpoon}
        alt="Background Spoon"
      />
      <img
        className="block lg:hidden absolute opacity-50 top-186 scale-55 right-23"
        src={backgroundDish}
        alt="Background Dish"
      />

      <div className="flex flex-col lg:gap-0 gap-8 items-center justify-center my-20 mx-auto">
        <div ref={headerRef}>
          <HeaderContent isVisible={headerVisible} />
        </div>

        <div className="hidden lg:flex w-full justify-center items-center gap-16">
          <div className="flex flex-col items-center" ref={ratingRef}>
            <RatingDisplay rating={4.78} reviewCount={2640} isVisible={ratingVisible} />
            <div ref={cardRef}>
              <CardContent isVisible={cardVisible} />
            </div>
          </div>
          <div ref={foodRef}>
            <FoodCollage imageUrls={[food1, food2, food3, food4, food5, food6]} isVisible={foodVisible} />
          </div>
        </div>

        <div className="flex flex-col lg:hidden w-full justify-center items-center">
          <div ref={ratingMobileRef}>
            <RatingDisplay rating={4.78} reviewCount={2640} isVisible={ratingMobileVisible} />
          </div>
          <div ref={foodMobileRef}>
            <FoodCollage imageUrls={[food1, food2, food3, food4, food5, food6]} isVisible={foodMobileVisible} />
          </div>
          <div ref={cardMobileRef}>
            <CardContent isVisible={cardMobileVisible} />
          </div>
        </div>
      </div>
    </div>
  );
}
