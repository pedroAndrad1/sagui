import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import Input from "../components/Input";
import List from "../components/List";
import { useUserContext } from "../contexts/UserContext";
import AppLayout from "../layouts/AppLayout";
import AlunoService from "../services/AlunoService";
import TutorService from "../services/TutorService";
import styles from "../styles/home.module.scss";

export default function Home({ tutores }) {
  interface ItemList {
    nome: string;
    link: string;
  }

  const [professorBuscado, setProfessorBuscado] = useState("");
  const [professores, setProfessores] = useState<ItemList[]>(tutores);

  //Auxiliar do filtro.
  const updateList = (professor: ItemList) => {
    if (professorBuscado == "") {
      return professor;
    } else if (
      professor.nome.toLowerCase().includes(professorBuscado.toLowerCase())
    ) {
      return professor;
    }
  };

  //Filtra a lista de professores (tutores) de acordo com o campo de busca
  const filtro = () => {
    return professores.filter((professor) => updateList(professor));
  };

  return (
    <AppLayout>
      <h1>Professores Tutores</h1>
      <div className={styles.buscar}>
        <Input
          name="Buscar"
          placeholder="Digite o nome de um tutor"
          type="text"
          value={professorBuscado}
          onChange={(e) => setProfessorBuscado(e.target.value)}
        />
      </div>
      <section className={styles.wrapper}>
        <List itens={filtro()} />
        {filtro().length == 0 && (
          <figure className={styles.sem_tutores}>
            <img src="/sad-smile.svg" alt="Smile triste" />
            <span>Não há um tutor com esse nome...</span>
          </figure>
        )}
      </section>
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tutores = await TutorService.getTutores()
    .then(async (res) => {
      const json = await res.json();
      // mapeando os tutores para o formato que estarao na lista
      return json._embedded.usuarios.map((tutor) => {
        return {
          nome: tutor.nome,
          link: `/alunos-de/${tutor.email}`,
        };
      });
    })
    .catch((err) => console.log(err));

  return {
    props: {
      tutores,
    },
  };
};
