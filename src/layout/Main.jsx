import Footer from "./Footer/Footer";
// import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar/Navbar2";

const Main = () => {
  return (
    <div>
      <Navbar2 />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
