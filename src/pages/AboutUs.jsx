import FlexComponent from "../components/FlexComponent";
import CoreValue from "../components/CoreValue";
import OurTeam from "../components/OurTeam";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCards";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";
import Panner from '../components/Panner'
import AboutCeo from "../components/AboutCeo";
import SwiperImages from "../components/SwiperImages";
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
        content_type: "aboutUsTitleSection",
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
  const [ t,i18n ] = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <main className="flex flex-col mb-[50px] items-center justify-center gap-[50px]">
      <Panner title={t('About Us')}/>

        <FlexComponent
          flexRow={true}
          img={data[0]?.fields?.img1?.fields?.file?.url}
          title={`${
            lang === "en"
              ? data[0]?.fields?.title1En
              : data[0]?.fields?.title1Ar
          }`}
          des={`${
            lang === "en" ? data[0]?.fields?.desk1En : data[0]?.fields?.desk1Ar
          }`}
        />
              <AboutCeo/>
        <FlexComponent
          flexRow={false}
          img={data[0]?.fields?.img2?.fields?.file?.url}
          title={`${
            lang === "en"
              ? data[0]?.fields?.title2En
              : data[0]?.fields?.title2Ar
          }`}
          des={`${
            lang === "en" ? data[0]?.fields?.desk2En : data[0]?.fields?.desk2Ar
          }`}
        />
        <SwiperImages/>
        <CoreValue />


      </main>
    </>
  );
};

export default AboutUs;
