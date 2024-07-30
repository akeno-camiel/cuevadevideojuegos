import logo from "../../assets/logo-cueva.jpg"
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/"><img src={logo} alt="logo-la-cueva" width={100} className="rounded" /></Link>
    )
}

export default Logo;