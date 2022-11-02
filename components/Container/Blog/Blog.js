import React from "react";
import { ArrowIcon } from "../../Icons/ArrowIcon";

export const Blog = () => {
  return (
    <div
      className="flex justify-end mt-20"
      style={{ height: "490px", width: "1070px" }}
    >
      <div
        className="absolute w-2/6"
        style={{
          width: "445px",
          height: "353px",
          left: "250px",
          top: "4250px",
        }}
      >
        <p className="pl-4 mb-4 text-xs font-bold text-red-600">
          MARCH 28, 2022
        </p>
        <h1 className="w-11/12 p-2 pl-4 mb-10 text-4xl font-extrabold bg-white ">
          If nothing changes, nothing changes
        </h1>
        <p className="w-3/4 mb-10">
          “If you could kick the person in the pants responsible for most of
          your trouble, you wouldn’t sit for a month.” ~ Theodore Roosevelt
        </p>
        <button
          type="button"
          className="flex mt-2 text-sm font-bold rounded bg-none"
          style={{ color: "#edb331" }}
        >
          READ MORE
          <ArrowIcon />
        </button>
      </div>
      <div className="h-full w-4/6 bg-[url('/blog-bg.png')] bg-center bg-cover">
        da
      </div>
    </div>
  );
};
