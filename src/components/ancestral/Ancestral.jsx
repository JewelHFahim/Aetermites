import { useContext } from "react";
import ancestral from "../../assets/imgs/ancestral.png";
import Button from "../../utils/Button";
import Container from "../../utils/Container";
import { ThemeContext } from "../../context/AppContext";

const Ancestral = () => {

  const {isDarkmode} = useContext(ThemeContext)

  return (
    <>
      <Container>
        <section className="mt-[54px] lg:mt-[114px] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[92px] items-center">
            <h1
              className={`font-bold text-center mb-[27px] text-[31px] lg:hidden  ${
                isDarkmode ? "text-white" : ""
              } `}
            >
              <p className="text-[#E39A59]">ANCESTRAL</p>
              <p className="-mt-[6px]"> INGREDIENTS</p>
            </h1>
            <div className=" lg:max-w-[864px]">
              <img
                className="w-full"
                src={ancestral}
                alt="ANCESTRAL INGREDIENTS Image"
              />
            </div>
            <div className="text-center lg:text-start">
              {/* Hidden on Phone */}
              <h1
                className={`font-bold lg:text-[57px]  hidden lg:block ${
                  isDarkmode ? "text-white" : ""
                } `}
              >
                ANCESTRAL INGREDIENTS
              </h1>
              <p
                className={`hidden lg:block lg:mt-[35px] lg:mb-[40px] leading-[31px] lg:text-[19px] ${
                  isDarkmode ? "text-[#FFFFFFBA] " : ""
                }`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br /> Ipsum has been the industrys standard
                dummy text ever since the 1500s, when an <br /> unknown printer
                took a galley of type and scrambled it to make a type specimen
                book.
              </p>

              <p
                className={` px-[22.5px] lg:px-0 lg:hidden lg:mt-[35px] lg:mb-[40px]  text-center text-[11px] mt-[8px] mb-[16px] leading-[13px]  ${
                  isDarkmode ? "text-[#FFFFFFBA] " : ""
                }`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button className={`bg-[#E39A59]   ${isDarkmode ? "" : "text-white"} `}>Read More</Button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Ancestral;
