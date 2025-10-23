import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export const CommentCard = ({ image, name, rating, comment, date, index }) => {
  // Buat array bintang berdasarkan rating (mendukung setengah)
  const stars = Array.from({ length: 5 }, (_, i) => {
    const full = i + 1 <= Math.floor(rating);
    const half = !full && rating - i >= 0.5;
    return full ? (
      <FaStar key={i} className="text-[#FFD700] text-[20px]" />
    ) : half ? (
      <FaStarHalfAlt key={i} className="text-[#FFD700] text-[20px]" />
    ) : (
      <FaRegStar key={i} className="text-[#FFD700] text-[20px]" />
    );
  });

  return (
    <div
      className="commentCard w-[505px] h-[220px] flex flex-col gap-[10px] justify-between px-[20px] py-[25px] rounded-[30px] relative transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: index % 2 === 0 ? "#3C261A" : "#31211A",
      }}
    >
      <p
        className="text-2xl font-normal text-[#BDBDBD] leading-[28px]"
        style={{ fontFamily: "Roboto" }}
      >
        {comment}
      </p>

      <div className="flex items-end justify-between w-full mt-4">
        <div className="flex items-center gap-[12px]">
          <img
            src={image}
            className="rounded-full object-cover w-[60px] h-[60px]"
            alt={name}
          />
          <div className="flex flex-col">
            <p
              className="font-medium text-[20px] text-[#BDBDBD]"
              style={{ fontFamily: "Roboto" }}
            >
              {name}
            </p>
            <div className="flex gap-[3px] mt-[2px]">{stars}</div>
          </div>
        </div>

        <p
          className="text-[20px] font-medium text-[#BDBDBD] self-end"
          style={{ fontFamily: "Roboto" }}
        >
          {date}
        </p>
      </div>
    </div>
  );
};
