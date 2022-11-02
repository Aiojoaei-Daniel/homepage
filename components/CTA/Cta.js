import React from "react";
import { WhiteArrowIcon } from "./../Icons/WhiteArrowIcon";

export const Cta = () => {
  return (
    <div className="flex h-20 bg-black">
      <button
        type="button"
        style={{ backgroundColor: "#79557E" }}
        className="flex items-center justify-center w-1/3 text-xl text-white bg-none"
      >
        Get Involved
        <WhiteArrowIcon />
      </button>
      <button
        type="button"
        style={{ backgroundColor: "#D86D1C" }}
        className="flex items-center justify-center w-1/3 text-xl text-white bg-none"
      >
        Resources Provider Application
        <WhiteArrowIcon />
      </button>
      <button
        type="button"
        style={{ backgroundColor: "#90BA6F" }}
        className="flex items-center justify-center w-1/3 text-xl text-white bg-none"
      >
        Listen To Podcast
        <WhiteArrowIcon />
      </button>
    </div>
  );
};
