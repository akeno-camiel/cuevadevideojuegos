import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="bg-body-secondary p-4">
            <h2 className="mb-4">¿Qué estás buscando?</h2>
            <div className="container bg-light">
                <div className="row">
                    <Link to={"/categoria/discosrigidos"} className="col btn btn-light p-5">Discos Rígidos</Link>
                    <Link to={"/categoria/placadevideo"} className="col btn btn-light p-5">Placas de video</Link>
                    <Link to={"/categoria/mouses"} className="col btn btn-light p-5">Mouses</Link>
                    <Link to={"/categoria/procesadores"} className="col btn btn-light p-5">Procesadores</Link>
                    <Link to={"/categoria/auriculares"} className="col btn btn-light p-5">Auriculares</Link>
                </div>
                <div className="row">
                    <Link to={"/categoria/memoriasram"} className="col btn btn-light p-5">Memorias Ram</Link>
                    <Link to={"/categoria/monitor"} className="col btn btn-light p-5">Monitores</Link>
                    <Link to={"/categoria/ssd"} className="col btn btn-light p-5">SSD</Link>
                    <Link to={"/categoria/mother"} className="col btn btn-light p-5">Motherboards</Link>
                    <Link to={"/categoria/teclados"} className="col btn btn-light p-5">Teclados</Link>
                </div>
            </div>
        </div>
    )
}

export default Categories;