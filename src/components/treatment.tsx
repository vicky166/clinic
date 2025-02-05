'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Treatments = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef1 = useRef(null);
  const paragraphRef2 = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: false,
          },
        }
      );

      gsap.fromTo(
        paragraphRef1.current,
        { y: 50, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef1.current,
            start: "top 85%",
            end: "top 65%",
            scrub: false,
          },
        }
      );

      gsap.fromTo(
        paragraphRef2.current,
        { y: 50, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef2.current,
            start: "top 85%",
            end: "top 65%",
            scrub: false,
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { y: 50, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "top 65%",
            scrub: false,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 space-y-6">
          <span className="inline-block px-4 py-1 text-sm border border-black bg-green-500 text-black rounded-full">
            Types Of Laser Treatments
          </span>

          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1]"
          >
            Types Of Laser Treatments
          </h2>

          <p ref={paragraphRef1} className="text-black text-sm max-w-lg">
            <strong>Deka Laser Treatment:</strong> This treatment creates microscopic channels that go into the second layer of skin through the epidermis to boost collagen production and reduce age spots, wrinkles, acne scarring, and loose skin texture.
          </p>

          <p ref={paragraphRef2} className="text-black text-sm max-w-lg">
            <strong>Fraxel Laser:</strong> Fractional laser treatment also improves the quality of skin texture and tone. This advanced treatment works deeply into the skin to make it look younger and better from the outside. The process effectively treats acne scars, brown spots, sun damage, fine lines, and other skin issues.
          </p>
        </div>

        <div
          ref={imageRef}
          className="lg:col-span-3 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-violet-100/50 mix-blend-multiply z-10"></div>
          <Image
            src="/img/laser.jpg" 
            alt="Laser Treatment"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Treatments;
