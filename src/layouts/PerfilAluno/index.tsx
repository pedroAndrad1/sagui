import Divider from "../../components/Divider";
import styles from "./PerfilAluno.module.scss";

export default function PerfilAluno({ alunoAcessado }) {
  console.log(alunoAcessado);
  return (
    <section className={styles.wrapper}>
      <ul>
        {/* <li>
                    <img src="/no_image.gif" alt="Foto de perfil" />
                </li> */}
        <li>
          <p>Matrícula</p>
          <span>{alunoAcessado.matricula}</span>
        </li>
        <Divider></Divider>
        <li>
          <p>Ingresso</p>
          <span>
            {`${alunoAcessado.entradaAnoPeriodo.substring(
              0,
              4
            )}.${alunoAcessado.entradaAnoPeriodo.substring(4, 5)}`}
          </span>
        </li>
        <Divider></Divider>
        <li>
          <p>Semestres cursados</p>
          <span>{alunoAcessado.consolidaRegraData.qtdPeriodosChce}</span>
        </li>
        <Divider></Divider>
        <li>
          <p>Coeficiente de rendimento</p>
          <span>{alunoAcessado.consolidaRegraData.cra.toFixed(2)}</span>
        </li>
        <Divider></Divider>
        <li>
          <p>Situação de jubilamento</p>
          <span>Ainda não disponível</span>
        </li>
      </ul>
      <img src="/contacs-book-svgrepo-com.svg" alt="Resumo" />
    </section>
  );
}
