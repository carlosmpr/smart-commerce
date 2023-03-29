import styles from "./Hero.module.css";
import Button from "../Buttons/Button";
type HeroProps = {
  reverse?: boolean;
  title: string;
  description: string;
  decorator?: string;
  image1: string;
  image2: string;
};
export default function Hero({
  reverse,
  title = "Main  Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
  decorator = "Descorator",
  image1 = "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  image2,
}: HeroProps) {
  return (
    <div
      className={`${styles.HeroWrapper} ${
        reverse ? styles.HeroWrapperReverse : ""
      }`}
    >
      <div className={styles.HeroContent}>
        <p>{decorator}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button
          title="SHOP NOW"
          onClick={() => {}}
          buttonForm="LongButton"
          buttonStyle="outline-prymary"
        />
      </div>
      <div className={styles.HeroImage}>
        <img
          src={image1}
          alt={title}
          style={{ marginTop: "40px", width: "55%", height: "65%" }}
        />
        <img src={image2} alt={title} />
      </div>
    </div>
  );
}
