import React from "react";
import img from "../img/Banner/carousel1.png";
import catMen from "../img/Banner/CatMen.png";
import catWomen from "../img/Banner/CatWomen.png";
import catKids from "../img/Banner/CatKids.png";
import catBaby from "../img/Banner/CatBaby.png";

import one from "../img/EcomProducts/1.png";

const Shop = () => {
  return (
    <div className="relative">
      <section className="bg-amber-900 w-full h-fit">
        <div>
          <img src={img} alt="image1" />
        </div>
      </section>

      <section>
        <div className="py-6 px-4 gap-4 grid lg:grid-cols-3 lg:gap-4">
       
            <span >
            <img src={catMen} alt="" className=""/>
            </span>
     
          <span>
            <span className="h-80 w-fit">
            <img src={catKids} alt="" className="lg:h-[50%]" />
            </span>
            <span className="h-80 w-fit">
            <img src={catBaby} alt=""  className="lg:h-[50%]"/>
            </span>
          </span>

          <span>
            <img src={catWomen} alt="" />
          </span>
        </div>
      </section>

      <section>
        <h1 className="flex justify-center font-semibold text-6xl text-gray-600">
          APPARELS
        </h1>

       <div className="pl-6 grid lg:grid-cols-4 lg:py-4">

       <div className="pt-10">
          <div className="max-w-xs h-fit bg-white rounded-lg shadow-lg dark:bg-gray-200 dark:border-gray-700">
            <a href="#" className="flex justify-center items-center">
              <img className="rounded-t-lg w-36" src={one} alt="" />
            </a>

            <div className="p-5 dark:bg-white grid grid-cols-2">
              <div className="bg-gray-500 w-fit px-2 rounded-full h-fit">
                <a href="#">
                  <h5 className="py-0.5 text-sm font-bold tracking-tight text-gray-900 dark:text-black">
                    <span>tshirt</span>
                  </h5>
                </a>
              </div>
              <p className="mb-3 font-medium text-3xl dark:text-black flex justify-end">
                ₱1000
              </p>
              <p className="mb-3 font-semibold dark:text-black text-xl">
                Dont do it
              </p>

              <button className="bg-pink-400 rounded-md hover:bg-black text-white font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="max-w-xs h-fit bg-white rounded-lg shadow-lg dark:bg-gray-200 dark:border-gray-700">
            <a href="#" className="flex justify-center items-center">
              <img className="rounded-t-lg w-36" src={one} alt="" />
            </a>

            <div className="p-5 dark:bg-white grid grid-cols-2">
              <div className="bg-gray-500 w-fit px-2 rounded-full h-fit">
                <a href="#">
                  <h5 className="py-0.5 text-sm font-bold tracking-tight text-gray-900 dark:text-black">
                    <span>tshirt</span>
                  </h5>
                </a>
              </div>
              <p className="mb-3 font-medium text-3xl dark:text-black flex justify-end">
                ₱1000
              </p>
              <p className="mb-3 font-semibold dark:text-black text-xl">
                Dont do it
              </p>

              <button className="bg-pink-400 rounded-md hover:bg-black text-white font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="max-w-xs h-fit bg-white rounded-lg shadow-lg dark:bg-gray-200 dark:border-gray-700">
            <a href="#" className="flex justify-center items-center">
              <img className="rounded-t-lg w-36" src={one} alt="" />
            </a>

            <div className="p-5 dark:bg-white grid grid-cols-2">
              <div className="bg-gray-500 w-fit px-2 rounded-full h-fit">
                <a href="#">
                  <h5 className="py-0.5 text-sm font-bold tracking-tight text-gray-900 dark:text-black">
                    <span>tshirt</span>
                  </h5>
                </a>
              </div>
              <p className="mb-3 font-medium text-3xl dark:text-black flex justify-end">
                ₱1000
              </p>
              <p className="mb-3 font-semibold dark:text-black text-xl">
                Dont do it
              </p>

              <button className="bg-pink-400 rounded-md hover:bg-black text-white font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>


        <div className=" pt-10">
          <div className="max-w-xs h-fit bg-white rounded-lg shadow-lg dark:bg-gray-200 dark:border-gray-700">
            <a href="#" className="flex justify-center items-center">
              <img className="rounded-t-lg w-36" src={one} alt="" />
            </a>

            <div className="p-5 dark:bg-white grid grid-cols-2">
              <div className="bg-gray-500 w-fit px-2 rounded-full h-fit">
                <a href="#">
                  <h5 className="py-0.5 text-sm font-bold tracking-tight text-gray-900 dark:text-black">
                    <span>tshirt</span>
                  </h5>
                </a>
              </div>
              <p className="mb-3 font-medium text-3xl dark:text-black flex justify-end">
                ₱1000
              </p>
              <p className="mb-3 font-semibold dark:text-black text-xl">
                Dont do it
              </p>

              <button className="bg-pink-400 rounded-md hover:bg-black text-white font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>


        <div className=" pt-10">
          <div className="max-w-xs h-fit bg-white rounded-lg shadow-lg dark:bg-gray-200 dark:border-gray-700">
            <a href="#" className="flex justify-center items-center">
              <img className="rounded-t-lg w-36" src={one} alt="" />
            </a>

            <div className="p-5 dark:bg-white grid grid-cols-2">
              <div className="bg-gray-500 w-fit px-2 rounded-full h-fit">
                <a href="#">
                  <h5 className="py-0.5 text-sm font-bold tracking-tight text-gray-900 dark:text-black">
                    <span>tshirt</span>
                  </h5>
                </a>
              </div>
              <p className="mb-3 font-medium text-3xl dark:text-black flex justify-end">
                ₱1000
              </p>
              <p className="mb-3 font-semibold dark:text-black text-xl">
                Dont do it
              </p>

              <button className="bg-pink-400 rounded-md hover:bg-black text-white font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className=" pt-10">
          <div className="max-w-xs h-fit bg-white rounded-lg shadow-lg dark:bg-gray-200 dark:border-gray-700">
            <a href="#" className="flex justify-center items-center">
              <img className="rounded-t-lg w-36" src={one} alt="" />
            </a>

            <div className="p-5 dark:bg-white grid grid-cols-2">
              <div className="bg-gray-500 w-fit px-2 rounded-full h-fit">
                <a href="#">
                  <h5 className="py-0.5 text-sm font-bold tracking-tight text-gray-900 dark:text-black">
                    <span>tshirt</span>
                  </h5>
                </a>
              </div>
              <p className="mb-3 font-medium text-3xl dark:text-black flex justify-end">
                ₱1000
              </p>
              <p className="mb-3 font-semibold dark:text-black text-xl">
                Dont do it
              </p>

              <button className="bg-pink-400 rounded-md hover:bg-black text-white font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>


        <div className=" pt-10">
          <div className="max-w-xs h-fit bg-white rounded-lg shadow-lg dark:bg-gray-200 dark:border-gray-700">
            <a href="#" className="flex justify-center items-center">
              <img className="rounded-t-lg w-36" src={one} alt="" />
            </a>

            <div className="p-5 dark:bg-white grid grid-cols-2">
              <div className="bg-gray-500 w-fit px-2 rounded-full h-fit">
                <a href="#">
                  <h5 className="py-0.5 text-sm font-bold tracking-tight text-gray-900 dark:text-black">
                    <span>tshirt</span>
                  </h5>
                </a>
              </div>
              <p className="mb-3 font-medium text-3xl dark:text-black flex justify-end">
                ₱1000
              </p>
              <p className="mb-3 font-semibold dark:text-black text-xl">
                Dont do it
              </p>

              <button className="bg-pink-400 rounded-md hover:bg-black text-white font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>


        <div className="pt-10">
          <div className="max-w-xs h-fit bg-white rounded-lg shadow-lg dark:bg-gray-200 dark:border-gray-700">
            <a href="#" className="flex justify-center items-center">
              <img className="rounded-t-lg w-36" src={one} alt="" />
            </a>

            <div className="p-5 dark:bg-white grid grid-cols-2">
              <div className="bg-gray-500 w-fit px-2 rounded-full h-fit">
                <a href="#">
                  <h5 className="py-0.5 text-sm font-bold tracking-tight text-gray-900 dark:text-black">
                    <span>tshirt</span>
                  </h5>
                </a>
              </div>
              <p className="mb-3 font-medium text-3xl dark:text-black flex justify-end">
                ₱1000
              </p>
              <p className="mb-3 font-semibold dark:text-black text-xl">
                Dont do it
              </p>

              <button className="bg-pink-400 rounded-md hover:bg-black text-white font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

       </div>
      </section>
    </div>
  );
};

export default Shop;
