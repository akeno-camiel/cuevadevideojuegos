import { Link } from "react-router-dom";
import cart from "../../assets/cart.svg"
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        CantTotalProductos() > 0 ? <Link to={"/cart"} className="btn active position-relative px-4">
            <img src={cart} alt="icono-carrito" width={30} /> 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link> : "" 
    )
}

export default CartWidget;