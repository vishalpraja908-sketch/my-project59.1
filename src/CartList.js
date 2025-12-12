
import CartRow from "./CartRow";

function CartList({ cartItems,updateQuantity,deleteItem }) {
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

          {cartItems.map((item) => (
            <CartRow key={item.id} item={item}
           updateQuantity={updateQuantity}
           deleteItem={deleteItem}
           />
   
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartList;
