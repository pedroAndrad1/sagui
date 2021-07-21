import { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface ModalProps{
    children: ReactNode
}

export default function Modal( {children}: ModalProps ){



    return(
        <aside className={styles.wrapper}>
            {children}
        </aside>
    )
}