import { FormEvent } from 'react';
import LoginCadastroRecSenhaLayout from '../layouts/Login-Cadastro-Rec_Senha-Layout';
import Divider from '../components/Divider';
import Link from 'next/link';


export default function Cadastro() {

    
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  }

    return (
        <LoginCadastroRecSenhaLayout>
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
                    <button type="submit" className={`btn mt-4`}>Cadastrar</button>
                </form>
                <span className='mt-4'>Esqueceu a senha? <Link href="/recuperar-senha">Clique aqui.</Link></span>
                <Divider />
                <span><Link href='/login'>Voltar para login.</Link></span>
            </main>
        </LoginCadastroRecSenhaLayout>
    )
}