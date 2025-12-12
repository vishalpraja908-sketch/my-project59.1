import React, { useState } from 'react';

function Productdetail() {

  const [cartcount, setCartCount] = useState(1);

const addToCart = () => {
    setCartCount(cartcount +1);
};

  return (
    <div className="center flex border-2 border-gray-500 pt-2 pb-2 pl-2 pr-2 m-10">
      <img src="https://codeyogi.io/coffee-mug.jpeg" className="w-full md:w-1/2" alt="Black Printed Coffee Mug" />
      <div className="middle px-4 py-4">
        <h1 className="text-4xl">Black Printed Coffee Mug</h1>
        <h2 className="text-2xl pt-4">$15.00</h2>
        <p className="pt-4">
         this is my next website is productdetail and show in page in different variety of mugs and different prices and different names
        </p>
        <div className="bottom-btn pt-8">
         
          <span className="btn-1 border-2 bg-gray py-4 px-10 text-gray-500">{cartcount}</span>
        
          <button
            className="btn-2 text-white font-bold bg-red-500 border-2 py-5 px-10 rounded-2xl"
            onClick={addToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
