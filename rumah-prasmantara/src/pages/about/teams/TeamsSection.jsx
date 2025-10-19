import "./TeamsSection.css";
import imageTira from "../../../assets/about/teams/tira.svg";
import imageRinto from "../../../assets/about/teams/rinto.svg";
import imageAndi from "../../../assets/about/teams/andi.svg";
import imageKasim from "../../../assets/about/teams/kasim.svg";
import imageWulan from "../../../assets/about/teams/wulan.svg";
import imagePandu from "../../../assets/about/teams/pandu.svg";
import imageIvan from "../../../assets/about/teams/ivan.svg";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
  cormorant: '"Cormorant", serif',
};

const teamsData = [
  {
    image: imageTira,
    name: "Tira Hartini",
    role: "Quality Control",
  },
  {
    image: imageRinto,
    name: "Rinto Wijayanto",
    role: "Founder",
  },
  {
    image: imageAndi,
    name: "Andi Wijaya",
    role: "Co-Founder",
  },
  {
    image: imageKasim,
    name: "Kasim Permadi",
    role: "Manager",
  },
  {
    image: imageWulan,
    name: "Wulan Winarsih",
    role: "Recipe Consultant",
  },
  {
    image: imagePandu,
    name: "Pandu Hidayanto",
    role: "Head Chef",
  },
  {
    image: imageIvan,
    name: "Ivan Mahendra",
    role: "Culinary Partner",
  },
];

const TextContent = () => (
  <div className="textContent flex flex-col gap-2.5 text-center">
    <h1
      className="hero-paragraph text-[#EAAE8F] font-bold text-6xl leading-[78px]"
      style={{ fontFamily: font.cormorantUpright }}
    >
      Di Balik <span className="text-[#C54300]">Sajian Nusantara</span>
    </h1>
    <p
      className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Dari warisan rasa yang terjaga di setiap hidangan, kami hadirkan yang terbaik untuk
      <br />
      Anda.
    </p>
  </div>
);

const TeamsContent = () => {
  return (
    <div className="mt-10">
      {/* First row with 4 items */}
      <div className="grid grid-cols-4 gap-10">
        {teamsData.slice(0, 4).map((team, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={team.image} className="w-full h-max" />
            <div className="flex flex-col items-center mt-4">
              <p
                className="font-bold text-4xl text-[#C54300]"
                style={{ fontFamily: font.cormorantUpright }}
              >
                {team.name}
              </p>
              <p
                className="text-[28px] font-bold text-[#EAAE8F]"
                style={{ fontFamily: font.cormorantGaramond }}
              >
                <span style={{ fontFamily: font.cormorant }}>
                  {team.role.charAt(0)}
                </span>
                {team.role.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Second row with 3 items, centered */}
      <div className="flex justify-center gap-10 mt-10">
        {teamsData.slice(4).map((team, index) => (
          <div key={index + 4} className="flex flex-col items-center">
            <img src={team.image} className="w-full h-max" />
            <div className="flex flex-col items-center mt-4">
              <p
                className="font-bold text-4xl text-[#C54300]"
                style={{ fontFamily: font.cormorantUpright }}
              >
                {team.name}
              </p>
              <p
                className="text-[28px] font-bold text-[#EAAE8F]"
                style={{ fontFamily: font.cormorantGaramond }}
              >
                <span style={{ fontFamily: font.cormorant }}>
                  {team.role.charAt(0)}
                </span>
                {team.role.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TeamsSection = () => {
  return (
    <section className="py-16 px-4 flex flex-col items-center justify-center">
      <TextContent />
      <TeamsContent />
    </section>
  );
};