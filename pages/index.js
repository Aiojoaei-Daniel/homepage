import {
  Hero,
  Cta,
  Search,
  Story,
  Call,
  Testimonials,
  Container,
  Newsletter,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <Cta />
      <Search />
      <Story />
      <Call />
      <Testimonials />
      <Container />
      <Newsletter />
      <Footer />
    </div>
  );
}
