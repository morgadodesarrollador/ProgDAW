import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import axios from 'axios';
import { useEffect, useState } from 'react';

export interface Producto {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    thumbnail: string;
    dimensions: {
        width: number;
        height: number;
        depth: number
    }
}
export const Productos = () => {
  
  //En esta PAGINA deseo cargar la lista de productos
  //1-. No puedo mostrar el html hasta que no estén disponibles
  // todos loa datos de la api --> hook useEffect + hook useState + axios (fetch)
  //2-. Crear una variable de estado que almacene los productos cuando esten
  //disponibles en axios para posteriormente mostrarlos en el html
  //definimos productos = any[];
  //3-. OBLIGATORIO: programar types/interfaces que definen la estructura de los datos
  //que nos vienen desde la api (xTypescript, legibilidad/claridad, documentacion) 
//   const [productos, setProductos] = useState<Producto[]>([{
//     id: 0, title:'', category:'', price: 0, thumbnail:''
//   }]);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [limit, setLimit] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  
  
  useEffect ( () => {
    //bloquea
   
    axios.get('https://dummyjson.com/products')
        .then(respuesta => {
            //la variable respuesta solo tiene VALIDEZ en el ambito/contexto
            //de la funcion de then() --> no se puede leer en el return
            console.log(respuesta);
            setProductos(respuesta.data.products)
            setLimit(respuesta.data.limit);
            setTimeout(() => 5000);
            setLoading(false)
        })
  }, [] ) 
  return (
    // (loading) ? 'Cargando... ': 'Cargado ...' //opTernario
    // if (loading){
    //     'Cargando...'
    // }else {
    //     'Cargado'
    // }
    (loading)
    ?
        <h2>Cargando Productos ...</h2>
    :
        <>
            <div>Sección de Productos {limit} </div>
            <section className='flex flex-wrap'>
                {/* { productos.map( (producto) => {
                    //codigo TS
                    let precioIva = producto.price * 1.21;
                    return(
                        <li>{producto.price}({precioIva }€)</li>)
                }) } */}
                { productos.map( (producto:Producto) => (
                    // <li key={producto.id}>
                    //     <span>{producto.title}</span>
                    //     <img src={producto.thumbnail } width='100' />
                    // </li>
                    <Card className='sm:w-full md:w-1/2 lg:w-1/3'  >
                        <CardHeader>
                            <CardTitle>{producto.title}</CardTitle>
                            <CardDescription>{producto.description}</CardDescription>
                        </CardHeader>
                        <CardContent className='flex justify-center'>
                            <h4>{producto.category}</h4>
                            <img src={producto.thumbnail } width='150' />
                        </CardContent>
                        <CardFooter className='border-2'>
                            <h4>Dimensiones del Producto: </h4>
                            <p>{producto.dimensions.width}/{producto.dimensions.height}/{producto.dimensions.depth}</p>
                        </CardFooter>
                        </Card>
                )) }
            </section>
        </>
  )
}
