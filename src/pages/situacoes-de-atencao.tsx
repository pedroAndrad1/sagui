import AppLayout from "../layouts/AppLayout";
import styles from "../styles/situacoes-de-atencao.module.scss";
import { useEffect, useState } from "react";
import Select from "react-select";
import AlunosTable from "../components/EspecificTables/alunosTable";
import { useRouter } from "next/dist/client/router";
import { useUserContext } from "../contexts/UserContext";
import { GetServerSideProps } from "next";
import AlunoService from "../services/AlunoService";
import NoItemFound from "../components/NoItemFound";

const situacoes_data = [
  {
    value: "Veterano com CR meno que 4",
    label: "Alunos com Coeficiente de Rendimento Geral abaixo de 4,0.",
  },
  {
    value: "Veterano sem ACE",
    label:
      "Alunos a partir do 5º período que não tenham nenhuma carga horária de atividade complementar e/ou atividade extensionista",
  },
  {
    value: "Veterano sem OPTATIVA",
    label:
      "Alunos a partir do 5º período que não tenham nenhuma carga horária de disciplina optativa",
  },
  {
    value: "Veterano sem ELETIVA",
    label:
      "Alunos a partir do 5º período que não tenham nenhuma carga horária de disciplina eletiva",
  },
  {
    value: "Veterano com menos da metado do curso",
    label:
      "Alunos a partir do 4º período que tenham cursado menos de 50% da carga horária total do curso",
  },
];

export default function SituacaoDeAtencao({
  cra_menor_4,
  vet_sem_ace,
  vet_sem_optativa,
  vet_sem_eletiva,
  vet_menos_metade_curso,
}) {
  const { logado } = useUserContext();

  const [situacoes, setSituacaoes] = useState(situacoes_data);
  const [situacao, setSituacao] = useState("");

  return (
    <AppLayout>
      <h1>Alunos em situação de atenção</h1>
      <section className={styles.wrapper}>
        <nav>
          <Select
            options={situacoes}
            onChange={(e) => setSituacao(e?.value)}
            isSearchable={true}
            isClearable={true}
            autoFocus={true}
            placeholder="Escolha uma situação"
            noOptionsMessage={(parametroPedidoSemUso) =>
              "Não há opções com esse nome"
            }
          ></Select>
        </nav>
        <div className={styles.situacao}>
          {situacao == "Veterano com CR meno que 4" ? (
            cra_menor_4.length > 0 ? (
              <AlunosTable alunos={cra_menor_4}></AlunosTable>
            ) : (
              <NoItemFound message="Não foi encontrado nenhum aluno nessa situação"></NoItemFound>
            )
          ) : (
            <></>
          )}

          {situacao == "Veterano sem ACE" ? (
            vet_sem_ace.length > 0 ? (
              <AlunosTable alunos={vet_sem_ace}></AlunosTable>
            ) : (
              <NoItemFound message="Não foi encontrado nenhum aluno nessa situação"></NoItemFound>
            )
          ) : (
            <></>
          )}

          {situacao == "Veterano sem OPTATIVA" ? (
            vet_sem_optativa.length > 0 ? (
              <AlunosTable alunos={vet_sem_optativa}></AlunosTable>
            ) : (
              <NoItemFound message="Não foi encontrado nenhum aluno nessa situação"></NoItemFound>
            )
          ) : (
            <></>
          )}

          {situacao == "Veterano sem ELETIVA" ? (
            vet_sem_eletiva.length > 0 ? (
              <AlunosTable alunos={vet_sem_eletiva}></AlunosTable>
            ) : (
              <NoItemFound message="Não foi encontrado nenhum aluno nessa situação"></NoItemFound>
            )
          ) : (
            <></>
          )}

          {situacao == "Veterano com menos da metado do curso" ? (
            vet_menos_metade_curso.length > 0 ? (
              <AlunosTable alunos={vet_menos_metade_curso}></AlunosTable>
            ) : (
              <NoItemFound message="Não foi encontrado nenhum aluno nessa situação"></NoItemFound>
            )
          ) : (
            <></>
          )}
        </div>
      </section>
    </AppLayout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const alunos = await AlunoService.getAlunos().then(async (data) => {
    const json = await data.json();
    return json._embedded.alunoDataList as [];
  });

  let cra_menor_4 = alunos.map((aluno: any) => {
    if (aluno.consolidaRegraData.cra < 4) {
      return {
        matricula: aluno.matricula,
        nome: aluno.nome,
        link: `/aluno/${aluno.matricula}`,
      };
    }
  });
  console.log(cra_menor_4);
  if (!cra_menor_4[0]) cra_menor_4 = [];

  let vet_sem_ace = alunos.map((aluno: any) => {
    if (
      aluno.consolidaRegraData.qtdChce == 0 &&
      aluno.consolidaRegraData.qtdPeriodosChce > 5
    ) {
      return {
        matricula: aluno.matricula,
        nome: aluno.nome,
        link: `/aluno/${aluno.matricula}`,
      };
    }
  });
  if (!vet_sem_ace[0]) vet_sem_ace = [];

  let vet_sem_optativa = alunos.map((aluno: any) => {
    if (
      aluno.consolidaRegraData.qtdCho == 0 &&
      aluno.consolidaRegraData.qtdPeriodosChce > 5
    ) {
      return {
        matricula: aluno.matricula,
        nome: aluno.nome,
        link: `/aluno/${aluno.matricula}`,
      };
    }
  });
  if (!vet_sem_optativa[0]) vet_sem_optativa = [];

  let vet_sem_eletiva = alunos.map((aluno: any) => {
    if (
      aluno.consolidaRegraData.qtdChe == 0 &&
      aluno.consolidaRegraData.qtdPeriodosChce > 5
    ) {
      return {
        matricula: aluno.matricula,
        nome: aluno.nome,
        link: `/aluno/${aluno.matricula}`,
      };
    }
  });
  if (!vet_sem_eletiva[0]) vet_sem_eletiva = [];

  let vet_menos_metade_curso = alunos.map((aluno: any) => {
    if (
      aluno.consolidaRegraData.maisMq5p != "Mais de 50%" &&
      aluno.consolidaRegraData.qtdPeriodosChce > 4
    ) {
      return {
        matricula: aluno.matricula,
        nome: aluno.nome,
        link: `/aluno/${aluno.matricula}`,
      };
    }
  });
  if (!vet_menos_metade_curso[0]) vet_menos_metade_curso = [];

  return {
    props: {
      cra_menor_4,
      vet_sem_ace,
      vet_sem_optativa,
      vet_sem_eletiva,
      vet_menos_metade_curso,
    },
  };
};
