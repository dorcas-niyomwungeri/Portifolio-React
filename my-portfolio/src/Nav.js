import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>

      <div className="logo">
        <img src="./loj.png" alt="Logo" />
      </div>

      <div className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about" end>About</NavLink>
        <NavLink to="/services" end>Services</NavLink>
        <NavLink to="/skills" end>Skills</NavLink>
        <NavLink to="/contact" end>Contact</NavLink>
      </div>

    </nav>
  );
}