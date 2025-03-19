import { Button } from "@/components/ui/button";

export default function Home() {
    //1-. recibir parametros
    //2-. invocar al servicio (axios --> http a la api
    //3-. recibir datos del servicio
    //4-. enviar datos al template (vista) --> return
    //acciones TS del controlador, servicio ...
    //y los datos que se obtienen se va a renderizar en 
    //el codigo html del return 
    return (
        <div>
         <h1>Hola Mundo ...</h1>
         <Button> Pulsame </Button>
        </div>
    )
}