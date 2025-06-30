"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/cartSlice";
import { toast } from "sonner";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Star } from "lucide-react";
import { useProduct } from "@/http/hooks";
import { groupVariations } from "@/utils/group-variations";
import VariationOptions from "./variation-options";
import { Skeleton } from "../ui/skeleton";

export default function ProductDetails() {
  const { product, isLoading, isSuccess } = useProduct();
  const [selectedImage, setSelectedImage] = useState(Object.values(product?.image || {})[0]?.url);
  const [selectedOptions, setSelectedOptions] = useState({} as Record<string, string>);
  // const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  // const [selectedSize, setSelectedSize] = useState("XS");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantityChange = (amount: number): void => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  console.log(groupVariations(product?.variations || []));
  console.log(product);

  const handleAddToCart = (): void => {
    const item = {
      id: !selectedOptions ? product?.id?.toString() : Object.values(selectedOptions).join("-"),
      name: product?.name,
      price: Number(product?.product_detail?.regular_price),
      originalPrice: Number(product?.product_detail?.discount_price),
      quantity,
      image: product?.thumbnail,
      // color: selectedColor.name,
      // size: selectedSize,
      seller: product?.merchant?.shop_name,
      slug: product?.slug,
      attributes: selectedOptions,
    };
    dispatch(addToCart(item));
    toast.success("Added to cart!", {
      description: `${item.name} (${Object.values(item.attributes).join(", ")})`,
    });
  };

  console.log({ selectedOptions });

  useEffect(() => {
    if (isSuccess) {
      setSelectedImage(Object.values(product?.image || {})[0]?.url);
    }
  }, [product, isSuccess]);

  return (
    <Card className="lg:col-span-7">
      <CardContent className="p-6 grid md:grid-cols-2 gap-6">
        {/* Main Image and Thumbnails */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-full max-w-[480px] aspect-square overflow-hidden rounded-lg border">
            {isLoading ? (
              <Skeleton className="w-full h-full" />
            ) : (
              <Image
                src={selectedImage || "/product-images/main.png"}
                alt="Product Main Image"
                width={480}
                height={480}
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <div className="grid grid-cols-6 gap-2 mt-4">
            {isLoading ? (
              <>
                {Array.from({ length: 5 }, (_, idx) => idx).map(idx => (
                  <div
                    key={idx}
                    className="aspect-square w-full cursor-pointer rounded-md border-2"
                  >
                    <Skeleton className="w-24 h-auto rounded-md object-cover" />
                  </div>
                ))}
              </>
            ) : (
              Object.values(product?.image || {}).map((img, idx) => (
                <div
                  key={idx}
                  className={`aspect-square w-full cursor-pointer rounded-md border-2 ${
                    selectedImage === img?.url ? "border-[#00A788]" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(img?.url)}
                >
                  <Image
                    src={img?.url || "/product-images/thumb1.png"}
                    alt={`Thumbnail ${idx + 1}`}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-24 h-auto object-cover rounded"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          {isLoading ? (
            <Skeleton className="w-full h-8" />
          ) : (
            <h1 className="text-2xl font-bold">{product?.name}</h1>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < product?.rating_avg ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span>{product?.rating_avg}</span>
            <span className="mx-1">•</span>
            <span>{product?.rating_count} Reviews</span>
            <div className="hidden md:flex ml-auto gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="w-5 h-5 text-gray-500" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="w-5 h-5 text-gray-500" />
                <span className="sr-only">Share product</span>
              </Button>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            {isLoading ? (
              <Skeleton className="w-24 h-8" />
            ) : (
              <span className="text-3xl font-bold text-[#00A788]">
                ৳{product?.product_detail?.regular_price}
              </span>
            )}
            {isLoading ? (
              <Skeleton className="w-24 h-8" />
            ) : (
              <span className="text-lg text-muted-foreground line-through">
                ৳{product?.product_detail?.discount_price}
              </span>
            )}
          </div>

          <div className="flex items-center text-sm px-2 py-1 rounded-md font-medium gap-2">
            Promotion:
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md font-medium">
              Min. spend ৳550
            </span>
          </div>

          {/* Color Selection */}
          {/* <div>
            <h3 className="text-sm font-medium text-gray-900">
              Available Color: {selectedColor.name}
            </h3>
            <div className="flex items-center space-x-2 mt-2">
              {colorOptions.map(option => (
                <button
                  key={option.name}
                  className={`w-10 h-10 rounded-md border-2 p-0.5 ${
                    selectedColor.name === option.name ? "border-[#00A788]" : "border-gray-300"
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
          </div> */}

          {/* Size Selection */}
          {isLoading ? (
            <>
              <Skeleton className="w-52 h-9" />
              <Skeleton className="w-52 h-9" />
            </>
          ) : (
            product?.variations?.length > 0 && (
              <VariationOptions
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                product={product}
              />
            )
          )}

          {/* <div>
            <h3 className="text-sm font-medium text-gray-900">Select Size: {selectedSize}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["XS", "S", "M", "L"].map(size => (
                <Button
                  key={size}
                  variant={"outline"}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "w-16 cursor-pointer",
                    selectedSize === size && "border-[#00A788] text-[#00A788]",
                  )}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div> */}

          {/* Quantity */}
          <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-base font-medium">
              Quantity
            </Label>
            <div className="flex items-center border rounded-md w-32 h-10">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none cursor-pointer"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <input
                type="text"
                id="quantity"
                value={quantity}
                readOnly
                className="w-12 text-center border-x h-10 focus:outline-none text-sm"
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none cursor-pointer"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </Button>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-[#00A788] hover:bg-[#00A788]/80 text-white py-2 rounded-md cursor-pointer"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
