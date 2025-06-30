"use client";

import React from "react";
import { ProductCard } from "@/components/product-card";
import { useProducts } from "@/http/hooks";

// const products: Product[] = [
//   {
//     id: "1",
//     name: "Men's Stylish Long Sleeve Shirt",
//     price: 1139.33,
//     originalPrice: 1500,
//     image: "/product-images/main.png",
//     rating: 4,
//     category: "Tops",
//   },
//   {
//     id: "2",
//     name: "Classic Leather Watch",
//     price: 3500,
//     originalPrice: 4200,
//     image: "/placeholder.svg?width=400&height=400",
//     rating: 5,
//     category: "Accessories",
//   },
//   {
//     id: "3",
//     name: "Wireless Bluetooth Headphones",
//     price: 2800,
//     originalPrice: 3500,
//     image: "/placeholder.svg?width=400&height=400",
//     rating: 4,
//     category: "Electronics",
//   },
//   {
//     id: "4",
//     name: "Modern Home Office Desk",
//     price: 8500,
//     originalPrice: 9999,
//     image: "/placeholder.svg?width=400&height=400",
//     rating: 5,
//     category: "Home Appliances",
//   },
//   {
//     id: "5",
//     name: "Running Sports Shoes",
//     price: 2200,
//     originalPrice: 2800,
//     image: "/placeholder.svg?width=400&height=400",
//     rating: 4,
//     category: "Sports Gear",
//   },
//   {
//     id: "6",
//     name: "Organic Baby Onesie",
//     price: 950,
//     originalPrice: 1200,
//     image: "/placeholder.svg?width=400&height=400",
//     rating: 5,
//     category: "Mother & Baby",
//   },
// ];

export function ProductListCard() {
  const { products } = useProducts();
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
