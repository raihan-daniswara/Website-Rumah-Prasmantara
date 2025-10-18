import { NavigationBar } from "../../components/navigation/NavigationBar";
import { HeroSection } from "./hero/HeroSection";
import { StatsSection } from "./stats/StatsSection";
import { StrengthSection } from "./strength/strengthSection";

import './HomePage.css'
export function HomePage() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <StatsSection />
      <div className="w-full bg-[#3C261A]">
        <StrengthSection />
        
      </div>
    </>
  );
}