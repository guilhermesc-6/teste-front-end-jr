import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { RelatedProducts } from "./components/RelatedProducts";
import { Banner } from "./components/Banner";
import { Button } from "./components/Button";

import "./app.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <RelatedProducts showFilter={true} />
      <div className='banner-container'>
        <Banner>
          <p>Parceiros</p>
          <span>Lorem ipsum dolor sit amet, consectetur</span>
          <Button>Confira</Button>
        </Banner>

        <Banner>
          <p>Parceiros</p>
          <span>Lorem ipsum dolor sit amet, consectetur</span>
          <Button>Confira</Button>
        </Banner>
      </div>
      <RelatedProducts />
    </>
  );
}

export default App;
