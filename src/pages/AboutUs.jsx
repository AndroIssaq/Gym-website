import img from "../assets/pexels-the-lazy-artist-gallery-2247179.jpg";
import FlexComponent from "../components/FlexComponent";
import CoreValue from "../components/CoreValue";
import OurTeam from "../components/OurTeam";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCards";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "aboutUs",
      });
      console.log(response);
      setData(response.items);
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
    <>
      <main className="flex flex-col items-center justify-center gap-[50px]">
        <FlexComponent 
          flexRow={true}
          img={img}
          title={`${
            lang === "en"
              ? data[0]?.fields?.title1En
              : data[0]?.fields?.title1Ar
          }`}
          des={`${
            lang === "en" ? data[0]?.fields?.desk1En : data[0]?.fields?.desk1Ar
          }`}
        />
        <FlexComponent
          flexRow={false}
          img={img}
          title={`${
            lang === "en"
              ? data[0]?.fields?.title2En
              : data[0]?.fields?.title2Ar
          }`}
          des={`${
            lang === "en"
              ? data[0]?.fields?.desk2En
              : data[0]?.fields?.desk2Ar
          }`}
        />
        <CoreValue />
        <InfiniteMovingCardsDemo />
        <OurTeam />
      </main>
    </>
  );
};

export default AboutUs;