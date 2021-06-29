import styles from '../styles/home.module.scss';
import Divider from '../components/Divider';
import { FormEvent } from 'react';

export default function Login() {

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <div className={`${styles.wrapper}`}>
      <aside>
        <img src="/logo.svg" alt="Um sagui, logomarca" />
        <div>
          <p>SAGUI, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore</p>
        </div>
      </aside>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" name='email' placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" name='senha ' placeholder="senha" />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          <button type="submit" className={`btn mt-4`}>Login</button>
        </form>
        <span className='mt-4'>Esqueceu a senha? <a href="#">Clique aqui.</a></span>
        <Divider />
        <span>Não tem uma conta? <a href="#">Cadastre-se aqui.</a></span>
      </main>
    </div>
  )
}
