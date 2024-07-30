const Searchbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control  me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    )
}

export default Searchbar;