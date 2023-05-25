import closeBtn from "../../assets/close.svg";

import "./index.scss";

export function Modal() {
  return (
    <>
      <div className='modal-overlay'></div>
      <div className='modal-container'>
        <span className='modal-close'>
          <img src={closeBtn} alt='close' />
        </span>
        <img
          src='https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png'
          alt=''
        />
        <div className='modal-infos'>
          <h4>LOREM IPSUM DOLOR SIT AMET</h4>
          <span className='modal-price'>R$ 1.499,90</span>
          <p className='modal-description'>
            Many desktop publishing packages and web page editors now many desktop
            publishing
          </p>
          <a href='#'>Veja mais detalhes do produto {">"}</a>
        </div>
      </div>
    </>
  );
}
