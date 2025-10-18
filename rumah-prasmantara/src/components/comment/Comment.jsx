

export const CommentCard = ({ image, name, rating, comment, date, index }) => (
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
          <div>
            <span className="text-yellow-400 text-[21px]">
              {"★".repeat(rating)}
            </span>
          </div>
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