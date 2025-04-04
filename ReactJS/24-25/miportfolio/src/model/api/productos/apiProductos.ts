import axios from 'axios';
import { IProducto } from '@/model/interfaces/productos/IProductos';


//SERVICIO 
//devuleve el listado de productos
export const getProductos = async (): Promise<IProducto[]> => {
    const respuesta =  await axios.get('https://dummyjson.com/products');
    console.log(respuesta)
    return respuesta.data.products;
}






