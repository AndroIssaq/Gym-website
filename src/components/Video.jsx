import { useTranslation } from "react-i18next";

const Video = ({video}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
 
  return (
    <section className="w-full  mb-[50px]   mt-[50px] flex items-center justify-center  ">
      <div className=" w-full flex items-center justify-center">
        <div className="videos w-full">
              <div  className="w-full flex flex-col lg:flex-row justify-center items-center relative bg-black/70 h-[70vh]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className=" rounded-2xl h-full flex w-full justify-start items-center object-cover object-top 
                "
              >
                <source src={video} type="" />
              </video>
              <div
                className={`flex absolute bg-[#00000077] h-full z-[1] top-0 left-0 justify-center items-center w-full text-center  ${
                  lang === "en"
                    ? "flex-col lg:flex-row"
                    : "flex-col lg:flex-row-reverse"
                }`}
              >
                <h1 className="text-[25px] font-bold">{t('Transform Your Body Transform Your Life')}</h1>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
