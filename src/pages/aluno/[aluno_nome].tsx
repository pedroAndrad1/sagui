import AppLayout from "../../layouts/AppLayout";
import styles from '../../styles/aluno.module.scss';
import PerfilAluno from "../../layouts/PerfilAluno";
import DisciplinasAluno from "../../layouts/DisciplinasAluno";
import { useRouter } from "next/dist/client/router";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function AlunoProfile() {

    const router = useRouter();
    const { aluno_nome } = router.query;

    return (
        <AppLayout>
            <h1>{aluno_nome}</h1>
            <div className={styles.wrapper}>
                <Tabs>
                    <nav>
                        <TabList>
                            <Tab>Resumo</Tab>
                            <Tab>Disciplinas</Tab>
                            <Tab>Confirmação de matrícula</Tab>
                            <Tab>Planos de integralização</Tab>
                        </TabList>
                    </nav>
                    <TabPanel>
                        <PerfilAluno />
                    </TabPanel>
                    <TabPanel>
                        <DisciplinasAluno />
                    </TabPanel>
                    <TabPanel>
                        Confirmação de matrícula
                    </TabPanel>
                    <TabPanel>
                        Planos de integralização
                    </TabPanel>
                </Tabs>
            </div>
        </AppLayout>
    )
}