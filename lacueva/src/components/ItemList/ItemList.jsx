import Item from "../Item/Item";

const ItemList = ({items}) => {
    return (
        <div className="container my-5">
            <div className="row">
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default ItemList;