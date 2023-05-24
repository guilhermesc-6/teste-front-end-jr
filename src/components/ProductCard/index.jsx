import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";

import "./index.scss";

export function ProductCard({ name, description, price, image }) {
  return (
    <div className='card-product'>
      <img src={image} alt={name} />
      <span className='product-name'>{name}</span>
      <span className='product-description'>{description}</span>
      <div className='product-price'>
        <span className='full-price'>{formatCurrency(price)}</span>
        <span className='part-price'>ou 10x de {formatCurrency(price / 10)}</span>
      </div>
      <span className='shipping'>Frete grátis</span>
      <Button>Comprar</Button>
    </div>
  );
}
