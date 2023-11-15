import React from 'react';

const Footer = () => {
 return (
  <>
 <footer className="bg-pink-600 text-white py-10">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="md:col-span-2 mb-6 md:mb-0">
        <h2 className="text-xl font-bold mb-3">Print State</h2>
        <p className="mb-3">
          Print State is an innovative e-commerce platform where creativity meets commerce.
        </p>
        <p className="mb-3">
          Design and customize a wide range of products, from fashion items to accessories.
        </p>
        <p>Publish your creations and earn a profit.</p>
      </div>

      <div className="md:col-span-1 mb-6 md:mb-0">
        <h2 className="text-xl font-bold mb-3">Useful Links</h2>
        <ul className="list-none pl-0">
          <li className="mb-2">
            <a href="#" className="hover:text-gray-300">How it Works?</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-300">Custom Shop</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-300">Need Help?</a>
          </li>
        </ul>
      </div>

      <div className="md:col-span-1">
        <h2 className="text-xl font-bold mb-3">Contact Us</h2>
        <ul className="list-none pl-0">
          <li className="mb-2">
            <i className="fas fa-map-marker-alt text-xl mr-2"></i>
            123 Street, New York, USA
          </li>
          <li className="mb-2">
            <i className="fas fa-phone text-xl mr-2"></i>
            +1234567890
          </li>
          <li className="mb-2">
            <i className="fas fa-envelope text-xl mr-2"></i>
            support@printstate.com
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<div className='text-center text-white bg-black py-3'>All Rights Reserved</div>
</>
 );
};

export default Footer;