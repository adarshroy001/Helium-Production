import ImageStackedPinning from "@/components/Home/CardStack";
import HeroSection from "@/components/Home/HeroSection";
import HoverText from "@/components/Home/HoverText";
import Testinomials from "@/components/Home/Testinomials";
import WaitlistSection from "@/components/Home/WaitlistSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
          <HeroSection />
          <HoverText/>
          <ImageStackedPinning/>
          <Testinomials/>
          <WaitlistSection/>
    </main>
  );
}
