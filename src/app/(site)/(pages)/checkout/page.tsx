import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Checkout | C.Ronaldo Sports",
  description: "Complete your order at C.Ronaldo Sports. All-Pakistan delivery available.",
};

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
