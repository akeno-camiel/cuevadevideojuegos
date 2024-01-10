import Logo from "./Logo.jsx";
import Searchbar from "./Searchbar.jsx";
import CartWidget from "./CartWidget.jsx"

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
                                <a className="nav-link mx-5" href="#">Gaming</a>
                                <a className="nav-link mx-5" href="#">Perifericos</a>
                                <a className="nav-link mx-5" href="#">Componentes de PC</a>
                                <a className="nav-link mx-5" href="#">Smart TV</a>
                                <a className="nav-link mx-5" href="#">Audio</a>
                                <a className="nav-link mx-5" href="#">Promos</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
