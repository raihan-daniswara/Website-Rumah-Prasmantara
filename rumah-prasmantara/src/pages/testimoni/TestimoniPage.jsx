import { NavigationBar } from "../../components/navigation/NavigationBar";
import { CurhatanSection } from "./curhatan/CurhatanSection";
import { HeroSection } from "./hero/HeroSection";
import './TestimoniPage.css'
export function TestimoniPage(){
  return(
    <>
    <div className="relative bg-[#3C261A]">
        <HeroSection />
        <CurhatanSection />
      </div>
    </>
  )
}