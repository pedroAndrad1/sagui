import styles from './Navbar.module.scss';
import Link from 'next/link';
import Divider from '../Divider';
import { useUserContext } from '../../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

interface NavbarProps {
    openCargaHistoricosModal: () => void;
}

export default function Navbar({ openCargaHistoricosModal }: NavbarProps) {
    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    const { logout } = useUserContext();
    const [openMenuMobile, setOpenMenuMobile] = useState(false);


    const toogleMenu = () => {
        setOpenMenuMobile(!openMenuMobile)
    }

    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="Sagui logomarca" />
                <FontAwesomeIcon icon={faBars} color='white' onClick={toogleMenu} className={styles.mobile} size="lg" />
            </div>
            <nav className={`${styles.navBar}`}>
                {
                    openMenuMobile || screenWidth > 800 ?
                        <ul>
                            <Link href='/'><li>Home</li></Link>
                            <li onClick={() => openCargaHistoricosModal()}>Carga de Históricos</li>
                            <Link href='/jubilamento'><li>Jubilamento</li></Link>
                            <Link href='/situacoes-de-atencao'><li>Situações de Atenção</li></Link>
                            <Link href='/admin'><li>Admin</li></Link>
                            <li>Sobre</li>
                            <li onClick={() => logout()}>Logout</li>
                        </ul>
                        :
                        <></>
                }
            </nav>
        </header>
    )

}