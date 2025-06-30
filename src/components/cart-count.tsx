import React from "react";
import { useAppSelector } from "@/lib/redux/hooks";

export default function CartCount() {
  const totalItems = useAppSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <>
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </>
  );
}
