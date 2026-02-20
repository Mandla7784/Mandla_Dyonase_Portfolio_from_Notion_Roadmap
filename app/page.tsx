import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import VideoJourney from "@/components/VideoJourney";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Tools />
      <VideoJourney />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  );
}
