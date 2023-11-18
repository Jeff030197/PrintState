import React from "react";
import img from "../img/Banner/carousel1.png";
import catMen from "../img/Banner/CatMen.png";
import catWomen from "../img/Banner/CatWomen.png";
import catKids from "../img/Banner/CatKids.png";
import catBaby from "../img/Banner/CatBaby.png";

const Shop = () => {
  return (
    <div className="relative">
      <section className="bg-amber-900 w-full h-fit">
        <div>
          <img src={img} alt="image1" />
        </div>
      </section>

      <section>
        <div className="grid grid-cols-3 gap-4 py-6 px-4">
          <div>
            <img src={catMen} alt="" />
          </div>
          <div className="py-4">
            <img src={catKids} alt="" className="h-80" />
            <img src={catBaby} alt="" className="py-4 h-80" />
          </div>
          <div>
            <img src={catWomen} alt="" />
          </div>
        </div>
      </section>

      <section>
        <h1 className="flex justify-center font-semibold text-6xl text-gray-600">APPARELS</h1>
            
      </section>
    </div>
  );
};

export default Shop;
