import React, { useState } from "react";
import Section from "../../components/Section/Section";
import Banner from "../../components/Banner/Banner";
import ProductCard from "../../components/ProductCard/ProductCard";
import AnimatedCheckbox from "../../components/CheckBox/CheckBox";
import PriceRangeSwitch from "../../components/RangeSwitch/RangeSwitch";
import ToggleMenu from "../../components/ToggleMenu/ToggleMenu";
import SizeChart from "../../components/SizeChart/SizeChart";
import ColorChart from "../../components/ColorChart/ColorChart";
const Menu = ["STATE", "COOPER", "BARDOOT", "ALFANI", "CECE", "DONNA RICCO"];
export default function Catalog() {
  const [checked, setChecked] = useState(false);
  const handlePriceRangeChange = (min: number, max: number) => {
    console.log("Price range changed:", min, max);
  };

  return (
    <>
      <Section>
        <Banner
          title="Explore the Best of You."
          description="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
          image="/images/girl6.png"
          width="60%"
          reverse
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
          <ToggleMenu
            title={"Brand"}
            menuItems={Menu}
            checked={checked}
            onChange={(isChecked: boolean) => setChecked(isChecked)}
          />

          <SizeChart />
 <ColorChart />
          <ToggleMenu
            title={"Dress Length"}
            menuItems={Menu}
            checked={checked}
            onChange={(isChecked: boolean) => setChecked(isChecked)}
          />

          <h3 style={{ fontWeight: "900", fontSize: "1.6rem" }}>Price Range</h3>
          <PriceRangeSwitch
            min={0}
            max={1000}
            onChange={function (value: number): void {
              throw new Error("Function not implemented.");
            }}
          />

          <h3 style={{ fontWeight: "900", fontSize: "1.6rem" }}>
            About Dresses
          </h3>
          <p>
            Every day we’re gonna be dropping the latest trends to help you nail
            every Summer sitch. Whether it’s a graduation, your mate's wedding,
            or just a cute day at the races with the gals, our occasion dresses
            have got you covered. Not looking for something fancy? No stress.
            We’ve got day dresses for days (aka bodycon dresses, t-shirt)
          </p>
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

          <Banner
            title="Explore the Best of You."
            description="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
            image="/images/girl7.png"
            width="60%"
            reverse
            backgroundColor="black"
            color="white"
          />
        </div>
      </Section>
    </>
  );
}
