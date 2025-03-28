// import viteLogo from '/vite.svg';
import { useEffect, useState } from 'react'

export default function Inicio() {
  const [personas, setPersonas ] = useState<string[]>([]);
   // Cargar registros desde localStorage al montar el componente
  useEffect(() => {
    const peronasHD = localStorage.getItem('personas');
    if (peronasHD && peronasHD != '[]'){
      const datos = JSON.parse(peronasHD)
      if (Array.isArray(datos)) {
        setPersonas(datos)
      }
    }
  }, [])
  
    // Guardar en localStorage cada vez que cambia el array
  useEffect(() => {
      console.log('leyendo', personas)
      localStorage.setItem('personas', JSON.stringify(personas))
  }, [personas])

  
  const [nombre, setNombre] = useState("")
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault() //evita que se mande el formulario
      console.log("nombre", nombre)
      setPersonas((prev) => [...prev, nombre])
      console.log(personas)
    }
    return (
      <>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-8 bg-white shadow-md rounded p-6 space-y-4"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Nuevo Registro</h2>

          {/* Nombre */}
          <div>
            <label className="block mb-1 font-medium">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Guardar
          </button>
        </form>
        <ul>
        {personas.map((nombre) => (
            <li>{nombre}</li>
          ))}
        </ul>
      </>
    )
  }