import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import SaleCard from "./component/SaleCard";
import About from "./component/About";
import Catalog from "./component/Catalog";
import Testimonial from "./component/Testimonial";
import Features from "./component/Features";
import FAQ from "./component/FAQ";
import Blog from "./component/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SaleCard />
      <About />
      <Catalog />
      <Testimonial />
      <Features />
      <FAQ />
      <Blog />
    </div>
  );
}

export default App;
