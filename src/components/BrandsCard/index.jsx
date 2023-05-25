import brandImg from "../../assets/logo.svg";

import "./index.scss";

export function BrandsCard() {
  return (
    <div className='brands-card-container'>
      <img src={brandImg} alt='Brand' />
    </div>
  );
}
