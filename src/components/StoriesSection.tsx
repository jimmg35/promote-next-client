"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import StoryModal, { StoryModalStory } from "@/components/StoryModal";

type SuccessStory = StoryModalStory & {
  impact: string;
  image: string;
};

const successStories: SuccessStory[] = [
  {
    name: "Avery Chen",
    role: "Geospatial Intelligence Specialist",
    company: "Planetary Response Network",
    impact:
      "Mapped post-disaster supply corridors that cut delivery times by 43% across island communities.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80",
    videoUrl: "https://www.youtube.com/embed/iKzRIweSBLA",
  },
  {
    name: "Liam Ortiz",
    role: "Climate Risk Consultant",
    company: "Gradient Futures",
    impact:
      "Built AI-driven flood forecasts adopted by five coastal cities across Latin America.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=80",
    videoUrl: "https://www.youtube.com/embed/0QXpU3p2U0Y",
  },
  {
    name: "Maya Singh",
    role: "Epidemiology Data Lead",
    company: "Global Health Watch",
    impact:
      "Launched a spatial surveillance hub now serving 28 countries with near real-time insights.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=640&q=80",
    videoUrl: "https://www.youtube.com/embed/e9vrfEoc8_g",
  },
];

export default function StoriesSection() {
  const [activeStory, setActiveStory] = useState<SuccessStory | null>(null);

  return (
    <section
      id="stories"
      className="relative border-t border-[#E5D9C0] bg-white py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
            Mission-ready alumni.
          </h2>
          <p className="mt-4 text-base text-[#4F3224]">
            Our alumni design equitable futures at space agencies, humanitarian orgs, and frontier tech companies. Explore their impact and connect for mentorship.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {successStories.map((story) => (
            <article
              key={story.name}
              className="group overflow-hidden rounded-3xl border border-[#E8DCC7] bg-[#fff8ef]"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={story.image}
                  alt={`${story.name} - ${story.role}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                  {story.company}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#782F40]">
                  {story.name}
                </h3>
                <p className="text-sm text-[#B37A58]">{story.role}</p>
                <p className="mt-4 text-sm text-[#4F3224]">{story.impact}</p>
                <button
                  type="button"
                  onClick={() => setActiveStory(story)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#782F40] transition hover:text-[#5f2432]"
                >
                  {"Watch 30-sec story ->"}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[#CEB888]/60 bg-[#fdf2e5] px-8 py-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
              Mentor network
            </p>
            <p className="mt-1 text-sm text-[#4F3224]">
              Tap into alumni across NASA, WHO, UNICEF, Esri, and frontier startups.
            </p>
          </div>
          <Link
            href="mailto:alumni-grid@spatialfutures.edu?subject=Connect%20me%20with%20an%20alumnus"
            className="rounded-full bg-[#782F40] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#5f2432]"
          >
            Contact an Alumnus
          </Link>
        </div>
      </div>

      {activeStory ? (
        <StoryModal story={activeStory} onClose={() => setActiveStory(null)} />
      ) : null}
    </section>
  );
}
