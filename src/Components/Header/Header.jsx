import React, { useState } from "react";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div>
        <nav className="p-2 bg-white shadow md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <span className="text-4xl font-[Poppins] cursor-pointer font-semibold ">
              <img
                className="h-14 inline rounded-md"
                src={logo}
                alt="logo"
              />
              print<span className="text-pink-500">State</span>
            </span>

            {menuOpen ? (
              <span className="text-3xl cursor-pointer mx-2 md:hidden block"
                    onClick={toggleMenu}
              >
                <ion-icon name="close-outline"></ion-icon>
              </span >
              
            ) : (
              <span
              className="text-3xl cursor-pointer mx-2 md:hidden block"
              onClick={toggleMenu}
            >
              <ion-icon name="menu-outline"></ion-icon>
            </span>
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:static bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0
            ${menuOpen ? "opacity-100 top-0" : "opacity-0 top-[-400px] hidden"} transition-all ease-in duration-500`}
          >
            <li className="mx-1 my-4 md:my-0">
              <Link
                to={"/home"}
                className="px-5 hover:text-pink-400 duration-500"
              >
                HOME
              </Link>
            </li>
            <li className="mx-1 my-4 md:my-0">
              <Link
                to={"/shop"}
                className="px-5 hover:text-pink-400 duration-500"
              >
                SHOP
              </Link>
            </li>
            <li className="mx-1 my-4 md:my-0">
              <Link
                to={"/about"}
                className="px-5 hover:text-pink-400 duration-500"
              >
                ABOUT
              </Link>
            </li>
            <li className="mx-1 my-4 md:my-0">
              <Link
                to={"/contact"}
                className="px-5 hover:text-pink-400 duration-500"
              >
                CONTACT
              </Link>
            </li>
          </ul>

          <div className={`md:flex md:gap-5 md:items-center md:static bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0
            ${menuOpen ? "opacity-100 top-0" : "opacity-0 top-[-400px] hidden"} transition-all ease-in duration-500`}>
            <a to="/">
              <svg
                className="w-8 h-8 text-gray-800 dark:text-pink-400 inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 19 20"
              >
              </svg>
            </a>

            <button className="mx-4 px-4 py-2 bg-pink-400 rounded-md hover:bg-white border-2 border-pink-400">
              Login
            </button>
            <button className="px-4 py-2 bg-black rounded-md hover:bg-white border-2 border-black hover:text-black text-white">
              Signup
            </button>
          </div>
        </nav>
      </div>
    </>
 
  );
}

export default Header;
