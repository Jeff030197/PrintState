import React from "react";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-white h-18">
      <nav>
        <div className="grid grid-cols-3 py-2">
          <span className="pl-5 flex flex-col-2">
            <img src={logo} alt="logo" className="w-16 rounded-md" />
            <span className="py-2 text-4xl font-semibold">
              print<span className="text-pink-400">State</span>
            </span>
          </span>
          <div className="font-semibold py-4">
            <Link to="/home" className="px-5">
              HOME
            </Link>
          <Link to={"/shop"} className="px-5">
              SHOP
            </Link>
            <a to="/about" className="px-5">
              ABOUT
            </a>
            <a to="/contact" className="px-5">
              CONTACT
            </a>
          </div>
          <div className="flex justify-center py-4 uppercase">
            <div>
              <a to="/">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-pink-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 19 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1-4H5m0 0L3 4m0 0h5.501M3 4l-.792-3H1m11 3h6m-3 3V1"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="px-4">
              <a to="/login" className="px-4 py-2 bg-pink-400 rounded-md hover:bg-white border-2 border-pink-400">
                login
              </a>
            </div>
            <div>
              <a to="/signup" className="px-4 py-2 bg-black rounded-md hover:bg-white border-2 border-black hover:text-black text-white">
                sign-up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
