import Link from 'next/link';
import React, { useState } from 'react';
import Container from '../../components/Container';
import Divider from '../../components/Divider';
import Modal from '../../components/Modal';
import styles from './AppLayout.module.scss';


export default function AppLayout({ children }) {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }



    return (
        <>
            {
                modalOpen &&
                <Modal>
                    <div className =
                    {
                    `
                        ${styles.upload_de_historicos_modal} 
                        fadeIn
                    `
                    }
                    >
                        <header>
                            <h1>Carga de histórico</h1>
                        </header>
                        <Divider/>
                        <main>
                            Por favor, certifique-se que o conteúdo do pdf está no formato correto.
                        </main>
                        <footer>
                            <label htmlFor="historico" className='button-like'>Carregar</label>
                            <input name="historico" id="historico" type="file" accept="application/pdf" />
                            <button onClick={() => closeModal()}>Sair</button>
                        </footer>
                    </div>
                </Modal>
            }
            <div className={styles.wrapper}>
                <header>
                    <div className={styles.logo}>
                        <img src="/logo.svg" alt="Sagui logomarca" />
                    </div>
                    <nav>
                        <ul>
                            <Link href='/'><li>Home</li></Link>
                            <Divider direction='vertical' />
                            <li onClick={() => openModal()}>Carga de históricos</li>
                            <Divider direction='vertical' />
                            <Link href='/jubilamento'><li>Jubilamento</li></Link>
                            <Divider direction='vertical' />
                            <li>Admin</li>
                            <Divider direction='vertical' />
                            <li>Sobre</li>
                            <Divider direction='vertical' />
                            <li>Logout</li>
                        </ul>
                    </nav>
                </header>
                <main className="animeLeft">
                    <Container>
                        {children}
                    </Container>
                </main>
                <footer>
                    <p>Informações</p>
                </footer>
            </div>
        </>
    )
}