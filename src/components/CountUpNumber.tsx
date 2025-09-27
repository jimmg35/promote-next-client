"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountUpNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function CountUpNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1500,
  className = "",
}: CountUpNumberProps) {
  const frameRef = useRef<number | null>(null);
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = nodeRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(value * eased));
            if (progress < 1) {
              frameRef.current = requestAnimationFrame(animate);
            }
          };
          frameRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [duration, value]);

  const formatted = useMemo(() => {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
      displayValue
    );
  }, [displayValue]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
