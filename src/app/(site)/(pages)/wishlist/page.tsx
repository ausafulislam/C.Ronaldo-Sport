import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Wishlist | C.Ronaldo Sports",
  description: "Your saved football gear at C.Ronaldo Sports, Karachi.",
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
