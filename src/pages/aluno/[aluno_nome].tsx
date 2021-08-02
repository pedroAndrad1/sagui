import AppLayout from "../../layouts/AppLayout";
import styles from '../../styles/aluno.module.scss';
import PerfilAluno from "../../layouts/PerfilAluno";
import DisciplinasAluno from "../../layouts/DisciplinasAluno";
import { useRouter } from "next/dist/client/router";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ConfirmacaoMatricula from "../../layouts/ConfirmacaoMatricula";
import PlanosDeIntegralizacao from "../../layouts/PlanosDeIntegralizacao";

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