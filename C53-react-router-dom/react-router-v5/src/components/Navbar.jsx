import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../assets/react.svg";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo de la pagina" />
      </Link>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/state-full">StateFullSimpleClass</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/anime">AnimeFetch</Link>
        </li>
        <li>
          <Link to="/state-less">StatelessClass</Link>
        </li>
      </ul>
    </nav>
  );
}
