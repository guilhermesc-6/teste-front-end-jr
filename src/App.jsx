import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { RelatedProducts } from "./components/RelatedProducts";
import { Banner } from "./components/Banner";
import { Button } from "./components/Button";
import { Brands } from "./components/Brands";

import partner from "./assets/vitrini-1.png";
import product from "./assets/vitrini-2.png";

import "./app.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <RelatedProducts showFilter={true} />
      <div className='banner-container'>
        <Banner banner={partner}>
          <p>Parceiros</p>
          <span>Lorem ipsum dolor sit amet, consectetur</span>
          <Button>Confira</Button>
        </Banner>

        <Banner banner={partner}>
          <p>Parceiros</p>
          <span>Lorem ipsum dolor sit amet, consectetur</span>
          <Button>Confira</Button>
        </Banner>
      </div>
      <RelatedProducts />
      <div className='banner-container products-banner'>
        <Banner banner={product}>
          <p>Produtos</p>
          <span>Lorem ipsum dolor sit amet, consectetur</span>
          <Button>Confira</Button>
        </Banner>

        <Banner banner={product}>
          <p>Produtos</p>
          <span>Lorem ipsum dolor sit amet, consectetur</span>
          <Button>Confira</Button>
        </Banner>
      </div>
      <Brands />
    </>
  );
}

export default App;
