import Hero from "@/components/Hero";
import About from "@/components/About";
import BestEdits from "@/components/BestEdits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <BestEdits />
      <Testimonials />
      <Contact />
    </main>
  );
}
