import { GetServerSideProps } from "next";
import { useState } from "react";
import Input from "../../components/Input";
import List from "../../components/List";
import AppLayout from "../../layouts/AppLayout";
import TutorService from "../../services/TutorService";
import styles from "../../styles/home.module.scss";

export default function ListaDeALunosDeTutor({ tutor_nome, alunos_data }) {
  interface ItemList {
    nome: string;
    link: string;
  }

  const [alunoBuscado, setAlunoBuscado] = useState("");
  const [alunos, setAluno] = useState<ItemList[]>(alunos_data);

  //Auxiliar do filtro.
  const updateList = (aluno: ItemList) => {
    if (alunoBuscado == "") {
      return aluno;
    } else if (aluno.nome.toLowerCase().includes(alunoBuscado.toLowerCase())) {
      return aluno;
    }
  };

  //Filtra a lista de alunos de acordo com o campo de busca
  const filtro = () => {
    return alunos.filter((professor) => updateList(professor));
  };

  return (
    <AppLayout>
      <h1>Alunos de {tutor_nome}</h1>
      <div className={styles.buscar}>
        <Input
          name="Buscar"
          placeholder="Digite o nome de um aluno"
          type="text"
          value={alunoBuscado}
          onChange={(e) => setAlunoBuscado(e.target.value)}
        />
      </div>
      <section className={styles.wrapper}>
        <List itens={filtro()} />
        {filtro().length == 0 && (
          <figure className={styles.sem_tutores}>
            <img src="/sad-smile.svg" alt="Smile triste" />
            <span>Não há um aluno com esse nome...</span>
          </figure>
        )}
      </section>
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tutor_email } = context.params;
  let tutor_nome = "";
  // Pegando todos os alunos do tutor.
  // Primeiro acho o tutor pelo email.
  const alunos_data = await TutorService.getTutores()
    .then(async (res) => {
      const json = await res.json();
      const tutor = json._embedded.usuarios.find(
        (tutor) => tutor.email == tutor_email
      );
      tutor_nome = tutor.nome; // Pegando pra mandar tambem

      return tutor.alunoData._embedded.alunoDataList.map((aluno) => {
        return {
          nome: aluno.nome,
          link: `/aluno/${aluno.matricula}`,
        };
      });
    })
    .catch((err) => console.log(err));

  return {
    props: {
      tutor_nome,
      alunos_data,
    },
  };
};
