import React from "react";

export default function SizeChart() {
  return (
    <div>
      <h3 style={{ fontWeight: "900", fontSize: "1.6rem" }}>Size(Inches)</h3>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {Array.from({ length: 20 }, (_, index) => {
          return (
            <div
              style={{
                width: "45px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                border: "1px solid gray",
                justifyContent: "center",
              }}
            >
              <p>{index}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
