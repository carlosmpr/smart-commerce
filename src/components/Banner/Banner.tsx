import React from "react";
import Button from "../Buttons/Button";
import styles from "./Banner.module.css";
type BannerProps = {
    image: string;
    width?: "40%" | "60%" | "80%";
    reverse?: boolean;
    backgroundColor?: string
    title:string;
    description:string;
}
export default function Banner({image, width="40%", reverse=false, backgroundColor, title, description}: BannerProps) {
  return (
    <div className={`${styles.Wrapper} ${reverse ? styles.Reverse : ""}`} style={{background:backgroundColor}}>
      <img src={image} style={{width: width}}/>
      <div className={styles.Content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button
          title="SEE OFFERS"
          onClick={() => {}}
          buttonForm="LongButton"
          buttonStyle="outline-prymary"
        />
      </div>
    </div>
  );
}
