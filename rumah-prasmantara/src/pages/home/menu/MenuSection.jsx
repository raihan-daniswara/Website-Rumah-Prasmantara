import "./MenuSection.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import imageSotoBetawi from "../../../assets/home/soto-betawi.png";
import imageNasiLiwet from "../../../assets/home/nasi-liwet.png";
import imageSateLilit from "../../../assets/home/sate-lilit.png";
import imageRendang from "../../../assets/home/rendang.png";
import { MenuCard } from "../../../components/menu/Menu";

const font = {
  cormorantUpright: '"Cormorant Upright", serif',
  cormorantGaramond: '"Cormorant Garamond", serif',
  cormorantInfant: '"Cormorant Infant", serif',
};

const TextContent = () => (
  <div className="textContent flex flex-col gap-2.5 text-center">
    <h1
      className="hero-paragraph text-[#EAAE8F] font-bold text-6xl leading-[78px]"
      style={{ fontFamily: font.cormorantUpright }}
    >
      Menu <span className="text-[#C54300]">Andalan</span> Kami
    </h1>
    <p
      className="text-4xl text-[#BDBDBD] font-semibold mt-4 leading-[52px]"
      style={{ fontFamily: font.cormorantGaramond }}
    >
      Sajian favorit dan terlaris yang paling sering diburu pengunjung, cita rasa Nusantara
      <br />
      yang selalu jadi favorit setiap pengunjung.
    </p>
  </div>
);

// CardContent Component
const CardContent = () => {
  const menuData = [
    {
      image: imageSotoBetawi,
      title: "Soto Betawi",
      rating: 4.8,
      description:
        "Soto khas Betawi dengan kuah santan dan susu gurih, berpadu dengan daging sapi empuk.",
    },
    {
      image: imageNasiLiwet,
      title: "Nasi Liwet",
      rating: 4.6,
      description:
        "Nasi gurih dengan bumbu rempah khas Jawa, disajikan bersama ayam dan sayuran segar.",
    },
    {
      image: imageSateLilit,
      title: "Sate Lilit",
      rating: 4.7,
      description:
        "Sate khas Bali dari daging ikan atau ayam yang dibalut dengan bumbu rempah.",
    },
    {
      image: imageRendang,
      title: "Daging Rendang",
      rating: 4.8,
      description:
        "Rendang khas Minangkabau dengan daging sapi empuk dimasak lama dengan santan dan rempah.",
    },
  ];

  return (
    <div className="card-wrapper flex gap-6 justify-center mt-10">
      {menuData.map((menu, index) => (
        <MenuCard
          key={index}
          image={menu.image}
          title={menu.title}
          rating={menu.rating}
          description={menu.description}
        />
      ))}
    </div>
  );
};

export const MenuSection = () => {
  return (
    <section className="py-16 px-4 flex flex-col items-center justify-center">
      <TextContent />
      <CardContent />
    </section>
  );
};