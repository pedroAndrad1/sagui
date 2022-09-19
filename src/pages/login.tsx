import GoogleLogin from "react-google-login";
import React, { FormEvent, useEffect } from "react";
import LoginCadastroRecSenhaLayout from "../layouts/Login-Cadastro-Rec_Senha-Layout";
import { useRouter } from "next/dist/client/router";
import { useUserContext } from "../contexts/UserContext";
import TutorService from "../services/TutorService";
import { validateEmail } from "../customHooks/useValidateEmailDomain";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const { login } = useUserContext();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  const success = (res) => {
    if (!validateEmail(res.zv.lw)) {
      toast.error(
        "Só é possível realizar login com emails com domínio uniriotec.br ou edu.unirio.br!"
      );
    } else {
      login();
      router.push("/");
    }
  };
  const failure = (res) => {
    console.log("não logei", res);
  };

  return (
    <LoginCadastroRecSenhaLayout>
      <main>
        <form onSubmit={handleSubmit}>
          <GoogleLogin
            clientId="332505955238-s8of22iii1hn0ibmvjdcpfvl5pl6qq8d.apps.googleusercontent.com"
            buttonText="Login com email da Unirio"
            onSuccess={success}
            onFailure={failure}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <button
                className="signInGoogle"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img src="/google-icon.svg" alt="Logo da Google" />
                Login com email da Unirio
              </button>
            )}
          />
        </form>
        {/* <span className='mt-4'>Esqueceu a senha? <Link href="/recuperar-senha">Clique aqui.</Link></span>
        <Divider />
        <span>Não tem uma conta? <Link href='cadastro'>Cadastre-se aqui.</Link></span> */}
      </main>
    </LoginCadastroRecSenhaLayout>
  );
}
