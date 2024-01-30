import { useEffect, useState } from "react";
import arrayProductos from "../json/productos.json";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter (item => item.category === id) : arrayProductos)
            }, 1000);
        })
        promesa.then(data => {
            setItems(data)
        })
    }, [id]);

    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer;