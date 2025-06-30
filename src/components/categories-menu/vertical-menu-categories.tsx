"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useCategories } from "@/http/hooks";

const categories = [
  { name: "Women's & Girls' Fashion", slug: "women" },
  { name: "Men's & Boys' Fashion", slug: "men" },
  { name: "Electronic Accessories", slug: "electronic-accessories" },
  { name: "TV & Home Appliances", slug: "tv-home-appliances" },
];

export default function VerticalMenuCategories() {
  const pathname = usePathname();
  const { categories: categoriesData } = useCategories();

  console.log(categoriesData);

  return (
    <>
      {categories.slice(0, 4).map(category => (
        <Link
          key={category.name}
          href={`/category/${category.slug}`}
          className={cn(
            "text-gray-600 hover:text-teal-600 py-1",
            pathname === `/category/${category.slug}`
              ? "border-b-2 border-[#00A788] text-[#00A788] font-semibold"
              : "",
          )}
        >
          {category.name}
        </Link>
      ))}
    </>
  );
}
