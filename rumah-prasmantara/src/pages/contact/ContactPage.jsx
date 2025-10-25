import { NavigationBar } from "../../components/navigation/NavigationBar";
import { HeroSection } from "./hero/HeroSection";
import './ContactPage.css'
import { QuestionSection } from "./question/QuestionSection";
import { WaveBottom } from "../../components/wave/WaveBottom";
import { ReserveSection } from "./reserve/ReserveSection";
import { Footer } from "../../components/footer/Footer";


export function ContactPage() {
  return (
    <>
      <div className="relative h-fit w-full bg-linear-to-b from-[#402719] to-[#3C261A]">
        <HeroSection />
        <QuestionSection />
      </div>
      <ReserveSection />
      <div className="relative bg-[#3C261A] overflow-hidden">
        <Footer />
      </div>
    </>
  )
}