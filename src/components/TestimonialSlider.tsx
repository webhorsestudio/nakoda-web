"use client";

import { useState } from "react";

interface Testimonial {
  name: string;
  feedback: string;
  company: string;
}

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  if (!testimonials.length) return null;

  const t = testimonials[index];
  return (
    <div className="glass-card max-w-xl mx-auto text-center">
      <p className="italic mb-2">&quot;{t.feedback}&quot;</p>
      <div className="font-semibold">{t.name}</div>
      <div className="text-xs text-gray-500 mb-4">{t.company}</div>
      <div className="flex justify-center gap-4">
        <button onClick={prev} className="px-2 py-1 text-xs bg-white bg-opacity-20 rounded hover:bg-white hover:bg-opacity-30">Prev</button>
        <button onClick={next} className="px-2 py-1 text-xs bg-white bg-opacity-20 rounded hover:bg-white hover:bg-opacity-30">Next</button>
      </div>
    </div>
  );
} 