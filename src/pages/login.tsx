import styles from '../styles/login.module.scss';
import Divider from '../components/Divider';
import React, { FormEvent } from 'react';
import LoginCadastroRecSenhaLayout from '../layouts/Login-Cadastro-Rec_Senha-Layout';

export default function Login() {

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <LoginCadastroRecSenhaLayout>
      <main className={styles.login_wrapper}>
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
    </LoginCadastroRecSenhaLayout>

  )
}
