// import img1 from "../../assets/Asset 7.png";
// import { FaPlay } from "react-icons/fa";

const OurStory = () => {
  return (
    <div className="mt-[140px] h-[842px] flex justify-center relative overflow-hidden">
      <div className="relative z-[2] drop-shadow-md">

        <div>
          {/* <img src={img1} alt="" className="w-[1421px] h-[623px]" />

          <button className="absolute left-[45%] top-[30%] w-[144px] h-[144px] rounded-full bg-white bg-opacity-[50%] flex justify-center items-center">
            <FaPlay className="text-[63px] text-white" />
          </button> */}

          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="1421"
              height="623"
              src="https://www.youtube.com/embed/ZNPEgRIEkBY?si=KzswPFRo8haKL4Cs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="rounded-[29px]"
            ></iframe>
          </div>
        </div>

        <div className=" w-[434px] h-[345px] rounded-[17px] bg-white absolute right-[25px] bottom-[50px] px-[63px] py-[40px]">
          <h2 className="text-center text-primary text-[33px] font-roboto font-[700] ">
            Our Story
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            <br />
            <br />
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
        </div>

      </div>

      <div className="absolute right-[-280px] bottom-[-280px]  w-[900px] h-[900px] border-[200px] border-primary border-opacity-[33%] rounded-full bg-transparent"></div>
    </div>
  );
};

export default OurStory;
