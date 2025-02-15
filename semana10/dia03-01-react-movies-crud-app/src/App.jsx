import { useEffect, useState } from "react"
import { createMovie, deleteMovie, fetchMovies, updateMovie } from "./services/movies"

const App = () => {
  const INITIAL_FORM = {
    id: '',
    name: '',
    image: '',
    release: '',
    genreId: '',
    resumen: '',
  }

  // TODO: Renderizar el listado de peliculas en la tabla que vienen desde localhost:3000/movies
  const [movies, setMovies] = useState([])

  const [form, setForm] = useState(INITIAL_FORM)

  useEffect(() => {
    fetchMovies()
      .then(data => setMovies(data))
  }, [])

  // TODO: Crear una pelicula manejando el formulario
  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();

    // TODO: Guardar la película cuando estamos editando
    const isNewMovie = form.id === ''
    
    if (isNewMovie) {

      const response = await createMovie({
        name: form.name,
        image: form.image,
        release: form.release,
        genreId: form.genreId,
        resumen: form.resumen,
      })
      
      if (response) {
        fetchMovies()
          .then(data => setMovies(data))
      }
    } else {
      // Mandamos a actualizar nuestra película
      const response = await updateMovie(form.id, {
        name: form.name,
        image: form.image,
        release: form.release,
        genreId: form.genreId,
        resumen: form.resumen,
      })
      
      if (response) {
        fetchMovies()
          .then(data => setMovies(data))
      }
    }


    
    setForm(INITIAL_FORM)
  }

  const handleRemove = async (id) => {
    // TODO: terminar la eliminación de una película desde el servidor
    console.log(id)
    const response = await deleteMovie(id)

    if (response) {
      fetchMovies()
        .then(data => setMovies(data))
    }
  }

  const handleUpdate = (movieSelected) => {
    setForm(movieSelected)
  }

  return (
    <>
      <header className="container mx-auto border-b border-zinc-200 h-16 flex items-center px-4">
        <h1 className="text-xl font-bold text-zinc-800">
          CRUD de películas con json-server
        </h1>
      </header>

      <main className="container mx-auto flex gap-2">
        <div className="relative overflow-x-auto sm:rounded-lg w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Listado de películas
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Esta vista lista las películas que guardar en json-server.</p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Imagen
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  key={movie.id}
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {movie.id}
                  </th>
                  <td className="px-6 py-4">
                    <img
                      src={movie.image}
                      width={100}
                      height={250}
                    />
                  </td>
                  <td className="px-6 py-4 flex flex-col gap-2">
                    <strong>{movie.name}</strong>
                    <div><strong className="text-xs">Estreno: </strong> {movie.release}</div>
                    <div><strong className="text-xs">Genero: </strong> {movie?.genre?.name ? movie?.genre?.name : '-'}</div>
                    <div><strong className="text-xs">Resumen: </strong> {movie.resumen}</div>
                  </td>
                  <td className="px-6 py-4 ">
                    <div className="flex gap-3 ">
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => handleUpdate(movie)}
                      >
                        Edit
                      </button>
                      <button
                        className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                        onClick={() => handleRemove(movie.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody> 
          </table>

          <pre className="mt-8 bg-zinc-100 p-4">{JSON.stringify(movies, null, 2)}</pre>
        </div>

        <form className="p-4 w-96" onSubmit={handleSave}>
          <h3 className="py-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Nueva película
          </h3>

          <div className="flex flex-col gap-2">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="name"
              placeholder="Mi película"
              required
              onChange={handleChange}
              value={form.name}
            />
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="image"
              placeholder="https://..."
              required
              onChange={handleChange}
              value={form.image}
            />
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
              name="release"
              placeholder="Estreno"
              required
              onChange={handleChange}
              value={form.release}
            />
            
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="genreId"
              required
              onChange={handleChange}
              value={form.genreId}
            >
              <option value="">Selecciona un genero...</option>
              <option value="1">Comedia</option>
              <option value="2">Acción</option>
              <option value="3">Animación</option>
              <option value="4">Aventura</option>
            </select>

            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              rows="4"
              name="resumen"
              placeholder="Resumen de mi película..."
              onChange={handleChange}
              value={form.resumen}
            />

            <input
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="submit"
              value="Guardar"
            />
          </div>

          <pre>{JSON.stringify(form, null, 2)}</pre>
        </form>

      </main>
    </>
  )
}

export default App