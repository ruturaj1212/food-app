import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#3A3A3A] text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Text */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            🍜 Bistro Bliss
          </h2>
          <p className="text-sm text-gray-300 mt-3">
            In the new era of technology we look in the future with certainty
            and pride to for our company and.
          </p>
          <div className="flex gap-4 mt-4">
            <FaTwitter className="hover:text-red-400 cursor-pointer" />
            <FaFacebookF className="hover:text-red-400 cursor-pointer" />
            <FaInstagram className="hover:text-red-400 cursor-pointer" />
            <FaPinterestP className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Delivery</li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Utility Pages</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Start Here</li>
            <li>Styleguide</li>
            <li>Password Protected</li>
            <li>404 Not Found</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>View More</li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us On Instagram</h3>
          <div className="">
            <img src="/follow_us.png" alt="insta" className="rounded-md" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        Copyright © 2025 Ruturaj Shelake. All Rights Reserved
      </div>
    </footer>
  );
}
