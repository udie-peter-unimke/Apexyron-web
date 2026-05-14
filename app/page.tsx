import Hero from "./components/ui/Hero";
import Features from "./components/ui/Features";
import ProductShowcase from "./components/ui/ProductShowcase";
import Team from "./components/ui/Team";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <div id="services">
        <Features />
      </div>
      <div id="products">
        <ProductShowcase />
      </div>
      <div id="team">
        <Team />
      </div>
    </div>
  );
}