"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BlogSection = () => {
  const posts = [
    {
      title: "Pico Laser: The NON-Invasive Solution for Skin Tightening",
      description: "The Perfect Skin of a young adult is on many people's wish lists. Discover how Pico Laser technology is revolutionizing skincare treatments.",
      image: "/img/blog1.webp",
      readTime: "5 min",
      date: "Feb 2025"
    },
    {
      title: "PICO LASER MALAYSIA 2025: PRICE AND EVOLUTIONS",
      description: "Start your Pico journey now! Understanding the latest developments and pricing in Pico Laser treatments.",
      image: "/img/blog2.webp",
      readTime: "4 min",
      date: "Jan 2025"
    },
    {
      title: "Media Review on Fraction CO2 Laser Treatment",
      description: "Nana, editor of Cosmopolitan, visited Medivion UOA Clinic for media reviews on Fraction CO2 laser treatments.",
      image: "/img/blog3.jpg",
      readTime: "6 min",
      date: "Dec 2024"
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-700 drop-shadow-lg bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Discover the latest trends and innovations in skincare and beauty treatments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link href="#" key={index} className="group">
              <Card className="h-full overflow-hidden bg-gradient-to-r from-green-700 to-green-900 border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <CardContent className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-black">
                      <span className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-black group-hover:text-emerald-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-white text-sm line-clamp-2">
                      {post.description}
                    </p>
                    
                    <div className="pt-4 flex items-center text-emerald-400 text-sm font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;