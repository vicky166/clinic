"use client";
import { FaDollarSign } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Link from "next/link";
import { useRef } from "react";

const products = [
  {
    name: "Fractional CO2 Laser Treatment",
    price: "$250 per session",
    description:
      "Effective treatment for wrinkles, fine lines, and pigmentation.",
    imageUrl: "/img/co2.jpeg",
    available: true,
  },
  {
    name: "Acne Scar Removal",
    price: "$200 per session",
    description: "Reduces acne scars, making skin smoother.",
    imageUrl: "/img/acne.jpg",
    available: true,
  },
  {
    name: "Sun Damage Correction",
    price: "$300 per session",
    description: "Treatment for sun damage, improving skin tone.",
    imageUrl: "/img/sun.jpg",
    available: false,
  },
  {
    name: "Wrinkle Reduction Therapy",
    price: "$180 per session",
    description: "Non-invasive wrinkle reduction.",
    imageUrl: "/img/wrinkle.webp",
    available: true,
  },
  {
    name: "Hair Restoration Treatment",
    price: "$350 per session",
    description: "Stimulates hair growth and restores thinning hair.",
    imageUrl: "/img/hair.jpg",
    available: true,
  },
  {
    name: "Skin Tightening",
    price: "$280 per session",
    description: "Tightens skin and reduces sagging.",
    imageUrl: "/img/tight.jpeg",
    available: true,
  },
  {
    name: "Fractional RF Treatment",
    price: "$300 per session",
    description: "Radiofrequency treatment for skin rejuvenation.",
    imageUrl: "/img/rf.webp",
    available: true,
  },
  {
    name: "Pigmentation Treatment",
    price: "$220 per session",
    description: "Targets and reduces pigmentation.",
    imageUrl: "/img/pigment.jpg",
    available: false,
  },
  {
    name: "Laser Hair Removal",
    price: "$150 per session",
    description: "Long-lasting hair removal treatment.",
    imageUrl: "/img/Removal.webp",
    available: true,
  },
  {
    name: "Anti-Aging Facial",
    price: "$180 per session",
    description: "Facial treatment to reduce signs of aging.",
    imageUrl: "/img/Anti.webp",
    available: true,
  },
  {
    name: "Acne Treatment",
    price: "$160 per session",
    description: "Treats active acne and reduces outbreaks.",
    imageUrl: "/img/acnet.jpg",
    available: true,
  },
  {
    name: "Scar Treatment",
    price: "$240 per session",
    description: "Reduces scars and smoothens skin texture.",
    imageUrl: "/img/scar.webp",
    available: true,
  },
  {
    name: "Dark Circle Treatment",
    price: "$190 per session",
    description: "Reduces the appearance of dark circles under the eyes.",
    imageUrl: "/img/dark.jpg",
    available: false,
  },
  {
    name: "Pore Minimizing Treatment",
    price: "$210 per session",
    description: "Reduces pore size and refines skin texture.",
    imageUrl: "/img/pore.jpeg",
    available: true,
  },
  {
    name: "Chemical Peel",
    price: "$130 per session",
    description: "Exfoliates skin for a fresh, youthful appearance.",
    imageUrl: "/img/chemical.jpg",
    available: true,
  },
];

export const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center text-white font-semibold leading-tight mb-8">
        Our Treatments & Products
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-4 rounded-full shadow-md"
        >
          &#8592;
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-[350px] bg-gradient-to-r from-green-700 to-green-800  p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-[130px] object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-2xl sm:text-3xl text-black font-semibold">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <FaDollarSign className="text-[#F5B041] text-2xl" />
                <p className="text-black text-lg">{product.price}</p>
              </div>
              <p className="text-black mt-4 text-sm sm:text-base lg:text-lg">
                {product.description}
              </p>

              <div className="mt-6 flex justify-between items-center">
                {product.available ? (
                  <div className="flex items-center text-black">
                    <IoMdCheckmarkCircle className="text-xl mr-2" />
                    <span className="text-lg">Available Now</span>
                  </div>
                ) : (
                  <div className="text-red-500 text-lg">
                    Currently Unavailable
                  </div>
                )}
                <Link href="/contact" passHref></Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-4 rounded-full shadow-md"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Products;
