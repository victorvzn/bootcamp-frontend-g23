import { useEffect, useState } from "react"
import { fetchPokemons } from "./services/pokemons"

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons()
      .then(data => setPokemons(data.results))
  }, [])

  return (
    <main className="mt-4">
      <h1 className="text-3xl text-center mb-4">
        Pokemon List
      </h1>

      <section className="pokemons grid grid-cols-3 w-[600px] mx-auto gap-8">
      {pokemons.map(pokemon => (
        <article className="pokemon w-[200px] h-[150px] bg-yellow-100 flex flex-col justify-center items-center rounded-lg uppercase shadow" key={pokemon.url}>
          <img src={pokemon.image} width="80px" style={{ imageRendering: 'pixelated' }} />
          <h3 className="mt-4 font-medium">{pokemon.name}</h3>
        </article>
      ))}
      </section>

      <pre>{JSON.stringify(pokemons, null , 2)}</pre>
    </main>
  )
}

export default App