import Link from 'next/link';
import React from 'react';
import Container from '../../components/Container';
import Divider from '../../components/Divider';
import styles from './AppLayout.module.scss';


export default function AppLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <header>
                <div className={styles.logo}>
                    <img src="/logo.svg" alt="Sagui logomarca" />
                    <p>SAGUI</p>
                </div>
                <nav>
                   <ul>
                       <Link href='/'><li>Home</li></Link>
                       <Divider direction='vertical'/>
                       <li>Upload de históricos</li>
                       <Divider direction='vertical'/>
                       <li>Jubilamento</li>
                       <Divider direction='vertical'/>
                       <li>Admin</li>
                       <Divider direction='vertical'/>
                       <li>Sobre</li>
                       <Divider direction='vertical'/>
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
    )
}