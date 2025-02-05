"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 60%",
          },
        }
      );

      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 65%",
                scrub: false,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const doctors = [
    { name: "Dr. ARIS", field: "Medical Aesthetic Doctor", imageUrl: "/img/aris.png" },
    { name: "Dr. PREETHA", field: "Medical Aesthetic Doctor", imageUrl: "/img/preetha.png" },
    { name: "Dr. ASHVINIA", field: "Medical Aesthetic Doctor", imageUrl: "/img/asvini.jpg" },
    { name: "Dr. CHARMAINE", field: "Medical Aesthetic Doctor", imageUrl: "/img/charm.png" },
  ];

  return (
    <section ref={sectionRef} className="container mx-auto px-4 mb-12 py-12">
      <div ref={headingRef} className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-4 text-black">
          Meet Our Doctors
        </h2>
        <p className="text-lg text-gray-600">
          Our team of experts dedicated to providing the best treatments for you.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="group relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out h-[450px] border-2 border-black"
          >
            <div className="absolute inset-0 ">
              <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            {/* Gradient Overlay - Always visible but more subtle by default */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {/* Name - Always visible but transforms on hover */}
              <h3 className="text-2xl font-semibold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {doctor.name}
              </h3>
              
              {/* Role - Hidden by default, slides up on hover */}
              <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                <p className="text-lg text-white/90 mt-2">{doctor.field}</p>
                
                {/* Additional content that appears on hover */}
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-white/80">Available for consultations</p>
                  <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm backdrop-blur-sm transition-colors duration-300">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
