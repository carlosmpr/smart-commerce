import React from "react";
import AnimatedCheckbox from "../CheckBox/CheckBox";

type ToggleMenuProps = {
  title: string;
  menuItems: string[];
  checked: boolean;
  onChange: any;
};
export default function ToggleMenu({
  title,
  menuItems,
  checked,
  onChange,
}: ToggleMenuProps) {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
      {" "}
      <h3 style={{ fontWeight: "900", fontSize: "1.6rem" }}>{title}</h3>
      {menuItems.map((item: string) => (
        <AnimatedCheckbox
          key={item}
          label={item}
          checked={checked}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
