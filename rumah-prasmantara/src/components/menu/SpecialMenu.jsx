import { NavLink } from "react-router-dom";

// font
const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

export const SpecialMenuCard = ({ image, name, description, price, day, rating }) => {
  return (
    <div className="menu-card relative w-fit h-[375px] bg-[#3C261A] rounded-[30px] overflow-hidden shadow-lg flex items-center">
      <div className="tape-day absolute z-10 top-8 -left-25 -rotate-45 bg-[#EAAE8F] w-[330px] py-3">
        <h4
          className="text-[32px] text-[#C54300] font-bold text-center"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Tiap {day}!
        </h4>
      </div>

      <div className="relative w-fit h-full">
        <img
          src={image}
          alt={name}
          className="w-auto h-full object-cover -translate-x-[13px]"
        />
        <div className="absolute right-0 top-0 h-full w-[70px] bg-gradient-to-l from-[#3C261A] via-[#3C261A] to-transparent" />
      </div>

      <div className="py-[20px] pr-[25px] gap-[15px] flex flex-col h-full relative">
        <img
          src="/logo/rumah-prasmantara.svg"
          alt="Logo Prasmantara"
          className="absolute opacity-5 w-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />
        <div className="flex justify-between z-10">
          <h3
            className="text-5xl font-bold text-[#EAAE8F]"
            style={{ fontFamily: font.cormorantUpright }}
          >
            <span className="text-[#C54300]">{name}</span>
          </h3>
          <div
            className="flex items-center text-[#DFB200] font-semibold mt-1 gap-[5px]"
            style={{ fontFamily: font.cormorantInfant }}
          >
            <span className="text-yellow-400 text-4xl">★</span>
            <span className="ml-1 text-4xl">{rating}</span>
          </div>
        </div>
        <p
          className="w-[450px] text-[28px] text-[#BDBDBD] mt-2 font-bold leading-[34px] z-10"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          {description}
        </p>
        <h3
          className="text-[40px] font-bold text-[#EAAE8F] z-10"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Rp. <span className="text-[#C54300]">{price}</span>
        </h3>
        <NavLink
          to=""
          className="w-full h-[75px] text-center bg-[#C54300] rounded-3xl text-[#EAAE8F] text-4xl font-bold transition-colors duration-300 flex items-center justify-center z-10 hover:bg-[#a83a00]"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Detail
        </NavLink>
      </div>
    </div>
  );
};