
import './App.css'
import { useState } from 'react';
import NavBar from './components/www/site/NavBar';
import AppRoutes from './routes/AppRoutes';
import { Header } from './components/www/site/Header';
import { Footer } from './components/www/site/Footer';

function App() {
  //controlador
  //useState --> hook de React , Añade un estado de la variable contador
  //a nuestro componente funcional App = +.tsx -- codigo + return (vista)
  //componentes -- Inicio.ts
  //contador = 0
  

  return (
      //vista
      <div className='container-full'>
        <Header />
        <main className='container'>
          <AppRoutes />
        </main>
        <Footer/>
      </div>
  )
}

//exportamos el componente
export default App
