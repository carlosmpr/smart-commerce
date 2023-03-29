import React from "react";
import styles from "./Content.module.css";

interface ContentProps {
    children?: JSX.Element | JSX.Element[];
    backgroundImageUrl?:string
  }
export default function Content({children, backgroundImageUrl}: ContentProps) {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh', // Adjust the height and width as required
  };
  return (
    <div className={styles.ContentWrapper} >
        <div className={styles[`Content-Container`]} style={backgroundStyle}>
       {children}
      </div>
    </div>
  );
}
