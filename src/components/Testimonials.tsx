"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { newTestimonials } from "@/lib/data";
import { motion } from "framer-motion";
import React, { useState } from "react";

const firstColumn = newTestimonials.slice(0, 7);
const secondColumn = newTestimonials.slice(7, 14);
const thirdColumn = newTestimonials.slice(14, 20);

export function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center text-secondary">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={40}
            isPaused={isHovered}
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={50}
            isPaused={isHovered}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={45}
            isPaused={isHovered}
          />
        </div>
      </div>
    </section>
  );
}
