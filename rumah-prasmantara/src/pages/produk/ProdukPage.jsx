import { NavigationBar } from "../../components/navigation/NavigationBar";
import { FavoriteSection } from "./favorite/FavoriteSection";
import { HeroSection } from "./hero/HeroSection";
import './ProdukPage.css'
export function ProdukPage(){
  return(
    <div className="bg-linear-to-b from-[#402719] to-[#3C261A]">
      <HeroSection />
      <FavoriteSection />
    </div>
  )
}