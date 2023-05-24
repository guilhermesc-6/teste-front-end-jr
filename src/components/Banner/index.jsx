import "./index.scss";

import partner from "../../assets/vitrini-1.png";

export function Banner({ children }) {
  return (
    <div className='banner'>
      <img src={partner} alt='Parceiros' />
      <div className='banner-overlay' />
      <div className='banner-infos'>{children}</div>
    </div>
  );
}
