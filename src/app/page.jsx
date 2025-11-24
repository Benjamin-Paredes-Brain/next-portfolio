import Navbar from "@/components/Navbar";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Experience from "@/components/experience/Experience";


const Page = () => {
  return (
    <>
      <Navbar />
      <span className="space-y-48">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </span>
      <Footer />
    </>
  )
}

export default Page