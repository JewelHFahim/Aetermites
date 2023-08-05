import pigments from "../../assets/imgs/pigments.png";
import Button from "../../utils/Button";
import Container from "../../utils/Container";
import { useState } from "react";

const Pigments = () => {
  const [theme] = useState(false);

  return (
    <>
      <section className="mt-[40px] lg:mt-[162px] ">
        <Container>
          <div className={`${theme ? "bg-[#030303] " : ""} `}>
            <div className=" lg:flex justify-between   items-center ">
              {/* destop */}
              <div>
                <div className="lg:flex hidden items-end pl-[251px]">
                  <div>
                    <h1
                      className={`font-bold lg:text-[73px] ${
                        theme ? "text-white" : ""
                      }`}
                    >
                      BEST PIGMENTS
                    </h1>
                    <p
                      className={` hidden lg:block mt-[35px] mb-[40px] leading-[31px] text-[19px] ${
                        theme ? "text-[#FFFFFFBA] " : ""
                      } `}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting <br /> industry. Lorem Ipsum has been the
                      industrys standard dummy text <br /> ever since the 1500s,
                      when an unknown printer took a galley of type <br /> and
                      scrambled it to make a type specimen book. It has survived
                      not <br /> only five centuries, but also the leap into
                      electronic typesetting, <br /> remaining essentially
                      unchanged.
                    </p>
                    <Button className={"bg-white text-black "}>
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
              {/* phone */}
              <h1
                className={`font-bold text-center mb-[27px]  lg:hidden font-roboto  ${
                  theme ? "text-white" : ""
                } `}
              >
                <p className="text-[#E39A59] text-[33px]"> BEST </p>
                <p className="-mt-[6px] text-[31px]"> PIGMENTS</p>
              </h1>
              <div className=" lg:w-[822px]  ">
                <img
                  className="w-full"
                  src={pigments}
                  alt="ANCESTRAL INGREDIENTS Image"
                />
              </div>

              <div className="text-center lg:hidden">
                <p
                  className={`px-[22.5px] lg:px-0 lg:hidden text-center font-roboto text-[11px] mt-[23px] mb-[16px] leading-[13px]  ${
                    theme ? "text-[#FFFFFFBA] " : ""
                  }`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Button
                  className={"bg-[#E39A59]  text-white"}
                  style={{
                    boxShadow: "4px 4px 11px 0px rgba(55, 55, 55, 0.18)",
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Pigments;
