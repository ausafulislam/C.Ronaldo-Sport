import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "C.Ronaldo Sports | Football Fan Gear, Jerseys & Kits in Karachi",
  description:
    "C.Ronaldo Sports — Karachi's home of football fan gear. Jerseys, kits, football shoes, grippers & sports uniforms across Gulshan, Defense and Light House.",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
