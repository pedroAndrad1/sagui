import styles from './PerfilAluno.module.scss';

export default function PerfilAluno({alunoAcessado}){

    return(
        <section className={styles.wrapper}>
            <ul>
                {/* <li>
                    <img src="/no_image.gif" alt="Foto de perfil" />
                </li> */}
                <li>
                    <p>Matrícula</p>
                    <span>{alunoAcessado.matricula}</span>
                </li>
                <li>
                    <p>Ingresso</p>
                    <span>
                    {
                        `${alunoAcessado.entradaAnoPeriodo.substring(0,4)}.${alunoAcessado.entradaAnoPeriodo.substring(4,5)}`
                    }
                    </span>
                </li>
                <li>
                    <p>Semestres cursados</p>
                    <span>Ainda não disponível</span>
                </li>
                <li>
                    <p>Coeficiente de rendimento</p>
                    <span>{alunoAcessado.cra}</span>
                </li>
                <li>
                    <p>Situação de jubilamento</p>
                    <span>Ainda não disponível</span>
                </li>
            </ul>
        </section>
    )
}