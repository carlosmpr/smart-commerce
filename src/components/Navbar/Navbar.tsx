import React from "react";

import styles from "./Navbar.module.css";
import NavbarItem, { NavbarItemsProps } from "./NavbarItem/NavbarItem";

export type NavbarProps = {
  title:string;
  NavbarItems: NavbarItemsProps[];
};

export default function Navbar({ title, NavbarItems }: NavbarProps) {
  return (
    <div className={styles.NavbarWrapper}>
      <div className={styles.NavbarContent}>
        <div className={styles.HideMobile}>
        <h1>{title}</h1>
        </div>
        <div className={styles.MenuWrapper}>
          {NavbarItems.map((item) => (
            <NavbarItem {...item} key={item.title} />
          ))}
        </div>
        <div className={styles.HideMobile}>
        <button> Shop Now</button>
        </div>
      </div>
    </div>
  );
}
