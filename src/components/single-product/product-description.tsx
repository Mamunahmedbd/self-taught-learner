"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function ProductDescription() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <Card className="mt-8 lg:w-7/10">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Description</CardTitle>
      </CardHeader>
      <CardContent className="relative pb-4">
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            showFullDescription ? "max-h-full" : "max-h-40", // Adjust max-h as needed
            !showFullDescription && "relative",
            !showFullDescription &&
              "after:absolute after:bottom-0 after:left-0 after:w-full after:h-16 after:bg-gradient-to-t after:from-white after:to-transparent",
          )}
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            Just as a book is judged by its cover, the first thing you notice when you pick up a
            modern smartphone is the display. Nothing surprising, because advanced technologies
            allow you to practically level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good that in such realities
            Apple everything is fine with displays.
            <br />
            <br />
            Advanced technologies allow you to practically level the display frames and cutouts for
            the front camera and speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays.
            <br />
            <br />
            The combed ringspun cotton provides a luxurious feel while enhancing durability, making
            this shirt a reliable choice for everyday wear. The polyester component adds resilience
            and shape retention, ensuring the shirt maintains its form even after multiple washes.
            Whether you&apos;re out for a casual day with friends or hitting the gym, the Acme Prism
            T-Shirt is designed to keep you looking and feeling great.
            <br />
            <br />
            The design of the Acme Prism T-Shirt is as striking as it is comfortable. The shirt
            features a unique prism-inspired pattern that adds a modern and eye-catching touch to
            your ensemble. The colors are carefully chosen to give a vibrant and dynamic appearance,
            making this tee stand out in any crowd. The classic crewneck and short sleeves offer a
            timeless silhouette that suits various occasions and allows for easy layering. Whether
            you prefer a casual, sporty, or chic look, the Acme Prism T-Shirt&apos;s versatility
            allows you to style it to match your individual fashion statement, making it a wardrobe
            essential for those who appreciate both fashion and comfort.
          </p>
        </div>
        {!showFullDescription && (
          <Button
            variant="link"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 text-primary font-semibold"
            onClick={() => setShowFullDescription(true)}
          >
            See More
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
