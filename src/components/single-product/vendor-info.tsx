"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, MessageCircle, Star, Store } from "lucide-react";
import { useProduct } from "@/http/hooks";
import { Skeleton } from "../ui/skeleton";

export default function VendorInfo() {
  const { product, isLoading } = useProduct();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Sold by</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-3">
          {/* <Image
            src="/vendor.png"
            alt="Vendor Logo"
            width={0}
            height={0}
            sizes="100vw,100vh"
            className="w-60 h-auto object-cover"
          /> */}
          <div className="space-y-2">
            {isLoading ? (
              <Skeleton className="w-40 h-6" />
            ) : (
              <p className="font-medium flex justify-between items-center gap-1">
                {product?.merchant?.shop_name}
                <span className="text-blue-500">
                  <BadgeCheck className="w-4 h-4" />
                </span>
              </p>
            )}
            <div className="flex items-center gap-1 text-xs text-muted-foreground bg-gradient-to-l from-[#00A788] to-[#00A788]/50 px-2 py-1 rounded-full">
              <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
              <span className="text-white">Rising Star</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 flex items-center gap-2 bg-[#00A788]/10 text-[#00A788]"
          >
            <MessageCircle className="w-4 h-4" />
            Chat Now
          </Button>
          <Button variant="outline" className="flex-1 flex items-center gap-2 bg-gray-200/90 ">
            <Store className="w-4 h-4" />
            View Shop
          </Button>
        </div>
        <div className="grid grid-cols-3 text-center text-sm">
          <div>
            <p className="font-bold text-xl">100%</p>
            <p className="text-muted-foreground">Ship Time</p>
          </div>
          <div>
            <p className="font-bold text-xl">90%</p>
            <p className="text-muted-foreground">Chat Response</p>
          </div>
          <div>
            <p className="font-bold text-xl">99.8%</p>
            <p className="text-muted-foreground">Shop Rating</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
