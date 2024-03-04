import Title from "./Title";
import img1 from "../assets/team1.webp";
import img2 from "../assets/team2.webp";
import img3 from "../assets/team3.webp";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
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
console.log(data);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const team = [
    {
      img: img1,
      name: `${
        lang === "en" ? data[0]?.fields?.coach1En : data[0]?.fields?.coach1Ar
      }`,
      title: `${
        lang === "en"
          ? data[0]?.fields?.coach1DeskEn
          : data[0]?.fields?.coach1DeskAr
      }`,
    },
    {
      img: img2,
      name: `${
        lang === "en" ? data[0]?.fields?.coach2En : data[0]?.fields?.coach2Ar
      }`,
      title: `${
        lang === "en"
          ? data[0]?.fields?.coach2DeskEn
          : data[0]?.fields?.coach2DeskAr
      }`,
    },
    {
      img: img3,
      name: `${
        lang === "en" ? data[0]?.fields?.coach3En : data[0]?.fields?.coach3Ar
      }`,
      title: `${
        lang === "en"
          ? data[0]?.fields?.coach3DeskEn
          : data[0]?.fields?.coac3DeskAr
      }`,
    },
  ];
  return (
    <section className=" w-full">
      <div className="container">
        <Title
          title={`${
            lang === "en"
              ? data[0]?.fields?.ourTeamEn
              : data[0]?.fields?.ourTeamAr
          }`}
        />
        <div className="content bg-[#22c55e] " />
        <div className="mt-[50px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((traner, index) => {
            return (
              <div key={index} className=" p-4 rounded-lg shadow-md">
                <img
                  src={traner.img}
                  alt="Alex Ramirez"
                  className="rounded-t-lg h-[80%] object-cover w-full"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold">{traner.name}</h3>
                  <p className="text-gray-600">{traner.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
