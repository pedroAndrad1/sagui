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
                        <label htmlFor="floatingInput">Email para recuperar senha</label>
                    </div>
                    <button type="submit" className={`btn mt-4`}>Enviar email de recuperação</button>
                </form>
                <span className='mt-4'><Link href='login'>Voltar para login.</Link></span>
                <Divider />
                <span>Não tem uma conta? <Link href='cadastro'>Cadastre-se aqui.</Link></span>
            </main>
        </LoginCadastroRecSenhaLayout>
    )
}