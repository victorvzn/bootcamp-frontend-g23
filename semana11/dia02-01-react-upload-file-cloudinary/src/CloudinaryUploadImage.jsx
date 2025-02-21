import { Cloudinary } from '@cloudinary/url-gen'
import { fill } from '@cloudinary/url-gen/actions/resize'

import { useState } from 'react'

const CLOUD_NAME = "dtmarfdry"
const UPLOAD_PRESET = "g23-semana11"
const FOLDER_NAME = "g23-semana11"

export const CloudinaryUploadImage = ({ onUpload, onRemove }) => {
  const [image, setImage] = useState('')

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

      console.log('Imagen subida:', data)

      const urlResizedImage = getImageUrl(data.public_id)

      setImage(urlResizedImage)

      onUpload(urlResizedImage)
    } catch (error) {
      console.error("Error subiendo image:", error)
    }
  }

  const getImageUrl = (publicId) => {
    return cloudinary.image(publicId)
      .resize(fill().width(300).height(450)) // Redimensionar la image al cargarla
      .toURL()
  }

  const handleRemove = () => {
    setImage('')

    onRemove()
  }

  return (
    <div className="border shadow border-zinc-200 rounded-lg p-2 flex flex-col gap-2 w-52">
      {image &&
        <img
          src={image}
        />
      }

      <label className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition text-center">
        Upload an image
        <input
          className="hidden"
          type="file"
          accept=".jpg, .png"
          onChange={handleUpload}
        />
      </label>
      
      {image &&
        <button
          className="cursor-pointer bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition text-center"
          onClick={handleRemove}
        >
          Remove
        </button>
      }
    </div>
  )
}