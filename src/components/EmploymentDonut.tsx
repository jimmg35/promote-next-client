"use client";

import { useMemo } from "react";

type EmploymentDonutDatum = {
  label: string;
  value: number;
  color: string;
};

type EmploymentDonutProps = {
  data: EmploymentDonutDatum[];
};

export default function EmploymentDonut({ data }: EmploymentDonutProps) {
  const gradient = useMemo(() => {
    if (data.length === 0) {
      return "transparent 0 360deg";
    }
    const total = data.reduce((sum, item) => sum + item.value, 0) || 1;
    let current = 0;
    return data
      .map((item) => {
        const start = (current / total) * 100;
        current += item.value;
        const end = (current / total) * 100;
        return `${item.color} ${start}% ${end}%`;
      })
      .join(", ");
  }, [data]);

  return (
    <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
      <div
        className="h-full w-full rounded-full"
        style={{ background: `conic-gradient(${gradient})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-8 rounded-full bg-white" />
      <div className="absolute inset-16 flex items-center justify-center rounded-full bg-[#fdf2e5]">
        <span className="text-center text-xs uppercase tracking-[0.2em] text-[#782F40]">
          Employment
          <br />
          by Sector
        </span>
      </div>
    </div>
  );
}
