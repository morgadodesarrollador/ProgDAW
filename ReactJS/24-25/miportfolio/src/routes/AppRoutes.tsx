import Home from "@/pages/www/site/Home";
import Qsomos from "@/pages/www/site/Qsomos";
import Servicios from "@/pages/www/site/Servicios";
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/qsomos" element={<Qsomos />} />
       <Route path="/servicios" element={<Servicios />} />
    </Routes>
  )
}

export default AppRoutes;