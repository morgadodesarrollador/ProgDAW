import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [ contador, setContador ] = useState<number>(5);
  //contador = contador + 1
  function addContador1() {
    console.log('sumando ...')
  }
  const addContador = () => {
    console.log('sumando ...')
    //contador = contador + 1;
    setContador(contador + 1);
  }
  return (
    <div className="container-fluid mx-auto px-4">
      <h1>Zona Homa</h1>
      <Button>
        <Mail /> Login with Email
      </Button>
    </div>
    
    // <h1 className='text-3xl text-blue-500'>Hola Mundo</h1>
    //     <button onClick={addContador}> + Contador </button>
    //     <h4>Contador: {contador }</h4>
    )
}

export default Home