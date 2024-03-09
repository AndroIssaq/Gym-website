/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const location = useLocation();
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h1 className="text-[35px]">
              <Link to={"/"}>
                world <span className="text-white">gym</span>
              </Link>
            </h1>
            <p className="text-base leading-6">
              Your Path to a Healthier Lifestyle and Greater Well-being.
            </p>
            <div className="flex space-x-6"></div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-lg font-semibold tracking-wider text-mainColor  uppercase">
                  Contact
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <h5 className="text-base leading-6">Address</h5>
                    <p className="mt-2 text-base leading-6">
                      123 Fitness Avenue, Cityville, State 12345, USA
                    </p>
                  </li>
                  <li>
                    <h5 className="text-base leading-6">Phone</h5>
                    <p className="mt-2 text-base leading-6">
                      +1 (123) 456-7890
                    </p>
                  </li>
                  <li>
                    <h5 className="text-base leading-6">Mail Address</h5>
                    <p className="mt-2 text-base leading-6">
                      info@worldgym.com
                    </p>
                  </li>
                </ul>
              </div>
              <div className="md:mt-0">
                <h4 className="text-lg  font-semibold tracking-wider text-mainColor uppercase">
                  Quick Links
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      className="text-base leading-6 hover:text-mainColor"
                      href="#"
                    >
                      <Link to={"/"}>Home</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base leading-6 hover:text-mainColor"
                      href="#"
                    >
                      <Link to={"/"}>Classes</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base leading-6 hover:text-mainColor"
                      href="#"
                    >
                      <Link to={"/AboutUs"}>About</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base leading-6 hover:text-mainColor"
                      href="#"
                    >
                      <Link to={"/ContactUs"}>Contact</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base leading-6 hover:text-mainColor"
                      href="#"
                    >
                      <Link to={"/"}>Blog</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a className="text-gray-400 hover:text-gray-300" href="#">
              <span className="sr-only">Facebook</span>
              <FaFacebookSquare className="h-6 w-6" />
            </a>
            <a className="text-gray-400 hover:text-gray-300" href="#">
              <span className="sr-only">Instagram</span>
              <FaYoutubeSquare className="h-6 w-6" />
            </a>
            <a className="text-gray-400 hover:text-gray-300" href="#">
              <span className="sr-only">Youtube</span>
              <FaInstagramSquare className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            © {year} WorldGym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
