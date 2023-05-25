import { Copyright } from "../Copyright";
import { Newsletter } from "../Newsletter";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import alelo from "../../assets/alelo.svg";
import amex from "../../assets/amex.svg";
import dinners from "../../assets/dinners.svg";
import elo from "../../assets/elo.svg";
import ifood from "../../assets/ifood.svg";
import mastercard from "../../assets/mastercard.svg";
import pix from "../../assets/pix.svg";
import sodexo from "../../assets/sodexo.svg";
import ticket from "../../assets/ticket.svg";
import visa from "../../assets/visa.svg";

import "./index.scss";

export function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-menus'>
        <div className='footer-about'>
          <h4>Sobre nós</h4>
          <ul>
            <li>
              <a href='#'>Conheça</a>
            </li>
            <li>
              <a href='#'>COMO COMPRAR</a>
            </li>
            <li>
              <a href='#'>Indicação e Desconto</a>
            </li>
          </ul>

          <div className='footer-about-socials'>
            <img src={facebook} />
            <img src={instagram} />
            <img src={youtube} />
          </div>
        </div>

        <div className='footer-infos'>
          <h4>INFORMAÇÕES ÚTEIS</h4>

          <ul>
            <li>
              <a href='#'>FALE CONOSCO</a>
            </li>
            <li>
              <a href='#'>DÚVIDAS</a>
            </li>
            <li>
              <a href='#'>Prazos de Entrega</a>
            </li>
            <li>
              <a href='#'>Formas de Pagamento</a>
            </li>
            <li>
              <a href='#'>Política de privacidade</a>
            </li>
            <li>
              <a href='#'>Trocas e Devoluções</a>
            </li>
          </ul>
        </div>

        <div className='footer-payments'>
          <h4>FORMAS DE PAGAMENTO</h4>

          <div className='payment-brands'>
            <img src={visa} alt='visa' />
            <img src={elo} alt='elo' />
            <img src={alelo} alt='alelo' />
            <img src={dinners} alt='dinners' />
            <img src={ifood} alt='ifood' />
            <img src={mastercard} alt='mastercard' />
            <img src={pix} alt='pix' />
            <img src={amex} alt='amex' />
            <img src={ticket} alt='ticket' />
            <img src={sodexo} alt='sodexo' />
          </div>
        </div>

        <Newsletter />
      </div>
      <Copyright />
    </div>
  );
}
