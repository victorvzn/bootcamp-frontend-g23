import { useState } from "react"

import { CloudinaryUploadImage } from "./CloudinaryUploadImage"

const App = () => {
  const [form, setForm] = useState({
    image: ''
  })

  const handleUpload = (imageUrl) => {
    setForm({
      ...form,
      image: imageUrl
    })
  }

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
        <CloudinaryUploadImage
          onUpload={handleUpload}
          onRemove={() => setForm({ ...form, image: '' })}
        />

        <h3 className='text-xl mt-4'>Form state</h3>
        <pre className='bg-zinc-300 p-4 rounded-lg'>{JSON.stringify(form, null, 2)}</pre>
      </main>
    </>
  )
}

export default App