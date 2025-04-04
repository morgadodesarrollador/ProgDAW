import { useEffect, useState } from 'react';
import { CardListProducts } from '@/components/www/Productos/CardListProducts';
import { getProductos } from '@/model/api/productos/apiProductos';
import { IProducto } from '@/model/interfaces/productos/IProductos';


export const Productos = () => {
 
  const [productos, setProductos] = useState<IProducto[]>([]);
  const [limit, setLimit] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  
  
  useEffect ( () => {
    const obtenerProductos = async () => {
        //llamar al servicio
        const productos = await getProductos();
        setProductos(productos)
        setLoading(false)
    };
    obtenerProductos();
  }, [] ) 
  return (
    (loading)
    ?
        <h2>Cargando Productos ...</h2>
    :
        <CardListProducts productos={productos} />
  )
}
