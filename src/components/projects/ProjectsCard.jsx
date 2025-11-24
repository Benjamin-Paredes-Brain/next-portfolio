"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import BackgroundGradient from "./BackgroundGradient";
import { GiUfo } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
    {
        title: "Más Que Muebles",
        description:
            "A fully responsive website built to strengthen the brand’s digital presence. The platform showcases the company’s story, product catalog, and contact channels. I handled the end-to-end development, UI implementation, and complete SEO optimization to improve search visibility and customer engagement.",
        thumbnail: "/img/projects/mqm.webp",
        url: "https://masquemuebles.com.ar/",
        technologies: [{ name: "Reactjs" }, { name: "Firebase" }, { name: "Sass" }],
    },
    {
        title: "CitaClick",
        description:
            "A full-stack appointment management platform. Includes scheduling tools, dashboards, and automated workflows. Built with modern technologies to ensure scalability, fast performance, and an intuitive user experience.",
        thumbnail: "/img/projects/CitaClick.webp",
        // url: "https://static.benjadev.com/",
        technologies: [
            { name: "Nodejs" },
            { name: "Nextjs" },
            { name: "Tailwindcss" },
        ],
        video: "https://www.youtube.com/watch?v=cN0IDI12Sz0&t=1s",
    },
    {
        title: "Inmobiliaria Milanesio",
        description:
            "A real-estate management web platform built to provide a professional and trustworthy online experience for clients while simplifying property administration for the owner. Includes dynamic property listings, search filters, and a clean, SEO-optimized interface developed using modern full-stack technologies.",
        thumbnail: "/img/projects/InmobiliariaMilanesio.webp",
        url: "https://milanesioinmobiliaria.com.ar/",
        technologies: [
            { name: "Nodejs" },
            { name: "Nextjs" },
            { name: "Tailwindcss" },
        ],
    },
];

function ProjectCard({ project }) {
    return (
        <BackgroundGradient className="rounded-[22px] max-w-sm bg-gradient-to-bl from-customColor2 to-customColor1 p-2">
            <div className="flex flex-col gap-2 relative group p-8">
                <img
                    loading="lazy"
                    className="object-contain mx-auto w-[600px] h-[300px]"
                    src={project.thumbnail}
                    alt={project.title}
                />
                <p className="text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {project.title}
                </p>

                <div className="absolute p-8 inset-0 flex flex-col items-center justify-center gap-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-95 rounded-[22px]">
                    <p className="text-customColor5 text-sm lg:text-base">
                        {project.description}
                    </p>

                    <div className="w-full">
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] w-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#160e2b_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-customColor1 px-3 py-1 text-md gap-2 font-medium text-customColor4 backdrop-blur-3xl">
                                    Website <GiUfo />
                                </span>
                            </a>

                        )}

                        {project.video && (
                            <a
                                href={project.video}
                                target="_blank"
                                rel="noreferrer"
                                className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] w-full mt-4 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-sm lg:text-base"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#160e2b_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-customColor1 px-3 py-1 text-md gap-2 font-medium text-customColor4 backdrop-blur-3xl text-sm lg:text-base">
                                    Check how it works <FaYoutube />
                                </span>
                            </a>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {project.technologies.map((technology, techIndex) => (
                            <span
                                key={techIndex}
                                className="rounded-full py-1 px-4 text-white flex items-center bg-black dark:bg-zinc-800 w-fit text-sm lg:text-base"
                            >
                                {technology.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundGradient>
    );
}

// Carrusel solo hasta lg-
function CarouselLayout() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };

        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi]);

    const isScrollable = canScrollPrev || canScrollNext;

    return (
        <div className="relative mt-10 block lg:hidden">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_100%] md:flex-[0_0_50%] flex justify-center px-4"
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>

            {isScrollable && (
                <>
                    <button
                        type="button"
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-customColor4 hover:bg-customColor1 hover:text-black disabled:opacity-40 disabled:hover:bg-black/40 disabled:hover:text-customColor4 transition shadow-lg"
                    >
                        <FiChevronLeft className="text-lg" />
                    </button>

                    <button
                        type="button"
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-customColor4 hover:bg-customColor1 hover:text-black disabled:opacity-40 disabled:hover:bg-black/40 disabled:hover:text-customColor4 transition shadow-lg"
                    >
                        <FiChevronRight className="text-lg" />
                    </button>
                </>
            )}
        </div>
    );
}

// Layout fijo en lg+
function StaticLayout() {
    return (
        <div className="hidden lg:flex mt-10 gap-8 justify-center">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}

function ProjectsCard() {
    return (
        <>
            <CarouselLayout />
            <StaticLayout />
        </>
    );
}

export default ProjectsCard;