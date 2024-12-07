import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className=" mt-20 border-t text-white py-6 sm:py-10"
      style={{ backgroundColor: "var(--dark-gray)" }}
    >
      <div className="mx-auto px-6 lg:px-10 py-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and About */}
          <div>
            <h1 className="text-2xl font-bold mb-4">AuraByNs</h1>
            <p className="text-gray-400 text-sm">
              Aura By NS provides innovative solutions that empower businesses
              to succeed. We bring quality, dedication, and expertise to
              everything we do.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <span className="hover:text-gray-300 cursor-pointer">
                    Home Page
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/ProductsPage">
                  <span className="hover:text-gray-300 cursor-pointer">
                    Products Page
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/ContactUs">
                  <span className="hover:text-gray-300 cursor-pointer">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Karachi, Pakistan</li>
              <li className="text-gray-400">Email: aurabyns@gmail.com</li>
              <li className="text-gray-400">Phone: 03282891170</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates on our latest news and offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 rounded-md text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-white font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 sm:mt-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          {/* Copyright */}
          <p className="mb-4 sm:mb-0 text-xl ml-10 lg:w-1/3">
            &copy; {new Date().getFullYear()} AuraByNS. All rights reserved.
          </p>
          <p className="mb-4 sm:mb-0 text-xl ml-10 lg:w-1/3">
            &copy; {new Date().getFullYear()}💓 Love by Triangle Marketing.
          </p>
          {/* Social Media Links */}
          <div className="flex space-x-4 lg:w-1/3 justify-end">
            <Link
              href="https://www.facebook.com/share/KsFYCPVx28QBsSX1/?mibextid=LQQJ4d"
              target="_blank"
            >
              <FaFacebook
                className="hover:text-gray-300 cursor-pointer"
                size={20}
              />
            </Link>
            <Link href="https://wa.link/oi406v" target="_blank">
              <FaWhatsapp
                className="hover:text-gray-300 cursor-pointer"
                size={20}
              />
            </Link>
            <Link
              href="https://www.instagram.com/aurabyns?igsh=enYycTJnaTg2amdq"
              target="_blank"
            >
              <FaInstagram
                className="hover:text-gray-300 cursor-pointer"
                size={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
