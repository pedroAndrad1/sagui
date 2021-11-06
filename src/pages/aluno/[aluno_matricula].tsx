import AppLayout from "../../layouts/AppLayout";
import styles from '../../styles/aluno.module.scss';
import PerfilAluno from "../../layouts/PerfilAluno";
import DisciplinasAluno from "../../layouts/DisciplinasAluno";
import { useRouter } from "next/dist/client/router";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ConfirmacaoMatricula from "../../layouts/ConfirmacaoMatricula";
import PlanosDeIntegralizacao from "../../layouts/PlanosDeIntegralizacao";
import Link from "next/link";
import { GetServerSideProps } from "next";
import AlunoService from "../../services/AlunoService";


export default function AlunoProfile({alunoAcessado, disciplinasCursadas}) {
    const router = useRouter();


    return (
        <AppLayout>
            <div className={styles.title}>
                <h1>{alunoAcessado.nome}</h1>
                <a target="_blank" href={`/imprimir/${alunoAcessado.nome}`} rel="noopener noreferrer">
                        <button>
                            <i className="bi bi-printer-fill"></i>
                            Imprimir
                        </button>
                </a>
            </div>
            <div className={styles.wrapper}>
                <Tabs>
                    <nav>
                        <TabList>
                            <Tab>Resumo</Tab>
                            <Tab>Disciplinas</Tab>
                            <Tab>Confirmação de Matrícula</Tab>
                            <Tab>Planos de Integralização</Tab>
                        </TabList>
                    </nav>
                    <TabPanel>
                        <PerfilAluno alunoAcessado={alunoAcessado}/>
                    </TabPanel>
                    <TabPanel>
                        <DisciplinasAluno disciplinasCursadas={disciplinasCursadas}/>
                    </TabPanel>
                    <TabPanel>
                        <ConfirmacaoMatricula />
                    </TabPanel>
                    <TabPanel>
                        <PlanosDeIntegralizacao />
                    </TabPanel>
                </Tabs>
            </div>
        </AppLayout>
    )
}
// Vou pegar todos os alunos e achar o aluno acessado pela matricula vinda na URL.
// Depois, vou separar as informacoes necessarias para cada tab em objetos diferentes.
// Em casos pertinentes.
export const getServerSideProps: GetServerSideProps = async (context) => {
    const {aluno_matricula} = context.params;
    
    const alunoAcessado = 
        await AlunoService.getAlunos()
        .then( async res =>{
            const json = await res.json();

            return json._embedded.alunos.find(aluno => aluno.matricula == aluno_matricula);
        })
        .catch( err => console.log(err));
    // Requisitando as disciplinas cursadas pelo Aluno acessado
    const disciplinasCursadasRaw0 = 
        await fetch(alunoAcessado._links.disciplinaCursadas.href)
        .then(async res => {
            const json = await res.json();
            
            return json._embedded.disciplinas;
        })
        .catch( err => console.log(err));
    // Retirando a info de tracamentos de curso, para evitar que va para a tabela de disciplinas
    const disciplinasCursadasRaw1 = disciplinasCursadasRaw0.filter( disciplina => disciplina.titulo != 'TRANCAMENTO GERAL');
    // Mapeando as diciplinas vindas do back para ficar no formato da tabela de disciplinas
    const disciplinasCursadas = disciplinasCursadasRaw1.map(disciplina => {
        return {
            codigo: disciplina.codigo,
            nome: disciplina.titulo,
            status: disciplina.situacao,
            qts_reprovacoes: disciplina.qtdReprovacao
        }
    })

    
    return {
        props: {
           alunoAcessado,
           disciplinasCursadas
        }
    }
}