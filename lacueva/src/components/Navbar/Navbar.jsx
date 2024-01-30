import Logo from "../Logo/Logo.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex align-items-center">
                <div className="col mt-2">
                    <Logo />
                </div>
                <div className="col">
                    <Searchbar />
                </div>
                <div className="col">
                    <CartWidget />
                </div>
            </div>
            <div className="my-3 row">
                <nav className="navbar navbar-expand-lg bg-warning">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link mx-5" to={"/gaming"}>Gaming</Link>
                                <Link className="nav-link mx-5" to={"/perifericos"}>Perifericos</Link>
                                <Link className="nav-link mx-5" to={"/componentes"}>Componentes de PC</Link>
                                <Link className="nav-link mx-5" to={"/TV"}>Smart TV</Link>
                                <Link className="nav-link mx-5" to={"/audio"}>Audio</Link>
                                <Link className="nav-link mx-5" to={"/promos"}>Promos</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
