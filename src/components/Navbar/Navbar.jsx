import Logo from "../Logo/Logo.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx"
import { NavLink } from "react-router-dom";

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
                                <NavLink className="nav-link mx-5" to={"/categoria/consola"}>Gaming</NavLink>
                                <NavLink className="nav-link mx-5" to={"/categoria2/perifericos"}>Perifericos</NavLink>
                                <NavLink className="nav-link mx-5" to={"/categoria2/componentepc"}>Componentes de PC</NavLink>
                                <NavLink className="nav-link mx-5" to={"/categoria/notebook"}>Notebooks</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
