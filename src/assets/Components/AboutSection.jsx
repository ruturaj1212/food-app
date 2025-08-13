import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";


export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 bg-white">
      {/* Left Section */}
      <div className="relative md:w-1/2">
        <img
          src="./bg_about.png"
          alt="Delicious Wraps"
          className="rounded-lg object-cover w-full h-[400px] md:h-[500px]"
        />
        {/* Floating Contact Card */}
        <div className="absolute bottom-6 left-6 bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-lg font-semibold mb-4">Come and visit us</h3>
          <div className="flex items-center gap-2 mb-2">
            <Phone size={18} /> <span>(414) 857 - 0107</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={18} /> <span>happy.tummy@restaurant.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} />{" "}
            <span>837 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h2 className="text-3xl font-bold mb-4">
          We provide healthy food for your family.
        </h2>
        <p className="text-gray-600 mb-4">
          Our story began with a vision to create a unique dining experience that
          merges fine dining, exceptional service, and a vibrant ambiance. Rooted
          in city's rich culinary culture, we aim to honor our local roots while
          infusing a global palate.
        </p>
        <p className="text-gray-600 mb-6">
          At place, we believe that dining is not just about food, but also about
          the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </p>
        <button className="border border-gray-800 px-5 py-2 rounded-full hover:bg-gray-800 hover:text-white transition">
          More About Us
        </button>
      </div>
    </section>
  );
}
