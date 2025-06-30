"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useCategories } from "@/http/hooks";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

// const categoryIcons = {
//   Electronics: <Tv className="h-8 w-8" />,
//   "Home Appliances": <Shirt className="h-8 w-8" />,
//   "Mother & Baby": <Baby className="h-8 w-8" />,
//   Automotive: <Car className="h-8 w-8" />,
//   "Sports Gear": <Dumbbell className="h-8 w-8" />,
// };

export default function Categories() {
  const { categories, isLoading } = useCategories();

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="w-full h-[10.5rem]" />
            ))
          : categories.map(category => (
              <Link href={`/category/${category.slug}`} key={category.name}>
                <Card className="text-center p-4 hover:shadow-lg transition-shadow flex flex-col items-center justify-center h-full">
                  <div className="text-teal-600 mb-2">
                    <Image
                      src={category.image || "/product-images/main.png"}
                      alt={category.name}
                      width={0}
                      height={0}
                      sizes="100vw,100vh"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">{category.name}</h3>
                </Card>
              </Link>
            ))}
      </div>
    </section>
  );
}
