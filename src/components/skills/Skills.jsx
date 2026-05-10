"use client";

import { lazy, Suspense } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import CardsGrid from "./CardsGrid";
import { BiLogoFirebase } from "react-icons/bi";
import { PowerBiIcon } from "./Icons";

const Spotlight = lazy(() => import("./SpotLight"));

const Skills = () => {
  const items = [
    { icon: FaHtml5, color: "#fd490b", title: "HTML5" },
    { icon: FaCss3, color: "#2299f8", title: "CSS3" },
    { icon: FaJs, color: "#f6de1d", title: "JavaScript" },
    { icon: FaPython, color: "#306998", title: "Python" },
    { icon: FaSass, color: "#ce649b", title: "Sass" },
    { icon: SiTailwindcss, color: "#2596be", title: "Tailwind CSS" },
    { icon: FaGitAlt, color: "#f05032", title: "Git" },
    { icon: FaGithub, color: "#ffffff", title: "GitHub" },
    { icon: FaReact, color: "#62dafc", title: "React" },
    { icon: FaNode, color: "#82cc29", title: "Node.js" },
    { icon: SiExpress, color: "#ffffff", title: "Express" },
    { icon: SiNextdotjs, color: "#ffffff", title: "Next.js" },
    { icon: BiLogoFirebase, color: "#ffca28", title: "Firebase" },
    { icon: DiPostgresql, color: "#ffffff", title: "PostgreSQL" },
    { icon: DiMongodb, color: "#58ac44", title: "MongoDB" },
    { icon: PowerBiIcon, color: "#ffffff", title: "Power BI" },
  ];

  return (
    <section id="skills" className="section-separation">
      <h2 className="text-stroke title">SKILLS</h2>
      <CardsGrid items={items} />
      <Suspense fallback={null}>
        <Spotlight />
      </Suspense>
    </section>
  );
};

export default Skills;
