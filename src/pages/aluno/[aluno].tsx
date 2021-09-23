import AppLayout from "../../layouts/AppLayout";
import styles from '../../styles/aluno.module.scss';
import PerfilAluno from "../../layouts/PerfilAluno";
import DisciplinasAluno from "../../layouts/DisciplinasAluno";
import { useRouter } from "next/dist/client/router";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ConfirmacaoMatricula from "../../layouts/ConfirmacaoMatricula";
import PlanosDeIntegralizacao from "../../layouts/PlanosDeIntegralizacao";
import Link from "next/link";
import { useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";

export default function AlunoProfile() {

    const router = useRouter();
    const {logado} = useUserContext();
   
    useEffect(() =>{
      if(!logado) router.push("/login");
    }, [router, logado]);
    const { aluno } = router.query;

    return (
        <AppLayout>
            <div className={styles.title}>
                <h1>{aluno}</h1>
                <a target="_blank" href={`/imprimir/${aluno}`} rel="noopener noreferrer">
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
                        <PerfilAluno />
                    </TabPanel>
                    <TabPanel>
                        <DisciplinasAluno />
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