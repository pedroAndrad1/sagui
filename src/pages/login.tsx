import GoogleLogin from 'react-google-login';
import styles from '../styles/login.module.scss';
import React, { FormEvent } from 'react';
import LoginCadastroRecSenhaLayout from '../layouts/Login-Cadastro-Rec_Senha-Layout';
import { useRouter } from 'next/dist/client/router';
import { useUserContext } from '../contexts/UserContext';

export default function Login() {

  const router = useRouter();
  const {login} = useUserContext();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  }

  const success = (res) =>{
    login();
    console.log('logei', res);
    router.push('/');    
  }
  const failure = (res) =>{
    console.log('não logei', res)
  }

  return (
    <LoginCadastroRecSenhaLayout>
      <main>
        <form onSubmit={handleSubmit}>
          <GoogleLogin
            clientId="332505955238-s8of22iii1hn0ibmvjdcpfvl5pl6qq8d.apps.googleusercontent.com"
            buttonText="Login com o uniriotec"
            onSuccess={success}
            onFailure={failure}
            cookiePolicy={'single_host_origin'}
            hostedDomain={'uniriotec.br'}
            render={renderProps => (
              <button className={styles.signInGoogle} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                 <img src='/google-icon.svg' alt="Logo da Google" />
                Login com uniriotec
              </button>
            )}
           
          />
        </form>
        {/* <span className='mt-4'>Esqueceu a senha? <Link href="/recuperar-senha">Clique aqui.</Link></span>
        <Divider />
        <span>Não tem uma conta? <Link href='cadastro'>Cadastre-se aqui.</Link></span> */}
      </main>
    </LoginCadastroRecSenhaLayout>

  )
}
