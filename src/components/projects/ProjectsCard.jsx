import BackgroundGradient from "./BackgroundGradient";
import { GiUfo } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";

function ProjectsCard() {
    const projects = [
        {
            title: "Más Que Muebles",
            description: "The objective of the website is to make the business known to the digital world, telling its history, means of contact and products. I was in charge of the complete development and SEO analysis. It is currently in production.",
            thumbnail: "/img/projects/mqm.webp",
            url: "https://masquemuebles.com.ar/",
            technologies: [
                { name: "React" },
                { name: "Firebase" },
                { name: "Sass" }
            ],
        },
        {
            title: "CitaClick",
            description: "This is a web system developed with full stack technologies to manage appointments. It has three roles (administrator, professional, user) each with their respective responsibilities.",
            thumbnail: "/img/projects/CitaClick-Mockup.webp",
            url: "https://static.benjadev.com/",
            technologies: [
                { name: "Nodejs" },
                { name: "Nextjs" },
                { name: "Tailwindcss" }
            ],
            video: "https://www.youtube.com/watch?v=cN0IDI12Sz0&t=1s"
        },
    ];

    return (
        <div className="flex flex-col gap-24 md:flex-row">
            {projects.map((project, index) => (
                <BackgroundGradient className="rounded-[22px] max-w-sm bg-gradient-to-bl from-customColor2 to-customColor1 p-2">

                    <div key={index} className="flex flex-col gap-2 relative group p-8">
                        <img loading="lazy" className="object-contain mx-auto w-[600px] h-[300px]" src={project.thumbnail} alt={project.title} />
                        <p className="text-xl text-black mt-4 mb-2 dark:text-neutral-200">{project.title}</p>
                        <div
                            className="absolute p-8 inset-0 
                            flex flex-col items-center justify-center gap-10
                            opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-95 rounded-[22px]"
                        >
                            <p className="text-md text-customColor5">{project.description}</p>
                            <div className="w-full">
                                <a href={project.url} target="_blank" className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#160e2b_50%,#E2CBFF_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-customColor1 px-3 py-1 text-md gap-2 font-medium text-customColor4 backdrop-blur-3xl">
                                        Website <GiUfo />
                                    </span>
                                </a>
                                {
                                    project.video && (
                                        <a href={project.video} className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full mt-4" target="_blank">
                                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#160e2b_50%,#E2CBFF_100%)]" />
                                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-customColor1 px-3 py-1 text-md gap-2 font-medium text-customColor4 backdrop-blur-3xl">
                                                Check how it works <FaYoutube />
                                            </span>
                                        </a>
                                    )
                                }
                            </div>
                            <div className="grid grid-cols-3 items-center justify-items-center">
                                {project.technologies.map((technology, techIndex) => (
                                    <span className="rounded-full py-1 px-4 text-white flex items-center bg-black text-sm font-bold dark:bg-zinc-800 w-fit" key={techIndex}>
                                        {technology.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </BackgroundGradient>
            ))
            }

        </div >
    );
}

export default ProjectsCard;