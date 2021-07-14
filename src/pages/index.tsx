import { ChangeEvent } from 'react';
import { useState } from 'react';
import Input from '../components/Input';
import ProfessorList from '../components/Professor-list';
import AppLayout from '../layouts/AppLayout';
import styles from '../styles/home.module.scss';

export default function Home() {



  const professoresOriginal = [
    'professorrr1',
    'professorrr2',
    'professor',
    'professor',
    'professor',
    'professor',
    'professor',
    'professor',
    'professor',
    'professor',
    'professor',
    'professor',
    'professor',
    'professor',
    'professor',
  ]
  const [professorBuscado, setProfessorBuscado] = useState('');
  const [professores, setProfessores] = useState(professoresOriginal);

  //Auxiliar do filtro.
  const updateList = (professor: String) => {
    if(professorBuscado == ''){
      return professor
    }
    else if(professor.toLowerCase().includes(professorBuscado.toLowerCase())){
      return professor
    }
  }

  return (
    <AppLayout>
      <h1>Professores tutores</h1>
      <div className={styles.buscar}>
        <Input name='buscar' placeholder='Digite o nome de um tutor' type='text'
          value={professorBuscado} onChange={e => setProfessorBuscado(e.target.value)} 
        />
      </div>
      <section className={styles.wrapper}>
        <ProfessorList professores= {
          professores.filter(professor => updateList(professor) )
        }/>
      </section>
    </AppLayout>
  )
}
