import Banner1 from "../../assets/banner1.png"
import Banner2 from "../../assets/banner2.png"
import Banner3 from "../../assets/banner3.jpg"
import Banner4 from "../../assets/banner4.jpg"

const Carrusel = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner4} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrusel;