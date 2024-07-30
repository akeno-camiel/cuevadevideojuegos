import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-3 g-4 text-center">
            <div className="card">
                <Link to={"/item/" + item.id}><img src={item.img} className="card-img-top" alt={item.title} /> </Link>
                <hr />
                <div className="card-body">
                    <h5 className="card-title">{item.title.toUpperCase()}</h5>
                    <p className="card-text"> ${item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;