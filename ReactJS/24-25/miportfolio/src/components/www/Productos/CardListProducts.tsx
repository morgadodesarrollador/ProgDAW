import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { IProducto } from '../../../model/interfaces/productos/IProductos';

interface Props {
    productos: IProducto[]
}
export const CardListProducts = ({productos}: Props) => {
  return (
        <>
            <div>Sección de Productos </div>
            <section className='flex flex-wrap'>
                {/* { productos.map( (producto) => {
                    //codigo TS
                    let precioIva = producto.price * 1.21;
                    return(
                        <li>{producto.price}({precioIva }€)</li>)
                }) } */}
                { productos.map( (producto:IProducto) => (
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
