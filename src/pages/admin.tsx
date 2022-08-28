
import AppLayout from '../layouts/AppLayout';

import styles from '../styles/admin.module.scss';
import { useRouter } from 'next/dist/client/router';
import { useUserContext } from '../contexts/UserContext';
import Tabs from '../components/Tabs';
import TabPanel from '../components/Tabs/TabPanel';
import AdminProfessores from '../layouts/AdminLayouts/AdminProfessores';
import AdminTutorias from '../layouts/AdminLayouts/AdminTutorias';

export default function Admin() {

    const router = useRouter();
    const { logado } = useUserContext();

    return (
        <AppLayout>
            <h1>Ferramentas de administrador</h1>
            <Tabs>
                <TabPanel name='Professores'>
                    <AdminProfessores></AdminProfessores>
                </TabPanel>
                <TabPanel name='Alunos'>

                </TabPanel>
                <TabPanel name='Tutorias'>
                    <AdminTutorias></AdminTutorias>
                </TabPanel>
            </Tabs>
        </AppLayout>
    )
}