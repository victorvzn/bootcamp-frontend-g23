import { useEffect, useState } from "react"

const App = () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon'

  const fetchPokemons = async () => {
    const response = await fetch(API_URL)

    return (await response).json()
  }

  // Genera un llamado infinito al api de pokemons por que actualizamos el estado pokemons 
  // fetchPokemons()
  //   .then(data => {
  //     setPokemons(data.results)
  //   })

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    console.log('Se ejecuta la primera vez cuando asignamos el arreglo vacío en useEffect')
    fetchPokemons()
      .then(data => {
        setPokemons(data.results)
      })
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Pokemon List
      </h1>

      <ul>
        {pokemons.map(pokemon => {
          return (
            <li key={pokemon}>{pokemon.name}</li>
          )
        })}
      </ul>

      <pre>{JSON.stringify(pokemons)}</pre>
    </>
  )
}

export default App