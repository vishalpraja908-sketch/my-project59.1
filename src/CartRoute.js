import React from 'react'
  import { Routes, Route } from "react-router-dom";

import CartPage from './CartPage';

function CartRoute() {
  return (
     

      
     
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>



  )
}

export default CartRoute
