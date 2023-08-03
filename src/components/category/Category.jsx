import img1 from "../../assets/Asset 2.png";
import img2 from "../../assets/Asset 3.png";
import img3 from "../../assets/Asset 4.png";

const Category = () => {

    const datas =[
        {
            title: "Shower Gel",
            img: img1
        },
        {
            title: "Shower Gel",
            img: img2
        },
        {
            title: "Shower Gel",
            img: img3
        }
    ]

  return (
    <div className="py-[50px] mt-[50px]">
      <h1 className="text-center text-[73px] font-[700] font-roboto text-black">
        Category
      </h1>

      <div className="flex justify-center mt-[70px]">
        <div className="grid grid-cols-3 gap-[60px]">
          {datas.map((item, i) => (
            <div key={i} className="relative w-[396px] h-[392px]">
              <img src={item.img} alt="" className="w-[396px] h-[392px] " />
              <h2 className="text-[70px] font-dancingScript absolute bottom-4 left-[40px] text-white">
                {item.title}
              </h2>
              <div className="absolute top-[-20px] left-[-20px] w-[380px] h-[380px] border-4 border-[#E39A59]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
