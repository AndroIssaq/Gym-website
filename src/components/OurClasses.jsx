import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Title from "./Title";
import img from "../assets/class1.webp";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const OurClasses = () => {
  const [data, setData] = useState([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "ourClasses",
      });
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
  const [t, i18n] = useTranslation();
  const lang = i18n.language;

  return (
    <section className="mt-[50px]">
      <Title
        title={t("Our Classes Section Tilte")}
        des={t("Our Classes Section Des")}
      />
      <div className="container">
        <div className="content card-parent grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[20px]">
          {data?.map((service, index) => {
            return (
              <CardContainer key={index} className="inter-var ">
                <CardBody
                  className={`py-[0px] relative card group/card xl:h-[88vh] lg:h-[88vh] md:h-[90vh] sm:h-[90vh] h-[90vh] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  bg-[#282727c2] border-black/[0.1] w-auto  flex flex-col  ${
                    lang === "ar" ? "items-end" : "items-start"
                  }  rounded-xl p-6 border  `}
                >
                  <CardItem
                    translateZ="50"
                    className="text-xl    text-neutral-600  dark:text-white"
                  >
                    {lang === "en"
                      ? service?.fields?.titleEn
                      : service?.fields?.titleAr}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4 h-[50%]">
                    <img
                      src={"http:" + service.fields?.img?.fields?.file?.url}
                      className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className={`text-[#585757] ${
                      lang === "ar" ? "items-end" : "items-start"
                    } text-end  text-sm max-w-sm mt-[20px]   `}
                  >
                    {lang === "en"
                      ? service?.fields?.descriptionEn
                      : service?.fields?.descriptionAr}
                  </CardItem>
                  <div
                    className={`flex ${
                      lang === "ar"
                        ? "flex-row-reverse justify-between text-end"
                        : "flex-row justify-between "
                    } w-full gap-[20px] items-center  flex-1  `}
                  >
                    <CardItem
                      translateZ={20}
                      as="p"
                      className=" py-2 rounded-xl text-xs font-normal  dark:text-white flex-1"
                    >
                      <p className="text-[#585757] text-sm max-w-sm mt-2">
                        {" "}
                        {lang === "en"
                          ? service?.fields?.benefitsEn
                          : service?.fields?.benefitsAr}
                      </p>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className=" flex-1 py-2 rounded-xl bg-mainColor text-[#fff] text-xs font-bold"
                    >
                      <Link to={"/Classes"}>
                        {t("Our Classes Section show More Button")}
                      </Link>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurClasses;
