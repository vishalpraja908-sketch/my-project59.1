

function CartRow({ item, updateQuantity, deleteItem}) {
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
            min={0}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
          className=" border w-12  text-center rounded " 
       
        />
         
      </td>
      <td className="p-4 text-gray-800 font-semibold">${item.subtotal}</td>
      <button
          className="text-red-600 font-bold border-4 px-4 bg-blue-500 mt-10"
          onClick={() => deleteItem(item.id)}
        >
          X
        </button>
    </tr>

  );
}

export default CartRow;
