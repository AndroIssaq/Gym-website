import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
const NavBar = () => {
  const [t, i18n] = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const lang = i18n.language;
  return (
    <>
      <nav className="w-full mt-[20px] relative flex items-center justify-center ">
        <div
          className={` bg-[#353434] ${
            lang === "ar" ? "flex-row-reverse" : "flex-row"
          }  rounded-xl p-[20px] w-[95%] flex items-center justify-between h-[70px]`}
        >
          <Link to={"/"}>
            <div className="text-[40px] text-mainColor">
              WORLD <span className="text-[#fff]">GYM</span>
            </div>
          </Link>
          <ul
            className={`links text-[20px] ${
              lang === "ar" && "flex-row-reverse"
            }  items-center gap-[20px] lg:flex md:flex sm:hidden hidden relative`}
          >
            <Link to={"/"}>
              <li>
                <a href="">{t("Home")}</a>
              </li>
            </Link>
            <Link to={"/AboutUs"}>
              <li>
                <a href="">{t("About Us")}</a>
              </li>
            </Link>
            <Link to={"/Services"}>
              <li>
                <a href="">{t("Services")}</a>
              </li>
            </Link>
            <Link to={"/contactus"}>
              <li>
                <a href="">{t("ContactUs")}</a>
              </li>
            </Link>
          </ul>
          <div className="flex items-center justify-center gap-[20px]">
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="select rounded-xl  w-[70px] max-w-xs text-[#fff]"
            >
              <option value={"en"}>EN</option>
              <option value={"ar"}>AR</option>
            </select>
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="lg:hidden md:hidden sm:block block text-[35px]"
            >
              <IoMenuOutline />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-nav ${
          openMenu ? "fade-in" : "fade-out"
        }  absolute w-[100%]  flex items-center justify-center gap-[40px]`}
      >
        <nav className=" w-[95%] p-[20px] bg-[#2f8240]  rounded-2xl flex flex-col items-center justify-center gap-[40px]">
          <ul className="flex flex-col items-center justify-center gap-[40px] ">
            <Link
              to={"/"}
              onClick={() => setOpenMenu(!openMenu)}
              className="lg:text-[40px] md:text-[40px] text-[25px]"
            >
              Home
            </Link>
            <Link
              to={"/ourteam"}
              onClick={() => setOpenMenu(!openMenu)}
              className="lg:text-[40px] md:text-[40px] text-[25px]"
            >
              Our Team
            </Link>
            <Link
              to={"portfolio"}
              onClick={() => setOpenMenu(!openMenu)}
              className="lg:text-[40px] md:text-[40px] text-[25px]"
            >
              Portfolio
            </Link>
            <Link
              to={"/contactus"}
              onClick={() => setOpenMenu(!openMenu)}
              className="lg:text-[40px] md:text-[40px] text-[25px]"
            >
              Contact Us
            </Link>
          </ul>

          <div className="icons flex items-center gap-[20px] mt-[40px]">
            <span className=" cursor-pointer lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <FaFacebookF />
            </span>
            <span className=" cursor-pointer lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <FaLinkedinIn />
            </span>
            <span className=" cursor-pointer lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <FaBehance />
            </span>
            <span className=" cursor-pointer lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <FaTwitter />
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
