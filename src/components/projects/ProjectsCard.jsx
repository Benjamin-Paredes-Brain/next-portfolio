import BackgroundGradient from "./BackgroundGradient";
import { GiUfo } from "react-icons/gi";

function ProjectsCard() {
    const projects = [
        {
            title: "Más Que Muebles", description: "The objective of the website is to make the business known to the digital world, telling its history, means of contact and products. I was in charge of the complete development and SEO analysis. It is currently in production.",
            thumbnail: "/img/projects/mqm.webp", url: "https://masquemuebles.com.ar/",
            technologies: [
                { name: "React" },
                { name: "Firebase" },
                { name: "Sass" }
            ]
        },
    ]

    return (
        <div>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-8 bg-gradient-to-bl from-customColor2 to-customColor1">
                {
                    projects.map((project, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <img loading="lazy" className="object-contain h-[320px] w-[320px] mx-auto" src={project.thumbnail} alt={project.title} />
                            <p className="text-xl text-black mt-4 mb-2 dark:text-neutral-200">{project.title}</p>
                            <p className="text-md text-customColor5">{project.description}</p>
                            <a href={project.url} target="_blank" className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#160e2b_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-customColor1 px-3 py-1 text-md gap-2 font-medium text-customColor4 backdrop-blur-3xl">
                                    Website <GiUfo />
                                </span>
                            </a>
                            <div className="grid grid-cols-3 items-center justify-items-center">
                                {project.technologies.map((technology, techIndex) => (
                                    <span className="rounded-full py-1 px-4 text-white flex items-center bg-black mt-4 text-sm font-bold dark:bg-zinc-800 w-fit" key={techIndex}>
                                        {technology.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))
                }

            </BackgroundGradient>
        </div>
    );
}

export default ProjectsCard;