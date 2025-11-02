
import CartList from "./CartList";

function CartPage() {
  const cartItems = [
    {
        id : "1",
      imgUrl: "https://codeyogi.io/coffee-mug.jpeg",
      name: "Black Printed Coffee Mug",
      price: 15,
      quantity: 2,
      subtotal: 30,
    },
    {
        id:"2",
      imgUrl: "https://i.pinimg.com/1200x/eb/79/ca/eb79cae9ab6499295f78bcbec690bd0f.jpg",
      name: "Printed Dark white Tshirt",
      price: 34,
      quantity: 4,
      subtotal: 136,
    },
  ];

  return (
    <div className=" bg-gray-50 py-10 px-4 md:px-16">
      

     
      <CartList cartItems={cartItems} />
      <div className="flex flex-col  justify-between gap-10 mt-6  mb-10 px-50 ">

<div className="flex gap-12 border-2 px-6 py-6 ">
          <input
            type="text"
            placeholder="Coupon code"
            className="border border-gray-300 rounded-lg px-3 py-2 "
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg ">
            APPLY COUPON
          </button>
          
          <button className="bg-red-300 text-white  rounded-lg px-4 py-2 flex ">
            UPDATE CART
          </button>
          </div>
        
      
        

       
        <div className="bg-white p-5 rounded-xl shadow-md w-full">
          <h3 className="text-lg font-semibold border-b pb-2 mb-3 text-gray-800">
            Cart Totals
          </h3>
          <div className="flex justify-between text-gray-700 mb-2">
            <h2>Subtotal:</h2>
            <p>$166.00</p>
          </div>
          <div className="flex justify-between text-gray-700 font-semibold mb-4">
            <h2>Total:</h2>
            <p>$166.00</p>
          </div>
          <button className="bg-red-600 w-full text-white py-2">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
