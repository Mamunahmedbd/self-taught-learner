import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { ProductList } from "@/http/types";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: ProductList;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="overflow-hidden h-full transition-shadow hover:shadow-lg">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="aspect-square w-full relative">
            <Image
              src={product.thumbnail || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3 flex-grow flex flex-col">
            <h3 className="font-semibold text-sm leading-tight flex-grow">{product.name}</h3>
            <div className="mt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating_avg ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">Stock: {product.available_stock}</span>
                {/* stock */}
              </div>
              <div className="mt-1">
                <span className="text-lg font-bold text-teal-600">৳{product.discount_price}</span>
                {product.regular_price && (
                  <span className="ml-2 text-sm text-gray-400 line-through">
                    ৳{product.regular_price}
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
