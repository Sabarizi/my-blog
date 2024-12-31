import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">About Us</h3>
          <p className="text-gray-400 leading-relaxed">
            Welcome to “Life in Madinah,” where we share the experiences and
            stories of life in this holy city. Join us on a journey of
            spirituality, culture, and inspiration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/About"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">Contact</h3>
          <p className="text-gray-400">
            <span className="block">Madinah, Saudi Arabia</span>
            <span className="block">Email: info@lifeinmadinah.com</span>
            <span className="block">Phone: +966-123-456-789</span>
          </p>
          {/* Social Media */}
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Life in Madinah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
