import Title from "./Title";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [data, setData] = useState([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "footer",
      });
      console.log(response);
      setData(response.items);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h1 className="text-[35px]">
              {" "}
              {lang === "en" ? data?.fields?.title : data?.fields?.titleAr}
            </h1>
            <p className="text-base leading-6">
              {lang === "en" ? data?.fields?.descEn : data?.fields?.descAr}
            </p>
            <div className="flex space-x-6">
              <PlayCircleIcon className="text-mainColor h-6 w-6" />
              <InstagramIcon className="text-mainColor h-6 w-6" />
              <FacebookIcon className="text-mainColor h-6 w-6" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-mainColor uppercase">
                  {lang === "en"
                    ? data[0]?.fields?.contac0tEn
                    : data[0]?.fields?.contac0tAr}
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <h5 className="text-base leading-6">
                      {" "}
                      {lang === "en"
                        ? data[0]?.fields?.adressEn
                        : data[0]?.fields?.adressAr}{" "}
                    </h5>
                    <p className="mt-2 text-base leading-6">
                      {lang === "en"
                        ? data[0]?.fields?.adressDeskEn
                        : data[0]?.fields?.adressDeskAr}
                    </p>
                  </li>
                  <li>
                    <h5 className="text-base leading-6">
                      {lang === "en"
                        ? data[0]?.fields?.phoneEn
                        : data[0]?.fields?.phoneAr}
                    </h5>
                    <p className="mt-2 text-base leading-6">
                      +1 (123) 456-7890
                    </p>
                  </li>
                  <li>
                    <h5 className="text-base leading-6"></h5>
                    <p className="mt-2 text-base leading-6">
                      info@elitegym.com
                    </p>
                  </li>
                </ul>
              </div>
              <div className="md:mt-0">
                <h4 className="text-sm font-semibold tracking-wider text-mainColor uppercase">
                  {lang === "en"
                    ? data[0]?.fields?.linksEn
                    : data[0]?.fields?.linksAr}
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      className="text-base leading-6 hover:text-mainColor"
                      href="#"
                    >
                      {lang === "en"
                        ? data[0]?.fields?.homeEn
                        : data[0]?.fields?.homeAr}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base leading-6 hover:text-mainColor"
                      href="#"
                    >
                      {lang === "en"
                        ? data[0]?.fields?.classesEn
                        : data[0]?.fields?.classesAr}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base leading-6 hover:text-mainColor"
                      href="#"
                    >
                      {lang === "en"
                        ? data[0]?.fields?.aboutEn
                        : data[0]?.fields?.aboutAr}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base leading-6 hover:text-mainColor"
                      href="#"
                    >
                      {lang === "en"
                        ? data[0]?.fields?.contact1En
                        : data[0]?.fields?.contact1Ar}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base leading-6 hover:text-mainColor"
                      href="#"
                    >
                      {lang === "en"
                        ? data[0]?.fields?.blogEn
                        : data[0]?.fields?.blogAr}
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
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-400 hover:text-gray-300" href="#">
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-400 hover:text-gray-300" href="#">
              <span className="sr-only">Youtube</span>
              <YoutubeIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            © 2023 EliteGYM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function PlayCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export default Footer;
