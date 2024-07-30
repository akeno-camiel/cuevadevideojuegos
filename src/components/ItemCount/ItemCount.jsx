import { useContext, useEffect, useState } from "react";
import arrowup from "../../assets/chevronup.svg";
import arrowdown from "../../assets/chevrondown.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";


const ItemCount = ({ stock, onAdd }) => {
    const { cart } = useContext(CartContext);

    const [number, setNumber] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const sumar = () => {
        if (number < itemStock) {
            setNumber(number + 1);
        }
    };

    const restar = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };

    const addToCart = () => {
        if (number <= itemStock) {
            setItemStock(itemStock - number)
            setNumber(1);
            onAdd(number);
        }
    };

    const buyNow = () => {
        if (cart.length === 0) {
            onAdd(number);
        }
    };

    useEffect (() => {
        setItemStock(stock)
    }, [stock]);

    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-warning ps-3">{number}</button>
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button onClick={sumar} type="button" className="btn btn-warning p-0 pe-2 rounded-start-0"><img src={arrowup} /></button>
                    <button onClick={restar} type="button" className="btn btn-warning p-0 pe-2 rounded-start-0"><img src={arrowdown} /></button>
                </div>
            </div>
                <button onClick={addToCart} type="button" className="btn btn-warning ms-3 p-3">Agregar al carrito</button>
                <Link onClick={buyNow} type="button" className="btn btn-warning ms-3 p-3" to={"/cart"}> Comprar ahora </Link>
        </div>
    )

}

export default ItemCount;