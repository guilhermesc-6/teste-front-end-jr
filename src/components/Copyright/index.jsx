import econverseLogo from "../../assets/econverse-logo.png";
import logo from "../../assets/logo-white.png";

import "./index.scss";

export function Copyright() {
  return (
    <div className='copyright-container'>
      <div className='copyright-info'>
        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são
        de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial,
        de qualquer conteúdo sem expressa autorização.
      </div>
      <div className='copyright-logos'>
        <img src={econverseLogo} />
        <img src={logo} />
      </div>
    </div>
  );
}
