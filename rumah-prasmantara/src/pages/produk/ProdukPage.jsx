import { NavigationBar } from "../../components/navigation/NavigationBar";
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
        <WaveBottom />
      </div>
      <SpecialSection />
      <div className="w-full h-max relative bg-gradient-to-b from-[#3C261A] to-[#442717]">
        <WaveTop />
        <MenuSection />
      </div>
    </>
  )
}