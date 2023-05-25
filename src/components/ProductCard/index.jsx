import { useContext } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";

import "./index.scss";
import { ModalContext } from "../../contexts/modalContext";

export function ProductCard({ name, description, price, image }) {
  const { setIsModalOpen, setSelectedProduct } = useContext(ModalContext);

  const handleClick = () => {
    setSelectedProduct({ name, description, price, image });
    setIsModalOpen(true);
    scrollTo(0, 0);
  };

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
      <Button onClick={handleClick}>Comprar</Button>
    </div>
  );
}
