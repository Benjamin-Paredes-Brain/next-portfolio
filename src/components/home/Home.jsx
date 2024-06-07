import { lazy, Suspense } from "react";
import { CiLinkedin } from "react-icons/ci"
import { BiLogoGithub } from "react-icons/bi";

const StarsCanvas = lazy(() => import("@/components/models/Stars.jsx"))

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-stroke text-3xl uppercase text-balance text-center xl:text-4xl">Benjamín Martin Paredes Brain</h1>
      <h2 className="text-customColor5 text-balance text-center text-lg mt-3 xl:text-xl">+1 year experience. Fullstack MERN Developer. From Córdoba, Argentina.</h2>

      <div className="flex items-center justify-center gap-10 text-customColor2 z-30 text-5xl my-2 lg:my-4">
        <a href="https://www.linkedin.com/in/benjamin-martin-paredes-brain/" target="_blank" aria-label="LinkedIn"><CiLinkedin /></a>
        <a href="https://github.com/Benjamin-Paredes-Brain" target="_blank" aria-label="GitHub"><BiLogoGithub /></a>
      </div>
      <Suspense fallback={null}>
        <StarsCanvas />
      </Suspense>
    </section>
  );
};
export default Home;