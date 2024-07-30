import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const { cart, SumaTotalProductos, clear } = useContext(CartContext);
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();

    const generateOrder = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = { name: nombre, email: email, phone: telefono };
        const items = cart.map(item => ({ id: item.idx, title: item.title, price: item.price }));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = SumaTotalProductos();
        const order = { buyer: buyer, items: items, date: date, total: total };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Checkout</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form className="text-end mb-4 me-4">
                        <div className="mb-3 text-start">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">Teléfono</label>
                            <input type="number" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-warning" onClick={generateOrder}>Generar orden</button>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Precio U.</th>
                                <th scope="col">Cant.</th>
                                <th scope="col">SubTotal</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">

                            {cart.map(product =>
                                <tr className="align-middle" key={product.id}>
                                    <th><img src={product.img} alt={product.title} width={70} /></th>
                                    <td className="text-start">{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.quantity * product.price}</td>
                                </tr>
                            )}

                            <tr>
                                <td colSpan="2"></td>
                                <td><strong>Total</strong></td>
                                <td>&nbsp;</td>
                                <td><strong>${SumaTotalProductos()}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    {orderId ?
                        <div className="alert alert-warning" role="alert">
                            <h4 className="alert-heading">Muchas gracias por tu compra!</h4>
                            <p>Ahora sos un verdadero gamer, bienvenido a la cueva de los videojuegos</p>
                            <hr />
                            <p className="mb-0">Tu compra fue generada con éxito.</p>
                            <p>ID: <b>{orderId}</b></p>
                        </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;