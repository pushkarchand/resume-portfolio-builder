import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pushkar Chand | Senior Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Pushkar Chand - Senior Software Engineer with 10+ years of experience building scalable web applications using React, TypeScript, Node.js, and more."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <section id="about" className="scroll-mt-20">
            <Experience />
          </section>
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
