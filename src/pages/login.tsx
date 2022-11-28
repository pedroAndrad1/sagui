import {useEffect } from "react";
import { signIn,  } from "next-auth/react"

export default function Login() {

  useEffect(() => {
    signIn('keycloak', { callbackUrl: '/'});
  },[])

  return null;

  // return (
  //   <LoginCadastroRecSenhaLayout>
  //     <main>
  //       <form onSubmit={handleSubmit}>
  //         <button
  //               className="signInGoogle"
  //               onClick={() => signIn(undefined, { callbackUrl: '/'})}    
  //             >
  //               <img src="/google-icon.svg" alt="Logo da Google" />
  //               Login com email da Unirio
  //             </button>
  //       </form>
  //     </main>
  //   </LoginCadastroRecSenhaLayout>
  // );
}
