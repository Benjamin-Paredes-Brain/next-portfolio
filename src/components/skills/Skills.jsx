"use client"

import { lazy, Suspense } from "react";
import { FaHtml5, FaCss3, FaJs, FaSass, FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import CardsGrid from "./CardsGrid";

const Spotlight = lazy(() => import("./SpotLight"))

const Skills = () => {

    const items = [
        { icon: FaHtml5, color: "#fd490b", title: "HTML5" },
        { icon: FaCss3, color: "#2299f8", title: "CSS3" },
        { icon: FaJs, color: "#f6de1d", title: "JAVASCRIPT" },
        { icon: FaSass, color: "#ce649b", title: "SASS" },
        { icon: FaReact, color: "#62dafc", title: "REACTJS" },
        { icon: FaNode, color: "#82cc29", title: "NODEJS" },
        { icon: FaGitAlt, color: "#f05032", title: "GIT" },
        { icon: FaGithub, color: "#000101", title: "GITHUB" },
        { icon: DiMongodb, color: "#58ac44", title: "MONGODB" },
        { icon: SiExpress, color: "#00000", title: "EXPRESSJS" },
        { icon: SiNextdotjs, color: "#ffffff", title: "NEXTJS" },
        { icon: SiTailwindcss, color: "#2596be", title: "TAILWINDCSS" }
    ];

    return (
        <section id="skills" className="section-separation">
            <h2 className='text-stroke title'>SKILLS</h2>
            <CardsGrid items={items} />
            <Suspense fallback={null}>
                <Spotlight />
            </Suspense>
        </section >
    )
}

export default Skills