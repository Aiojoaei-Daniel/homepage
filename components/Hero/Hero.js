import React from "react";
import Navigation from "./Navigation/Navigation";
import { Tagline } from "./Tagline/Tagline";

export default function Hero() {
  return (
    <div className="h-full bg-[url('/bg-hero.png')] bg-center bg-cover">
      <Navigation />
      <Tagline />
    </div>
  );
}
