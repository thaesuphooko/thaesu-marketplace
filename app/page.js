import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Our Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard title="Gaming Laptop" price="1200" image="https://via.placeholder.com/150" />
        <ProductCard title="Wireless Mouse" price="25" image="https://via.placeholder.com/150" />
      </div>
    </div>
  );
}
