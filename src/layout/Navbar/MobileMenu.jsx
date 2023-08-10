import { useContext, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ThemeContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";
import img1 from "../../assets/logo.svg";
import img2 from "../../assets/logoDark.png";
import "./MobileMenu.css";

const MobileMenu = () => {
  const { isOpen, toggleDrawer, isDarkmode } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const menus = [
    {
      title: "Home",
      url: "",
    },

    {
      title: "Shop",
      url: "",
      submenu: [
        {
          subttitle: "Item 1",
          url: "",
        },
        {
          subttitle: "Item 1",
          url: "",
        },
        {
          subttitle: "Item 1",
          url: "",
        },
        {
          subttitle: "Item 1",
          url: "",
        },
      ],
    },

    {
      title: "Blog",
      url: "",
    },

    {
      title: "About Us",
      url: "",
    },
  ];

  return (
    <div className="">
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={280}
        overlayColor={` ${isDarkmode ? "" : "#000"}`}
        overlayOpacity="0.5"
        lockBackgroundScroll={true}
        className=""
      >
        <div className={`relative pl-[29px] h-[100vh] overflow-y-auto overflow-x-hidden flex flex-col justify-between pb-[60px] ${ isDarkmode ? "bg-secondary " : "bg-white"}`}>
          <div>
            <div className="relative mt-[35px]">
              {isDarkmode ? (
                <img src={img2} alt="" className="w-[180px]" />
                ) : (
                <img src={img1} alt="" className=" w-[180px]" />
              )}

              <p className={`text-[11px] ${isDarkmode ? "text-white " : "text-black"}`}>Radiate Beauty, Naturally</p>
            </div>

            {/* Menu Close Button */}
            <button
              onClick={toggleDrawer}
              className={`absolute right-[12px] top-[20px] ${isDarkmode ? "text-white " : "text-black"}`}
            >
              <CgCloseO className="text-[26px]" />
            </button>

            {/* Menu and Submenu */}
            <div className="mt-[30px] h-[calc(100% - 207px)] overflow-auto">
              <ul>
                <li
                  className={`menu ml-[-24px] uppercase text-[15px] font-[700] font-inter flex flex-col gap-[24px] ${
                    isDarkmode ? "text-white" : "text-black"
                  }`}
                >
                  {menus.map((menu, i) => (
                    <details
                      key={i}
                      className="border-b border-black border-opacity-[20%] flex"
                    >
                      {menu.submenu ? (
                        <summary
                          onClick={handleOpen}
                          className="mb-2 flex justify-between items-center"
                        >
                          <a href={menu.url}>{menu.title}</a>
                          {open ? (
                            <FiMinusCircle className="text-[20px]" />
                          ) : (
                            <FiPlusCircle className="text-[20px]" />
                          )}
                        </summary>
                      ) : (
                        <summary className="mb-2 flex justify-between items-center">
                          <Link href={menu.url}>{menu.title}</Link>
                        </summary>
                      )}
                      {menu.submenu && open && (
                        <ul>
                          <li>
                            <>
                              {menu.submenu.map((sbm, i) => (
                                <a
                                  key={i}
                                  href={sbm.url}
                                  className="grid grid-cols-1 ml-[5%]"
                                >
                                  {sbm.subttitle}
                                </a>
                              ))}
                            </>
                          </li>
                        </ul>
                      )}
                    </details>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
