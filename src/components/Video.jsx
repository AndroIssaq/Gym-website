import { useState } from "react";
import { useTranslation } from "react-i18next";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoEmbed = "https://youtu.be/5Y-aYA6YLlg?si=a9M-2AVBPbyfBzfG";

  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <section className="w-full mb-[50px] flex justify-center items-center mt-[120px] ">
      <div className="w-[95%] flex flex-col lg:flex-row justify-center items-center relative bg-black/70 h-[600px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-[-1] rounded-2xl top-0 left-0 h-[600px] flex w-full justify-start items-center object-cover object-top 
          "
        >
          <source
            src="/production_id-4110674 (2160p).mp4"
            type="video/mp4"
          />
        </video>
        <div
          className={`flex justify-center items-center w-full p-5 gap-8 ${
            lang === "en"
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          {/* Left */}
          <div
            className={` flex ${
              lang === "en" ? "justify-start" : "justify-end"
            } items-center`}
          >
            <h2 className="text-[50px]">
              {t("Transform Your Body Transform Your Life")}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
