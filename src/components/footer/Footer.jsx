import { CiLinkedin } from "react-icons/ci"
import { BiLogoGithub } from "react-icons/bi";
import { Suspense, lazy } from "react";

const ArrowButtonUp = lazy(() => import("@/components/footer/ArrowButtonUp.jsx"))

const Footer = () => {
    return (
        <footer className="section-separation text-customColor2 mt-12 flex items-center justify-between lg:mt-20 lg:text-xl">
            <p>© 2024 Benjamín Paredes.</p>
            <div className="flex items-center justify-center gap-4 text-3xl">
                <a href="https://www.linkedin.com/in/benjamin-martin-paredes-brain/" target="_blank" aria-label="LinkedIn"><CiLinkedin /></a>
                <a href="https://github.com/Benjamin-Paredes-Brain" target="_blank" aria-label="GitHub"><BiLogoGithub /></a>
            </div>
            <Suspense fallback={null}>
                <ArrowButtonUp />
            </Suspense>
        </footer>
    )
}

export default Footer