import jobData from "@/data/job-postings.json";

type JobPosting = {
  id: string;
  title: string;
  employer: string;
  city: string;
  salary: string;
  skills: string[];
  posted: string;
  type: string;
};

const jobPostings = jobData as JobPosting[];

const salaryBySkill = [
  {
    skill: "Spatial Data Science",
    range: "$88K - $122K",
    roles: "GeoAI Scientist, Spatial ML Engineer",
  },
  {
    skill: "Remote Sensing & UAV",
    range: "$72K - $98K",
    roles: "Imagery Analyst, Field Robotics Lead",
  },
  {
    skill: "Climate Risk Modeling",
    range: "$80K - $110K",
    roles: "Resilience Planner, ESG Strategist",
  },
  {
    skill: "Health & Bio-Surveillance",
    range: "$78K - $105K",
    roles: "Public Health GIS Analyst, Risk Intelligence Consultant",
  },
  {
    skill: "Geodesign & Storytelling",
    range: "$68K - $92K",
    roles: "Experience Designer, Civic Engagement Lead",
  },
];

export default function JobMarketSection() {
  return (
    <section
      id="jobs"
      className="relative border-t border-[#E5D9C0] bg-[#fff9f1] py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
            Real job market signals.
          </h2>
          <p className="mt-4 text-base text-[#4F3224]">
            We monitor live postings and alumni placement data to align coursework with emerging roles in climate, health, civic tech, and private innovation labs.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
              Latest roles
            </h3>
            <span className="text-xs text-[#6C4C3A]">
              Updated weekly from employer partners
            </span>
          </div>
          <div className="mt-4 flex gap-4 overflow-x-auto pb-4">
            {jobPostings.map((job) => (
              <article
                key={job.id}
                className="min-w-[260px] max-w-sm flex-1 rounded-3xl border border-[#E8DCC7] bg-white p-6 shadow-lg shadow-[#CEB888]/15"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-[#6C4C3A]">
                  <span>{job.type}</span>
                  <span>{job.posted}</span>
                </div>
                <h4 className="mt-3 text-lg font-semibold text-[#782F40]">
                  {job.title}
                </h4>
                <p className="mt-1 text-sm text-[#4F3224]">
                  {job.employer} - {job.city}
                </p>
                <p className="mt-4 text-sm font-semibold text-[#782F40]">
                  {job.salary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#E8DCC7] bg-[#fff8ef] px-3 py-1 text-xs text-[#4F3224]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[#E8DCC7] bg-white p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
            Skill to salary range
          </h3>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-left text-sm text-[#4F3224]">
              <thead className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#2F1B16]">
                    Skill focus
                  </th>
                  <th className="px-4 py-3 font-semibold text-[#2F1B16]">
                    Typical salary range
                  </th>
                  <th className="px-4 py-3 font-semibold text-[#2F1B16]">
                    Common roles
                  </th>
                </tr>
              </thead>
              <tbody>
                {salaryBySkill.map((row) => (
                  <tr key={row.skill} className="border-t border-[#F1E6D5]">
                    <td className="px-4 py-4 font-semibold text-[#782F40]">
                      {row.skill}
                    </td>
                    <td className="px-4 py-4 text-[#B37A58] font-medium">
                      {row.range}
                    </td>
                    <td className="px-4 py-4 text-[#4F3224]">{row.roles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
