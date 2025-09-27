"use client";

import { useEffect, useRef } from "react";

export type StoryModalStory = {
  name: string;
  role: string;
  company: string;
  videoUrl: string;
  impact?: string;
  image?: string;
};

type StoryModalProps = {
  story: StoryModalStory;
  onClose: () => void;
};

export default function StoryModal({ story, onClose }: StoryModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#782F40]/70 px-4 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label={`${story.name} impact video`}
    >
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[#E8DCC7] bg-white">
        <button
          type="button"
          ref={closeRef}
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-[#E8DCC7] bg-white/90 px-3 py-1 text-xs font-semibold text-[#4F3224] hover:border-[#782F40] hover:text-[#782F40]"
        >
          Close
        </button>
        <div className="relative aspect-video w-full">
          <iframe
            src={story.videoUrl}
            title={`${story.name} impact video`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="border-t border-[#E8DCC7] bg-[#fff8ef] p-6 text-sm text-[#4F3224]">
          <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
            {story.company}
          </p>
          <p className="mt-1 font-semibold text-[#782F40]">{story.name}</p>
          <p className="mt-1 text-[#4F3224]">{story.role}</p>
        </div>
      </div>
    </div>
  );
}
