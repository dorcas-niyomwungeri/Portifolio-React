import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>

      <div className="logo">
        <h2>DN.</h2>
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