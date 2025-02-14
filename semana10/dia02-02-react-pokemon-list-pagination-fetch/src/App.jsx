import { useEffect, useState } from "react"
import { fetchPokemons } from "./services/pokemons"

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchPokemons(page)
      .then(data => setPokemons(data.results))
  }, [page])

  const handleFirst = () => {
    // TODO: validar que la página vaya a la primera página

    setPage(1)
  }

  const handlePrev = () => {
    // TODO: validar que la página sea mayor que cero
    if (page <= 1) {
      return
    }

    setPage(page - 1)
  }

  const handleNext = () => {
    // TODO: validar que la página sea menor que el total de páginas

    setPage(page + 1)
  }

  const handleLast = () => {
    // TODO: validar que la página vaya a la última página

    setPage(page + 1)
  }

  return (
    <main className="mt-4">
      <h1 className="text-3xl text-center mb-4">
        Pokemon List
      </h1>

      <section className="pokemons grid grid-cols-3 w-[600px] mx-auto gap-8">
      {pokemons.map(pokemon => (
        <article className="pokemon w-[200px] h-[150px] bg-yellow-100 flex flex-col justify-center items-center rounded-lg uppercase shadow" key={pokemon.url}>
          <img src={pokemon.image} height="80" style={{ imageRendering: 'pixelated' }} />
          <h3 className="mt-4 font-medium">{pokemon.name}</h3>
        </article>
      ))}
      </section>

      <section className="flex justify-center p-8 gap-2">
      <button onClick={handleFirst} className="bg-amber-100 p-2 font-medium w-18 rounded-lg">First</button>
      <button onClick={handlePrev} className="bg-amber-100 p-2 font-medium w-18 rounded-lg">Prev</button>
        <span className="text-center bg-amber-200 p-2 font-medium w-18 rounded-lg">{page}</span>
        <button onClick={handleNext} className="bg-amber-100 p-2 font-medium w-18 rounded-lg">Next</button>
        <button onClick={handleLast} className="bg-amber-100 p-2 font-medium w-18 rounded-lg">Last</button>
      </section>

      <pre>{JSON.stringify(pokemons, null , 2)}</pre>
    </main>
  )
}

export default App