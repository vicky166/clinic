"use client";

import { Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqs = [
    {
      question: "How Many Laser Resurfacing Treatments Are Needed?",
      answer:
        "The cost varies based on the severity of sun damage, scarring, or wrinkles and your tolerance for downtime.",
    },
    {
      question: "Who are not suitable For The Frictional CO2 Laser Treatment?",
      answer:
        "Reasons to avoid fractional laser treatment may include the use of photosensitivity-increasing medications, certain anticoagulants, recent Accutane use, chemotherapy, healing difficulties, scarring history, bleeding disorders, and pregnancy.",
    },
    {
      question: "Is There Any Side Effect?",
      answer:
        "The CO2 laser treatment treats dull and uneven skin tones. The procedure helps reduce acne scars and anti-aging signs such as fine lines and wrinkles.",
    },
    {
      question: "What type of skin conditions can be treated?",
      answer:
        "CO2 laser treatment can treat acne scars, wrinkles, pigmentation, and other skin concerns.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "The procedure provides immediate results. However, multiple sessions are needed to achieve optimal benefits.",
    },
    {
      question: "Can only one skin resurfacing treatment be enough for visible results?",
      answer:
        "Some patients can find visible results within 2 or 3 sessions. However, to get lasting results, it is always recommended to ask your specialist.",
    },
    {
      question: "Is the process painful?",
      answer:
        "The treatment can provide mild discomfort or sensation; the effect will disappear over time, even on the same day.",
    },
    {
      question: "What food should be avoided after fractional CO2 laser treatment for skin resurfacing?",
      answer:
        "The treatment is performed non-surgically; there is no need to avoid anything. However, in some cases, doctors may suggest that patients avoid certain items, including caffeine, alcohol, carbohydrates, spicy foods, cigarettes, or high-sodium foods.",
    },
    {
      question: "Does CO2 skin resurfacing laser treatment hurt?",
      answer:
        "Yes, the procedure effectively tightens and smooths the skin’s surface to provide clear, wrinkle-free skin.",
    },
    {
      question: "How long is the procedure?",
      answer:
        "The treatment may take 30 minutes to an hour, depending on the circumstances and requirements.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      faqRefs.current.forEach((faqCard) => {
        if (faqCard) {
          gsap.fromTo(
            faqCard,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: faqCard,
                start: "top 85%",
                end: "top 70%",
                scrub: false,
              },
            }
          );
        }
      });
    }, faqRefs);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full px-4 py-12">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-emerald-700 to-emerald-700 rounded-2xl overflow-hidden"
            ref={(el) => {
              faqRefs.current[index] = el;
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-black" />
                ) : (
                  <Plus className="h-5 w-5 text-black" />
                )}
              </div>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6">
                <span className="text-black text-sm">{faq.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}