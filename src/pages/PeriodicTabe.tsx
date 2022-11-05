import React from "react";
import data from "../assets/periodic-table.json";
import "../styles/PeriodicTable.css";

const colorMap: any = {
  "noble gas": "#ffbc42",
  "alkali metal": "#d81159",
  "alkaline earth metal": "#e65430",
  "diatomic nonmetal": "#8f2d56",
  "trasition metal": "#58586b",
  "post-transition metal": "#27ac74",
  "polyatomic nonmetal": "#4aabaf",
  lanthanide: "#3667ab",
  metalloid: "#73d2de",
  actinide: "#448039",
  "unknown, probably post-transition metal": "#527675",
  "unknown, probably metalloid": "#9fd0d7",
  "unknown, predicted to be noble gas": "#ffda94",
};

export default function PeriodicTabe() {
  return (
    <div className="periodic-table">
      <div className="periodic-element-aliases" style={{ gridArea: "6 / 3" }}>*</div>
      <div className="periodic-element-aliases" style={{ gridArea: "9 / 2" }}>*</div>
      <div className="periodic-element-aliases" style={{ gridArea: "7 / 3" }}>**</div>
      <div className="periodic-element-aliases" style={{ gridArea: "10 / 2" }}>**</div>
      {data.elements.map((element) => (
        <div
          key={element.name}
          className="periodic-element"
          style={{
            gridColumn: element.xpos,
            gridRow: element.ypos,
            borderColor: (colorMap as any)[element.category],
            backgroundColor: `${(colorMap as any)[element.category]}20`,
          }}
        >
          {element.symbol}
          <small
            className="number"
            key={element.number}
            style={{
              backgroundColor: "transparent",
            }}
          >
            {element.number}
          </small>
          <small
            className="name"
            key={element.name}
            style={{
              backgroundColor: "transparent",
            }}
          >
            {element.name}
          </small>
        </div>
      ))}
    </div>
  );
}
