"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type MapLayer = {
  id: string;
  title: string;
  problem: string;
  method: string;
  result: string;
  metric: string;
  image: string;
};

const mapLayers: MapLayer[] = [
  {
    id: "disaster",
    title: "Disaster Recovery",
    problem: "Identify priority zones within 24 hours after landfall.",
    method: "Fuse drone lidar captures with flood-depth models.",
    result: "Direct 1.2M pounds of aid to coastal communities.",
    metric: "Response Time: 18 hrs",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "housing",
    title: "Housing Inequality",
    problem: "Surface displacement risk across fast growing metros.",
    method: "Analyze 12M parcel records with spatial equity indices.",
    result: "Unlock 48M dollars in inclusive zoning incentives.",
    metric: "Households Impacted: 210K",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "climate",
    title: "Climate Risk",
    problem: "Model 2050 sea-level rise scenarios for island nations.",
    method: "Couple satellite altimetry with machine learned storm surge.",
    result: "Inspire national coastal defense investment roadmap.",
    metric: "Carbon Averted: 3.5Mt",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

export default function MapShowcaseSection() {
  const [activeLayerId, setActiveLayerId] = useState(
    mapLayers.length > 0 ? mapLayers[0].id : ""
  );

  const activeLayer = useMemo(() => {
    return mapLayers.find((layer) => layer.id === activeLayerId) || mapLayers[0];
  }, [activeLayerId]);

  return (
    <section
      id="map"
      className="relative border-t border-[#E5D9C0] bg-[#fff9f1] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[#E8DCC7] bg-white p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                  Interactive map showcase
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#2F1B16]">
                  Toggle real missions and see our spatial thinking in action.
                </h2>
              </div>
              <Link
                href="#cta"
                className="rounded-full border border-[#782F40] px-4 py-2 text-sm font-semibold text-[#782F40] transition hover:bg-[#782F40] hover:text-white"
              >
                Explore Studio Briefs
              </Link>
            </div>
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
              {mapLayers.map((layer) => {
                const isActive = layer.id === activeLayerId;
                const baseClass = "rounded-full px-4 py-2 text-sm transition";
                const activeClass = isActive
                  ? " bg-[#782F40] text-white"
                  : " border border-[#E8DCC7] text-[#4F3224] hover:border-[#782F40] hover:text-[#782F40]";
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayerId(layer.id)}
                    className={baseClass + activeClass}
                  >
                    {layer.title}
                  </button>
                );
              })}
            </div>
            <div className="mt-8 grid gap-6 text-sm text-[#4F3224] md:grid-cols-3">
              <div className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">Problem</p>
                <p className="mt-2 text-[#2F1B16]">
                  {activeLayer ? activeLayer.problem : ""}
                </p>
              </div>
              <div className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">Method</p>
                <p className="mt-2 text-[#2F1B16]">
                  {activeLayer ? activeLayer.method : ""}
                </p>
              </div>
              <div className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">Result</p>
                <p className="mt-2 text-[#2F1B16]">
                  {activeLayer ? activeLayer.result : ""}
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#E8DCC7] bg-white">
            <div className="relative h-full min-h-[360px]">
              {activeLayer ? (
                <Image
                  src={activeLayer.image}
                  alt={`${activeLayer.title} map overlay`}
                  fill
                  className="object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-[#CEB888]/30" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                  {activeLayer ? activeLayer.title : ""}
                </p>
                <p className="mt-2 text-sm text-[#2F1B16]">
                  {activeLayer ? activeLayer.metric : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
