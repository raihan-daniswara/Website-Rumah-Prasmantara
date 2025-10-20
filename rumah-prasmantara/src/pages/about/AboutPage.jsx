import { NavigationBar } from "../../components/navigation/NavigationBar";
import { WaveBottom } from "../../components/wave/WaveBottom";
import './AboutPage.css'
import { HeroSection } from "./hero/HeroSection";
import { LocationSection } from "./location/LocationSection";
import { PartnersSection } from "./partners/PartnersSection";
import { StrengthSection } from "./strength/StrengthSection";
import { TeamsSection } from "./teams/TeamsSection";
export function AboutPage(){
  return(
    <>
    <div className="relative bg-gradient-to-b from-[#3C261A] to-[#442717] overflow-hidden">
      <HeroSection />
      <StrengthSection />
      <PartnersSection />
      <TeamsSection />
      <WaveBottom />
    </div>
      <LocationSection />
    </>
  )
}