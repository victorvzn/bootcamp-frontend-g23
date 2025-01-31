// DOCUMENTACIÓN: https://web.dragonball-api.com/

// API: https://dragonball-api.com/api/characters

const url = 'https://dragonball-api.com/api/characters'

const renderCharacters = (characters = []) => {
  const divApp = document.querySelector('#app')

  let characterList = ''

  characters.forEach(character => {
    characterList += `
      <article>
        <h2>${character.name}<h2>
        <img src="${character.image}" height="200" />
      </article>
    `
  })

  divApp.innerHTML = characterList
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    renderCharacters(data.items)
  })
  .catch(error => console.log(error))


// TODO: Añadir al renderizado de characters una paginación agregando botón anterior y siguiente