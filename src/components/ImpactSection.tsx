const impactProjects = [
  {
    title: "Rapid Disaster Routing",
    description:
      "Optimized humanitarian supply corridors after Category 5 hurricanes in the Pacific.",
    kpi: "Communities Served",
    metric: "1.8M",
  },
  {
    title: "Epidemic Early Warning",
    description:
      "Spatial syndromic surveillance cut outbreak detection time to under 36 hours.",
    kpi: "Time Saved",
    metric: "62%",
  },
  {
    title: "Net-Zero Campus Playbook",
    description:
      "Campus digital twin delivered a pathway to 85% emission reduction by 2032.",
    kpi: "Carbon Reduced",
    metric: "14.2kt",
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative border-t border-[#E5D9C0] bg-white py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
            Sustainability & impact in motion.
          </h2>
          <p className="mt-4 text-base text-[#4F3224]">
            Students co-create resilient futures alongside communities, agencies, and global coalitions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {impactProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-[#E8DCC7] bg-[#fff8ef] p-6"
            >
              <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                {project.kpi}
              </p>
              <p className="mt-2 text-4xl font-semibold text-[#782F40]">
                {project.metric}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-[#2F1B16]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-[#4F3224]">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
