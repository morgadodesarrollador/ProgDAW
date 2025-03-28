
import './App.css'

import Footer from './components/Footer';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 mt-16">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </>
  )
}
export default App
