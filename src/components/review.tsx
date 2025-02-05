"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Reviews() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
    );
  }, []);

  const reviews = [
    {
      name: "Kumar Raj",
      text: "I had CO2 laser resurfacing for acne scars. It was effective, and the laser treatment cost was also very affordable.",
      rating: 5,
    },
    {
      name: "Mai Lin",
      text: "I can't even tell you the fractional laser benefits, as this was my second session, and I already loved my skin.",
      rating: 5,
    },
    {
      name: "Linh Nguyen",
      text: "The CO2 laser resurfacing treatment I received at Nexus Clinic was highly effective. It significantly reduced my acne scars, and my skin felt rejuvenated.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-white">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700 drop-shadow-lg">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative group bg-gradient-to-r from-green-700 to-green-900 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-xl 
                      transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl overflow-hidden 
                      border border-transparent hover:border-green-400"
          >
            <div className="absolute inset-0 bg-white opacity-5 rounded-2xl lg:rounded-3xl transition-all duration-300 group-hover:opacity-10"></div>

            <div
              className="absolute -inset-10 bg-gradient-to-r from-transparent via-white to-transparent opacity-0  group-hover:opacity-10 transition-opacity duration-500  animate-[shimmer_2s_infinite_linear]"
            ></div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-lg text-white relative z-10">
                <span className="font-semibold">{review.name}</span>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-base leading-relaxed italic relative z-10">
                {review.text}
              </p>
            </CardContent>
          </div>
        ))}
      </div>
    </section>
  );
}
