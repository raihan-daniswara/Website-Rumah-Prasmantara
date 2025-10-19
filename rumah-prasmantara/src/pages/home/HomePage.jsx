import { NavigationBar } from "../../components/navigation/NavigationBar";
import { HeroSection } from "./hero/HeroSection";
import { StatsSection } from "./stats/StatsSection";
import { StrengthSection } from "./strength/strengthSection";

import './HomePage.css'
import { MenuSection } from "./menu/MenuSection";
import { CommentSection } from "./comment/CommentSection";
export function HomePage() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <StatsSection />
      <div className="w-full pt-30 bg-gradient-to-b from-[#3C261A] to-[#442717] overflow-hidden flex flex-col gap-15">
        <StrengthSection />
        <MenuSection />
        <CommentSection />
      </div>
    </>
  );
}