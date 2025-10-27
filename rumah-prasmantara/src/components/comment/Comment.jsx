import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export const CommentCard = ({ image, name, rating, comment, date, index }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const full = i + 1 <= Math.floor(rating);
    const half = !full && rating - i >= 0.5;
    return full ? (
      <FaStar key={i} className="text-[#FFD700] text-[15px] lg:text-[15px]" />
    ) : half ? (
      <FaStarHalfAlt key={i} className="text-[#FFD700] text-[15px] lg:text-[15px]" />
    ) : (
      <FaRegStar key={i} className="text-[#FFD700] text-[15px] lg:text-[15px]" />
    );
  });

  return (
    <>
      {/* Large */}
      <div
        className="hidden lg:flex commentCard w-[505px] h-[220px] flex-col gap-2.5 justify-between px-5 py-[25px] rounded-[30px] relative transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: index % 2 === 0 ? "#3C261A" : "#31211A",
        }}
      >
        <p
          className="text-2xl font-normal text-[#BDBDBD] leading-7"
          style={{ fontFamily: "Roboto" }}
        >
          {comment}
        </p>

        <div className="flex items-end justify-between w-full mt-4">
          <div className="flex items-center gap-3">
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
              <div className="flex gap-[3px] mt-0.5">{stars}</div>
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

      {/* Small */}
      <div
        className="flex lg:hidden commentCard w-[320px] h-fit-[170px] flex-col items-baseline justify-between px-[15px] py-5 rounded-[20px] relative transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: index % 2 === 0 ? "#3C261A" : "#31211A",
        }}
      >
        <p
          className="text-[15px] font-normal text-[#BDBDBD]"
          style={{ fontFamily: "Roboto" }}
        >
          {comment}
        </p>

        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex items-center gap-3">
            <img
              src={image}
              className="rounded-full object-cover w-[43px] h-[43px]"
              alt={name}
            />
            <div className="flex flex-col">
              <p
                className="font-medium text-[14px] text-[#BDBDBD]"
                style={{ fontFamily: "Roboto" }}
              >
                {name}
              </p>
              <div className="flex gap-[3px] mt-0.5">{stars}</div>
            </div>
          </div>

          <p
            className="text-[14px] font-medium text-[#BDBDBD]"
            style={{ fontFamily: "Roboto" }}
          >
            {date}
          </p>
        </div>
      </div>
    </>
  );
};
