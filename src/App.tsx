import { useState } from "react";
import "./App.css";
import HomeView from "./Views/Home/HomeView";
import Catalog from "./Views/Catalog/Catalog";
import Details from "./Views/Details/Details";
import Page from "./components/PageLayout/Page/Page";

const NavBarItems = [
  { title: "HOME", href: "/" },
  { title: "SHOP", href: "/" },
  { title: "BLOG", href: "/" },
  { title: "CONTACT US", href: "/" },
  { title: "SEARCH", href: "/" },
];

function App() {
  return (
    <Page NavbarItems={NavBarItems}>
      <Details />
    </Page>
  );
}

export default App;
