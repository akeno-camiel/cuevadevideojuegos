import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    
    const onAdd = (quantity) => {
        addItem(item, quantity);
    };
    

    return (
        <div className="d-flex justify-content-center">
            <div className="card m-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.img} className="img-fluid rounded-start p-4" alt={item.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body pt-4">
                            <h5 className="card-title">{item.title.toUpperCase()}</h5>
                            <p className="card-text">${item.price}</p>
                            <ItemCount stock={item.stock} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="true" href="#">General</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{item.detail1}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;