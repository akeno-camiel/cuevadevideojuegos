import { useState } from "react";
import arrowup from "../../assets/chevronup.svg";
import arrowdown from "../../assets/chevrondown.svg";


const ItemCount = ({ stock }) => {
    const [number, setNumber] = useState(0);
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

    const onAdd = () => {
        if (number <= itemStock) {
            setItemStock(itemStock - number)
            setNumber(0);
        }
    };

    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-warning ps-3">{number}</button>
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button onClick={sumar} type="button" className="btn btn-warning p-0 pe-2 rounded-start-0"><img src={arrowup} /></button>
                    <button onClick={restar} type="button" className="btn btn-warning p-0 pe-2 rounded-start-0"><img src={arrowdown} /></button>
                </div>
                <button onClick={onAdd} type="button" className="btn btn-warning ms-3 rounded-start-2">Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount;