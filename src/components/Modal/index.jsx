import { useContext } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import closeBtn from "../../assets/close.svg";

import "./index.scss";
import { ModalContext } from "../../contexts/modalContext";

export function Modal() {
  const { isModalOpen, setIsModalOpen, selectedProduct } = useContext(ModalContext);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`modal ${!isModalOpen ? "modal-hide" : ""}`}>
      <div className='modal-overlay'></div>
      <div className='modal-container'>
        <span className='modal-close' onClick={handleModalClose}>
          <img src={closeBtn} alt='close' />
        </span>
        <img src={selectedProduct.image} alt='' />
        <div className='modal-infos'>
          <h4>{selectedProduct.name}</h4>
          <span className='modal-price'>{formatCurrency(selectedProduct.price)}</span>
          <p className='modal-description'>{selectedProduct.description}</p>
          <a href='#'>Veja mais detalhes do produto {">"}</a>
        </div>
      </div>
    </div>
  );
}
