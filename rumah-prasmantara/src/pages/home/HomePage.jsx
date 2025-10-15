import { NavigationBar } from "../../components/navigation/NavigationBar";
import { HeroSection } from "./hero/HeroSection";
import './HomePage.css'
import { Section } from "./stats/StatsSection";
export function HomePage() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <Section />
    </>
  );
}