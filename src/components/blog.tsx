"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const posts = [
    {
      title: "Pico Laser: The NON-Invasive Solution for Skin Tightening and Acne Scars Removal",
      description: "The Perfect Skin of a young adult is on many people's wish lists.",
      image: "/img/blog1.webp?height=300&width=600",
    },
    {
      title: "PICO LASER MALAYSIA 2025: PRICE AND EVOLUTIONS",
      description: "Start your Pico journey now! If you're considering Pico Laser treatment, it's essential to understand...",
      image: "/img/blog2.webp?height=300&width=600",
    },
    {
      title: "Media Review on Fraction CO2 Laser Treatment by Cosmopolitan",
      description: "Nana, editor of Cosmopolitan, visited Medivion UOA Clinic for media reviews on Fraction CO2 laser...",
      image: "/img/blog3.jpg?height=300&width=600",
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, posts.length); 

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 80, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 75%",
                scrub: false,
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="container mx-auto px-6 py-16 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent drop-shadow-lg">
          Related Blogs
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link key={index} href="#" className="group block">
            <article
              className="relative overflow-hidden bg-gradient-to-r from-green-700 to-green-900 backdrop-blur-md border border-gray-800 rounded-3xl p-6 space-y-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
              ref={() => {
                
              }}
            >
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold leading-tight text-gray-100 group-hover:text-black transition-colors duration-300">
                  {post.title}
                </h2>

                <p className="text-sm text-black transition-colors duration-300 group-hover:text-gray-200">
                  {post.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/2 0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
