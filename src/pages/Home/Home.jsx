import Discount from "../../components/Discount/Discount";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import NewProduct from "../../components/NewProduct/NewProduct";
import OurStory from "../../components/OurStory/OurStory";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import Review from "../../components/ReviewSection/Review";
import HeaderSlider from "../../components/Slider/HeaderSlider/HeaderSlider";
import Ancestral from "../../components/ancestral/Ancestral";
import Category from "../../components/category/Category";
import Pigments from "../../components/pigments/Pigments";
import Socialcon from "../../utils/Socialcon";

const Home = () => {

  return (
    <div>

      <HeaderSlider />

      <Category />

      <FeaturedProduct />

      <Ancestral />

      <NewProduct />

      <Pigments />

      <OurStory />

      <Discount />

      <RecentActivity />

      <Review />

        <div className="hidden md:block lg:block right-0 top-[400px] z-[99] fixed">
        <Socialcon/>
      </div>
    </div>
  );
};

export default Home;
