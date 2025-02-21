const CLOUD_NAME = "dtmarfdry"
const UPLOAD_PRESET = "g23-semana11"
const FOLDER_NAME = "g23-semana11"

const CloudinaryUploadImage = () => {
  return (
    <label>
      Upload an image
      <input
        type="file"
      />
    </label>
  )
}

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">
        Upload file + Cloudinary
      </h1>

      <CloudinaryUploadImage />
    </>
  )
}

export default App