import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package } from "lucide-react";

export default function DeliveryOptions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Delivery Options</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-start gap-3">
          <Truck className="w-5 h-5 text-[#00A788] mt-1" />
          <div>
            <p className="font-medium">Regular</p>
            <p className="text-sm text-muted-foreground">Delivery within 2-3 days</p>
          </div>
        </div>
        <div className="flex items-start gap-3 opacity-50">
          <Package className="w-5 h-5 text-gray-500 mt-1" />
          <div>
            <p className="font-medium">Express</p>
            <p className="text-sm text-red-500">Not Available</p>
            <p className="text-xs text-muted-foreground">Delivery within 24 Hours</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
