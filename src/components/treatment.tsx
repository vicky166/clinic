"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
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
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate paragraphs and image
      [paragraphRef1.current, paragraphRef2.current, imageRef.current].forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <span className="inline-block px-6 py-2 text-sm bg-emerald-50 text-emerald-800 font-medium rounded-full shadow-sm">
              Innovative Laser Solutions
            </span>

            <h2
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            >
              Advanced Laser Treatments
            </h2>
          </div>

          <div ref={paragraphRef1} className="bg-gradient-to-br from-emerald-900 to-emerald-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 flex items-center justify-center  rounded-xl">
                <span className="text-2xl">✨</span>
              </span>
              <h3 className="text-xl font-semibold text-black ">Deka Laser Treatment</h3>
            </div>
            <p className="text-white  leading-relaxed">
              Creates microscopic channels that penetrate the epidermis, boosting collagen production and reducing age spots, wrinkles, acne scarring, and loose skin texture.
            </p>
          </div>

          <div ref={paragraphRef2} className="bg-gradient-to-br from-emerald-900 to-emerald-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-xl">
                <span className="text-2xl">⚡</span>
              </span>
              <h3 className="text-xl font-semibold text-black">Fraxel Laser</h3>
            </div>
            <p className="text-white leading-relaxed">
              Advanced treatment that improves skin texture and tone. Effectively treats acne scars, brown spots, sun damage, fine lines, and other skin concerns for a younger, healthier appearance.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div
            ref={imageRef}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-30" />
            <Image
              src="/img/laser.jpg"
              alt="Advanced Laser Treatment Technology"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <p className="text-black text-lg font-medium">
                Experience the future of skincare with our state-of-the-art laser treatments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;