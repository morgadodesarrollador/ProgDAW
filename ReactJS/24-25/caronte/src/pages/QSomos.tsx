import NewLibro from '../components/Libros/NewLibro';
import LibrosList from '../components/Libros/Libroslist';
import { TLibro } from '../components/Libros/ILibros';
export default function QSomos() {
    // const libros: TLibro[];
    const libros = [
      { id: 1, nombre: "JavaScript Elocuente", categoria: "Programacion", precio: 25.99 },
      { id: 2, nombre: "Redes de Computadores", categoria: "Redes", precio: 32.5 },
      { id: 3, nombre: "SQL para Todos", categoria: "Base de Datos", precio: 19.99 },
    ]
    return (
      <>
        <NewLibro />
        <div className="p-4">Zona de Quienes Somos.</div>
        <LibrosList registros={libros} />
      </>
      
    )
  }