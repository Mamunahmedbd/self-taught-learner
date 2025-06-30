"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useCategories } from "@/http/hooks";

export default function CategoriesMenu() {
  const pathname = usePathname();
  const { categories } = useCategories();

  return (
    <nav className="flex flex-col space-y-1">
      {categories.map(category => (
        <Link
          key={category.name}
          href={`/category/${category.slug}`}
          className={cn(
            "px-3 py-2 rounded-md text-sm hover:bg-gray-100",
            pathname === `/category/${category.slug}` ? "bg-gray-100 font-semibold" : "",
          )}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
