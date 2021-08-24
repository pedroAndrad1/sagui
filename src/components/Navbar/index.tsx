import styles from './Navbar.module.scss';
import Link from 'next/link';
import Divider from '../Divider';

interface NavbarProps{
    openCargaHistoricosModal: () => void;
}

export default function Navbar( {openCargaHistoricosModal}:NavbarProps ){

    return(
        <header className={styles.wrapper}>
                    <div className={styles.logo}>
                        <img src="/logo.svg" alt="Sagui logomarca" />
                    </div>
                    <nav>
                        <ul>
                            <Link href='/'><li>Home</li></Link>
                            <Divider direction='vertical' />
                            <li onClick={() => openCargaHistoricosModal()}>Carga de Históricos</li>
                            <Divider direction='vertical' />
                            <Link href='/jubilamento'><li>Jubilamento</li></Link>
                            <Divider direction='vertical' />
                            <Link href='/situacao-de-atencao'><li>Situações de Atenção</li></Link>
                            <Divider direction='vertical' />
                            <Link href='/admin'><li>Admin</li></Link>
                            <Divider direction='vertical' />
                            <li>Sobre</li>
                            <Divider direction='vertical' />
                            <li>Logout</li>
                        </ul>
                    </nav>
                </header>
    )

}