import { NavigationBar } from "../../components/navigation/NavigationBar";
import { HeroSection } from "./hero/HeroSection";
import './ContactPage.css'
import { QuestionSection } from "./question/QuestionSection";
export function ContactPage() {
  return (
    <div className="h-fit w-full bg-gradient-to-b from-[#402719] to-[#3C261A]">
      <HeroSection />
      <QuestionSection />
    </div>
  )
}