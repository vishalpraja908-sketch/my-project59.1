

function CartRow({ item }) {
  return (
    <tr className="border-b bg-gray-50 ">
      <td className="p-3 text-center">
        <img src={item.imgUrl} alt={item.name} className="w-16 h-16 mx-auto rounded-md" />
      </td>
      <td className="p-4 text-red-600 font-medium">{item.name}</td>
      <td className="p-4 text-gray-700">${item.price}</td>
      <td className="p-4 text-center">
        <input
          type="number"
          value={item.quantity}
          className=" border w-12  text-center rounded " readonly
          
        />
         
      </td>
      <td className="p-4 text-gray-800 font-semibold">${item.subtotal}</td>
    </tr>

  );
}

export default CartRow;
