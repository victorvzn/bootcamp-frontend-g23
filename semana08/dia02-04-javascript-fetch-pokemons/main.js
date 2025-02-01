let page = 1
const LIMIT = 6

const pokemonsFavorites = JSON.parse(localStorage.getItem('pokemon-favorites')) ?? []

// console.log(pokemonsFavorites)

const elNextPage = document.querySelector('#nextPage')
const elCurrentPage = document.querySelector('#currentPage')

const fetchPokemons = async (page = 1) => {
  const OFFSET = (page - 1) * LIMIT

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`

  const response = await fetch(url)

  const data  = await response.json() // Convierte la respueste en formato JS

  const dataResults = data.results.map(pokemon => {
    // url: "https://pokeapi.co/api/v2/pokemon/1/"
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const foundFavorite = pokemonsFavorites.find(favorite => favorite.id === id)
    
    return {
      ...pokemon,
      id,
      image,
      isFavorite: Boolean(foundFavorite)
    }
  })

  return {
    ...data,
    results: dataResults
  }
}

// TODO: Mostrar las imagenes de cada pokemon

const renderPokemons = async (pokemons = []) => {
  const pokemonsList = document.getElementById('pokemonList')

  let elements = ''

  pokemons.forEach(pokemon => {
    elements += `
      <article class="bg-amber-200 flex flex-col justify-center items-center p-1 rounded-lg border border-amber-400  capitalize">
        <h2 class="font-medium mb-2">#${pokemon.id} ${pokemon.name}</h2>
        <img src="${pokemon.image}" class="aspect-square w-full" />
        <div class="flex justify-between mt-1 gap-2">
          <button onclick="readPokemon(${pokemon.id})" class="${pokemon.isFavorite ? '' : 'hidden'} bg-amber-400 hover:bg-amber-500 duration-300 py-2 px-3 rounded-md text-white cursor-pointer">
            <svg  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit w-5 h-5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
          </button>
          <button onclick="toggleFavorite('${pokemon.id}', '${pokemon.name}', '${pokemon.image}')" class="bg-amber-400 hover:bg-amber-500 duration-300 py-2 px-4 rounded-md text-white cursor-pointer">
            <svg viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="${pokemon.isFavorite ? 'text-amber-800 fill-amber-800' : ''} icon icon-tabler icons-tabler-outline icon-tabler-star  w-5 h-5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
          </button>
        </div>
      </article>
    `
  })

  pokemonsList.innerHTML = elements

  elCurrentPage.textContent = `Page ${page}`
}

elNextPage.addEventListener('click', async (event) => {
  page = page + 1

  const dataPokemons = await fetchPokemons(page)

  renderPokemons(dataPokemons.results)
})

// TODO: Implementar el botón first page de la paginación y validar su uso
// TODO: Implementar el botón last page de la paginación y validar su uso
// TODO: Implementar el botón previous page de la paginación y validar su uso

const readPokemon = (pokemonId) => {
  console.log(pokemonId)
}

const toggleFavorite = async (id, name, image) => {
  pokemonsFavorites.push({ id, name, image })

  console.log('toggleFavorite', pokemonsFavorites)

  localStorage.setItem('pokemon-favorites', JSON.stringify(pokemonsFavorites))
}

fetchPokemons()
  .then(data => {
    console.log(data)
    renderPokemons(data.results)
  })