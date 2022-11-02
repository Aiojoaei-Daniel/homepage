import React from "react";
import { Resources } from "./Resources/Resources";
import { Blog } from "./Blog/Blog";

export const Container = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ backgroundColor: "#F0F0EF", height: "1482px" }}
    >
      <Resources />
      <Blog />
    </div>
  );
};
