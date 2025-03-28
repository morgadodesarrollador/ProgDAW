import { TLibro } from "./ILibros"

  
  type Props = {
    registros: TLibro[]
  }
  
  export default function LibrosList({ registros }: Props) {
    return (
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Categoría</th>
              <th className="py-2 px-4 text-left">Precio</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro) => (
              <tr key={registro.id} className="border-t">
                <td className="py-2 px-4">{registro.id}</td>
                <td className="py-2 px-4">{registro.nombre}</td>
                <td className="py-2 px-4">{registro.categoria}</td>
                <td className="py-2 px-4">€ {registro.precio.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }