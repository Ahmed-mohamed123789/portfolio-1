import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <div className="relative z-10 bg-background flex flex-col gap-12 sm:gap-24 md:gap-32 pb-24">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
