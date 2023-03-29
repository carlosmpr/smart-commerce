import React from "react";
import styles from "./ProductCard.module.css";
export default function ProductCard() {
  return (
    <div className={styles.Wrapper}>
      <img src="/images/girl4.png" />
      <span>Top Woman</span>
      <p>Angels malu zip jeans slim black used</p>
      <p className={styles.price}>139 EUR</p>
    </div>
  );
}
