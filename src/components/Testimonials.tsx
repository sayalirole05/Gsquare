"use client";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { newTestimonials } from "@/lib/data";

// Re-map the existing testimonials to the new format
const testimonialsForMarquee = newTestimonials.map(t => ({
    author: {
        name: t.name,
        handle: `@${t.role.split(',')[0].replace(/\s/g, '').replace(/\./g, '')}`,
        avatar: t.image,
    },
    text: t.text,
}));

export function Testimonials() {
  return (
    <TestimonialsSection
      title="What our users say"
      description="See what our customers have to say about us."
      testimonials={testimonialsForMarquee}
    />
  );
}
