'use client';

import { useEffect, useRef, useState } from 'react';

type Stat = { label: string; value: number; suffix: string };

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.value, 1800, start);
  const formatted = value >= 1000 ? `${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}K` : value;
  return (
    <div className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-white">
        {formatted}
        <span className="text-secondary">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm text-white/70 font-medium">{stat.label}</p>
    </div>
  );
}

export default function StatCounter({ stats }: { stats: Stat[] }) {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} start={start} />
      ))}
    </div>
  );
}
