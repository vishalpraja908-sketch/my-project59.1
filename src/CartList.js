
import React from "react";
import CartRow from "./CartRow";

function CartList({ cartItems }) {
  return (
    <div className="bg-white rounded-xl">
      <table className="w-full text-left">
        <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3"></th>
            <th className="p-3">Price</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, id) => (
            <CartRow key={id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartList;
