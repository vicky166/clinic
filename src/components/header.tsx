"use client";
import { FaRegHandPointRight } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import Link from "next/link";

export const Header = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="bg-gradient-to-r from-green-700 to-green-900 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Fractional CO2 Laser – How Does It Work?
        </h2>
        <p className="text-white mt-4 text-sm sm:text-base lg:text-lg max-w-3xl">
          Fractional CO2 laser treatment is an innovative method that uses laser
          energy microbeams to penetrate and break down skin tissue to eliminate
          skin scars, wrinkles, sun damage, fine lines, and more. The method
          provides immediate results and requires multiple sessions to achieve
          long-term benefits.
        </p>

        <div className="mt-8 space-y-6">
          <div className="flex items-center gap-4">
            <IoMdRocket className="text-[#F5B041] text-3xl" />
            <p className="text-white text-base lg:text-lg max-w-xl">
              The fractional laser CO2 treatment is a non-surgical procedure
              that helps reduce wrinkles, fine lines, and pigmentation. This
              laser resurfacing in Malaysia helps tighten skin and promote
              collagen production.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaRegHandPointRight className="text-[#F5B041] text-3xl" />
            <p className="text-white text-base lg:text-lg max-w-xl">
              The treatment is also effective in treating sun damage and acne
              scars.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/contact" passHref>
            <button className="px-8 py-3 bg-black text-white text-lg font-medium rounded-full transition-all hover:bg-green-500">
              Call to Our Doctor
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
