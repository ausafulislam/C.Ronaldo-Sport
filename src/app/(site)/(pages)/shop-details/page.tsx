import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details | C.Ronaldo Sports",
  description: "Explore football jerseys, boots, balls and training gear at C.Ronaldo Sports, Karachi.",
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ShopDetails />
    </main>
  );
};

export default ShopDetailsPage;
