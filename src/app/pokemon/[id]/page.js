import Image from "next/image"
import styles from "./page.module.css"

export async function generateStaticParams() {
    const maxPokemons = 151
    const api = 'https://pokeapi.co/api/v2/pokemon/'
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() }
        }
    })

    return paths
}

async function getData(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return data
}

export default async function Pokemon({ params }) {
    const pokemon = await getData(params.id)
    return (
        <section className={styles.container}>
            <div>
                <h1>{pokemon.name}</h1>
                <Image
                    src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemon.id}.gif`}
                    width={300}
                    height={300}
                    alt={pokemon.name}
                    title={pokemon.name}
                />
            </div>
            <div className={styles.number}>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                {pokemon.types.map((item,index)=>(
                    <span key={index} className={`${styles.type} ${styles['type_'+item.type.name]}`}>{item.type.name}</span>
                ))}
            </div>
            <div className={styles.details}>
                <div className={styles.height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.weight}>
                    <h4>Peso</h4>
                    <p>{pokemon.weight / 10 } kg</p>
                </div>
            </div>
        </section>
    )
}