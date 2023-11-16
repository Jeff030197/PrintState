import React from "react";
import HeroChoose from "../img/Banner/herochoose.png";
import Bag from "../img/icons/bag.png";
import Earn from "../img/icons/earn.png";
import Support from "../img/icons/support.png";
import Delivery from "../img/icons/delivery.png";

function WhyChooseUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div className="md:w-1/2">
        <img src={HeroChoose} alt="Hero Choose" />
      </div>

      <div className="md:w-1/2 md:ml-8">
        <p>
          <strong className="text-5xl flex justify-center">
            Why
            <p className="text-pink-600 px-1"> Choose us?</p>
          </strong>
          <p className="py-5 text-xl">
            At PrintState, we go beyond just being an e-commerce shop. We also
            provide a range of additional services like print on demand to
            support sellers in their journey of selling.
          </p>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="">
            <img src={Bag} alt="Bag" />
            <h2 className="text-xl font-bold mb-4">Shop</h2>
            <p className="text-gray-700">
              We offer quality products that you can choose from and where you can sell too.
            </p>
          </div>
          <div className="">
            <img src={Support} alt="Support" />
            <h2 className="text-xl font-bold mb-4">Customer Support</h2>
            <p className="text-gray-700">
              We provide exceptional service with 24/7 support to our customers.
            </p>
          </div>
          <div className="">
            <img src={Earn} alt="Earn" />
            <h2 className="text-xl font-bold mb-4">Sell and Earn</h2>
            <p className="text-gray-700">
              Sell your items online without buying upfront inventory without printing t-shirts.
            </p>
          </div>
          <div className="py-2">
            <img src={Delivery} alt="Delivery" />
            <h2 className="text-xl font-bold mb-4">Delivery</h2>
            <p className="text-gray-700">
              No need to worry because we'll print package and ship the orders for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
