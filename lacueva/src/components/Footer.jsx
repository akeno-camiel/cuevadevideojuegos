import PreFooter from "./PreFooter";

const Footer = () => {
    return (
        <div className="container-fluid text-bg-secondary">
            <PreFooter/>
            <div className="my-3 row">
                <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
                            <div className="navbar-nav" >
                                <a className="nav-link mx-5 text-bg-dark" href="#">Términos y condiciones</a>
                                <a className="nav-link mx-5 text-bg-dark" href="#">Política de privacidad</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Footer;