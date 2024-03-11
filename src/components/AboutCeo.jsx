/* eslint-disable no-unused-vars */
import Title from "./Title";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "./Button";
const AboutCeo = () => {
  const [t, i18n] = useTranslation();
  const lang = i18n.language;
  const [data, setData] = useState([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "aboutCeo",
      });
      setData(response.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(data);
  return (
    <section className="mt-[50px]">
      <Title title={t("About Ceo Section Title")} />
      <div className="container ">
        <div className="content mt-[50px] xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col gap-[50px]  flex items-start justify-center ">
          <div className="left relative flex-1 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-[25px]">

            {
              data[0]?.fields?.images?.map((img,index)=>{
                return(
                  <div key={index} className="img lg:h-[300px] md:h-[550px] sm:h-[350px] h-[350px] lg:w-[90%] md:w-[95%] sm:w-[95%] w-[95%] rounded-[30px] overflow-hidden">
                  <img
                    src={"http:" + img?.fields?.file?.url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                )
              })
            }
           
          </div>

          <div
            className={` flex flex-col flex-1 self-start gap-6 md:sticky top-[80px] ${
              lang === "ar" ? "items-end text-end" : "items-start"
            } `}
          >
            <div className="right flex-1 flex flex-col gap-[20px] items-start justify-start text-start">
              <div className="name lg:text-[55px] md:text-[62px] sm:text-[35px] text-[30px] font-bold text-[#fff] ">
                <h2>
                  {" "}
                  {lang === "en"
                    ? data[0]?.fields?.titleEn
                    : data[0]?.fields?.titleAr}
                </h2>
              </div>
              <p
                className={`des text-[#C6C8C9] lg:text-[18px] md:text-[18px] sm:text-[15px] text-[14px] ${
                  lang === "ar" && "text-end"
                } `}
              >
                {lang === "en"
                  ? data[0]?.fields?.descriptionEn
                  : data[0]?.fields?.descriptionAr}
              </p>
              <Button   link={'AboutUs'} name={  lang === "en"
                ? data[0]?.fields?.buttonEn
                : data[0]?.fields?.buttonAr }/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCeo;
