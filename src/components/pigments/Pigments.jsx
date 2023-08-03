import pigments from "../../assets/imgs/pigments.png";
import Button from "../../utils/Button";
import Container from "../../utils/Container";
const Pigments = () => {
  return (
    <section
      className="mt-[162px] border"
      style={{
        background:
          " linear-gradient(180deg, #F4F4F4 0%, #F4F4F6 15.45%, #F2F2F2 36.50%, #F1F1F1 79.93%, #F3F3F3 100%)",
      }}
    >
      <Container>
        <div className="grid grid-cols-2 gap-[210px]  items-center">
          <div className="flex flex-col items-end ">
            <div>
              <h1 className="font-bold text-[73px] ">BEST PIGMENTS</h1>
              <p className="mt-[35px] mb-[40px] leading-[31px] text-[19px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
                <br /> industry. Lorem Ipsum has been the industrys standard
                dummy text <br /> ever since the 1500s, when an unknown printer
                took a galley of type <br /> and scrambled it to make a type
                specimen book. It has survived not <br /> only five centuries,
                but also the leap into electronic typesetting, <br /> remaining
                essentially unchanged.
              </p>
              <Button className={"bg-white text-black "}>Read More</Button>
            </div>
          </div>

          <div className=" w-[822px]  ">
            <img
              className="w-full"
              src={pigments}
              alt="ANCESTRAL INGREDIENTS Image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pigments;
