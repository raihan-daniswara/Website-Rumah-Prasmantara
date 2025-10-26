import { HiOutlineX } from "react-icons/hi";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

export const MenuModal = ({ isOpen, onClose, menu }) => {
  if (!isOpen || !menu) return null;

  return (
    <div
      className="fixed inset-0 bg-black/20 flex justify-center items-center z-50 backdrop-blur-sm transition-all duration-1000"
      onClick={onClose}
    >
      <div
        className="relative bg-[#3C261A] border border-[#C54300] rounded-3xl p-6 w-[500px] max-h-[80vh] overflow-y-auto transition-all duration-1000"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Tutup */}
        <button
          className="absolute top-5 right-5 text-[#EAAE8F] text-2xl hover:text-[#C54300] transition"
          onClick={onClose}
        >
          <HiOutlineX />
        </button>

        <img
          src={menu.image}
          alt={menu.title}
          className="w-full h-[300px] mt-8 mb-6 rounded-2xl object-cover"
        />
        <div className="flex w-full items-center justify-between px-2 mb-4">
          <h2
            className="text-[#EAAE8F] text-5xl font-bold text-center"
            style={{ fontFamily: font.cormorantUpright }}
          >
            {menu.title.split(" ")[0]}{" "}
            <span className="text-[#C54300]">{menu.title.split(" ")[1]}</span>
          </h2>
          {/* Rating */}
          <div
            className="flex items-center text-[#DFB200] font-semibold mt-1 gap-[5px]"
            style={{ fontFamily: font.cormorantInfant }}
          >
            <span className="text-yellow-400 text-4xl">★</span>
            <span className="ml-1 text-4xl">{menu.rating}</span>
          </div>
        </div>

        {/* Deskripsi */}
        <p
          className="text-[#BDBDBD] lg:text-2xl text-xl font-medium mb-6 px-2"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          {menu.description}
        </p>

        {/* Harga */}
        <p
          className="text-[#EAAE8F] text-3xl font-bold text-center mt-4 bg-[#C54300] rounded-full py-2"
          style={{ fontFamily: font.cormorantUpright }}
        >
          Rp {menu.price.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
};


export const MenuCard = ({ image, title, rating, description, onDetail }) => {
  return (
    <>
      {/* Large */}
      <div className="hidden lg:flex flex-col menu-card relative w-[450px] h-[610px] bg-[#2D1F18] p-5 rounded-[30px] overflow-hidden shadow-lg ">
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
        <button
          onClick={onDetail}
          className="w-full h-[65px] text-center bg-[#C54300] rounded-full text-[#EAAE8F] text-4xl font-bold transition-colors duration-300 flex items-center justify-center"
          style={{ fontFamily: font.cormorantGaramond }}
        >
          Detail
        </button>
      </div>

      {/* Small */}
      <div className="flex flex-col lg:hidden menu-card relative w-[250px] h-fit bg-[#2D1F18] p-3 rounded-[30px] overflow-hidden shadow-lg">
        <div className="w-full h-40 rounded-[20px] flex flex-col gap-[15px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover scale-125 -translate-x-[13px]"
          />
        </div>
        <div className="pt-[5px] gap-[5px] flex flex-col mb-[25px]">
          <div className="flex justify-between">
            <h3
              className="text-[32px] font-bold text-[#EAAE8F]"
              style={{ fontFamily: font.cormorantUpright }}
            >
              {title.split(" ")[0]}{" "}
              <span className="text-[#C54300]">{title.split(" ")[1]}</span>
            </h3>
            <div
              className="flex items-center text-[#DFB200] font-semibold mt-1 gap-[5px]"
              style={{ fontFamily: font.cormorantInfant }}

            >
              <span className="text-yellow-400 text-[26px]">★</span>
              <span className="ml-1 text-2xl">{rating}</span>
            </div>
          </div>
          <p
            className="text-[16px] text-[#BDBDBD] font-bold"
            style={{ fontFamily: font.cormorantGaramond }}
          >
            {description}
          </p>
        </div>
        <button
          onClick={onDetail}
          className="w-full h-10 text-center bg-[#C54300] rounded-full text-[#EAAE8F] text-xl font-bold transition-colors duration-300 flex items-center justify-center"
          style={{ fontFamily: font.cormorantGaramond }}

        >
          Detail
        </button>
      </div>
    </>
  );
};