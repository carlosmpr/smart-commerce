import React from 'react'

export default function ColorChart() {
  return (
    <div>
    <h3 style={{ fontWeight: "900", fontSize: "1.6rem" }}>Color</h3>
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {Array.from({ length: 16 }, (_, index) => {
        return (
          <div
            style={{
              width: "15px",
              height: "15px",
              display: "flex",
              alignItems: "center",
              border: "1px solid gray",
              justifyContent: "center",
              background: "red",
            }}
          >
            <p></p>
          </div>
        );
      })}
    </div>
    </div>
  )
}
