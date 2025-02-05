import Blog from "@/components/blog";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import Reviews from "@/components/review";
import Team from "@/components/team";
import { Treatments } from "@/components/treatment";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Header />
      <Products />
      <Treatments />
      <Team />
      <Faq />
      <Blog />
      <Reviews />
      <Footer />
    </>
  );
}
