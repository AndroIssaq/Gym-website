/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next"

import { FaFacebookSquare , FaYoutubeSquare , FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <footer className="bg-[#1a1a1a] text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8 xl:col-span-1">
          <h1 className="text-[35px]">world gym</h1>
          <p className="text-base leading-6">Your Path to a Healthier Lifestyle and Greater Well-being.</p>
          <div className="flex space-x-6">
       
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-mainColor uppercase">

              </h4>
              <h4 className="text-sm font-semibold tracking-wider text-green-400 uppercase">Contact</h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <h5 className="text-base leading-6">Address</h5>
                  <p className="mt-2 text-base leading-6">123 Fitness Avenue, Cityville, State 12345, USA</p>
                </li>
                <li>
                  <h5 className="text-base leading-6">Phone</h5>
                  <p className="mt-2 text-base leading-6">+1 (123) 456-7890</p>
                </li>
                <li>
                  <h5 className="text-base leading-6">Mail Address</h5>
                  <p className="mt-2 text-base leading-6">info@elitegym.com</p>
                </li>
              </ul>
            </div>
            <div className="md:mt-0">
              <h4 className="text-sm font-semibold tracking-wider text-mainColor uppercase">
               
              </h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    className="text-base leading-6 hover:text-mainColor"
                    href="#"
                  >

                  </a>
                </li>
                <li>
                  <a
                    className="text-base leading-6 hover:text-mainColor"
                    href="#"
                  >
                  </a>
                </li>
                <li>
                  <a
                    className="text-base leading-6 hover:text-mainColor"
                    href="#"
                  >

                  </a>
                </li>
                <li>
                  <a
                    className="text-base leading-6 hover:text-mainColor"
                    href="#"
                  >

                  </a>
                </li>
                <li>
                  <a
                    className="text-base leading-6 hover:text-mainColor"
                    href="#"
                  >

                      </a>
                      </li>
                      </ul>
              <h4 className="text-sm font-semibold tracking-wider text-green-400 uppercase">Quick Links</h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <a className="text-base leading-6 hover:text-green-500" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-base leading-6 hover:text-green-500" href="#">
                    Classes
                  </a>
                </li>
                <li>
                  <a className="text-base leading-6 hover:text-green-500" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-base leading-6 hover:text-green-500" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="text-base leading-6 hover:text-green-500" href="#">
                    Blog
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
          © 2023 EliteGYM. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}



export default Footer