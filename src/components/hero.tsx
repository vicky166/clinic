"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const btnRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    timeline.fromTo(
      btnRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1 },
      "<0.1"
    );

    timeline.fromTo(
      contentRef.current,
      { y: "50%", opacity: 0 },
      { y: "0%", opacity: 1 },
      "<0.1"
    );
  }, []);

  return (
    <section
      ref={btnRef}
      className="container mt-12 md:mt-10 mx-auto px-4 py-8 sm:py-12 md:py-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] col-span-3 lg:col-span-3 rounded-2xl lg:rounded-3xl overflow-hidden group">
          <Image
            src="/img/girl.jpg"
            alt="Fractional Laser Treatment"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            priority
          />
          <div
            ref={contentRef}
            className="absolute bottom-10 left-6 right-6  text-white p-6 sm:p-8 lg:p-12 rounded-2xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          >
            <p className="text-sm sm:text-base lg:text-lg">
              Fractional CO2 Laser Treatment reduces fine lines, wrinkles, sun
              damage, traumatic scars, and other skin-related issues.
              <br />
              <strong className="font-semibold">951 people</strong> have already
              experienced the difference.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-700 to-green-900 p-6 sm:p-8 lg:p-12 col-span-2 lg:col-span-2 flex flex-col justify-between rounded-2xl lg:rounded-3xl h-auto lg:h-[550px] group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <div className="space-y-4 sm:space-y-6 lg:space-y-10">
            <span className="inline-block px-3 py-1 bg-[#A3BE8C] text-white text-xs font-medium rounded-full">
              Expert Treatment
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold leading-tight">
              Expert Fractional Laser Treatments
              <br />
              in Kuala Lumpur, Malaysia
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 lg:mt-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
