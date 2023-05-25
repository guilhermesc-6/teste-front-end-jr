import { BrandsCard } from "../BrandsCard";

import arrow from "../../assets/arrow-blue.svg";

import "./index.scss";

export function Brands() {
  return (
    <div className='brands-container'>
      <h2>Navegue por marcas</h2>
      <div className='brands-slider'>
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
      </div>
      <div className='brands-arrow'>
        <img src={arrow} />
      </div>
    </div>
  );
}
