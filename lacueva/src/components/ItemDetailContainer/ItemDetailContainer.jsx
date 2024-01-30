import ItemDetail from "../ItemDetail/ItemDetail";
import arrayProductos from "../json/productos.json"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState ([]);
    const {id} = useParams();

    useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve (arrayProductos.find (item => item.id === parseInt(id)))
            }, 1000);
        })
        promesa.then(data => {
            setItem(data)
        })
    }, [id]);

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;