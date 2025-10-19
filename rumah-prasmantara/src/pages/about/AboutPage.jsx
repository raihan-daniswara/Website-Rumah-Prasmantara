import { NavigationBar } from "../../components/navigation/NavigationBar";
import './AboutPage.css'
import { HeroSection } from "./hero/HeroSection";
import { PartnersSection } from "./partners/PartnersSection";
import { StrengthSection } from "./strength/StrengthSection";
import { TeamsSection } from "./teams/TeamsSection";
export function AboutPage(){
  return(
    <>
    <div className="bg-gradient-to-b from-[#3C261A] to-[#442717] overflow-hidden">
      <NavigationBar />
      <HeroSection />
      <StrengthSection />
      <PartnersSection />
      <TeamsSection />
    </div>
    
    </>
  )
}