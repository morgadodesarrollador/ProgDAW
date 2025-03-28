import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="container bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo o título */}
          <div className="text-xl font-bold">Mi Sitio</div>

          {/* Menú desktop */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/qsomos" className="hover:underline">Quiénes Somos</Link>
            <Link to="/servicios" className="hover:underline">Servicios</Link>
            <Link to="/contacto" className="hover:underline">Contacto</Link>
          </div>

          {/* Botón móvil */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col gap-2 pb-4">
            <Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/quienes-somos" className="hover:underline" onClick={() => setMenuOpen(false)}>Quiénes Somos</Link>
            <Link to="/servicios" className="hover:underline" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link to="/contacto" className="hover:underline" onClick={() => setMenuOpen(false)}>Contacto</Link>
          </div>
        )}
      </div>
    </nav>
  )
}