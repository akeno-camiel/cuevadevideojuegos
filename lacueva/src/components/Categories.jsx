const Categories = () => {
    return (
        <div className="bg-body-secondary p-4">
            <h2 className="mb-4">¿Qué estás buscando?</h2>
            <div className="container bg-light">
                <div className="row">
                    <div className="col btn btn-light p-5">Discos Rígidos</div>
                    <div className="col btn btn-light p-5">Placas de video</div>
                    <div className="col btn btn-light p-5">Mouses</div>
                    <div className="col btn btn-light p-5">Procesadores</div>
                    <div className="col btn btn-light p-5">Auriculares</div>
                </div>
                <div className="row">
                    <div className="col btn btn-light p-5">Memorias Ram</div>
                    <div className="col btn btn-light p-5">Monitores</div>
                    <div className="col btn btn-light p-5">SSD</div>
                    <div className="col btn btn-light p-5">Motherboards</div>
                    <div className="col btn btn-light p-5">Teclados</div>
                </div>
            </div>
        </div>
    )
}

export default Categories;