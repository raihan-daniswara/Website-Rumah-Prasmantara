import { Footer } from "../../components/footer/Footer";
import { NavigationBar } from "../../components/navigation/NavigationBar";
import { WaveBottom } from "../../components/wave/WaveBottom";
import { WaveTop } from "../../components/wave/WaveTop";
import { CommentSection } from "./comment/CommentSection";
import { CurhatanSection } from "./curhatan/CurhatanSection";
import { HeroSection } from "./hero/HeroSection";
import './TestimoniPage.css'
export function TestimoniPage() {
  return (
    <>
      <div className="relative bg-[#3C261A]">
        <HeroSection />
        <CurhatanSection />
      </div>
      <div className="relative lg:py-20 py-10">
        <WaveBottom />
        <CommentSection />
        <WaveTop />
      </div>
      <div className="relative pt-25 h-fit w-full">
        <WaveBottom />
        <Footer />
      </div>
    </>
  )
}