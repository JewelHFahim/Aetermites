import { useContext } from "react";
import { ThemeContext } from "../../context/AppContext";

const OurStory = () => {
  const { isDarkmode } = useContext(ThemeContext);

  return (
    <div className="mt-[40px] pb-[30px] lg:mt-[140px] lg:h-[842px] flex justify-center relative overflow-hidden">

      <div className="relative z-[2]">

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/ZNPEgRIEkBY?si=KzswPFRo8haKL4Cs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className=" rounded-[29px] w-full h-[300px] lg:w-[1421px] lg:h-[623px]"
          ></iframe>
        </div>

        <div
          className={`w-[50%] mx-auto h-[200px] lg:w-[434px] lg:h-[345px] rounded-[17px] lg:absolute lg:right-[25px] lg:bottom-[50px] lg:px-[63px] lg:py-[40px] py-[20px] drop-shadow-lg ${
            isDarkmode ? "bg-secondary" : "bg-white"
          }`}
        >
          <h2 className={`text-center text-primary text-[17px] lg:text-[33px] font-roboto font-[700] uppercase`}>
            Our Story
          </h2>
          <p className={`text-[10px] lg:text-[15px] text-opacity-[63%] px-[28px] ${ isDarkmode ? "text-offWhite" : ""}`}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            <br />
            <br />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

      </div>

      <div className="absolute right-[-50%] lg:right-[-280px] lg:bottom-[-280px] w-[428px] h-[428px] border-[100px]  lg:w-[900px] lg:h-[900px] lg:border-[200px] border-[#29292C] lg:border-primary border-opacity-[33%] lg:border-opacity-[33%] rounded-full bg-transparent"></div>
    </div>
  );
};

export default OurStory;
