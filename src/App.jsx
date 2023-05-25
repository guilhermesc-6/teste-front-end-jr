import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Button } from "./components/Button";
import { Brands } from "./components/Brands";
import { Footer } from "./components/Footer";
import { Categories } from "./components/Categories";
import { RelatedProducts } from "./components/RelatedProducts";

import partner from "./assets/vitrini-1.png";
import product from "./assets/vitrini-2.png";

import "./app.scss";
import { Modal } from "./components/Modal";

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
      <RelatedProducts />
      <Footer />

      <Modal />
    </>
  );
}

export default App;
