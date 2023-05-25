import { createContext, useState } from "react";

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
