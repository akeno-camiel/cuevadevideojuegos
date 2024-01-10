import cart from "../assets/cart.svg"

const CartWidget = () => {
    return (
        <button type="button" className="btn active position-relative px-4">
            <img src={cart} alt="icono-carrito" width={30} /> 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">7</span>
        </button>
    )
}

export default CartWidget;