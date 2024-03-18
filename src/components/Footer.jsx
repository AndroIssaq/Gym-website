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
  const [t,i18n]   = useTranslation();
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
                world <span className="text-white text-[35px]">gym</span>
              </Link>
            </h1>
            <p className=" text-[25px] leading-6">
             {t('Your Path to a Healthier Lifestyle and Greater Well-being')}
            </p>
            <div className="flex space-x-6"></div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
            <div className={`${lang==='ar'&&'text-right'} md:grid md:grid-cols-2 md:gap-8`}>
              <div>
                <h4 className=" text-[35px] font-semibold tracking-wider text-mainColor  uppercase">
                {t('CONTACT')}
                </h4>
                <ul className="mt-4 space-y-4 ">
                  <li className={`${lang==='ar'&&'text-right'}`}>
                    <h5 className=" leading-6 text-[25px] "> {t('Address')} <span className="mt-2 font-light  text-[20px] leading-6">
                    : {t('Abu Dhabi Corniche in front of the Mall / Souq Tower. Floor first')}
                    </span></h5>  
                  </li>
                  <li className={`${lang==='ar'&&'text-right'}`}>
                    <h5 className="text-[25px] leading-6">{t('Phone')} <span className="mt-2 text-[20px] leading-6">
                    : 026220202
                    </span></h5>
                    
                  </li>
                  <li className={`${lang==='ar'&&'text-right'}`}>
                    <h5 className="text-[25px] leading-6">{t('Mail Address')}  </h5> <span className="mt-2 text-[20px] leading-6">
                      : info@worldgym.com
                    </span>
                   
                  </li>
                </ul>
              </div>
              <div className="md:mt-0">
                <h4 className="text-[35px]  font-semibold tracking-wider text-mainColor uppercase">
                {t('QUICK LINKS')}
                </h4>
                <ul className="mt-4 space-y-4">
                  <li className={`${lang==='ar'&&'text-right'}`}>
                    <a
                      className="text-[25px] leading-6 hover:text-mainColor"
                      href="#"
                    >
                      <Link to={"/"}> {t('Home')}</Link>
                    </a>
                  </li>
                  <li className={`${lang==='ar'&&'text-right'}`}>
                    <a
                      className="text-[25px] leading-6 hover:text-mainColor"
                      href="#"
                    >
                      <Link to={"/Classes"}> {t('Classes')}</Link>
                    </a>
                  </li  >
                  <li className={`${lang==='ar'&&'text-right'}`}>
                    <a
                      className="text-[25px] leading-6 hover:text-mainColor"
                      href="#"
                    >
                      <Link to={"/AboutUs"}> {t('About Us')}</Link>
                    </a>
                  </li>
                  <li className={`${lang==='ar'&&'text-right'}`}>
                    <a
                      className="text-[25px] leading-6 hover:text-mainColor"
                      href="#"
                    >
                      <Link to={"/ContactUs"}> {t('ContactUs')}</Link>
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
          <p className="mt-8 text-[25px] leading-6 text-gray-400 md:mt-0 md:order-1">
            © {year} WorldGym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
