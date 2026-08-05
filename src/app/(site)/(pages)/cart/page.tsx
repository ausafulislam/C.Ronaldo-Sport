import React from "react";
import Cart from "@/components/Cart";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shopping Cart | C.Ronaldo Sports",
  description: "Review your football gear before checkout at C.Ronaldo Sports, Karachi.",
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
