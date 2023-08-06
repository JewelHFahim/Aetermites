import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useContext } from "react";
import { ThemeContext } from "./context/AppContext";

const App = () => {
  const { isDarkmode } = useContext(ThemeContext);

  return (
    <div className={` ${ isDarkmode ? "bg-secondary" : "bg-white"}`}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
