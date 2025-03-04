import logo from "../../assets/logo.svg";
import inbox from "../../assets/Inbox.svg";
import heart from "../../assets/Heart.svg";
import cart from "../../assets/ShoppingCart.svg";
import user from "../../assets/UserCircle.svg";
import creditCard from "../../assets/CreditCard.svg";
import truck from "../../assets/Truck.svg";
import shieldCheck from "../../assets/ShieldCheck.svg";
import magnifyingGlass from "../../assets/MagnifyingGlass.svg";

import "./index.scss";

export function Header() {
  return (
    <header>
      <div className='header-infos'>
        <div>
          <img src={shieldCheck} alt='' />
          Compra<span>100% segura</span>
        </div>
        <div>
          <img src={truck} alt='' />
          <span>Frete grátis</span>acima de R$200
        </div>
        <div>
          <img src={creditCard} alt='' />
          <span>Parcele</span> suas compras
        </div>
      </div>

      <div className='header-main-menu'>
        <div className='logo'>
          <a href='#'>
            <img src={logo} alt='logo' />
          </a>
        </div>

        <div className='header-search'>
          <input type='text' placeholder='O que você está buscando?' />
          <button type='button'>
            <img src={magnifyingGlass} />
          </button>
        </div>

        <div className='header-menu-icons'>
          <a href='#'>
            <img src={inbox} />
          </a>
          <a href='#'>
            <img src={heart} />
          </a>
          <a href='#'>
            <img src={user} />
          </a>
          <a href='#'>
            <img src={cart} />
          </a>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href='#'>Todas Categorias</a>
          </li>
          <li>
            <a href='#'>Supermercado</a>
          </li>
          <li>
            <a href='#'>Livros</a>
          </li>
          <li>
            <a href='#'>Moda</a>
          </li>
          <li>
            <a href='#'>Lançamentos</a>
          </li>
          <li>
            <a href='#'>Ofertas do dia</a>
          </li>
          <li>
            <a href='#'>
              <svg
                width='20'
                height='15'
                viewBox='0 0 20 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.52571 13.3137C3.54519 13.3959 3.58109 13.4732 3.63126 13.5412C3.68142 13.6091 3.7448 13.6662 3.8176 13.7089C3.89039 13.7517 3.97108 13.7793 4.05483 13.7901C4.13857 13.8009 4.22363 13.7947 4.30489 13.7717C8.03061 12.743 11.9654 12.7426 15.6913 13.7706C15.7725 13.7935 15.8576 13.7998 15.9413 13.789C16.025 13.7782 16.1056 13.7506 16.1784 13.7079C16.2512 13.6651 16.3146 13.6081 16.3647 13.5402C16.4149 13.4723 16.4508 13.395 16.4703 13.3129L18.4616 4.8506C18.4883 4.73732 18.4828 4.61884 18.4457 4.50851C18.4087 4.39818 18.3416 4.30039 18.252 4.22615C18.1623 4.1519 18.0538 4.10415 17.9385 4.08828C17.8232 4.07241 17.7057 4.08904 17.5994 4.13631L13.6475 5.89269C13.5048 5.95611 13.3436 5.96382 13.1955 5.91429C13.0474 5.86476 12.9232 5.76159 12.8474 5.62508L10.5464 1.48334C10.4923 1.38591 10.4131 1.30472 10.317 1.2482C10.2209 1.19167 10.1115 1.16187 10 1.16187C9.88857 1.16187 9.77914 1.19167 9.68308 1.2482C9.58701 1.30472 9.50781 1.38591 9.45368 1.48334L7.15272 5.62508C7.07688 5.76159 6.95269 5.86476 6.8046 5.91429C6.6565 5.96381 6.49523 5.95611 6.35253 5.89269L2.40008 4.13604C2.29375 4.08878 2.17634 4.07215 2.06107 4.08801C1.94579 4.10386 1.83724 4.15158 1.74762 4.2258C1.658 4.30001 1.59088 4.39777 1.55381 4.50806C1.51674 4.61836 1.51119 4.73681 1.5378 4.85008L3.52571 13.3137Z'
                  stroke='#9F9F9F'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
