"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProducts(data.products);
      });
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Marketplace</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        {products.map((product: any) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>ဈေးနှုန်း: {product.price} ကျပ်</p>
          </div>
        ))}
      </div>
    </main>
  );
}
