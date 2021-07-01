import styles from './Login-Cadastro-Rec_senha-Layout.module.scss';

export default function LoginCadastroRecSenhaLayout({ children }) {

    return (
        <div className={`${styles.wrapper}`}>
            <aside>
                <img src="/logo.svg" alt="Sagui logomarca" />
                <div>
                    <p>SAGUI, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore</p>
                </div>
            </aside>
            {children}
        </div>
    )
}
