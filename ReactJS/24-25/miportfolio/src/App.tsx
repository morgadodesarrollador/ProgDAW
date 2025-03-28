
import './App.css'
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
      <div className='container-full flex flex-col min-h-screen'>
        <Header />
        <main className='container flex-1 mt-16'>
          <AppRoutes />
        </main>
        <Footer/>
      </div>
  )
}

//exportamos el componente
export default App
