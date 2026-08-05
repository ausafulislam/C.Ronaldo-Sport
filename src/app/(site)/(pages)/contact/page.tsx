import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | C.Ronaldo Sports",
  description:
    "Visit C.Ronaldo Sports in Gulshan-e-Iqbal, Defense or Light House. Call for all-Pakistan delivery of football gear.",
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
