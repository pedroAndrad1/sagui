import styles from './Login-Cadastro-Rec_senha-Layout.module.scss';

export default function LoginCadastroRecSenhaLayout({ children }) {

    return (
        <div className={`${styles.wrapper}`}>
            <header>
                <img src="/logo.svg" alt="Sagui logomarca" />
                <p>SAGUI</p>
            </header>
            {children}
            <footer>
                <p>Informações</p>
            </footer>
        </div>
    )
}
