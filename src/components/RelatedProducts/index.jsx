import { useState, useEffect } from "react";
import { ProductsCarousel } from "../ProductsCarousel";

import "./index.scss";

export function RelatedProducts() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    )
      .then((response) => response.json())
      .then((result) => setProducts(result.products));
  }, []);

  console.log(products);
  return (
    <div className='related-container'>
      <div className='related-top'>
        <div className='related-bar'></div>
        <p>Produtos relacionados</p>
        <div className='related-bar'></div>
      </div>

      <div className='related-filter'>
        <ul>
          <li>
            <a href='#'>celular</a>
          </li>
          <li>
            <a href='#'>acessórios</a>
          </li>
          <li>
            <a href='#'>tablets</a>
          </li>
          <li>
            <a href='#'>NOTEBOOKS</a>
          </li>
          <li>
            <a href='#'>TVs</a>
          </li>
          <li>
            <a href='#'>Ver todos</a>
          </li>
        </ul>
      </div>

      <div className='related-carousel'>
        {products.length > 0 ? <ProductsCarousel products={products} /> : null}
      </div>
    </div>
  );
}
