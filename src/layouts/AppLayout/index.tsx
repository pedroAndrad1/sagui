import React, { useState } from 'react';
import Container from '../../components/Container';
import Divider from '../../components/Divider';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';
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
                    <div className=
                        {
                            `
                        ${styles.upload_de_historicos_modal} 
                        fadeIn
                        fadeOut
                    `
                        }
                    >
                        <header>
                            <h1>Carga de histórico</h1>
                        </header>
                        <Divider />
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
                <Navbar openCargaHistoricosModal={openModal} />
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