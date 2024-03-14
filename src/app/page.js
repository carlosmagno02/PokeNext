import Image from "next/image";
import styles from "./page.module.css";
import Card from "../../components/Card";



export async function getData() {
  const maxPokemons = 151
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return data.results
}

export default async function Home() {
  const pokemons = await getData()
  return (
    <section>
      <div className={styles.logo}>
        <h1>Poke<span>Next</span></h1>
        <Image
          src='/images/pokeball.png'
          width="30"
          height="30"
          alt="PokeNext"
          title="PokeNext"
        />
      </div>
      <div className={styles.container}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}
