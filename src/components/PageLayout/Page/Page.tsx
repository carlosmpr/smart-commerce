import React from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

//@ts-ignore
export default function Page({ NavbarItems, children }) {
  return (
    <>
      <Navbar NavbarItems={NavbarItems} title={"SmartCommerce"} />
      <div style={{height:'8vw'}}></div>
      {children}
      <Footer />
    </>
  );
}
