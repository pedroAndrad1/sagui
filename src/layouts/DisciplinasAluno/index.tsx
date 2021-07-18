import Divider from '../../components/Divider';
import Table from '../../components/Table';
import styles from './DisciplinasAluno.module.scss';

export default function DisciplinasAluno() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.fluxograma}>
                <img src="/on-work.svg" alt="Em construção" />
                <span>Futuro Fluxograma aqui</span>
            </div>
            <Divider />
            <div className={styles.disciplinas}>
                <h2>Disciplinas cursadas</h2>
                <Table />
            </div>
        </section>
    )
}