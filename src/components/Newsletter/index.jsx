import { Button } from "../Button";
import "./index.scss";

export function Newsletter() {
  return (
    <div className='newsletter-container'>
      <div className='newsletter-title'>
        Cadastre-se e Receba nossas
        <span>novidades e promoções</span>
      </div>

      <span>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum
      </span>

      <div className='newsletter-input'>
        <input type='email' name='email' id='email' placeholder='Seu e-mail' />
        <Button>Ok</Button>
      </div>
    </div>
  );
}
