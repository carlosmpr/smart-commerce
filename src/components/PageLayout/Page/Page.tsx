import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Content from "../Content/Content";
import Navbar from "../../Navbar/Navbar";

//@ts-ignore
export default function Page({ NavbarItems, children }) {
  return (
    <div style={{overflow:'hidden'}}>
    <Navbar NavbarItems={NavbarItems} title={"SmartCommerce"} />
    
   

        {children}
     

    </div>
  );
}
