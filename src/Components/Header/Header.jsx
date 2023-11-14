import React from "react";
import logo from "../img/logo.jpg"

function Header() {
  return (
    <>
      <div className="bg-pink-600 h-18">
      <nav>
        <div className="grid grid-cols-3 py-2">
        <span className="pl-5 flex flex-col-2">
          <img src={logo} alt="logo" className="w-16 rounded-md"/>
          <span className="py-2 text-4xl font-semibold">print<span className="text-pink-400">State</span></span>
          </span>
          <div className="font-semibold py-4 ">          
            <a href="" className="px-5">HOME</a>
            <a href="" className="px-5">SHOP</a>
            <a href="" className="px-5">ABOUT</a>
            <a href="" className="px-5">CONTACT</a>
          </div>
          <div className="flex justify-center py-4 uppercase">
            <div className="px-4">
            <a href="" className="px-4 py-2 bg-pink-400 rounded-md">login</a>
            </div>
            <div>
            <a href="" className="px-4 py-2 bg-black rounded-md"><span className="text-white">sign-up</span></a>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Header;
