
import { Link } from "react-router-dom";
function Product({ imgUrl, title, category, rating, price }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-100 object-cover rounded-md mb-3"
      />
      <h3 className="text-gray-500 font-semibold">{title}</h3>
      <p className="font-bold">{category}</p>
      <div className="text-yellow-500 text-sm">{"⭐".repeat(rating)}</div>
      <p className="text-blue-600 font-bold mt-2">${price}</p>
               <Link to="/productdetail">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
          View Details
        </button>
      </Link>
</div>
  );
}

export default Product;