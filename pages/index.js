import Image from "next/image";
import Hero from "../components/Hero/Hero";
import { Cta } from "./../components/CTA/Cta";
import { Search } from "./../components/Search/Search";
import { Story } from "./../components/Story/Story";

export default function Home() {
  return (
    <h1 className="h-full">
      <Hero />
      <Cta />
      <Search />
      <Story />
    </h1>
  );
}
