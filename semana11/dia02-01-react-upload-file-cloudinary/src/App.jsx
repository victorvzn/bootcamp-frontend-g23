import { Cloudinary } from '@cloudinary/url-gen'

const CLOUD_NAME = "dtmarfdry"
const UPLOAD_PRESET = "g23-semana11"
const FOLDER_NAME = "g23-semana11"

const CloudinaryUploadImage = () => {

  // 01 - Inicializar Cloudinary
  const cloudinary = new Cloudinary({ cloud: { cloudName: CLOUD_NAME } })

  // Subir una imagen a Cloudinary
  const handleUpload = async (event) => {
    const file = event.target.files[0]

    if (!file) return

    const formData = new FormData()

    formData.append("file", file)
    formData.append("upload_preset", UPLOAD_PRESET)
    formData.append("folder_name", FOLDER_NAME) // Opcional, para organizar en un carpeta

    try {

      const options = {
        method: 'POST',
        body: formData
      }

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        options
      )

      const data = await response.json()

      console.log('Imagen subida:', data.url)
    } catch (error) {
      console.error("Error subiendo image:", error)
    }
  }

  return (
    <div className="border shadow border-zinc-200 rounded-lg p-2 flex flex-col gap-2 w-52">
      <img
        src='http://placehold.co/300x450'
      />

      <label className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition text-center">
        Upload an image
        <input
          className="hidden"
          type="file"
          onChange={handleUpload}
        />
      </label>

      <button className="cursor-pointer bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition text-center">Remove</button>
    </div>
  )
}

const App = () => {
  return (
    <>
      <header className="border-b-2">
        <div className="flex h-16 items-center justify-between px-4 bg-zinc-100">
          <h1 className="text-xl font-bold">
            Upload file + Cloudinary
          </h1>
        </div>
      </header>
  
      <main className="p-8">
        <CloudinaryUploadImage />
      </main>
    </>
  )
}

export default App