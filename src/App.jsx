import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RelatedProducts } from "./components/RelatedProducts";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <RelatedProducts />
    </>
  );
}

export default App;
