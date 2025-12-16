import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';

import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';

export default function Home() {
  return (
    <main className="bg-ethereal-dark text-white min-h-screen relative">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <About />

      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
