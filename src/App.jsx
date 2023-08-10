import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/AppContext";
import AOS from "aos";
import 'aos/dist/aos.css';


const App = () => {
  const { isDarkmode } = useContext(ThemeContext);


  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className={` ${ isDarkmode ? "bg-secondary" : "bg-white"}`}>
        
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
