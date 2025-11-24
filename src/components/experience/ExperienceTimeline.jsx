import { MdArrowForward } from "react-icons/md"

export const ExperienceTimeline = () => {

  const workExperiences = [
    {
      id: "1",
      position: "Fullstack Developer",
      company: "TixPays",
      duration: "February 2025 - September 2025",
      description: "Developed an end-to-end platform for managing sales and consumptions at live events, including real-time ticket generation, stock and bar management, staff roles, and analytics dashboards with exportable reports.",
      highlights: [
        "Automated the full sales flow and on-demand ticket issuance during events.",
        "Reduced stock and cash discrepancies by implementing smart inventory and cash-withdraw tracking.",
        "Enabled real-time decision-making with live KPIs and downloadable reports for event managers.",
      ],
      // link: "#", // opcional
    },
  ]

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
              <h3 className="text-xl md:text-2xl font-bold text-customColor7">
                {exp.position}
              </h3>

              {/* Company and duration */}
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                <p className="text-base md:text-lg font-bold text-customColor5">
                  {exp.company}
                </p>
                <p className="text-sm md:text-base text-customColor2">
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
                  <p className="text-xs md:text-sm font-bold uppercase tracking-wide text-customColor4 mb-2">
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

  )
}