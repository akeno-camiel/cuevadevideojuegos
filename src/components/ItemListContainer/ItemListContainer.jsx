import { useEffect, useState } from "react";
// import arrayProductos from "../json/productos.json";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import Loading from "../Loading/Loading"

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter (item => item.category === id) : arrayProductos)
    //         }, 1000);
    //     })
    //     promesa.then(data => {
    //         setItems(data)
    //     })
    // }, [id]);

    // useEffect (() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");
        
    //     arrayProductos.forEach(producto => {
    //         addDoc(itemsCollection, producto);
    //     });

    //     console.log("listo los productos");
    // });

    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection,where("category", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    },[id])


    return (
        <>
            {loading ? <Loading /> : <ItemList items={items} />}
        </>
    )
}

export default ItemListContainer;