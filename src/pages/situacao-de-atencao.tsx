import AppLayout from '../layouts/AppLayout';
import styles from '../styles/situacao-de-atencao.module.scss';
import Divider from '../components/Divider';
import Input from '../components/Input';
import { useEffect, useState } from 'react';

const situacoes_data = ['situação 1', 'situação 2', 'situação 3', 'situação 4', 'situação 5',];

export default function SituacaoDeAtencao() {

    const [situacoes, setSituacaoes] = useState(situacoes_data);
    const [situacaoBuscadaFiltro, setSituacaoBuscada] = useState('');
    const [situacao, setSituacao] = useState('');

    //Acontece sempre que a situacao buscada mudar de valor
    useEffect(() => {
        const filtro_situacoes = () => {
            return situacoes_data.filter(situacaoBuscadaFiltro => updateList(situacaoBuscadaFiltro))
        }
        //Auxiliar do filtro.
        const updateList = (situcao_name: string) => {
            if (situacaoBuscadaFiltro == '') {
                return situcao_name;
            }
            else if (situcao_name.toLowerCase().includes(situacaoBuscadaFiltro.toLowerCase())) {
                return situcao_name
            }
        }

        setSituacaoes(filtro_situacoes());

    }, [situacaoBuscadaFiltro])

    return (
        <AppLayout>
            <h1>Alunos em situação de atenção</h1>
            <section className={styles.wrapper}>
                <nav className={styles.situations}>
                    <Input
                        name='situacao' id='situacao' placeholder='Filtre uma situação'
                        value={situacaoBuscadaFiltro} onChange={e => setSituacaoBuscada(e.target.value)}
                    />
                    <ul>
                        {
                            situacoes.map((situacao, i) => {
                                return (
                                    <div key={`situacao_${i}`}>
                                        <li onClick={e => setSituacao(situacao)}>{situacao}</li>
                                        <Divider />
                                    </div>
                                )
                            })
                        }
                    </ul>
                </nav>
                {
                    situacao  == 'situação 1' && <h2>situação 1</h2>
                }
                {
                    situacao == 'situação 2' && <h2>situação 2</h2>
                }
                {
                    situacao == 'situação 3' && <h2>situação 3</h2>
                }
                {
                    situacao == 'situação 4' && <h2>situação 4</h2>
                }
                {
                    situacao == 'situação 5' && <h2>situação 5</h2>
                }
            </section>
        </AppLayout>
    )
}