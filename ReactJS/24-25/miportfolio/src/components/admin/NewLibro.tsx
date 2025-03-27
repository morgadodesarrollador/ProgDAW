import { useState } from 'react'

export default function FormularioRegistro() {
  const [nombre, setNombre] = useState('')
  const [categoria, setCategoria] = useState('Programacion')
  const [precio, setPrecio] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const nuevoRegistro = {
      nombre,
      categoria,
      precio: parseFloat(precio),
    }

    console.log('Nuevo registro:', nuevoRegistro)

    // Limpia el formulario
    setNombre('')
    setCategoria('Programacion')
    setPrecio('')
  }

  return (
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

      {/* Categoría */}
      <div>
        <label className="block mb-1 font-medium">Categoría</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Programacion">Programación</option>
          <option value="Redes">Redes</option>
          <option value="Base de Datos">Base de Datos</option>
        </select>
      </div>

      {/* Precio */}
      <div>
        <label className="block mb-1 font-medium">Precio</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Guardar
      </button>
    </form>
  )
}