import { Footer } from "../../components/footer/Footer";
import { NavigationBar } from "../../components/navigation/NavigationBar";
import { WaveBottom } from "../../components/wave/WaveBottom";
import './AboutPage.css'
import { HeroSection } from "./hero/HeroSection";
import { LocationSection } from "./location/LocationSection";
import { PartnersSection } from "./partners/PartnersSection";
import { StrengthSection } from "./strength/StrengthSection";
import { TeamsSection } from "./teams/TeamsSection";
export function AboutPage() {
  return (
    <>
      <div className="relative bg-linear-to-b from-[#442717] to-[#3C261A] overflow-hidden">
        <HeroSection />
        <StrengthSection />
        <PartnersSection />
        <TeamsSection />
      </div>
      <LocationSection />
      <div className="relative bg-[#3C261A] overflow-hidden">
        <Footer />
      </div>
    </>
  )
}