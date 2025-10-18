import { NavLink } from "react-router-dom";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};


export const MenuCard = ({ image, title, rating, description }) => {
  return (
    <div className="menu-card relative w-[450px] h-[610px] bg-[#2D1F18] px-[20px] py-[20px] rounded-[30px] overflow-hidden shadow-lg flex flex-col">
      <div className="w-full h-[300px] rounded-[25px] flex flex-col gap-[25px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-125 -translate-x-[13px]"
        />
      </div>
      <div className="pt-[15px] gap-[15px] flex flex-col mb-[25px]">
        <div className="flex justify-between">
          <h3
            className="text-5xl font-bold text-[#EAAE8F]"
            style={{ fontFamily: font.cormorantUpright }}
          >
            {title.split(" ")[0]}{" "}
            <span className="text-[#C54300]">{title.split(" ")[1]}</span>
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
          className="text-[28px] text-[#BDBDBD] mt-2 font-bold leading-[34px]"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          {description}
        </p>
      </div>
      <NavLink
        to={`/menu/${title.toLowerCase().replace(" ", "-")}`}
        className="w-full h-[65px] text-center bg-[#C54300] rounded-full text-[#EAAE8F] text-4xl font-bold transition-colors duration-300 flex items-center justify-center"
        style={{ fontFamily: font.cormorantUpright }}
      >
        Detail
      </NavLink>
    </div>
  );
};