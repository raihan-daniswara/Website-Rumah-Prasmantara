import { NavigationBar } from "../../components/navigation/NavigationBar";
import './AboutPage.css'
import { HeroSection } from "./hero/HeroSection";
import { StrengthSection } from "./strength/StrengthSection";
export function AboutPage(){
  return(
    <>
    <div className="bg-gradient-to-b from-[#3C261A] to-[#442717] overflow-hidden">
      <NavigationBar />
      <HeroSection />
      <StrengthSection />
    </div>
    </>
  )
}