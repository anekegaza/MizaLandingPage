import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Header = () => {
  // const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };
  const handleClick = () => {
    // if (!openNavigation) return;
    setOpenNavigation(false);
  };

  return (
    <header className="padding-x py-8 absolute z-30 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          {/* <img src={headerLogo} alt="Logo" width={130} height={29} /> */}
          <a href="/">
            <h3 className="text-coral-red font-bold font-mono text-4xl italic">
              Miza
            </h3>
          </a>
        </a>
        <ul
          className={`${
            openNavigation ? "flex" : "hidden"
          }  fixed top-[5rem] left-0 right-0 bottom-0 bg-black lg:static lg:flex lg:mx-auto lg:bg-transparent max-lg:flex-col items-start `}
          // className={` flex ${
          //   openNavigation ? "flex" : "hidden"
          // }   flex-1  justify-center items-center gap-16  max-lg:flex-col max-lg:items-start max-lg:fixed max-lg:w-[90vw] max-lg:h-[100vh] max-lg:top-0 max-lg:right-0 max-lg:bg-slate-950 max-lg:pt-10 pl-10 max-lg:z `}
        >
          <button
            className=" border-2 border-black pr-4 pt-2 pb-2 cursor-pointer pl-4 hidden max-lg:block close max-lg:text-white max-lg:border-white mb-6 max-lg:ml-10 max-lg:mt-10"
            onClick={handleClick}
          >
            &times;
          </button>
          {/* max-lg:hidden */}
          {navLinks.map((item) => (
            <li key={item.label} className="mt-5 mb-5">
              <a
                href={item.href}
                onClick={handleClick}
                className="font-montserrat max-lg:text-white leading  text-slate-gray lg:mx-6 max-lg:pl-10 max-lg:text-4xl max-lg:hover:text-slate-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            width={25}
            height={25}
            className="hidden max-lg:block cursor-pointer hamb"
            onClick={toggleNavigation}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
