import Hero from "../components/Hero/Hero";
import { Cta } from "./../components/CTA/Cta";
import { Search } from "./../components/Search/Search";
import { Story } from "./../components/Story/Story";
import { Call } from "./../components/Call/Call";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { Container } from "./../components/Container/Container";
import { Newsletter } from "./../components/Newsletter/Newsletter";
import { Footer } from "./../components/Footer/Footer";

export default function Home() {
  return (
    <h1 className="h-full">
      <Hero />
      <Cta />
      <Search />
      <Story />
      <Call />
      <Testimonials />
      <Container />
      <Newsletter />
      <Footer />
    </h1>
  );
}
