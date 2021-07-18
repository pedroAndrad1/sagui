import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Input from "../../components/Input";
import List from "../../components/List";
import AppLayout from "../../layouts/AppLayout";
import styles from '../../styles/home.module.scss';

export default function ListaDeALunosDeTutor() {

    const router = useRouter();
    const {tutor} = router.query;

    interface ItemList {
        nome: string;
        link: string;
    }


    const professoresData: ItemList[] = [
        { nome: 'Genérico 1', link: '/aluno/nome-do-aluno' },
        { nome: 'Genérico 2', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
        { nome: 'aluno', link: '/aluno/nome-do-aluno' },
    ]
    const [alunoBuscado, setAlunoBuscado] = useState('');
    const [alunos, setAluno] = useState<ItemList[]>(professoresData);

    //Auxiliar do filtro.
    const updateList = (aluno: ItemList) => {
        if (alunoBuscado == '') {
            return aluno
        }
        else if (aluno.nome.toLowerCase().includes(alunoBuscado.toLowerCase())) {
            return aluno
        }
    }

    //Filtra a lista de alunos de acordo com o campo de busca
    const filtro = () => {
        return alunos.filter(professor => updateList(professor))
    }


    return (
        <AppLayout>
            <h1>Alunos de {tutor}</h1>
            <div className={styles.buscar}>
                <Input name='buscar' placeholder='Digite o nome de um aluno' type='text'
                    value={alunoBuscado} onChange={e => setAlunoBuscado(e.target.value)}
                />
            </div>
            <section className={styles.wrapper}>
                <List itens={filtro()} />
                {
                    filtro().length == 0 &&
                    <figure className={styles.sem_tutores}>
                        <img src="/sad-smile.svg" alt="Smile triste" />
                        <span>Não há um aluno com esse nome...</span>
                    </figure>
                }
            </section>
        </AppLayout>
    )
}