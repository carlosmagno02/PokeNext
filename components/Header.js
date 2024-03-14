import styles from '../src/app/header.module.css'
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src='/images/pokeball.png'
                    width="30"
                    height="30"
                    alt="PokeNext"
                    title="PokeNext"
                />
                <h1>PokeNext</h1>
            </div>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}