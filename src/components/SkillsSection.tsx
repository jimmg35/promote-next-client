const skillCards = [
  {
    title: "GIS & Spatial Analysis",
    detail:
      "Map complex urban, environmental, and health patterns in hours, not weeks.",
  },
  {
    title: "Drone Remote Sensing",
    detail:
      "Plan UAV missions, capture multi-spectral imagery, and process 3D terrain models.",
  },
  {
    title: "Spatial Data Science",
    detail:
      "Blend Python, R, ML, and GeoAI pipelines for predictive decision intelligence.",
  },
  {
    title: "Disease & Risk Surveillance",
    detail:
      "Detect outbreaks early with spatial epidemiology dashboards and alerting.",
  },
  {
    title: "Climate & Sustainability Planning",
    detail:
      "Quantify mitigation scenarios and resilience strategies for communities.",
  },
  {
    title: "StoryMaps & Geo-Design",
    detail:
      "Translate analysis into immersive narratives and stakeholder-ready visuals.",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative border-t border-[#E5D9C0] bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
            Skills engineered for impact.
          </h2>
          <p className="mt-4 text-base text-[#4F3224]">
            Studio labs layer mission planning, computational pipelines, and storytelling so you can translate evidence into action across sectors.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillCards.map((skill) => (
            <article
              key={skill.title}
              className="group relative overflow-hidden rounded-3xl border border-[#E8DCC7] bg-[#fff8ef] p-7 transition hover:-translate-y-1 hover:border-[#782F40] hover:shadow-xl hover:shadow-[#CEB888]/30"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#CEB888]/20 opacity-0 transition group-hover:opacity-100"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold text-[#782F40]">{skill.title}</h3>
              <p className="mt-4 text-sm text-[#4F3224]">{skill.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
