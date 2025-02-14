import { useEffect, useState } from "react"
import { fetchPokemons } from "./services/pokemons"

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons()
      .then(data => setPokemons(data.results))
  }, [])

  return (
    <main>
      <h1 className="text-3xl text-center">
        Pokemon List
      </h1>

      {pokemons.map(pokemon => <h3 key={pokemon.url}>{pokemon.name}</h3>)}

      <pre>{JSON.stringify(pokemons, null , 2)}</pre>
    </main>
  )
}

export default App