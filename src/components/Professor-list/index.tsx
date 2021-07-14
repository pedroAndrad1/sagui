import Divider from '../Divider';
import styles from './ProfessorList.module.scss';

export default function ProfessorList({ professores }) {

    return (
        <ul className={styles.wrapper}>
            {
                professores.map((professorNome, i) =>{
                    return (
                        <div key={`${i}_${professorNome}2`}>  
                            <li>{professorNome}</li>
                            <Divider />
                        </div>
                    )
                })
            }
        </ul>
    )

}