import { useState } from "react";

import { ProductCard } from "../ProductCard";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

import "./index.scss";

export function ProductsCarousel({ products }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translate, setTranslate] = useState(0);

  const getWidth = () => {
    let result = 332;
    return result;
  };

  const nextSlide = () => {
    console.log(activeIndex, products.length);
    if (activeIndex === products.length - 4 || activeIndex > products.length - 4) {
      setActiveIndex(0);
      setTranslate(0);
      return;
    }

    setActiveIndex(activeIndex + 1);
    setTranslate((activeIndex + 1) * getWidth());
  };

  const prevSlide = () => {
    if (activeIndex >= products.length) {
      console.log(">= 0", activeIndex, products.length - 4);
      setActiveIndex(0);
      setTranslate(0);
      return;
    }

    if (activeIndex === 0) {
      setActiveIndex(products.length - 4);
      setTranslate((products.length - 4) * getWidth());
      console.log("= 0", activeIndex, products.length);
      return;
    }

    setActiveIndex(activeIndex - 1);
    setTranslate((activeIndex - 1) * getWidth());
  };

  return (
    <div className='carousel-container'>
      <div className='arrow arrow-left'>
        <img src={arrowLeft} alt='' onClick={prevSlide} />
      </div>
      <div className='slider'>
        <div
          className='carousel'
          style={{
            transform: `translateX(-${translate}px)`,
            transition: "all .5s ease-in-out 0s",
          }}
        >
          {products.map((product, i) => {
            const { productName, descriptionShort, price, photo } = product;
            return (
              <ProductCard
                key={i}
                name={productName}
                description={descriptionShort}
                price={price}
                image={photo}
              />
            );
          })}
        </div>
      </div>
      <div className='arrow arrow-right' onClick={nextSlide}>
        <img src={arrowRight} alt='' />
      </div>
    </div>
  );
}
