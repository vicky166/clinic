import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

const services = [
  "Fractional Laser",
  "Dermaroller",
  "Medlite C6 Laser",
  "Platelet Rich Plasma (PRP)",
  "Venus Freeze",
  "MesoLipo Fat Melting Injections",
  "Zeltiq Coolsculpting",
  "HCG Weight Loss Program",
  "Nexus Hair Implantation",
  "Female Laser Rejuvenation",
  "Tattoo Removal",
  "Dermal Fillers",
  "Skin Peel",
  "Non Surgical Threadlift",
  "Ion Magnum",
  "Candela Gentle YAG Laser",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="flex flex-col items-start">
            <img src="/img/logo.png" alt="Nexus Clinic Logo" className="w-36 h-auto mb-4" /> 
            <p className="text-gray-400 text-sm leading-relaxed">
              Founded in 2001, Nexus Clinic is a top-notch aesthetic center, offering advanced laser treatments and
              personalized aesthetic procedures with a commitment to confidentiality and excellence.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-500 pb-2">Our Services</h3>
            <ul className="grid grid-cols-2 gap-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 text-sm hover:text-green-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-500 pb-2">Contact Us</h3>
            <address className="text-gray-400 text-sm not-italic space-y-3">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-400" />
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, Malaysia.
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-green-400" />
                Mobile: 016-7025699 / 03-21635699 <br /> Main Line: +016-9215699
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-400" />
                Monday – Saturday: 9.00am to 6.00pm <br /> Sundays & Public Holidays: Closed
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-500 pb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/NexusClinic/" className="text-gray-400 hover:text-green-400 transition-colors">Facebook</Link>
              <Link href="https://www.instagram.com/nexusclinic/?hl=en" className="text-gray-400 hover:text-green-400 transition-colors">Instagram</Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Twitter</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Nexus Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
