import { NavigationBar } from "../../components/navigation/NavigationBar";
import { HeroSection } from "./hero/HeroSection";
import { StatsSection } from "./stats/StatsSection";
import { StrengthSection } from "./strength/StrengthSection";
import { CommentSection } from "./comment/CommentSection";
import { FavoriteSection } from "./favorite/FavoriteSection";
import './HomePage.css'
import { WaveBottom } from "../../components/wave/WaveBottom";
import { WaveTop } from "../../components/wave/WaveTop";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <div className="relative w-full pt-30 bg-linear-to-b from-[#3C261A] to-[#442717] flex flex-col gap-15">
        <StrengthSection />
        <FavoriteSection />
        <CommentSection />
      </div>
    </>
  );
}