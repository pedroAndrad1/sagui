import Input from '../components/Input';
import ProfessorList from '../components/Professor-list';
import AppLayout from '../layouts/AppLayout';
import styles from '../styles/home.module.scss';

export default function Home() {

  const professores = [
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
    'professor',
    'professor',
  ]


  return (
    <AppLayout>
      <h1>Professores tutores</h1>
      <div className={styles.buscar}>
        <Input />
      </div>
      <section className={styles.wrapper}>
        <ProfessorList professores={professores} />
      </section>
    </AppLayout>
  )
}
