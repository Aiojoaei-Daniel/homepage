import React from "react";
import { WhiteArrowIcon } from "./../Icons/WhiteArrowIcon";

const BUTTONS = [
  {
    color: "#79557E",
    label: "Get Involved",
  },
  {
    color: "#D86D1C",
    label: "Resources Provider Application",
  },
  {
    color: "#90BA6F",
    label: "Listen To Podcast",
  },
];

export const Cta = () => {
  return (
    <nav className="flex h-20">
      {BUTTONS.map((button) => (
        <button
          key={button.label}
          type="button"
          style={{ backgroundColor: button.color }}
          className="flex items-center justify-center w-1/3 text-xl text-white bg-none"
        >
          {button.label}
          <WhiteArrowIcon />
        </button>
      ))}
    </nav>
  );
};
