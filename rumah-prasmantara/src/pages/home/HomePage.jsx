import { NavigationBar } from "../../components/navigation/NavigationBar";
import { HeroSection } from "./hero/HeroSection";
import { StatsSection } from "./stats/StatsSection";
import { StrengthSection } from "./strength/strengthSection";

import './HomePage.css'
import { MenuSection } from "./menu/MenuSection";
export function HomePage() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <StatsSection />
      <div className="w-full pt-30 bg-[#3C261A] flex flex-col gap-15">
        <StrengthSection />
        <MenuSection />
      </div>
    </>
  );
}