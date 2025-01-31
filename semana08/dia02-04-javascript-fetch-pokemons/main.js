const url = 'https://pokeapi.co/api/v2/pokemon'

const fetchPokemons = async () => {
  const response = await fetch(url)

  const data  = await response.json() // Convierte la respueste en formato JSON

  return data
}

// TODO: Mostrar las imagenes de cada pokemon

const renderPokemons = async (pokemons = []) => {
  const pokemonsList = document.getElementById('pokemonList')

  let elements = ''

  pokemons.forEach(pokemon => {
    elements += `
      <article class="bg-amber-200 flex flex-col justify-center items-center p-1 rounded-lg border border-amber-400  capitalize">
        <h2 class="font-medium mb-2">${pokemon.name}</h2>
        <img src="https://placehold.co/80x80" />
        <div class="flex justify-between mt-1 gap-3">
          <button class="bg-amber-400 p-1 text-white cursor-pointer">
            <img src="./icon-edit.svg" />
          </button>
          <button class="bg-amber-400 p-1 text-white cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
          </button>
        </div>
      </article>
    `
  })

  pokemonsList.innerHTML = elements
}

fetchPokemons()
  .then(data => {
    console.log(data)
    renderPokemons(data.results)
  })