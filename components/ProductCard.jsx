export default function ProductCard({ title, price, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-xl" />
      <h3 className="text-lg font-semibold mt-3 text-gray-800">{title}</h3>
      <p className="text-blue-600 font-bold mt-1">${price}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
}
