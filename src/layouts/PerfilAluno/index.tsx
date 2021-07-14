import styles from './PerfilAluno.module.scss';

export default function PerfilAluno(){
    return(
        <section className={styles.wrapper}>
            <ul>
                <li>
                    <img src="/no_image.gif" alt="Foto de perfil" />
                    <span> Colocar as infos em 3 colunas a direita da foto?</span>
                </li>
                <li>
                    <p>Matrícula</p>
                    <span>xxxxxxxxxxx</span>
                </li>
                <li>
                    <p>Ingresso</p>
                    <span>xxxx.x</span>
                </li>
                <li>
                    <p>Semestres cursados</p>
                    <span>x</span>
                </li>
                <li>
                    <p>Coeficiente de rendimento</p>
                    <span>x</span>
                </li>
                <li>
                    <p>Situação de jubilamento</p>
                    <span>xxxxxxxx</span>
                </li>
            </ul>
        </section>
    )
}