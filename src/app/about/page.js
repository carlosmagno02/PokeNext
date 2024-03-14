import Image from "next/image";

import styles from './about.module.css'
import Link from "next/link";

export default function About() {
    return (
        <section className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>O projeto PokeNext visa treinar e desenvolver habilidades com o freamework Next.Js, fazendo requisições a api para criar um projeto de pokedex completa sobre primeiros 151 pokemons.</p>
            <p>Projeto desenvolvido por Carlos Magno - Github: <Link href='https://github.com/carlosmagno02/PokeNext'>carlosmagno02</Link></p>
            <Image
                src="/images/charizard.png"
                width={350}
                height={350}
                alt="Charizard"
                title="Charizard"
            />
        </section>
    )
}