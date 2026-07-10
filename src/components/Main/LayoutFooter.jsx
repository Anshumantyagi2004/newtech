"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import AddressFooter from "../Home/AddressFooter";

export default function LayoutFooter() {
  const pathname = usePathname();

  const showAddressFooter =
    pathname === "/" ||
    pathname === "/about-us" ||
    pathname === "/contact-us" ;

    const hideFooter=pathname==="/institutional-and-corporate-solutions";


  return (
    <>
      {showAddressFooter && <AddressFooter />}
      {!hideFooter &&<Footer />}
    </>
  );
}