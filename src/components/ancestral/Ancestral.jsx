import ancestral from "../../assets/imgs/ancestral.png";

import Button from "../../utils/Button";
import Container from "../../utils/Container";


const Ancestral = () => {
  return (
    <Container>
      <section className="mt-[114px] border">
        <div className="grid grid-cols-2 gap-[92px] items-center">
          <div className=" h-[692px]">
            <img
              className="w-full"
              src={ancestral}
              alt="ANCESTRAL INGREDIENTS Image"
            />
          </div>
          <div>
            <h1 className="font-bold text-[57px] ">ANCESTRAL INGREDIENTS</h1>
            <p className="mt-[35px] mb-[40px] leading-[31px] text-[19px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem <br /> Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an <br /> unknown printer
              took a galley of type and scrambled it to make a type specimen
              book.{" "}
            </p>
            <Button className={"bg-[#E39A59]  text-white"}>
              Read More
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Ancestral;