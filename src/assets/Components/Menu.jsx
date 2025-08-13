import React from "react";
import { FaCoffee, FaHamburger, FaGlassWhiskey, FaBirthdayCake } from "react-icons/fa";

const menuItems = [
  {
    icon: <FaCoffee className="text-4xl text-gray-700" />,
    title: "Breakfast",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    icon: <FaHamburger className="text-4xl text-gray-700" />,
    title: "Main Dishes",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    icon: <FaGlassWhiskey className="text-4xl text-gray-700" />,
    title: "Drinks",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    icon: <FaBirthdayCake className="text-4xl text-gray-700" />,
    title: "Desserts",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-12">
        Browse Our Menu
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <a
              href="#"
              className="text-[#AD343E] font-medium hover:underline"
            >
              Explore Menu
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
