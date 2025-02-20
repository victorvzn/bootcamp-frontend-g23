import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router"

import { getCharacter } from "../services/characters"

const CharacterPage = () => {
  const { id } =  useParams() // { id: 123 }

  const navigate = useNavigate()

  const [character, setCharacter] = useState()

  useEffect(() => {
    getCharacter(id)
      .then(result => setCharacter(result))
  }, [])

  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <>
      <h1>Character detail #{id}</h1>

      <section>
        <button onClick={handleBackHome}>Back home</button>

        <Link to='/'>Back Home</Link>

        <img src={character?.image} width={200} />
        <h2>{character?.race}</h2>
        <strong>{character?.originPlanet?.name}</strong>
        <p>{character?.description}</p>

      </section>
    </>
  )
}

export default CharacterPage