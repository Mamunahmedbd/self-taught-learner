"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import {
  ChevronRight,
  Star,
  MessageSquare,
  Store,
  Truck,
  ShieldCheck,
  Minus,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { addToCart } from "@/lib/redux/cartSlice";

const productImages = [
  "/product-images/main.png",
  "/product-images/thumb1.png",
  "/product-images/thumb2.png",
  "/product-images/thumb3.png",
  "/product-images/thumb4.png",
  "/product-images/thumb5.png",
];

const colorOptions = [
  { name: "Navy Blue", color: "#000080", img: "/product-images/color-navy.png" },
  { name: "Black", color: "#000000", img: "/product-images/color-black.png" },
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedSize, setSelectedSize] = useState("XS");
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullSpecs, setShowFullSpecs] = useState(false);
  const dispatch = useDispatch();

  const handleQuantityChange = (amount: number): void => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleAddToCart = (): void => {
    const item = {
      id: `P1-${selectedColor.name}-${selectedSize}`,
      name: "Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt",
      price: 1139.33,
      originalPrice: 1500,
      quantity,
      image: selectedColor.img,
      color: selectedColor.name,
      size: selectedSize,
      seller: "BD FASHION HOUSE",
    };
    dispatch(addToCart(item));
    toast.success("Added to cart!", {
      description: `${item.name} (${item.color}, ${item.size})`,
    });
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="#" className="hover:text-gray-700">
            Tops
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>T-Shirts</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Gallery */}
          <div>
            <div className="aspect-square w-full overflow-hidden rounded-lg border">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Main product"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-6 gap-2 mt-4">
              {productImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`aspect-square w-full cursor-pointer rounded-md border-2 ${
                    selectedImage === img ? "border-blue-500" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Men&apos;s Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt
            </h1>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <Star className="h-5 w-5 text-gray-300 fill-current" />
              </div>
              <span className="text-sm text-gray-500">2,254 ratings</span>
            </div>

            <div>
              <span className="text-3xl font-bold text-teal-600">৳1,139.33</span>
              <span className="ml-3 text-lg text-gray-400 line-through">৳1500</span>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Available Color: {selectedColor.name}
              </h3>
              <div className="flex items-center space-x-2 mt-2">
                {colorOptions.map(option => (
                  <button
                    key={option.name}
                    className={`w-10 h-10 rounded-md border-2 p-0.5 ${
                      selectedColor.name === option.name ? "border-blue-500" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedColor(option)}
                  >
                    <Image
                      src={option.img || "/placeholder.svg"}
                      alt={option.name}
                      width={36}
                      height={36}
                      className="rounded-sm object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Select Size: {selectedSize}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["XS", "S", "M", "L"].map(size => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-16"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <div className="flex items-center border rounded-md w-fit mt-2">
                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-teal-500 hover:bg-teal-600"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            <Card>
              <CardContent className="p-4 space-y-4">
                <div>
                  <h4 className="font-semibold">Delivery Options</h4>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-5 w-5 text-gray-500" />
                      <span>Regular</span>
                    </div>
                    <span className="text-gray-600">Delivery within 2-3 days</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-5 w-5 text-teal-500" />
                      <span className="text-teal-600 font-semibold">EXPRESS</span>
                    </div>
                    <span className="text-gray-600">Next day delivery</span>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold">Sold by</h4>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="h-5 w-5 text-blue-500" />
                      <span className="font-medium text-blue-600">BD FASHION HOUSE</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-1" /> Chat Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <Store className="h-4 w-4 mr-1" /> View Shop
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center mt-4 text-sm">
                    <div>
                      <p className="font-semibold">90%</p>
                      <p className="text-gray-500">Ship on time</p>
                    </div>
                    <div>
                      <p className="font-semibold">100%</p>
                      <p className="text-gray-500">Chat response</p>
                    </div>
                    <div>
                      <p className="font-semibold">99.8%</p>
                      <p className="text-gray-500">Shop rating</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <div
                className={`text-gray-600 leading-relaxed relative overflow-hidden transition-all duration-300 ${
                  showFullDescription ? "max-h-full" : "max-h-24"
                }`}
              >
                <p>
                  Just as a book is judged by its cover, the first thing you notice when you pick up
                  a modern smartphone is the display. Nothing surprising, because advanced
                  technologies allow you to practically level the display frames and cutouts for the
                  front camera and speaker, leaving no room for bold design solutions. And how good
                  that in such realities Apple everything is fine with displays.
                </p>
                <p className="mt-4">
                  Advanced technologies allow you to practically level the display frames and
                  cutouts for the front camera and speaker, leaving no room for bold design
                  solutions. And how good that in such realities Apple everything.
                </p>
              </div>
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-blue-600 font-semibold mt-4"
              >
                {showFullDescription ? "See Less" : "See More"}
              </button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Specification</h2>
              <h3 className="font-semibold text-gray-800">Sharp FP-J30E-B Air Purifier</h3>
              <div
                className={`relative overflow-hidden transition-all duration-300 ${
                  showFullSpecs ? "max-h-full" : "max-h-20"
                }`}
              >
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>GMP Cosmetic</li>
                  <li>Cruelty Free</li>
                  <li>No Animal Testing</li>
                  <li>Follows Global Standard</li>
                  <li>Comply with Global Standard</li>
                  <li>Made with premium materials</li>
                </ul>
              </div>
              <button
                onClick={() => setShowFullSpecs(!showFullSpecs)}
                className="text-blue-600 font-semibold mt-4"
              >
                {showFullSpecs ? "See Less" : "See More"}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
