import { Footer } from "../../components/footer/Footer";
import { WaveBottom } from "../../components/wave/WaveBottom";
import { WaveTop } from "../../components/wave/WaveTop";
import { FavoriteSection } from "./favorite/FavoriteSection";
import { HeroSection } from "./hero/HeroSection";
import { MenuSection } from "./menu/MenuSection";
import './ProdukPage.css'
import { SpecialSection } from "./spesial/SpesialSection";
export function ProdukPage() {
  return (
    <>
      <div className="relative bg-[#3C261A]">
        <HeroSection />
        <FavoriteSection />
      </div>
      <SpecialSection />
      <div className="w-full h-max relative bg-[#3C261A]">
        <MenuSection />
      </div>
      <div className="relative pt-25 w-full">
        <WaveBottom />
        <Footer />
      </div>
    </>
  )
}