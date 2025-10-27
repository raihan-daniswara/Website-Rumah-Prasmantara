import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export const CommentRatingCard = ({
  image,
  name,
  rating,
  comment,
  date,
  images = [],
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const full = i + 1 <= Math.floor(rating);
    const half = !full && rating - i >= 0.5;
    return full ? (
      <FaStar key={i} className="text-[#FFD700] text-[15px] lg:text-[20px]" />
    ) : half ? (
      <FaStarHalfAlt key={i} className="text-[#FFD700] text-[15px] lg:text-[20px]" />
    ) : (
      <FaRegStar key={i} className="text-[#FFD700] text-[15px] lg:text-[20px]" />
    );
  });

  return (
    <>
      {/* Large */}
      <div
        className="hidden lg:flex commentCard w-[550px] bg-[#31211A] h-auto flex-col gap-3 justify-between px-5 py-[25px] rounded-[30px] relative transition-all duration-300 hover:scale-105"
      >
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
        {/* Comment */}
        <p
          className="text-2xl font-normal text-[#BDBDBD] leading-7"
          style={{ fontFamily: "Roboto" }}
        >
          {comment}
        </p>

        <div className="flex items-end">
          {/* Images below comment */}
          {images.length > 0 && (
            <div className="flex w-full gap-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`preview-${i}`}
                  className="w-[100px] h-[100px] object-cover rounded-xl"
                />
              ))}
            </div>
          )}

          {/* Bottom section */}
          <div className="flex items-end justify-end w-full">
            <p
              className="text-[20px] font-medium text-[#BDBDBD]"
              style={{ fontFamily: "Roboto" }}
            >
              {date}
            </p>
          </div>
        </div>
      </div>

      {/* Small */}
      <div
        className="flex lg:hidden commentCard w-[350px] bg-[#31211A] h-auto flex-col gap-3 justify-between px-[15px] py-[15px] rounded-[30px] relative transition-all duration-300 hover:scale-105"
      >
        <div className="flex items-center gap-1.5">
          <img
            src={image}
            className="rounded-full object-cover w-[45px] h-[45px]"
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
        {/* Comment */}
        <p
          className="text-[15px] font-normal text-[#BDBDBD]"
          style={{ fontFamily: "Roboto" }}
        >
          {comment}
        </p>

        <div className="flex items-end">
          {/* Images below comment */}
          {images.length > 0 && (
            <div className="flex w-full gap-[5px]">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`preview-${i}`}
                  className="w-[55px] h-[55px] object-cover rounded-xl"
                />
              ))}
            </div>
          )}

          {/* Bottom section */}
          <div className="flex items-end justify-end w-full">
            <p
              className="text-[14px] font-medium text-[#BDBDBD]"
              style={{ fontFamily: "Roboto" }}
            >
              {date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
