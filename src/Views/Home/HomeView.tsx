import Page from "../../components/PageLayout/Page/Page";
import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Content from "../../components/PageLayout/Content/Content";
import Categories from "../../components/Categories/Categories";
import Section from "../../components/Section/Section";
import Button from "../../components/Buttons/Button";
import Banner from "../../components/Banner/Banner";
import AnimatedCheckbox from "../../components/CheckBox/CheckBox";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import ToggleMenu from "../../components/ToggleMenu/ToggleMenu";
export default function HomeView() {
  const [checked, setChecked] = useState(false);

  const Menu = [
    "Best Sellers",
    "New Arrivals",
    "Top Women",
    "SUMMER",
    "SPRING",
    "TRENDING",
  ];
  return (
    <>
      <Content backgroundImageUrl="/images/bg.png">
        <Hero
          title={"SUMMER SALE GEt 30% OFF On all dress."}
          description={""}
          image1={"/images/dress1.png"}
          image2={"/images/dress2.png"}
        />
      </Content>
      <Categories
        title="Choose your Brand"
        brands={[
          "CHANEL",
          "BURBERRY",
          "DIOR",
          "FENDI",
          "VERSACE",
          "GUCCI",
          "ARMANI",
        ]}
      />
      <Section>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Banner
            title="CHOOSE YOUR LOOK"
            description="See our clothing collections"
            image="/images/girl1.png"
            backgroundColor={
              "linear-gradient(270deg, rgba(241, 239, 240, 0.53) 0%, #F1F0F0 10.79%, #F3F0EF 98.67%)"
            }
          />
          <Banner
            image="/images/girl3.png"
            reverse
            backgroundColor="linear-gradient(90deg, #F7E0D5 0%, #F3DCD2 83.85%, rgba(243, 220, 210, 0.14) 100%)"
            title="BRAND NEW STYLE"
            description="Popular clothing brands"
          />
        </div>
        <Banner
          title="UP TO 40% OFF"
          description="Special offers and great deals"
          image="/images/girl2.png"
          width="60%"
          reverse
          backgroundColor="linear-gradient(90deg, #E0DED3 0%, #E0DDD5 86.82%, #E0DDD5 100%)"
        />
      </Section>
      <Section>
        <div
          style={{
            width: "20%",
            padding: "20px",
            borderRight: "1px solid black",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            position: "sticky",
            top: "0",
          }}
        >
           <ToggleMenu title={"Brand"} menuItems={Menu} checked={checked} onChange={(isChecked: boolean) => setChecked(isChecked)} />
        </div>

        <div
          style={{
            width: "80%",
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {Array.from({ length: 8 }, (_, index) => {
            return <ProductCard />;
          })}
        </div>
      </Section>
      <Section>
        <Banner
          title="Shoping without limits."
          description="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
          image="/images/girl5.png"
          width="60%"
          reverse
          backgroundColor="linear-gradient(90deg, #DDEBF1 0%, #D3E5EE 42.71%, #C8DEEC 69.27%, rgba(255, 255, 255, 0) 100%)"
        />
      </Section>

      <Section>
        <h3 style={{ fontWeight: "900", fontSize: "1.6rem", padding: "20px" }}>
          Features
        </h3>

        <div
          style={{
            width: "80%",
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {Array.from({ length: 4 }, (_, index) => {
            return <ProductCard />;
          })}
        </div>
      </Section>

      <Section>
        <h3 style={{ fontWeight: "900", fontSize: "1.6rem", padding: "20px" }}>
          Most Popular
        </h3>

        <div
          style={{
            width: "80%",
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {Array.from({ length: 4 }, (_, index) => {
            return <ProductCard />;
          })}
        </div>
      </Section>

      <Section>
        <Banner
          title="Explore the Best of You."
          description="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
          image="/images/girl5.png"
          width="60%"
        />
      </Section>
    
    </>
  );
}
