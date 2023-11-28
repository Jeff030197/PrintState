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
            <span className="text-4xl font-[Poppins] cursor-pointer font-semibold lg:pl-10">
              <img className="h-12 inline rounded-md" src={logo} alt="logo" />
              <span className="lg:pl-3">
              print<span className="text-pink-500">State</span>
              </span>
            </span>

            {menuOpen ? (
              <span
                className="text-3xl cursor-pointer mx-2 md:hidden block"
                onClick={toggleMenu}
              >
                <ion-icon name="close-outline"></ion-icon>
              </span>
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
            className={`md:flex md:items-center md:static w-full md:w-auto md:py-0 py-4 md:pl-0 font-medium ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <li className="mx-1 my-4 md:my-0">
              <Link to={"/"} className="px-5 hover:text-pink-400 duration-300">
                HOME
              </Link>
            </li>
            <li className="mx-1 my-4 md:my-0">
              <Link to={"/shop"} className="px-5 hover:text-pink-400 duration-300">
                SHOP
              </Link>
            </li>
            <li className="mx-1 my-4 md:my-0">
              <Link to={"/about"} className="px-5 hover:text-pink-400 duration-300">
                ABOUT
              </Link>
            </li>
            <li className="mx-1 my-4 md:my-0">
              <Link to={"/contact"} className="px-5 hover:text-pink-400 duration-300">
                CONTACT
              </Link>
            </li>
          </ul>

          <div className="md:flex md:items-center md:static w-full md:w-auto md:py-0 py-4 md:pl-0">
            <Link to="/">
              <span>
              <ion-icon name="cart-outline" className="h-32 w-32"></ion-icon>
              </span>
            </Link>
            

            <button className="mx-4 px-4 py-1 bg-pink-400 rounded-md hover:bg-white border-2 border-pink-400 shadow-md shadow-black/70">
              Login
            </button>
            <button className="px-4 py-1 bg-black rounded-md hover:bg-white border-2 border-black hover:text-black text-white shadow-md shadow-black/70">
              Signup
            </button>
          </div>

        </nav>
      </div>
    </>
  );
}

export default Header;