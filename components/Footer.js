import Link from "next/link"
import styles from '../src/app/footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>PokeNext &copy; 2024 - criado por <Link href={'https://github.com/carlosmagno02/PokeNext'}>carlosmagno02</Link></p>
        </footer>
    )
}