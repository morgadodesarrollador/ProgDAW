import { Routes, Route } from 'react-router-dom'
import Inicio from "../pages/Inicio"
import QSomos from "../pages/QSomos"
import Servicios from "../pages/Servicios"
import Contacto from "../pages/Contacto"

export default function AppRoutes() {
  return (
    <Routes>
       <Route path="/" element={<Inicio />} />
        <Route path="/qsomos" element={<QSomos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}