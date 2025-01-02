// components/Footer.js

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Your Company</h2>
              <p className="text-gray-400">
                Your one-stop shop for the best products. Dedicated to providing you with quality and service.
              </p>
              <p className="mt-4 text-gray-400">© 2024 Your Company. All rights reserved.</p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Customer Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
                >
                  <FaFacebookF />
                  </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
                >
                  <FaTwitter />
                  </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
                >
                  <IoLogoInstagram />
                  </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
                >
                  <FaLinkedin />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  