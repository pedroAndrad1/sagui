import Divider from '../Divider';
import styles from './List.module.scss';
import Image from 'next/image'
import Link from 'next/link';

interface Item{
    nome: string;
    link: string;
}

interface ItemList{
    itens: Item[];
}


export default function List( {itens}: ItemList) {

    return (
        <ul className={styles.wrapper}>
            {
                itens.map((element, i) => {
                    return (
                        <div key={`${i}_${element}`}>
                            <Link href= {element.link}>
                                <div className={styles.profile_demo}>
                                    {/* <Image
                                        width={200}
                                        height={200}
                                        alt='Foto do perfil'
                                        src='/no_image.gif'
                                    /> */}
                                    <li>{element.nome}</li>
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