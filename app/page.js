import { db } from "../db/index";
import ProductCard from "../components/ProductCard";

export default async function Home() {
  // Database ကနေ အချက်အလက်အစစ် ဆွဲထုတ်မယ်
  const allProducts = await db.select().from("products").all();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">Our Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allProducts.map((p) => (
          <ProductCard 
            key={p.id} 
            title={p.title} 
            price={p.price} 
            image={p.image} 
          />
        ))}
      </div>
    </main>
  );
}
