"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  return (
    <section className="container mt-12 mx-auto px-4 py-12 md:py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Image Column */}
        <div className="lg:col-span-3 relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden group">
          <div ref={imageRef} className="relative w-full h-full">
            <Image
              src="/img/girl.jpg"
              alt="Fractional Laser Treatment"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Stats */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <p className="text-white text-lg">
              <span className="font-bold">951+ people</span> have experienced the
              transformative results of our treatments
            </p>
          </div>
        </div>

        {/* Content Column */}
        <div 
          ref={contentRef}
          className="lg:col-span-2 flex flex-col justify-between p-8 md:p-12 bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-3xl"
        >
          <div className="space-y-6">
            <span className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-300 text-sm font-medium rounded-full">
              Premium Treatment
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl text-white font-bold leading-tight">
              Expert Fractional Laser Treatments
            </h1>

            <p className="text-emerald-100 text-lg">
              Experience transformative skincare in the heart of Kuala Lumpur, Malaysia.
            </p>
          </div>

          <div className="mt-8">
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 rounded-full font-semibold hover:bg-emerald-100 transition-colors duration-300">
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;