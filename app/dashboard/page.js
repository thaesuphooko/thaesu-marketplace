import { db } from '@/lib/db';
import { products } from '@/lib/schema';

export default async function DashboardPage() {
  const productList = await db.select().from(products);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Thaesu Online Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productList.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
