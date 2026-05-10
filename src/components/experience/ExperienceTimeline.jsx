import { MdArrowForward } from "react-icons/md";

export const ExperienceTimeline = () => {
  const workExperiences = [
    {
      id: "1",
      position: "Full Stack Developer",
      company: "Clínica Nahas",
      duration: "February 2026 - May 2026",
      description:
        "Developed an operational and financial management platform for a clinic, working closely with management roles to identify internal organization, control, and reporting problems that could be solved through software.",
      highlights: [
        "Centralized administrative and financial processes that were previously harder to track consistently.",
        "Built operational sections for internal staff to register and manage daily activity more efficiently.",
        "Delivered management-oriented reports to support better decision-making and internal control.",
      ],
      technologies: ["NestJS", "React", "Prisma ORM", "PostgreSQL"]
    },
    {
      id: "2",
      position: "Full Stack Developer",
      company: "TixPays",
      duration: "March 2025 - November 2025",
      description:
        "Developed an end-to-end platform for managing sales and consumptions at live events, including real-time ticket generation, stock and bar management, staff roles, and analytics dashboards with exportable reports.",
      highlights: [
        "Automated the full sales flow and on-demand ticket issuance during events.",
        "Reduced stock and cash discrepancies by implementing smart inventory and cash-withdraw tracking.",
        "Enabled real-time decision-making with live KPIs and downloadable reports for event managers.",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "React"],
    } 
  ];

  return (
    <div className="relative space-y-8 md:space-y-12">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-customColor7 via-customColor7 to-transparent" />

      {/* Experience entries */}
      <div className="space-y-8 md:space-y-12">
        {workExperiences.map((exp) => (
          <div key={exp.id} className="relative pl-20 md:pl-24">
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-customColor7 ring-4 ring-customColor1 hover:scale-125 transition-transform" />

            {/* Content */}
            <div className="space-y-2 md:space-y-3">
              {/* Position */}
              <h3 className="text-xl font-bold text-customColor7">
                {exp.position}
              </h3>

              {/* Company and duration */}
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                <p className="text-base md:text-lg font-bold text-customColor5">
                  {exp.company}
                </p>
                <p className="text-sm text-customColor2">
                  {exp.duration}
                </p>
              </div>

              {/* Description */}
              {exp.description && (
                <p className="text-sm md:text-base text-customColor3 leading-relaxed max-w-3xl pt-2">
                  {exp.description}
                </p>
              )}

              {/* Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wide text-customColor4 mb-2">
                    Key achievements
                  </p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm md:text-base text-customColor3 max-w-3xl"
                      >
                        <span className="mt-1 text-customColor7">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs md:text-sm font-bold uppercase tracking-wide text-customColor4 mb-2">
                    Main stack
                  </p>
                  <div className="flex flex-wrap gap-2 max-w-3xl">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-customColor7/30 px-3 py-1 text-xs md:text-sm text-customColor3"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Learn more link */}
              {exp.link && (
                <a
                  href={exp.link}
                  className="inline-flex items-center gap-2 text-customColor7 hover:text-amber-300 transition-colors text-sm md:text-base font-medium pt-2 group"
                >
                  Saber más
                  <MdArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};