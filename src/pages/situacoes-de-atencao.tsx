import AppLayout from '../layouts/AppLayout';
import styles from '../styles/situacoes-de-atencao.module.scss';
import { useState } from 'react';
import Select from 'react-select'
import AlunosTable from '../components/EspecificTables/alunos';

const situacoes_data = [
    {
        value: 'Alunos com alto número de reprovações por falta',
        label: 'Alunos com alto número de reprovações por falta'
    },
    {
        value: 'Alunos que já estão entre o tempo médio e o tempo máximo de formação',
        label: 'Alunos que já estão entre o tempo médio e o tempo máximo de formação'
    },
    {
        value: 'Alunos que estão no 4º trancamento do curso',
        label: 'Alunos que estão no 4º trancamento do curso'
    },
]

export default function SituacaoDeAtencao() {

    const [situacoes, setSituacaoes] = useState(situacoes_data);
    const [situacao, setSituacao] = useState('');

    return (
        <AppLayout>
            <h1>Alunos em situação de atenção</h1>
            <section className={styles.wrapper}>
                <nav>
                    <Select
                        options={situacoes}
                        onChange={e => setSituacao(e?.value)}
                        isSearchable={true}
                        isClearable={true}
                        autoFocus={true}
                        placeholder='Escolha uma situação'
                        noOptionsMessage={parametroPedidoSemUso => 'Não há opções com esse nome'}
                    ></Select>
                </nav>
                <div className={styles.situacao}>
                    {
                        situacao == 'Alunos com alto número de reprovações por falta'
                        &&
                        <AlunosTable />
                    }
                    {
                        situacao == 'Alunos que já estão entre o tempo médio e o tempo máximo de formação'
                        &&
                        <AlunosTable />
                    }
                    {
                        situacao == 'Alunos que estão no 4º trancamento do curso'
                        &&
                        <AlunosTable />
                    }
                </div>
            </section>
        </AppLayout>
    )
}