"use client";
import { ProductCard } from "@/components/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/http/hooks";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { products, isLoading } = useProducts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{slug}</span>
      </div>
      <h1 className="text-3xl font-bold mb-6">Products in {slug}</h1>
      {isLoading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-[10.5rem]" />
        ))
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
}
