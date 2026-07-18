import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/useState">State</Link>
            <Link to="/useEffect">Effects</Link>
            <Link to="/useRef">Refs</Link>
        </nav>
    )
}