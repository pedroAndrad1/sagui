import AppLayout from "../../layouts/AppLayout";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import styles from '../../styles/aluno.module.scss';
import PerfilAluno from "../../layouts/PerfilAluno";
import DisciplinasAluno from "../../layouts/DisciplinasAluno";

export default function AlunoProfile() {

    return (
        <AppLayout>
            <h1>Aluno nome</h1>
            <div className={styles.wrapper}>
                <Tabs defaultActiveKey="perfil" >
                    <Tab eventKey="perfil" title="Perfil do aluno">
                        <PerfilAluno />
                    </Tab>
                    <Tab eventKey="disciplinas" title="Disciplinas">
                        <DisciplinasAluno />
                    </Tab>
                    <Tab eventKey="conf_matricula" title="Confirmação de matrícula">
                        Confirmação de matrícula
                    </Tab> 
                    <Tab eventKey="plan_integralizacao" title="Planos de integralização">
                        Plano de integralização
                    </Tab> 
                </Tabs>
            </div>
        </AppLayout>
    )
}