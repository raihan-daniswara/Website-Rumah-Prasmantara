import { NavLink } from "react-router-dom";

// font
const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

export const SpecialMenuCard = ({ image, name, description, price, day, rating }) => {
  return (
    <>
      {/* Large */}
      <div className="hidden lg:flex menu-card relative w-fit h-[375px] bg-[#3C261A] rounded-[30px] overflow-hidden shadow-lg items-center">
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
          <div className="absolute right-0 top-0 h-full w-[70px] bg-linear-to-l from-[#3C261A] via-[#3C261A] to-transparent" />
        </div>

        <div className="py-5 pr-[25px] gap-[15px] flex flex-col h-full relative">
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

      {/* Small */}
      <div className="flex lg:hidden menu-card relative w-[360px] h-[221px] bg-[#3C261A] rounded-[30px] overflow-hidden shadow-lg items-center">
        {/* Pita Hari */}
        <div className="tape-day absolute z-20 top-4 -left-9 -rotate-45 bg-[#EAAE8F] w-[150px] py-1.5">
          <h4
            className="text-[20px] text-[#C54300] font-bold text-center"
            style={{ fontFamily: font.cormorantUpright }}
          >
            Tiap {day}!
          </h4>
        </div>

        {/* Bagian Gambar */}
        <div className="relative h-full w-[60%] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover scale-110 translate-x-[-15px] z-0"
          />
          <div className="absolute right-0 top-0 w-[100px] h-full bg-linear-to-l from-[#3C261A] via-[#3C261A]/70 to-transparent z-1"></div>
        </div>

        {/* Bagian Teks */}
        <div className="flex flex-col justify-between pb-4 pt-2 -ml-10 pr-4 h-full relative z-10 w-full">
          <div className="flex justify-between">
            <h3
              className="text-[28px] font-bold text-[#EAAE8F]"
              style={{ fontFamily: font.cormorantUpright }}
            >
              <span className="text-[#C54300]">{name}</span>
            </h3>

            {/* Rating */}
            <div
              className="flex items-center text-[#DFB200] font-semibold mt-1 gap-[5px]"
              style={{ fontFamily: font.cormorantInfant }}
            >
              <span className="text-yellow-400 text-[20px]">★</span>
              <span className="ml-1 text-[20px]">{rating}</span>
            </div>
          </div>

          {/* Deskripsi */}
          <p
            className="text-[16px] text-[#BDBDBD] font-semibold leading-snug"
            style={{ fontFamily: font.cormorantGaramond }}
          >
            {description}
          </p>

          {/* Harga */}
          <h3
            className="text-[24px] font-bold text-[#EAAE8F]"
            style={{ fontFamily: font.cormorantGaramond }}
          >
            Rp. <span className="text-[#C54300]">{price}</span>
          </h3>

          {/* Tombol Detail */}
          <NavLink
            to=""
            className="w-full h-10 text-center bg-[#C54300] rounded-full text-[#EAAE8F] text-[20px] font-bold transition-colors duration-300 flex items-center justify-center hover:bg-[#a83a00]"
            style={{ fontFamily: font.cormorantUpright }}
          >
            Detail
          </NavLink>
        </div>
      </div>
    </>
  );
};