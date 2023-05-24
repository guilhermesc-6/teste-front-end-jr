import heroBg from "../../assets/hero-bg.png";
import { Button } from "../Button";

import "./index.scss";

export function Hero() {
  return (
    <div className='hero-container'>
      <div className='hero-info'>
        <p>Venha conhecer nossas promoções</p>
        <span>50% Off nos produtos </span>
        <Button>Ver produto</Button>
      </div>
      <img src={heroBg} alt='' className='hero-img' />
      <div className='hero-gradient' />
    </div>
  );
}
