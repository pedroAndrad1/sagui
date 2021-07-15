import Divider from '../Divider';
import styles from './ProfessorList.module.scss';
import Image from 'next/image'
import Link from 'next/link';

export default function ProfessorList({ professores }) {

    return (
        <ul className={styles.wrapper}>
            {
                professores.map((professorNome, i) => {
                    return (
                        <div key={`${i}_${professorNome}`}>
                            <Link href='/aluno/teste'>
                                <div className={styles.profile_demo}>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt='Foto do perfil'
                                        src='/no_image.gif'
                                    />
                                    <li>{professorNome}</li>
                                </div>
                            </Link>
                            <Divider />
                        </div>
                    )
                })
            }
        </ul>
    )

}