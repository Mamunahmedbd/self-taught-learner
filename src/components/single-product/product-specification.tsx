"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function ProductSpecification() {
  const [showFullSpecs, setShowFullSpecs] = useState(false);
  return (
    <Card className="mt-8 lg:w-7/10">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Specification</CardTitle>
      </CardHeader>
      <CardContent className="relative pb-4">
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            showFullSpecs ? "max-h-full" : "max-h-40", // Adjust max-h as needed
            !showFullSpecs && "relative",
            !showFullSpecs &&
              "after:absolute after:bottom-0 after:left-0 after:w-full after:h-16 after:bg-gradient-to-t after:from-white after:to-transparent",
          )}
        >
          <h3 className="font-medium text-base mb-2">Sharp FP-J30E-B Air Purifier</h3>
          <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>GMP Cosmetic Good Manufacturing Practice</li>
            <li>Cruelty Free</li>
            <li>No Animal Testing</li>
            <li>Zenpia Global Standard</li>
            <li>Comply with Global Standard</li>
            <li>ISO 9001:2015 Certified</li>
            <li>Halal Certified</li>
            <li>Vegan Friendly</li>
            <li>Dermatologically Tested</li>
            <li>Hypoallergenic</li>
            <li>Non-comedogenic</li>
            <li>Paraben-free</li>
            <li>Sulfate-free</li>
            <li>Phthalate-free</li>
            <li>Gluten-free</li>
          </ul>
        </div>
        {!showFullSpecs && (
          <Button
            variant="link"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 text-primary font-semibold"
            onClick={() => setShowFullSpecs(true)}
          >
            See More
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
