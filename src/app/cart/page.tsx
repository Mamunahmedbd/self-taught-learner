"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Minus, Plus, ShieldCheck, Trash2 } from "lucide-react";
import {
  updateQuantity,
  removeFromCart,
  toggleItemSelection,
  toggleSelectAll,
  clearCart,
  type CartState,
} from "@/lib/redux/cartSlice";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  const cartItems = useSelector((state: { cart: CartState }) => state.cart.items);
  const dispatch = useDispatch();
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleQuantityChange = (id: string, quantity: number): void => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const selectedItems = cartItems.filter(item => item.selected);
  const subTotal = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>My Cart</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">My Cart ({cartItems.length})</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="select-all"
                    checked={allSelected && cartItems.length > 0}
                    onCheckedChange={checked => dispatch(toggleSelectAll(Boolean(checked)))}
                  />
                  <Label htmlFor="select-all">Select All</Label>
                </div>
                <Button
                  variant="link"
                  className="text-red-500 p-0 h-auto"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
            <Separator />
            <div className="space-y-4 mt-4">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-start space-y-2 md:space-x-4 p-4 border rounded-md"
                >
                  <Checkbox
                    className="mt-1 hidden md:block"
                    checked={Boolean(item.selected)}
                    onCheckedChange={() => dispatch(toggleItemSelection(item.id))}
                  />
                  <div className="w-full flex md:hidden items-center justify-between space-x-2">
                    <Checkbox
                      className="mt-1"
                      checked={Boolean(item.selected)}
                      onCheckedChange={() => dispatch(toggleItemSelection(item.id))}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-center mx-auto md:pr-4">
                    <Image
                      src={item.image || "/product-images/main.png"}
                      alt={item.name}
                      width={0}
                      height={0}
                      sizes="100vw,100vh"
                      className="rounded-md w-44 h-44 md:w-32 md:h-32 object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center text-sm mb-1">
                      <ShieldCheck className="h-4 w-4 text-teal-500 mr-1" />
                      <span className="font-medium text-teal-600">{item.seller}</span>
                    </div>
                    <p
                      className="font-semibold cursor-pointer"
                      onClick={() => router.push(`/product/${item.slug}`)}
                    >
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 pt-2">
                      {Object.values(item.attributes || {}).join(", ")}
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-between mt-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg text-teal-600">৳{item.price}</span>
                        <span className="text-sm text-gray-400 line-through ml-2">
                          ৳{item.originalPrice}
                        </span>
                      </div>
                      <div className="w-full md:w-auto flex items-center justify-between border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 cursor-pointer"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-10 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 cursor-pointer"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-red-500 hidden md:flex items-center justify-center cursor-pointer"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Order summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Price ({selectedItems.length} items)</span>
                <span>৳{subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping fee</span>
                <span className="text-green-600">To be added</span>
              </div>
              <div className="flex items-center space-x-2">
                <Input placeholder="Store / Falcon coupon" />
                <Button className="bg-teal-500 hover:bg-teal-600">Apply</Button>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Sub Total</span>
                <span>৳{subTotal.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-stretch space-y-4">
              <Button size="lg" className="w-full bg-teal-500 hover:bg-teal-600 cursor-pointer">
                Proceed to Checkout
              </Button>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={checked => setAgreeTerms(Boolean(checked))}
                  className="data-[state=checked]:bg-teal-500 data-[state=checked]:border-0"
                />
                <Label htmlFor="terms" className="text-xs text-gray-500">
                  I have read and agree to the Terms and Conditions, Privacy Policy and Refund and
                  Return Policy
                </Label>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
