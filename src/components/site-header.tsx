"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu, X, Truck, HelpCircle, Tag, Headset } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { categories } from "@/lib/data";
import dynamic from "next/dynamic";
import CategoriesMenu from "./categories-menu/categories-menu";
import VerticalMenuCategories from "./categories-menu/vertical-menu-categories";
const CartCount = dynamic(() => import("./cart-count"), { ssr: false });

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-[#0F172A]">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Falcon Logo"
                  priority
                  width={0}
                  height={0}
                  sizes="100vw,100vh"
                  className="w-32 h-auto object-center"
                />
                {/* <span className="font-bold text-xl text-gray-800">FALCON</span> */}
              </Link>
            </div>

            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search for anything..."
                  className="pl-4 pr-12 h-11 bg-gray-100"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-0 top-0 h-11 w-16 bg-teal-500 hover:bg-teal-600 rounded-l-none cursor-pointer"
                >
                  <Search className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-0">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Link href="/cart" className="relative p-2 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-gray-100 hover:text-teal-600 " />
                  <CartCount />
                </Link>
                <button className="p-2 rounded-full hidden sm:block cursor-pointer">
                  <User className="h-6 w-6 text-gray-100 hover:text-teal-600 transition-colors" />
                </button>
              </div>
              <button
                className="lg:hidden p-2 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-100 hover:text-teal-600 transition-colors" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-100 hover:text-teal-600 transition-colors" />
                )}
              </button>
            </div>
          </div>
          <div className="lg:hidden pb-3">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for anything..."
                className="pl-4 pr-12 h-10 bg-gray-100"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-0 top-0 h-10 w-12 bg-teal-500 hover:bg-teal-600 rounded-l-none transition-colors"
              >
                <Search className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden lg:block border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center justify-start text-sm font-medium space-x-6">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center space-x-2 text-teal-500 hover:text-teal-600 cursor-pointer transition-colors">
                    <Menu className="h-5 w-5 text-teal-500" />
                    <span>Categories</span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-2 mt-2.5 rounded-none">
                  <CategoriesMenu />
                </PopoverContent>
              </Popover>
              <Separator orientation="vertical" className="h-6" />
              <VerticalMenuCategories />
              {/* {categories.slice(0, 4).map(category => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={cn(
                    "text-gray-600 hover:text-teal-600 py-1",
                    pathname === category.href
                      ? "border-b-2 border-green-500 text-green-600 font-semibold"
                      : "",
                  )}
                >
                  {category.name}
                </Link>
              ))} */}
            </div>
            <div className="hidden xl:flex items-center space-x-5 text-sm font-medium text-gray-600 pr-2">
              <Link href="#" className="flex items-center space-x-2 hover:text-teal-600">
                <Truck className="h-4 w-4" />
                <span>TRACK ORDER</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 hover:text-teal-600">
                <Headset className="h-4 w-4" />
                <span>HELP CENTER</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 hover:text-teal-600">
                <Tag className="h-4 w-4 text-teal-600" />
                <span>SELL WITH US</span>
              </Link>
            </div>
            {/* <Separator orientation="vertical" className="h-6 hidden xl:block" /> */}
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
            <h3 className="font-semibold">Categories</h3>
            {categories.map(category => (
              <Link
                key={category.name}
                href={category.href}
                className="block text-gray-600 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Separator />
            <Link
              href="#"
              className="flex items-center space-x-2 text-gray-600 hover:text-teal-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Truck className="h-4 w-4" />
              <span>Track Order</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-gray-600 hover:text-teal-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <HelpCircle className="h-4 w-4" />
              <span>Help Center</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-gray-600 hover:text-teal-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Tag className="h-4 w-4" />
              <span>Sell with Us</span>
            </Link>
            <Separator />
            <Link
              href="#"
              className="flex items-center space-x-2 text-gray-600 hover:text-teal-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              <span>My Account</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
