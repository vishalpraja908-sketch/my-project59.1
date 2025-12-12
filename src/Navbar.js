import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
          <div className="Vishal ">
       <div  className="text-2xl font-bold text-gray-800">amazon</div>
      
           <Link to="/CartRoute">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
          CART
        </button>
      </Link>
              </div>
    );
}

export default Navbar;