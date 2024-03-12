import { useTranslation } from "react-i18next";

const FlexComponent = ({ img, title, des, flexRow }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <section className="w-full mt-[50px]">
      <div className="container">
        <div
          className={`w-full ${
            flexRow
              ? "flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col items-center justify-center"
              : "flex xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse sm:flex-col flex-col items-center justify-center"
          } gap-8`}
        >
          <div className={`flex-1 p-[30px] flex flex-col  ${lang === "ar" && "text-end items-end "}`}>
            <h1 className="  lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] font-bold leading-tight mb-4">{title}</h1>
            <div className="w-24 h-1 bg-mainColor mb-6" />
            <p className="text-lg lg:text-[15px] md:text-[150px] sm:text-[12px] text-[12px]">{des}</p>
          </div>
          <div className="flex-1">
            <img
              alt="Gym interior"
              className="rounded-lg object-cover w-full h-full "
              src={img}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexComponent;
