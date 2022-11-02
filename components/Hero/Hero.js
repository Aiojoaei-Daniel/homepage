import React from "react";
import Navigation from "./Navigation/Navigation";
import { Tagline } from "./Tagline/Tagline";

export const Hero = () => {
  return (
    <div
      style={{ height: "944px" }}
      className="bg-[url('/bg-hero.png')] bg-center bg-cover"
    >
      <Navigation />
      <Tagline />
    </div>
  );
};
