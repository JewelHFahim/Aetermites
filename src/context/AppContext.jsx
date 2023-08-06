import  { createContext, useState } from "react";

export const ThemeContext = createContext();

const AppContext = ({ children }) => {


    const [isDarkmode, setIsDarkmode] = useState(true);


    const authInfo = {  isDarkmode, setIsDarkmode };

    return (
        <ThemeContext.Provider value={authInfo}>{children}</ThemeContext.Provider>
    );
};

export default AppContext;