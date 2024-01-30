import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card my-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.img} className="img-fluid rounded-start p-4" alt={item.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body pt-4">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">${item.price}</p>
                            <ItemCount stock={10} />
                        </div>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="true" href="#">General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="true" href="#">Caracteristicas</a>
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