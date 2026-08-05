import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Popular",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Shop With Sidebar",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Shop Without Sidebar",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 65,
        title: "Wishlist",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 66,
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 70,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
    ],
  },
];
