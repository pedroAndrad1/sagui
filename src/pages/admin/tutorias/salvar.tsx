import { GetServerSideProps } from "next";
import ManterTutoria from "../../../layouts/AdminLayouts/ManterTutoria";
import AppLayout from "../../../layouts/AppLayout";
import TutorService from "../../../services/TutorService";

export default function AdminTutoriasSalvar() {
    return (
        <AppLayout>
            <ManterTutoria type='SALVAR'></ManterTutoria>
        </AppLayout>
    )
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
  