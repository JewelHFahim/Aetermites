import Discount from "../../components/Discount/Discount";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import NewProduct from "../../components/NewProduct/NewProduct";
import HeaderSlider from "../../components/Slider/HeaderSlider/HeaderSlider";
import Ancestral from "../../components/ancestral/Ancestral";
import Category from "../../components/category/Category";
import Pigments from "../../components/pigments/Pigments";

const Home = () => {
  return (
    <div>
      <HeaderSlider />
      <Category />
      <FeaturedProduct />

      <Ancestral />

      <h1 className="mt-[198px] border h-[450px]">SLIDER NEW PRODUCT</h1>

      <Pigments />
      <h1 className="mt-[140px] border h-[450px]">SLIDER OUR STORY</h1>

      <Discount />

      <h1 className="mt-[80px] border h-[450px]">SLIDER OUR RECENT ACTIVITY</h1>

      <NewProduct />

      <h1 className="mt-[144px] border h-[450px]">SLIDER OUR RECENT ACTIVITY</h1>

    </div>
  );
};

export default Home;
