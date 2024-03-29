import AppLayout from "../../layouts/AppLayout";
import styles from "../../styles/aluno.module.scss";
import PerfilAluno from "../../layouts/PerfilAluno";
import DisciplinasAluno from "../../layouts/DisciplinasAluno";
import { useRouter } from "next/dist/client/router";
import ConfirmacaoMatricula from "../../layouts/ConfirmacaoMatricula";
import PlanosDeIntegralizacao from "../../layouts/PlanosDeIntegralizacao";
import Link from "next/link";
import { GetServerSideProps } from "next";
import AlunoService from "../../services/AlunoService";
import Tabs from "../../components/Tabs";
import TabPanel from "../../components/Tabs/TabPanel";

export default function AlunoProfile({
  alunoAcessado,
  disciplinasCursadas,
  svgString,
}) {
  return (
    <AppLayout>
      <div className={styles.title}>
        <h1>{alunoAcessado.nome}</h1>
        <a
          target="_blank"
          href={`/imprimir/${alunoAcessado.matricula}`}
          rel="noopener noreferrer"
        >
          <button>
            <i className="bi bi-printer-fill"></i>
            Imprimir
          </button>
        </a>
      </div>
      <Tabs>
        <TabPanel name="Perfil" key={1}>
          <PerfilAluno alunoAcessado={alunoAcessado} />
        </TabPanel>
        <TabPanel name="disciplinas" key={2}>
          <DisciplinasAluno
            disciplinasCursadas={disciplinasCursadas}
            fluxograma={svgString}
          />
        </TabPanel>
        <TabPanel name="Confirmação de matrícula" key={3}>
          <ConfirmacaoMatricula />
        </TabPanel>
        <TabPanel name="Planos de integralização" key={4}>
          <PlanosDeIntegralizacao />
        </TabPanel>
      </Tabs>
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { aluno_matricula } = context.params;
  let svgString;
  const alunoAcessado = await AlunoService.getAluno(aluno_matricula).then(
    async (res) => {
      // Extraindo o SVG como texto
      const jsonText = await res.text();
      svgString = jsonText.slice(
        jsonText.indexOf("<"),
        jsonText.lastIndexOf(">") + 1
      );
      // Extraindo os dados que nao sao o svg como texto e parseando para Json
      const jsonPart0 = jsonText.substring(0, jsonText.indexOf("svg") - 1);
      const jsonPart1 = jsonText.substring(
        jsonText.indexOf("consolidaRegraData") - 1,
        jsonText.length
      );

      return JSON.parse(jsonPart0.concat(jsonPart1));
    }
  );

  // Retirando a info de tracamentos de curso, para evitar que va para a tabela de disciplinas
  const disciplinasCursadasRaw1 =
    alunoAcessado.disciplinas._embedded.disciplinaCursadaDataList.filter(
      (disciplina) => disciplina.titulo != "TRANCAMENTO GERAL"
    );
  // Mapeando as diciplinas vindas do back para ficar no formato da tabela de disciplinas
  const disciplinasCursadas = disciplinasCursadasRaw1.map((disciplina) => {
    return {
      codigo: disciplina.codigo,
      nome: disciplina.titulo,
      status: disciplina.situacao,
      qts_reprovacoes: disciplina.qtdReprovacao,
    };
  });

  return {
    props: {
      alunoAcessado,
      disciplinasCursadas,
      svgString,
    },
  };
};
