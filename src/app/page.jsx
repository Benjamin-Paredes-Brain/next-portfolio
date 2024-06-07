import Navbar from "@/components/Navbar";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";


const Page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Page