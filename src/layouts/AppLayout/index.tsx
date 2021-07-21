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
            <div className={styles.wrapper}>
                <header>
                    <div className={styles.logo}>
                        <img src="/logo.svg" alt="Sagui logomarca" />
                    </div>
                    <nav>
                        <ul>
                            <Link href='/'><li>Home</li></Link>
                            <Divider direction='vertical' />
                            <li onClick={() => openModal()}>Upload de históricos</li>
                            <Divider direction='vertical' />
                            <li>Jubilamento</li>
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