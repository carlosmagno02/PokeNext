import Image from "next/image"
import Link from "next/link"
import style from '../src/app/card.module.css'

export default function Card({ pokemon }) {
    return (
        <div className={style.card}>
            <Image 
                src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemon.id}.gif`}
                width={120}
                height={150}
                alt={pokemon.name}
                title={pokemon.name}
                unoptimized
            />
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </div>
    )
}