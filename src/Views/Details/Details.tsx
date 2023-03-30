import React from "react";
import ColorChart from "../../components/ColorChart/ColorChart";
import QuantityCounter from "../../components/Quantity/QuantityCounter";
import Section from "../../components/Section/Section";
import SizeChart from "../../components/SizeChart/SizeChart";
import Button from "../../components/Buttons/Button";

export default function Details() {
  return (
    <>
      <Section>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <img src="/images/girl8.png" style={{ width: "150px" }} />
            <img src="/images/girl8.png" style={{ width: "150px" }} />
            <img src="/images/girl8.png" style={{ width: "150px" }} />
          </div>
          <div style={{ width: "80%" }}>
            <img src="/images/girl8.png" style={{ width: "100%" }} />
          </div>
        </div>
        <div
          style={{
            width: "40%",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <h3 style={{ fontWeight: "900", fontSize: "1.6rem" }}>
            Women Black Checked Fit and Flare Dress
          </h3>
          <ColorChart />

          <SizeChart />
          <QuantityCounter
            price={10}
            onQuantityChange={function (quantity: number): void {
              throw new Error("Function not implemented.");
            }}
          />
          <div style={{ height: "300px", overflowY: "scroll", display:'grid' , gap:'20px' }}>
            <h3 style={{ fontWeight: "900", fontSize: "1.6rem" }}>About</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <Button title="Add to Cart" onClick={()=>{}} buttonForm='LongButton' buttonStyle="outline-prymary"/>
        </div>
      </Section>
    </>
  );
}
