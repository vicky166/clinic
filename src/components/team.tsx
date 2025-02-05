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

  const cards = [
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
        <p className="text-lg text-black">Our team of experts dedicated to providing the best treatments for you.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="relative border border-gray-300 rounded-3xl overflow-hidden shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:border-gray-500 hover:rotate-1 hover:translate-y-2 hover:-translate-x-2 flex flex-col w-full h-[450px]"
          >
            <div className="w-full h-full relative">
              <Image
                src={card.imageUrl}
                alt={card.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6 text-white text-center">
                <h3 className="text-2xl font-semibold">{card.name}</h3>
                <p className="text-lg">{card.field}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}