import styles from './Login-Cadastro-Rec_senha-Layout.module.scss';

export default function LoginCadastroRecSenhaLayout({ children }) {

    return (
        <div className={`${styles.wrapper}`}>
            <aside>
                <img src="/logo.svg" alt="Sagui logomarca" />
                <h1>SAGUI</h1>
            </aside>
            {children}
        </div>
    )
}
