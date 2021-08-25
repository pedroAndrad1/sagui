import { ChangeEvent } from 'react';
import { useState } from 'react';
import Input from '../components/Input';
import List from '../components/List';
import AppLayout from '../layouts/AppLayout';
import styles from '../styles/home.module.scss';

export default function Home() {

  interface ItemList{
    nome: string;
    link: string;
}


  const professoresData: ItemList[] = [
    {nome: 'Genérico 1', link: '/alunos-de/Genérico 1'},
    {nome: 'Genérico 2', link: '/alunos-de/Genérico 2'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
    {nome: 'professor', link: '/alunos-de/professor'},
  ]
  const [professorBuscado, setProfessorBuscado] = useState('');
  const [professores, setProfessores] = useState<ItemList[]>(professoresData);

  //Auxiliar do filtro.
  const updateList = (professor: ItemList) => {
    if(professorBuscado == ''){
      return professor
    }
    else if(professor.nome.toLowerCase().includes(professorBuscado.toLowerCase())){
      return professor
    }
  }

  //Filtra a lista de professores (tutores) de acordo com o campo de busca
  const filtro = () =>{
   return professores.filter(professor => updateList(professor) )
  }

  return (
    <AppLayout>
      <h1>Professores Tutores</h1>
      <div className={styles.buscar}>
        <Input name='buscar' placeholder='Digite o nome de um tutor' type='text'
          value={professorBuscado} onChange={e => setProfessorBuscado(e.target.value)} 
        />
      </div>
      <section className={styles.wrapper}>
        <List itens = {filtro()}/>
        {
          filtro().length == 0 && 
          <figure className={styles.sem_tutores}>
            <img src="/sad-smile.svg" alt="Smile triste" />
            <span>Não há um tutor com esse nome...</span>
          </figure>
        }
      </section>
    </AppLayout>
  )
}
