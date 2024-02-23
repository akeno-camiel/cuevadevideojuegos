import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import trash from "../../assets/trash3.svg"

const Cart = () => {
    const { cart, removeItem, clear, CantTotalProductos, SumaTotalProductos } = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="display-3">💻</p>
                        <div className="alert alert-danger" role="alert">
                            No agregaste ningún producto al carrito
                        </div>
                        <Link to={"/"} className="btn btn-warning my-5">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos seleccionados</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Precio U.</th>
                                <th scope="col">Cant.</th>
                                <th scope="col">SubTotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">

                            {cart.map(product =>
                                <tr key={product.id}>
                                    <th><img src={product.img} alt={product.title} width={70} /></th>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.quantity * product.price}</td>
                                    <td><a href="#" onClick={ () => removeItem(product.id)}><img src={trash} alt="Eliminar producto" /></a></td>
                                </tr>
                            )}

                            <tr>
                                <td colSpan="3"></td>
                                <td>Suma Total</td>
                                <td>${SumaTotalProductos()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;