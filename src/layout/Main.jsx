import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Main = () => {


  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
